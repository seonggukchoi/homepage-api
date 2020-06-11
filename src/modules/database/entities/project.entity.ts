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

  @Column('int', { nullable: false })
  public order: number;

  @Column('varchar', { length: 50, nullable: false })
  public name: string;

  @Column('text')
  public description: string | null;

  @Column('date')
  public from: Date | null;

  @Column('date')
  public to: Date | null;

  @Column('enum', { enum: ProjectStatusType, nullable: false })
  public status: ProjectStatusType;

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

  @OneToMany(type => ProjectRoleEntity, projectRoleEntity => projectRoleEntity.id)
  public roles: ProjectRoleEntity[];

  @ManyToMany(type => StackEntity)
  @JoinTable()
  public stacks: StackEntity[];

  @ManyToMany(type => OrganizationEntity)
  @JoinTable()
  public organizations: OrganizationEntity[];
}
