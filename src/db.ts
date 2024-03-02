import { createConnection } from 'typeorm'

export const connectDB = async () => {

    await createConnection({
        type: 'mysql',
        username: 'root',
        password: 'rootroot',
        port: 3306,   
        host: 'localhost',
        database: 'usersdb',
        entities: [],
        synchronize: false,
        ssl: false
    })
}