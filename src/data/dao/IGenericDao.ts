export interface IGenericDao<T> {
    create: (model: T) => Promise<T>;
    update: (id: string, model: T) => Promise<boolean>;
    delete: (id: string) => Promise<boolean>;
    getAll: () => Promise<T[]>;
    getById: (id: string) => Promise<T>;
}