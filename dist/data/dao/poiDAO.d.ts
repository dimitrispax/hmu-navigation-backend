import { IGenericDao } from './IGenericDao';
import { POI } from '../models/poi';
export declare class poiDAO implements IGenericDao<POI> {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model: POI): Promise<POI>;
    delete(id: string): Promise<boolean>;
    update(id: string, model: POI): Promise<POI>;
    getById(id: string): Promise<POI | null>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll(): Promise<POI[]>;
}
