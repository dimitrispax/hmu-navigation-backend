import { HttpStatusCode } from '../../Enums/httpStatusCode';

export class BaseError extends Error {
    public name: string;
    private statusCode: HttpStatusCode;
    private exactError: any;

    constructor(name: string, statusCode: HttpStatusCode, message: string, exactError: string | JSON) {
        super(message)

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.exactError = exactError;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public getStatusCode(): HttpStatusCode {
        return this.statusCode;
    }

    public setStatusCode(value: HttpStatusCode): void {
        this.statusCode = value;
    }

    public getExactError(): string | JSON {
        return this.exactError;
    }

    public setExactError(value: string | JSON): void {
        this.exactError = value;
    }
}