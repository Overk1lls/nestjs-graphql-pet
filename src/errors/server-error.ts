export enum ErrorCode {
    SERVER = 'INTERNAL_SERVER_ERROR',
    INVALID_REQUEST = 'INVALID_REQUEST',
}

export interface IServerError {
    code: ErrorCode;
}

export class ServerError extends Error implements IServerError {
    code: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message ? message : code);
        this.code = code;
    }
}