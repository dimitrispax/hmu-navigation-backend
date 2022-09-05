import { HttpStatusCode } from '../../Enums/httpStatusCode';
import { BaseError } from './baseError';
export declare class Error404 extends BaseError {
    constructor(name: string, exactError: any, message?: string, statusCode?: HttpStatusCode);
}
