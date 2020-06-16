import { Module } from '@nestjs/common';

import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';

import { HealthModule } from './health/health.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [DatabaseModule, AuthModule, HealthModule, ProjectModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
