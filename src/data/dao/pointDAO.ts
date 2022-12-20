
import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Point } from '../models/point';
import { pool } from '../../config/db/connection';


export class pointDAO implements IGenericDao<Point> {


    /**************** *********************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: Point): Promise<Point> { throw new Error500("Not implemented", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemented", null); };
    async update(id: string, model: Point): Promise<Point> { throw new Error500("Not implemented", null); };
    async getById(id: string): Promise<Point | null> { throw new Error500("Not implemented", null); };



    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/


    async getAll(): Promise<Point[]> {
        let response;
        try {
            response = await pool.query(`SELECT point.* FROM point`);

            return response.rows;
        } catch (error) {
            throw (error);
        }
    }



}




