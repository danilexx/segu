import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  age: number;

  @Column("enum", {
    enum: ["female", "male", "other"],
  })
  gender: "female" | "male" | "other";

  @Column("varchar", {
    length: 100,
  })
  email: string;

  @Column("varchar", {
    length: 100,
  })
  name: string;

  @Column("varchar", {
    length: 100,
  })
  income: string;

  @Column("varchar", {
    length: 100,
  })
  dependents: string;

  @Column("varchar", {
    length: 100,
  })
  currentInsegurances: string;

  @Column("varchar", {
    length: 100,
  })
  pastInsegurances: string;

  @Column("varchar", {
    length: 100,
  })
  about: string;

  @Column("varchar", {
    length: 100,
  })
  insurancePriceLimit: string;

  @Column("varchar", {
    length: 100,
  })
  profissionalActivity: string;

  @Column("varchar", {
    length: 100,
  })
  healthIssues: string;

  @ManyToMany((type) => User)
  users: User[];
}
