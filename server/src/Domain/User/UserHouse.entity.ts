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

  @Column('enum', {enum: Roles, nullable: false})
  private role: Roles;

  @ManyToOne(type => House, {nullable: false})
  house: House;

  @ManyToOne(type => User, {nullable: false})
  user: User;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  private createdAt: Date;

  constructor(role: Roles, house: House, user: User) {
    this.role = role;
    this.house = house;
    this.user = user;
  }

  public getId(): string {
    return this.id;
  }

  public getRole(): Roles {
    return this.role;
  }

  public getHouse(): House {
    return this.house;
  }

  public getUser(): User {
    return this.user;
  }
}
