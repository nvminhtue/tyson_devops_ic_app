import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

import { Cache } from 'cache-manager';

import { AppEntity } from './app.entity';
import { Repository } from 'typeorm';
import { AddAppBody } from './app.type';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AppEntity)
    private readonly appRepository: Repository<AppEntity>,

    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<AppEntity[]> {
    return this.appRepository.find();
  }

  async findOne(id: number): Promise<AppEntity> {
    const cacheData: AppEntity = await this.cacheService.get(`getOne:${id}`);

    if (cacheData) {
      console.log('cache hit', cacheData);

      return cacheData;
    }

    const result = await this.appRepository.findOne({ where: { id } });

    if (result) {
      await this.cacheService.set(`getOne:${id}`, result);
    }

    return result;
  }

  addOne(app: AddAppBody): Promise<AppEntity> {
    return this.appRepository.save(app);
  }
}
