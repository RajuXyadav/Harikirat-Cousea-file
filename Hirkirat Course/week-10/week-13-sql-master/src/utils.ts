import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://svjdwgor:ApNLzdMkp16Cw7RxRV3RwetOfw5dDVMJ@trumpet.db.elephantsql.com/svjdwgor");
    await client.connect();
    return client;
}