import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { ProductsEntity } from '../entities/products';

class ProductsController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(ProductsEntity ).find({
            relations:{
                images:true,
                category:true
            }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(ProductsEntity ).find({
            relations:{
                images:true,
                category:true
            },where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title_uz,title_ru,product_type_uz,product_type_ru,completeness_uz,completeness_ru,purpose_uz,purpose_ru,color_uz,color_ru,main_fabric_uz,main_fabric_ru,compound_uz,compound_ru,guarante_period_uz, guarante_period_ru,category } = req.body

            const products = await AppDataSource.getRepository(ProductsEntity ).createQueryBuilder().insert().into(ProductsEntity ).values({ title_uz,title_ru,product_type_uz,product_type_ru,completeness_uz,completeness_ru,purpose_uz,purpose_ru,color_uz,color_ru,main_fabric_uz,main_fabric_ru,compound_uz,compound_ru,guarante_period_uz, guarante_period_ru,category }).returning("*").execute()

            res.json({
                status: 201,
                message: "products created",
                data: products.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title_uz,title_ru,product_type_uz,product_type_ru,completeness_uz,completeness_ru,purpose_uz,purpose_ru,color_uz,color_ru,main_fabric_uz,main_fabric_ru,compound_uz,compound_ru,guarante_period_uz, guarante_period_ru,category  } = req.body
            const { id } = req.params

            const products = await AppDataSource.getRepository(ProductsEntity ).createQueryBuilder().update(ProductsEntity )
                .set({ title_uz,title_ru,product_type_uz,product_type_ru,completeness_uz,completeness_ru,purpose_uz,purpose_ru,color_uz,color_ru,main_fabric_uz,main_fabric_ru,compound_uz,compound_ru,guarante_period_uz, guarante_period_ru,category  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "products updated",
                data: products.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const products = await AppDataSource.getRepository(ProductsEntity ).createQueryBuilder().delete().from(ProductsEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "products deleted",
                data: products.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ProductsController();