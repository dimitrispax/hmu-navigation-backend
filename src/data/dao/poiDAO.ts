import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { POI } from '../models/poi';
import { pool } from '../../config/db/connection';


export class poiDAO implements IGenericDao<POI> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: POI): Promise<POI> { throw new Error500("Not implemented", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemented", null); };
    async update(id: string, model: POI): Promise<POI> { throw new Error500("Not implemented", null); };
    async getById(id: string): Promise<POI | null> { throw new Error500("Not implemented", null); };



    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/


    async getAll(): Promise<POI[]> {
        let response;
        try {
            response = await pool.query(`SELECT * FROM poi`);
            return response.rows;
        } catch (error) {
            throw (error);
        }
    }


}