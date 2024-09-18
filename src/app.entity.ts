import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
