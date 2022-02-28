import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostsDto } from './create-posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  insertPost(@Body() postData: CreatePostsDto) {
    const bodyData: CreatePostsDto = { ...postData };
    return this.postsService.addPost(
      bodyData.title,
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
