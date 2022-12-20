import { IGenericDao } from './IGenericDao';
import { Building } from '../models/building';
export declare class buildingDAO implements IGenericDao<Building> {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model: Building): Promise<Building>;
    delete(id: string): Promise<boolean>;
    update(id: string, model: Building): Promise<Building>;
    getById(id: string): Promise<Building | null>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll(): Promise<Building[]>;
}
