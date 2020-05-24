import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany
} from 'typeorm';
import {UserHouse} from '../User/UserHouse.entity';

@Entity()
export class House {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({type: 'varchar', nullable: false})
  private name: string;

  @ManyToMany(
    type => UserHouse,
    userHouse => userHouse.house
  )
  @JoinTable()
  private userHouses: UserHouse[];
}
