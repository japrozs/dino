import { Field, ObjectType } from "type-graphql";
import {
    Column,
    CreateDateColumn,
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Folder } from "./Folder";
import { Note } from "./Note";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column({ default: "light" })
    theme: string;

    @Field()
    @Column({
        default:
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    })
    imgUrl: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    password!: string;

    @Field(() => [Note])
    @OneToMany(() => Note, (note) => note.creator)
    notes: Note[];

    @Field(() => [Folder])
    @OneToMany(() => Folder, (folder) => folder.creator)
    folders: Folder[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
