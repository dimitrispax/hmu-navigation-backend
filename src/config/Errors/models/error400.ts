import { HttpStatusCode } from '../../Enums/httpStatusCode';
import { BaseError } from './baseError';

export class Error400 extends BaseError {
    constructor(
        name: string,
        exactError: any,
        message = 'Request is not correct',
        statusCode = HttpStatusCode.BAD_REQUEST,
    ) {
        super(name, statusCode, message, exactError)
    }
}