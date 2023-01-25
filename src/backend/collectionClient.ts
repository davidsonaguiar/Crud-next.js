import Client from "@/core/client";
import ClientRepository from "@/core/clientResository";
import db from "./firebase";
import { 
    QueryDocumentSnapshot, 
    SnapshotOptions, 
    DocumentData, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    getDocs,
    doc, 
    collection, 
} from "firebase/firestore";

export default class CollectionClient implements ClientRepository {


    async save(client: Client): Promise<void> {
        if (client.id === undefined) {
            await addDoc(collection(db, 'clients'), {
                name: client.name,
                age: client.age
            })
        } else {
            await updateDoc(doc(db, 'clients', client.id), {
                name: client.name,
                age: client.age
            })
        }
    }

    async delete(client: Client): Promise<void>{
        client.id && await deleteDoc(doc(db, 'clients', client.id))
    }

    async allClient(): Promise<Client[]>{
        const datas = await getDocs(collection(db, 'clients'))
        return datas.docs.map(doc => {
            return new Client(doc.data().name, doc.data().age, doc.id) ?? []
        })
    }
 }