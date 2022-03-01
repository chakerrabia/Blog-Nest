export class PostsModel {
  constructor(
    public id: string,
    public title: string,
    owner: string,
    public tags: string[],
    public description: string,
    public body: string,
  ) {}
}
