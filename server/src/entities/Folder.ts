import { Field, ObjectType } from "type-graphql";
import {
    CreateDateColumn,
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Folder extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    color: string;

    @Field(() => [String])
    @Column("simple-array")
    noteIds: string[];

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.folders)
    creator: User;

    @Field()
    @Column()
    creatorId: number;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
