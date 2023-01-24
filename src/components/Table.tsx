import Client from '@/core/client'
import { Edit, Trash } from '@/components/Icons'

interface PropsTable {
    children: any,
    clients: Client[],
    selectClient?: (id: Client) => void,
    deleteClient?: (id: Client) => void,
}   

export default function TableClient(props: PropsTable) {

    const showActions = props.selectClient || props.deleteClient

    function renderHead() {
        return(
            <tr>
                <th className='px-5 py-4'>ID</th>
                <th className='px-5 py-4'>Name</th>
                <th className='px-5 py-4'>Age</th>
                {showActions && <th className='text-center'>Actions</th>}
            </tr>
        )
    }

    function renderBody() {
        return(
            props
            ?.clients
            ?.map(client => {
                return(
                    <tr 
                        className="bg-purple-100 even:bg-purple-200"
                        key={client.id}>
                        <td className={`
                            px-5 py-2 capitalize text-lg`}>
                            {client.id}
                        </td>
                        <td className={`
                            px-4 py-2
                            capitalize text-lg`}>
                            {client.name}
                        </td>
                        <td className={`
                            px-4 py-2
                            capitalize text-lg`}>
                            {client.age}
                        </td>
                        { showActions && renderActions(client)}
                    </tr>
            )})
        )
    }

    function renderActions(client: Client) {
        return(
            <td className="px-4 py-2 flex justify-center gap-1">
                {
                    props.selectClient && 
                    <button 
                    className={`
                    p-2 text-blue-900
                    hover:bg-purple-50 rounded-full`}
                    type="button"
                    onClick={() => props.selectClient?.(client)}>
                        {Edit}
                    </button>
                }
                {
                    props.deleteClient && 
                    <button 
                    className={`
                    p-2 text-red-600
                    hover:bg-purple-50 rounded-full`}
                    type="button"
                    onClick={() => props.deleteClient?.(client)}>
                        {Trash}
                    </button>
                }
            </td>
        )
    }

    return(
        <table 
            className={`
            w-full max-w-3xl mx-auto my-4
            rounded-md overflow-hidden shadow-md`}>
            <thead
                className={`
                bg-gradient-to-r from-purple-600 to-purple-800
                text-lg text-left text-slate-50`}>
                {renderHead()}
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
}