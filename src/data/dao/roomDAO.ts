import { PrismaClient } from '@prisma/client'
import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Room } from '../models/room';

const prisma = new PrismaClient()

export class roomDAO implements IGenericDao<Room> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: Room): Promise<Room> { throw new Error500("Not implemented", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemented", null); };


    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/

    /* Get all rooms */
    async getAll(): Promise<Room[]> {
        return prisma.room.findMany()
    }

    /* Get room by ID */
    async getById(id: string): Promise<Room | null> {
        return prisma.room.findUnique({ where: { id: id } })
    }

    /* Get room by description */
    async getRoomsByDescription(description: string): Promise<Room[]> {
        return prisma.room.findMany({ where: { description: description } })
    }

    /* Get rooms by usage */
    async getRoomsByUsage(usageId: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { usageId: usageId } })
    }

    /* Get rooms by manager */
    async getRoomsByManager(manager: string): Promise<Room[]> {
        return prisma.room.findMany({ where: { manager: manager } })
    }

    /* Get rooms by camera */
    async getRoomsByCamera(camera: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { camera: camera } })
    }

    /* Get rooms by projector */
    async getRoomsByProjector(projector: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { projector: projector } })
    }

    /* Get rooms by usage */
    async getRoomsByFloor(floorId: string): Promise<Room[]> {
        return prisma.room.findMany({ where: { floorId: floorId } })
    }

    /* Get rooms by capacity */
    async getRoomsByCapacity(capacity: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { capacity: { gte: capacity } } })
    }

    /* Get rooms with certain usage and fit more than an amount of persons(capacity) */
    async getRoomsByUsageAndCapacity(usageId: number, capacity: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { capacity: { gte: capacity }, usageId: usageId } })
    }

    /* Get rooms with certain usage and fit more than an amount of persons(capacity) as well if the room has a camera */
    async getRoomsByUsageAndCapacityAndCamera(usageId: number, capacity: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { capacity: { gte: capacity }, usageId: usageId, camera: 1 } })
    }

    /* Get rooms with certain usage and fit more than an amount of persons(capacity) as well if the room has a projector */
    async getRoomsByUsageAndCapacityAndProjector(usageId: number, capacity: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { capacity: { gte: capacity }, usageId: usageId, projector: 1 } })
    }

    /* Get rooms that fit more than an amount of persons(capacity) and they have camera and projector*/
    async getRoomsByCapacityAndCameraAndProjector(capacity: number): Promise<Room[]> {
        return prisma.room.findMany({ where: { capacity: { gte: capacity }, camera: 1, projector: 1 } })
    }



    /**************************************************************/
    /*************************** UPDATE ***************************/
    /**************************************************************/

    async update(roomID: string, model: { description: string | null, usageId: number | null, manager: string | null, computer: number | null, camera: number | null, projector: number | null, capacity: number | null }): Promise<Room> {
        return prisma.room.update({
            where: { id: roomID },
            data: {
                description: model?.description,
                usageId: model?.usageId,
                manager: model?.manager,
                computer: model?.computer,
                camera: model?.camera,
                projector: model?.projector,
                capacity: model?.capacity,
            }
        });

    }

}




