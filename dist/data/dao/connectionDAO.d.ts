import { IGenericDao } from './IGenericDao';
import { Connection } from '../models/connection';
export declare class connectionDAO implements IGenericDao<Connection> {
    /**************** *********************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model: Connection): Promise<Connection>;
    delete(id: string): Promise<boolean>;
    update(id: string, model: Connection): Promise<Connection>;
    getById(id: string): Promise<Connection | null>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll(): Promise<Connection[]>;
}
