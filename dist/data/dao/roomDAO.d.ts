import { room } from '@prisma/client';
import { IGenericDao } from './IGenericDao';
export declare class roomDAO implements IGenericDao<room> {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model: room): Promise<room>;
    update(id: string, model: room): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll(): Promise<room[]>;
    getById(id: string): Promise<room | null>;
}
