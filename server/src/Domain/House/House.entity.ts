import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class House {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({type: 'varchar', nullable: false})
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }
}
