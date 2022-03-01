import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostsDto } from './dtos/create-posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  insertPost(@Body() postData: CreatePostsDto) {
    const bodyData: CreatePostsDto = { ...postData };
    return this.postsService.addPost(
      bodyData.title,
      bodyData.owner,
      bodyData.tags,
      bodyData.description,
      bodyData.body,
    );
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts()
  }
}
