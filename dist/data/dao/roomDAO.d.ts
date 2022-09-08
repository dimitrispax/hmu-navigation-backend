import { IGenericDao } from './IGenericDao';
import { Room } from '../models/room';
export declare class roomDAO implements IGenericDao<Room> {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model: Room): Promise<Room>;
    delete(id: string): Promise<boolean>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll(): Promise<Room[]>;
    getById(id: string): Promise<Room | null>;
    getRoomsByDescription(description: string): Promise<Room[]>;
    getRoomsByUsage(usageId: number): Promise<Room[]>;
    getRoomsByManager(manager: string): Promise<Room[]>;
    getRoomsByCamera(camera: number): Promise<Room[]>;
    getRoomsByProjector(projector: number): Promise<Room[]>;
    getRoomsByFloor(floorId: string): Promise<Room[]>;
    getRoomsByCapacity(capacity: number): Promise<Room[]>;
    getRoomsByUsageAndCapacity(usageId: number, capacity: number): Promise<Room[]>;
    getRoomsByUsageAndCapacityAndCamera(usageId: number, capacity: number): Promise<Room[]>;
    getRoomsByUsageAndCapacityAndProjector(usageId: number, capacity: number): Promise<Room[]>;
    getRoomsByCapacityAndCameraAndProjector(capacity: number): Promise<Room[]>;
    /**************************************************************/
    /*************************** UPDATE ***************************/
    /**************************************************************/
    update(roomID: string, model: {
        description: string | null;
        usageId: number | null;
        manager: string | null;
        computer: number | null;
        camera: number | null;
        projector: number | null;
        capacity: number | null;
    }): Promise<Room>;
}
