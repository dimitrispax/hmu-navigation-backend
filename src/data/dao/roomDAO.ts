import { Error500 } from '../../config/Errors/models/error500';
import { IGenericDao } from './IGenericDao';
import { Room } from '../models/room';
import { pool } from '../../db/connection';


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
            response = await pool.query(`SELECT json_build_object('type','Feature','id',r.id,'geometry', ST_AsGeoJSON(to_wgs84(r.geom,b.geom,coalesce(t.r, 0), coalesce(t.sx, 1),coalesce(t.sy, 1),coalesce(t.tx, 0),coalesce(t.ty, 0))) :: json,'properties', json_build_object('feat_type','line','feat_area',ST_Area(r.geom))) FROM room r join building b on b.id = split_part(r."floorId", '.', 1)left join mtrans t on t.target = 'osm'and t.id = split_part(r."floorId", '.', 1)`);
            return response.rows;
        } catch (error) {
            throw (error);
        }
    }



}




