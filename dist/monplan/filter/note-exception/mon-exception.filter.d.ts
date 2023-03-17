import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { MonsException } from '../../exception/note.exception/mon.exception';
export declare class MonsExceptionFilter implements ExceptionFilter {
    catch(exception: MonsException, host: ArgumentsHost): void;
}
