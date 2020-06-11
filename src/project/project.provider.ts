import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectEntity } from '../modules/database/entities/project.entity';

@Injectable()
export class ProjectProvider {
  constructor(
    @InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>,
  ) { }

  public async getProjects(): Promise<ProjectEntity[]> {
    const projectEntities = await this.projectRepository.find({
      relations: ['roles', 'stacks', 'organizations'],
      order: { order: 'ASC', id: 'ASC' },
    });

    return projectEntities;
  }

  public async getProject(projectId: number): Promise<ProjectEntity | null> {
    const projectEntity = await this.projectRepository.findOne({
      where: { id: projectId },
    });

    return projectEntity;
  }
}
