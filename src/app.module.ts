import { Module } from '@nestjs/common';

import { DatabaseModule } from './modules/database/database.module';

import { HealthModule } from './health/health.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    ProjectModule,
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule { }
