import { Module } from '@nestjs/common';

import { HealthModule } from './health/health.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    HealthModule,
    ProjectModule,
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule { }
