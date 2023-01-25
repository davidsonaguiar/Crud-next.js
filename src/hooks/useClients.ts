import CollectionClient from "@/backend/collectionClient"
import Client from "@/core/client"
import ClientRepository from "@/core/clientResository"
import { useEffect, useState } from "react"

export default function useClients() {
    const repository: ClientRepository = new CollectionClient()

    const [ client, setClient ] = useState<Client[]>([])
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [ clientTarget, setClientTarget ] = useState<Client | undefined>(undefined)

    useEffect(getClients, [])
    
    function getClients() {
        repository
            .allClient()
            .then(clients => {
                setClient(clients)
            })
    }

    function newClient(newClient: Client) {
        repository.save(newClient)        
        setClientTarget(undefined)
        getClients()
    }

    function selectClient(client: Client) {
        setClientTarget(client)
        setShowModal(true)
    }

    function deleteClient(target: Client) {
        repository.delete(target)
        getClients()
    }

    function closeForm() {
        setShowModal(false)
        setClientTarget(undefined)
    }

    return {
        client,
        showModal,
        setShowModal,
        clientTarget,
        getClients,
        newClient,
        selectClient,
        deleteClient,
        closeForm
    }
}