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

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.OWNER,
    nullable: false
  })
  private role: string;

  @ManyToOne(type => House, {onDelete: 'CASCADE', nullable: false})
  private house: House;

  @ManyToOne(type => User, {onDelete: 'CASCADE', nullable: false})
  private user: User;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  private createdAt: Date;
}
