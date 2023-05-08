import "reflect-metadata"
import { DataSource } from "typeorm"
import { FormEntity } from "./entities/forma"
import { CategoryEntity } from "./entities/category"
import { ProductsEntity } from "./entities/products"
import { ImagesEntity } from "./entities/images"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "DJ9USbp%iLou",
    database: "top_b",
    synchronize: true,
    logging: true,
    entities: [FormEntity,CategoryEntity,ProductsEntity,ImagesEntity],
    migrations: [],
    subscribers: [],
})
