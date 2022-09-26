import { IGenericDao } from './IGenericDao';
import { Floor } from '../models/floor';
export declare class floorDAO implements IGenericDao<Floor> {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    getAll(): Promise<Floor[]>;
    getById(id: string): Promise<Floor | null>;
    create(model: Floor): Promise<Floor>;
    delete(id: string): Promise<boolean>;
    update(id: string, model: Floor): Promise<Floor>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAlls(): Promise<any>;
}
