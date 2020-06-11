import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { ProjectEntity } from './project.entity';

@Entity({ name: 'project_roles' })
export class ProjectRoleEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { length: 50, nullable: false })
  public name: string;

  @Column('int', { name: 'contribution_percentage', nullable: false })
  public contributionPercentage: number;

  @Column('date')
  public from: Date | null;

  @Column('date')
  public to: Date | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  public createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  public updatedAt: Date;

  @ManyToOne(type => ProjectEntity, projectEntity => projectEntity.id)
  public project: ProjectEntity;
}
