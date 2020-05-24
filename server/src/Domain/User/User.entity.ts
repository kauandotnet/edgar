import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  Index
} from 'typeorm';
import {House} from '../House/House.entity';
import {UserHouse} from './UserHouse.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({type: 'varchar', nullable: false})
  private firstName: string;

  @Column({type: 'varchar', nullable: false})
  private lastName: string;

  @Column({type: 'varchar', unique: true, nullable: false})
  private email: string;

  @Index('api-token')
  @Column({type: 'text', nullable: true})
  private apiToken: string;

  @Column({type: 'varchar', nullable: false})
  private password: string;

  @ManyToOne(type => House)
  private currentHouse: House;

  @JoinTable()
  @ManyToMany(
    type => UserHouse,
    userHouse => userHouse.user
  )
  userHouses: UserHouse[];
}
