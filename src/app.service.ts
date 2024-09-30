import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEntity } from './app.entity';
import { Repository } from 'typeorm';
import { AddAppBody } from './app.type';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AppEntity)
    private readonly appRepository: Repository<AppEntity>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<AppEntity[]> {
    return this.appRepository.find();
  }

  findOne(id: number): Promise<AppEntity> {
    return this.appRepository.findOne({ where: { id } });
  }

  addOne(app: AddAppBody): Promise<AppEntity> {
    return this.appRepository.save(app);
  }
}
