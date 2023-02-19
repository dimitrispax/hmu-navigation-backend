
import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Connection } from '../models/connection';
import { pool } from '../../config/db/connection';


export class connectionDAO implements IGenericDao<Connection> {


    /**************** *********************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: Connection): Promise<Connection> { throw new Error500("Not implemented", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemented", null); };
    async update(id: string, model: Connection): Promise<Connection> { throw new Error500("Not implemented", null); };
    async getById(id: string): Promise<Connection | null> { throw new Error500("Not implemented", null); };



    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/


    async getAll(): Promise<Connection[]> {
        let response;
        try {
            response = await pool.query('SELECT ST_DistanceSphere(a.geopoint, b.geopoint) as Distance, is_edge_disabled_accessible ,a.id as starting_point, a.latitude as starting_point_lat, a.longitude as starting_point_lon,b.id as destination_point,b.latitude as destination_point_lat, b.longitude as destination_point_lon FROM point a, point b, connection WHERE a.id = starting_point AND b.id = destination_point');

            return response.rows;
        } catch (error) {
            throw (error);
        }
    }



}




