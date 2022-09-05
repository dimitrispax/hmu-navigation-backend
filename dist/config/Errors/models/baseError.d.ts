import { HttpStatusCode } from '../../Enums/httpStatusCode';
export declare class BaseError extends Error {
    name: string;
    private statusCode;
    private exactError;
    constructor(name: string, statusCode: HttpStatusCode, message: string, exactError: string | JSON);
    getName(): string;
    setName(value: string): void;
    getStatusCode(): HttpStatusCode;
    setStatusCode(value: HttpStatusCode): void;
    getExactError(): string | JSON;
    setExactError(value: string | JSON): void;
}
