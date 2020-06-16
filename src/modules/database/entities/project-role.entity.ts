import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { ProjectEntity } from './project.entity';

@Entity({ name: 'project_roles' })
export class ProjectRoleEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { length: 50 })
  public name: string;

  @Column('int', { name: 'contribution_percentage' })
  public contributionPercentage: number;

  @Column('date', { nullable: true })
  public from: Date | null;

  @Column('date', { nullable: true })
  public to: Date | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;

  @ManyToOne(
    type => ProjectEntity,
    projectEntity => projectEntity.roles,
  )
  public project: ProjectEntity;
}
