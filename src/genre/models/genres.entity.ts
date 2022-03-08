import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  genre: string;
}
