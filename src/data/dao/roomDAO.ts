import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Room } from '../models/room';
import { pool } from '../../config/db/connection';


export class roomDAO implements IGenericDao<Room> {


    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/

    async create(model: Room): Promise<Room> { throw new Error500("Not implemented", null); };
    async delete(id: string): Promise<boolean> { throw new Error500("Not implemented", null); };
    async update(id: string, model: Room): Promise<Room> { throw new Error500("Not implemented", null); };
    async getById(id: string): Promise<Room | null> { throw new Error500("Not implemented", null); };



    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/


    async getAll(): Promise<Room[]> {
        let response;
        try {
            response = await pool.query(`SELECT 'Feature' as type,r.id as id, 
            ST_AsGeoJSON(ST_Transform(ST_SetSRID(r.geom, 2100), 4326))::json as geometry, 
            json_build_object('feat_type', 'line','feat_area', ST_Area(r.geom)) as properties
            FROM room r join building b on b.id = split_part(r."floorId",'.',1) 
            left join mtrans t on t.target = 'osm' and t.id=split_part(r."floorId",'.',1)`);
            return response.rows;
        } catch (error) {
            throw (error);
        }
    }

}




