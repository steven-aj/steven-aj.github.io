import PostsController from "./controllers/PostsController";

class Data {
   public readonly Posts: PostsController;

   constructor() {
      this.Posts = new PostsController();
   }
}

const Collections = new Data();
const { Posts } = Collections;

export default Collections;
export { Posts };