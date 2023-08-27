import "reflect-metadata"
import { DataSource } from "typeorm"
import { cliente } from "./entity/cliente"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3300,
    username: "root",
    password: "1234",
    database: "pruebautn",
    synchronize: true,
    logging: false,
    entities: [cliente],
    migrations: [],
    subscribers: [],
})