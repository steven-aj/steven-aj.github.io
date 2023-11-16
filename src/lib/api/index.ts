import PageController from "./controllers/PageController";
import LabsController from "./controllers/LabsController";
import PostsController from "./controllers/PostsController";

class Data {
   public readonly Pages: PageController;
   public readonly Posts: PostsController;
   public readonly Labs: LabsController;

   constructor() {
      this.Pages = new PageController();
      this.Posts = new PostsController();
      this.Labs = new LabsController();
   }
}

const Collections = new Data();
export default Collections;

const { Pages, Posts, Labs } = Collections;
export { Pages, Posts, Labs };