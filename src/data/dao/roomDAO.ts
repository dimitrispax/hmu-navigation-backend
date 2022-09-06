import { PrismaClient } from '@prisma/client'
import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Room } from '../models/room';

const prisma = new PrismaClient()

export class roomDAO implements IGenericDao<room> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: room): Promise<room> { throw new Error500("Not implemeted", null); };
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

    /* Get room by description */
    async getRoomsByDescription(description: string): Promise<room[]> {
        return prisma.room.findMany({ where: { description: description } })
    }

    /* Get rooms by usage */
    async getRoomsByUsage(usageId: number): Promise<room[]> {
        return prisma.room.findMany({ where: { usageId: usageId } })
    }

    /* Get rooms by manager */
    async getRoomsByManager(manager: string): Promise<room[]> {
        return prisma.room.findMany({ where: { manager: manager } })
    }

    /* Get rooms by camera */
    async getRoomsByCamera(camera: number): Promise<room[]> {
        return prisma.room.findMany({ where: { camera: camera } })
    }

    /* Get rooms by projector */
    async getRoomsByProjector(projector: number): Promise<room[]> {
        return prisma.room.findMany({ where: { projector: projector } })
    }

    /* Get rooms by usage */
    async getRoomsByFloor(floorId: string): Promise<room[]> {
        return prisma.room.findMany({ where: { floorId: floorId } })
    }

    /* Get rooms by capacity */
    async getRoomsByCapacity(capacity: number): Promise<room[]> {
        return prisma.room.findMany({ where: { capacity: { gte: capacity } } })
    }


    /**************************************************************/
    /*************************** UPDATE ***************************/
    /**************************************************************/

    async update(roomID: string, model: room): Promise<room> {
        return prisma.room.update({
            where: { id: roomID },
            data: {
                floorId: model.floorId,
                description: model.description,
                usageId: model.usageId,
                manager: model.manager,
                computer: model.computer,
                projector: model.projector,
                capacity: model.capacity,
                geodata: model.geodata
            }
        });

    }




}




