import { Module, Global, HttpModule } from '@nestjs/common';

import { AuthProvider } from './auth.provider';

@Global()
@Module({
  imports: [HttpModule],
  exports: [AuthProvider],
  controllers: [],
  providers: [AuthProvider],
})
export class AuthModule {}
