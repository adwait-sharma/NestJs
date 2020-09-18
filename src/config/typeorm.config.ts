import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions= {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'taskmanagement',
    entities: [
      'C:/Users/Dev.exe/Desktop/NestJS/task-management/tasks/task.entity.ts',
      ],
    synchronize: true,

}
console.log(__dirname)