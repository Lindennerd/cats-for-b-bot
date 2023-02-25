import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class CatsApiService {
  private catsUrl: string;
  constructor(private config: ConfigService) {
    this.catsUrl = config.getOrThrow<string>('CATS_API');
  }

  async fetchCat() {
    const catsResponse = await axios.get(this.catsUrl);
    return catsResponse.data[0].url;
  }
}
