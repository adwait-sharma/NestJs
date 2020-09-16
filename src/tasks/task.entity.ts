import { BaseEntity, Column, Entity, EntityRepository, PrimaryGeneratedColumn, Repository } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class Task extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}
