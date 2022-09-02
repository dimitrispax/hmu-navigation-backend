import { tempModel } from '../models/models';
import { IGenericDao } from './IGenericDao';

export class tempDao implements IGenericDao<tempModel> {

    create: (model: tempModel) => Promise<tempModel>;
    update: (id: string, model: tempModel) => Promise<boolean>;
    delete: (id: string) => Promise<boolean>;
    getAll: () => Promise<tempModel[]>;
    getById: (id: string) => Promise<tempModel>;

}