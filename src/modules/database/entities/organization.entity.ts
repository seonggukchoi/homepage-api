import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { ProjectEntity } from './project.entity';

@Entity({ name: 'organizations' })
export class OrganizationEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { length: 50, nullable: false })
  public name: string;

  @Column('text')
  public url: string | null;

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

  @ManyToMany(type => ProjectEntity)
  public projects: ProjectEntity[];
}
