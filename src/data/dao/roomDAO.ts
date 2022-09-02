import { PrismaClient, room } from '@prisma/client'
import { IGenericDao } from './IGenericDao';

const prisma = new PrismaClient()

export class roomDAO implements IGenericDao<room> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    create: (model: room) => Promise<room>;
    update: (id: string, model: room) => Promise<boolean>;
    delete: (id: string) => Promise<boolean>;


    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/

    /* Get all rooms */
    async getAll(): Promise<room[]> {
        return prisma.room.findMany()
    }

    /* Get room by ID */
    async getById(id: string): Promise<room> {
        return prisma.room.findUnique({ where: { id: id } })
    }

}




