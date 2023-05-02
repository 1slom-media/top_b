import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm";
import { ProductsEntity } from "./products";


@Entity({ name: "images" })
export class ImagesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text" })
    @IsString()
    image: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(()=>ProductsEntity,(products)=>products.images)
    products:ProductsEntity
}