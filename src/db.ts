import { createConnection } from 'typeorm'
import { Users } from './entities/users'

export const connectDB = async () => {

    await createConnection({
        type: 'mysql',
        username: 'root',
        password: 'rootroot',
        port: 3306,   
        host: 'localhost',
        database: 'usersdb',
        entities: [Users],
        synchronize: false,
        ssl: false
    })
}