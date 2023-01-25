import Button from "@/components/Button"
import TableClient from "@/components/Table" 
import Form from "@/components/Form"
import useClients from "@/hooks/useClients"

export default function Clients() {

    const {
        client,
        setShowModal,
        selectClient,
        deleteClient,
        showModal,
        clientTarget,
        closeForm,
        newClient
    } = useClients()

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