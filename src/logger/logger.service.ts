import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {

    public log(data: any){
        console.log(data)
    }
}
