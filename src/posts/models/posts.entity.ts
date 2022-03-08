import { Genre } from 'src/genre/models/genres.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
@Entity()
export class Post {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  owner: string;

  @ManyToMany(() => Genre)
  @JoinTable()
  tags: Genre[];

  @Column()
  description: string;

  @Column()
  body: string;
}
