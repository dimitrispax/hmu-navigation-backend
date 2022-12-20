import { IGenericDao } from './IGenericDao';
import { Door } from '../models/door';
export declare class doorDAO implements IGenericDao<Door> {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model: Door): Promise<Door>;
    delete(id: string): Promise<boolean>;
    update(id: string, model: Door): Promise<Door>;
    getById(id: string): Promise<Door | null>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll(): Promise<Door[]>;
}
