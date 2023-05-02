import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { ImagesEntity } from '../entities/images';

class ImagesController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(ImagesEntity ).find({
            relations:{
                products:true
            }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(ImagesEntity ).find({
            relations:{
                products:true
            },where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { image, products } = req.body

            const images = await AppDataSource.getRepository(ImagesEntity ).createQueryBuilder().insert().into(ImagesEntity ).values({ image, products }).returning("*").execute()

            res.json({
                status: 201,
                message: "images created",
                data: images.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { image, products  } = req.body
            const { id } = req.params

            const images = await AppDataSource.getRepository(ImagesEntity ).createQueryBuilder().update(ImagesEntity )
                .set({ image, products  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "images updated",
                data: images.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const images = await AppDataSource.getRepository(ImagesEntity ).createQueryBuilder().delete().from(ImagesEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "images deleted",
                data: images.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ImagesController();