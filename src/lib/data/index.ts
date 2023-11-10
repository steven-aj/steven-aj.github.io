import LabsController from "./controllers/LabsController"
import PostsController from "./controllers/PostsController";

class Data {
   public readonly Posts: PostsController;
   public readonly Labs: LabsController;

   constructor() {
      this.Posts = new PostsController();
      this.Labs = new LabsController();
   }
}

const Collections = new Data();
export default Collections;

const { Posts, Labs } = Collections;
export { Posts, Labs };