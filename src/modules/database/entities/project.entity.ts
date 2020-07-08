import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';

import { ProjectRoleEntity } from './project-role.entity';
import { StackEntity } from './stack.entity';
import { OrganizationEntity } from './organization.entity';

export enum ProjectStatusType {
  Left = 'left',
  Progress = 'progress',
}

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('int', { default: 9999 })
  public order: number;

  @Column('varchar', { length: 50 })
  public name: string;

  @Column('text', { nullable: true })
  public description: string | null;

  @Column('date', { nullable: true })
  public from: Date | null;

  @Column('date', { nullable: true })
  public to: Date | null;

  @Column('enum', { enum: ProjectStatusType })
  public status: ProjectStatusType;

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

  @OneToMany(
    type => ProjectRoleEntity,
    projectRoleEntity => projectRoleEntity.project,
    { cascade: true },
  )
  public roles: ProjectRoleEntity[];

  @ManyToMany(type => StackEntity, { cascade: true })
  @JoinTable()
  public stacks: StackEntity[];

  @ManyToMany(type => OrganizationEntity, { cascade: true })
  @JoinTable()
  public organizations: OrganizationEntity[];
}
