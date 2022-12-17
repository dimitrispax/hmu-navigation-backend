import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Door } from '../models/door';
import { pool } from '../../db/connection';


export class doorDAO implements IGenericDao<Door> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: Door): Promise<Door> { throw new Error500("Not implemented", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemented", null); };
    async update(id: string, model: Door): Promise<Door> { throw new Error500("Not implemented", null); };
    async getById(id: string): Promise<Door | null> { throw new Error500("Not implemented", null); };



    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/


    async getAll(): Promise<Door[]> {
        let response;
        try {
            response = await pool.query(`SELECT json_build_object('type','Feature','id',d.id,'maindoor',d.maindoor,'leftopen',d.leftopen,'openangle',d.openangle,'geometry',ST_AsGeoJSON(ST_Transform(d.geom, 4326))::json) FROM room r join door d on d.roomid = r.id`);
            return response.rows;
        } catch (error) {
            throw (error);
        }
    }


}




