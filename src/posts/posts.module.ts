import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from 'src/genre/models/genres.entity';
import { Post } from './models/posts.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    TypeOrmModule.forFeature([Genre]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
