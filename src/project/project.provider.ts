import { Injectable } from '@nestjs/common';

import { Projects } from './project.data';

@Injectable()
export class ProjectProvider {
  public async getProjects(): Promise<object[]> {
    return Projects;
  }

  public async getProject(projectId: number): Promise<object | null> {
    const project = Projects.find(item => item.id === projectId);

    return project;
  }
}
