import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {House} from '../House/House.entity';
import {User} from './User.entity';

export enum Roles {
  OWNER = 'ROLE_OWNER',
  GUEST = 'ROLE_GUEST'
}

@Entity()
export class UserHouse {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.OWNER
  })
  private role: string;

  @ManyToOne(type => House, {nullable: false})
  house: House;

  @ManyToOne(type => User, {nullable: false})
  user: User;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  private createdAt: Date;
}
