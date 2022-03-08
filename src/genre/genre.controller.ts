import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGenreDto } from './dtos/createGenre.dto';
import { GenreService } from './genre.service';

@Controller("/genre")
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  addGenre(@Body() genreData: CreateGenreDto) {
    this.genreService.addGenre(genreData);
  }
  @Get()
  getGenres() {
    return this.genreService.getGenres();
  }
}
