export enum ErrorCode {
    SERVER = 'INTERNAL_SERVER_ERROR',
    INVALID_REQUEST = 'INVALID_REQUEST',
    NOT_FOUND = 'NOT_FOUND',
    EXTERNAL_SERVICE = 'EXTERNAL_SERVICE_ERROR',
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
