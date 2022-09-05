import { HttpStatusCode } from '../../Enums/httpStatusCode';
import { BaseError } from './baseError';

export class Error500 extends BaseError {
    constructor(
        name: string,
        exactError: any,
        message = 'Sorry Something Went Wrong',
        statusCode = HttpStatusCode.INTERNAL_SERVER
    ) {
        super(name, statusCode, message, exactError)
    }
}