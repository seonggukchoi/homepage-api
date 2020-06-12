import { Injectable, HttpService } from '@nestjs/common';

// TODO Implement Auth @seonggukchoi
@Injectable()
export class AuthProvider {
  constructor(private readonly httpService: HttpService) { }
}
