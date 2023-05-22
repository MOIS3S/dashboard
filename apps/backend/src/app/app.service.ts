import { Injectable } from '@nestjs/common';
import { ListAllEntities } from './dto/ListAllEntities ';
const data = require('../../../../DB.json');

@Injectable()
export class AppService {
  findAll(page: string): ListAllEntities {
    const parsedPage = parseInt(page);
    const PAGE_SIZE = 10;
    const lastIndex = parsedPage * PAGE_SIZE;
    const firstIndex = lastIndex - PAGE_SIZE;
    const currentData = data.slice(firstIndex, lastIndex);

    return {
      totalItems: data.length,
      currentPage: parsedPage,
      totalPages: Math.ceil(data.length / PAGE_SIZE),
      data: currentData,
    };
  }
}
