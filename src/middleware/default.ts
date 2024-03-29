import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import path from 'path';

@Injectable()
export class Middleware implements NestMiddleware {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    use = (req: Request, res: Response, next: NextFunction) => {
        res.sendFile(path.join(process.cwd(), 'static/index.html'));
    };
}
