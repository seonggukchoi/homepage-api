import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { ProjectEntity } from './project.entity';

@Entity({ name: 'organizations' })
export class OrganizationEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { length: 50 })
  public name: string;

  @Column('text', { nullable: true })
  public url: string | null;

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

  @ManyToMany(type => ProjectEntity, { cascade: true })
  public projects: ProjectEntity[];
}
