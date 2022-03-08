import { Injectable } from '@nestjs/common';
import { Post } from './models/posts.entity';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from 'src/genre/models/genres.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async addPost(
    title: string,
    owner: string,
    tags: string[],
    description: string,
    body: string,
  ) {
    const id = 'P - ' + uuidv4();
    const genres = tags.map((tag) =>
      this.genreRepository.find({ where: { genre: tag } }),
    );
    await this.postRepository.save({
      id,
      title,
      owner,
      genres,
      description,
      body,
    });
    return id;
  }

  async getPost(id: string) {
    return this.postRepository.findOne(id);
  }
  async getPosts() {
    return this.postRepository.find();
  }
}
