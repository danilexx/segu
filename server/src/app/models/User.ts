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
  JoinTable,
} from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

import { File } from "./File";
import { Client } from "./Client";

@Entity()
export class User extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.passwordHash = await bcrypt.hash(this.password, 8);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => File, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  @JoinColumn()
  icon: File;

  @Column("varchar", {
    length: 150,
  })
  name: string;

  @Column("varchar", {
    length: 14,
  })
  cnpj: string;

  @Column("varchar", {
    length: 14,
  })
  cpf: string;

  @Column("varchar", {
    length: 150,
    nullable: true,
  })
  description: string;

  @Column("enum", {
    enum: ["Generalista", "Especialista"],
  })
  type: "Generalista" | "Especialista";

  @Column("varchar", {
    length: 100,
  })
  email: string;

  @Column("varchar")
  insurances: string;

  @Column("varchar", {
    select: false,
  })
  passwordHash: string;

  password: string;

  @Column("varchar", {
    length: 15,
  })
  zap: string;

  @ManyToMany((type) => Client)
  @JoinTable()
  clients: Client[];

  async checkPassword(password) {
    if (!this.passwordHash) {
      const { passwordHash } = await User.findOne(this.id, {
        select: ["passwordHash"],
      });
      this.passwordHash = passwordHash;
    }
    return bcrypt.compare(password, this.passwordHash);
  }

  generateToken() {
    return jwt.sign(
      {
        id: this.id,
        email: this.email,
        icon: this.icon?.url || null,
        name: this.name,
        insurances: this.insurances,
      },
      authConfig.secret,
      {
        expiresIn: authConfig.expiresIn,
      }
    );
  }
}
