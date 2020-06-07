import { Module } from '@nestjs/common';

import { ProjectController } from './project.controller';
import { ProjectProvider } from './project.provider';

@Module({
  imports: [],
  exports: [],
  controllers: [ProjectController],
  providers: [ProjectProvider],
})
export class ProjectModule { }
