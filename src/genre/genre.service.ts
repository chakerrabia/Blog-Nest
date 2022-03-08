import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dtos/createGenre.dto';
import { Genre } from './models/genres.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}
  // TODO account for duplicate genres
  async addGenre(genreData: CreateGenreDto) {
    this.genreRepository.save(genreData);
    return this.genreRepository.find({ where: genreData });
  }
  async getGenres() {
    return this.genreRepository.find();
  }
}
