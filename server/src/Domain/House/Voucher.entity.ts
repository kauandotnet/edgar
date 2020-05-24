import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {House} from './House.entity';
import {User} from '../User/User.entity';
import {Roles} from '../User/UserHouse.entity';

@Entity()
export class Voucher {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({type: 'varchar', nullable: false})
  private code: string;

  @Column({type: 'varchar', nullable: false})
  private username: string;

  @Column('enum', {enum: Roles, nullable: false})
  private role: Roles;

  @ManyToOne(type => House, {onDelete: 'CASCADE', nullable: false})
  private house: House;

  @ManyToOne(type => User, {onDelete: 'CASCADE', nullable: false})
  private user: User;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  private createdAt: string;

  constructor(
    code: string,
    username: string,
    role: Roles,
    house: House,
    user: User
  ) {
    this.code = code;
    this.username = username;
    this.role = role;
    this.house = house;
    this.user = user;
  }

  public getId(): string {
    return this.id;
  }

  public getCode(): string {
    return this.code;
  }

  public getUsername(): string {
    return this.username;
  }

  public getRole(): Roles {
    return this.role;
  }

  public getUser(): User {
    return this.user;
  }

  public getHouse(): House {
    return this.house;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }
}
