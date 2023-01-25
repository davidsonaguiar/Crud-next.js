import Client from '@/core/client';

export default interface ClientRepository {
    save(client: Client): Promise<void>
    delete(client: Client): Promise<void>
    allClient(): Promise<Client[]>
}