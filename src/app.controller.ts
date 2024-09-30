import { Response } from 'express';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Res,
} from '@nestjs/common';

import { AppService } from './app.service';
import { AppEntity } from './app.entity';
import { AddAppBody } from './app.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  @Render('index.hbs')
  getHelloWorld() {
    return { message: this.appService.getHello() };
  }

  @Get('/item/:id')
  async getItem(@Res() res: Response, @Param('id') id: number) {
    const item = await this.appService.findOne(id);

    if (!item) {
      res.status(404).json({ error: 'not found' });
    }

    res.status(200).json(item);
  }

  @Get('/list')
  async getList(@Res() res: Response): Promise<AppEntity[]> {
    const list = await this.appService.findAll();

    res.status(200).json(list);

    return list;
  }

  @Post('/add')
  async addItem(@Res() res: Response, @Body() app: AddAppBody) {
    try {
      const result = await this.appService.addOne(app);

      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
