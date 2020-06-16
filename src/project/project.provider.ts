import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectEntity } from '@/modules/database/entities';

@Injectable()
export class ProjectProvider {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  public async getProjects(): Promise<ProjectEntity[]> {
    const projectEntities = await this.projectRepository
      .createQueryBuilder('projects')
      .leftJoin('projects.roles', 'roles')
      .leftJoin('projects.organizations', 'organizations')
      .leftJoin('projects.stacks', 'stacks')
      .select([
        'projects.id',
        'projects.order',
        'projects.name',
        'projects.description',
        'projects.from',
        'projects.to',
        'projects.status',
      ])
      .addSelect([
        'roles.id',
        'roles.name',
        'roles.contributionPercentage',
        'roles.from',
        'roles.to',
      ])
      .addSelect([
        'organizations.id',
        'organizations.name',
        'organizations.url',
      ])
      .addSelect(['stacks.id', 'stacks.name'])
      .addOrderBy('projects.order', 'ASC')
      .addOrderBy('projects.id', 'ASC')
      .getMany();

    return projectEntities;
  }

  public async getProject(projectId: number): Promise<ProjectEntity | null> {
    const projectEntity = await this.projectRepository
      .createQueryBuilder('projects')
      .leftJoin('projects.roles', 'roles')
      .leftJoin('projects.organizations', 'organizations')
      .leftJoin('projects.stacks', 'stacks')
      .where('projects.id = :projectId', { projectId })
      .select([
        'projects.id',
        'projects.order',
        'projects.name',
        'projects.description',
        'projects.from',
        'projects.to',
        'projects.status',
      ])
      .select([
        'projects.id',
        'projects.order',
        'projects.name',
        'projects.description',
        'projects.from',
        'projects.to',
        'projects.status',
      ])
      .addSelect([
        'roles.id',
        'roles.name',
        'roles.contributionPercentage',
        'roles.from',
        'roles.to',
      ])
      .addSelect([
        'organizations.id',
        'organizations.name',
        'organizations.url',
      ])
      .getOne();

    return projectEntity;
  }
}
