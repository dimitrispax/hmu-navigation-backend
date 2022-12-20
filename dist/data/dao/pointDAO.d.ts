import { IGenericDao } from './IGenericDao';
import { Point } from '../models/point';
export declare class pointDAO implements IGenericDao<Point> {
    /**************** *********************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model: Point): Promise<Point>;
    delete(id: string): Promise<boolean>;
    update(id: string, model: Point): Promise<Point>;
    getById(id: string): Promise<Point | null>;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll(): Promise<Point[]>;
}
