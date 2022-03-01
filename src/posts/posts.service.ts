import { Injectable } from '@nestjs/common';
import { PostsModel } from './models/posts.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostsService {
  posts: PostsModel[] = [];

  addPost(
    title: string,
    owner: string,
    tags: string[],
    description: string,
    body: string,
  ) {
    const generatedId = uuidv4();
    this.posts.push(
      new PostsModel(generatedId, title, owner, tags, description, body),
    );
    return generatedId;
  }
  getPost(id: string): PostsModel {
    const post = this.posts.find((prod) => prod.id == id);

    return { ...post };
  }
  getPosts(): PostsModel[] {
    return { ...this.posts };
  }
}
