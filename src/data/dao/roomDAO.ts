import { PrismaClient, room } from '@prisma/client'
import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';

const prisma = new PrismaClient()

export class roomDAO implements IGenericDao<room> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: room): Promise<room> { throw new Error500("Not implemeted", null); };
    async update(id: string, model: room): Promise<boolean> { throw new Error500("Not implemeted", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemeted", null); };


    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/

    /* Get all rooms */
    async getAll(): Promise<room[]> {
        return prisma.room.findMany()
    }

    /* Get room by ID */
    async getById(id: string): Promise<room | null> {
        return prisma.room.findUnique({ where: { id: id } })
    }

}




