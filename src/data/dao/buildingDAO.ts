import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Building } from '../models/building';
import { pool } from '../../db/connection';


export class buildingDAO implements IGenericDao<Building> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: Building): Promise<Building> { throw new Error500("Not implemented", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemented", null); };
    async update(id: string, model: Building): Promise<Building> { throw new Error500("Not implemented", null); };
    async getById(id: string): Promise<Building | null> { throw new Error500("Not implemented", null); };



    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/


    async getAll(): Promise<Building[]> {
        let response;
        try {
            response = await pool.query(`SELECT json_build_object('type', 'Feature', 'id', b.id,'geometry',ST_AsGeoJSON(st_transform(b.geom,4326))::json, 'properties', json_build_object('feat_type', 'point')) FROM building b`);
            return response.rows;
        } catch (error) {
            throw (error);
        }
    }


}




