import Client from "@/core/client"
import Button from "@/components/Button"
import TableClient from "@/components/Table" 
import Form from "@/components/Form"
import { useState } from "react"

export default function Clients() {

    const clients = [
        new Client('Jd830', 'joao', 12),
        new Client('5Yw%4', 'maria', 26),
        new Client('KDe9&', 'ana', 24),
    ]

    const [ client, setClient ] = useState<Client[]>(clients)
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [ clientTarget, setClientTarget ] = useState<Client | undefined>(undefined)

    function newClient(newClient: Client) {
        clientTarget? 
            setClient(
                client
                .map(client => 
                    client.id === newClient.id? 
                    newClient: 
                    client)
            ):
            setClient([...client, newClient])
        
        setClientTarget(undefined)
    }

    function selectClient(client: Client) {
        setClientTarget(client)
        setShowModal(true)
    }

    function deleteClient(target: Client) {
        setClient(
            client.filter(client => client.id !== target.id)
        )
    }

    function closeForm() {
        setShowModal(false)
        setClientTarget(undefined)
    }

    return(
        <>
            <h1
                className={`
                    text-center text-5xl my-4 font-semibold text-slate-800
                `}>
                Clients
            </h1>

            <div className="max-w-3xl mx-auto flex justify-end">
                 <Button 
                    color="blue"
                    handleClick={() => setShowModal(true)}>New Client</Button>
            </div>

            <TableClient
                clients={client}
                selectClient={selectClient}
                deleteClient={deleteClient}>
            </TableClient>

            { showModal && 
                <Form 
                    client={clientTarget}
                    cancelForm={closeForm}
                    submitForm={newClient}/> }            
        </>
    )
}