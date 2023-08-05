import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'te amo nmucho Mireya :(';
  }
}
