import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';

import { ProjectProvider } from './project.provider';

@Controller({ path: '/projects' })
export class ProjectController {
  constructor(private projectProvider: ProjectProvider) { }

  @Get('/')
  public async getProjects(): Promise<object[]> {
    let projects: object[];

    try {
      projects = await this.projectProvider.getProjects();
    } catch (error) {
      throw new HttpException('Cannot fetch project list from database.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return projects;
  }

  @Get('/:projectId')
  public async getProject(@Param('projectId') projectId: number): Promise<object> {
    projectId = Number(projectId);

    let project: object | null;

    try {
      project = await this.projectProvider.getProject(projectId);
    } catch (error) {
      throw new HttpException('Cannot fetch project from database.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    if (!project) {
      throw new HttpException('Not found project.', HttpStatus.NOT_FOUND);
    }

    return project;
  }
}
