import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "./category";
import { ImagesEntity } from "./images";


@Entity({ name: "products" })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_uz: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_ru: string

    @Column({ type: "text"})
    @IsString()
    product_type_uz: string

    @Column({ type: "text"})
    @IsString()
    product_type_ru: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    completeness_uz: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    completeness_ru: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    purpose_uz: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    purpose_ru: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    color_uz: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    color_ru: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    main_fabric_uz: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    main_fabric_ru: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    compound_uz: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    compound_ru: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    guarante_period_uz: string

    @Column({ type: "varchar", length: 500 })
    @IsString()
    guarante_period_ru: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(()=>CategoryEntity,(category)=>category.products,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    category:CategoryEntity

    @OneToMany(()=>ImagesEntity,(images)=>images.products)
    images:ImagesEntity[]
}