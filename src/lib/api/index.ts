import PageController from "./controllers/PageController";
import LabsController from "./controllers/LabsController";
import PostsController from "./controllers/PostsController";
import ContributionsControler from "./controllers/ContributionsController";

class Data {
   public readonly Pages: PageController;
   public readonly Posts: PostsController;
   public readonly Contributions: ContributionsControler;
   public readonly Labs: LabsController;

   constructor() {
      this.Pages = new PageController();
      this.Posts = new PostsController();
      this.Contributions = new ContributionsControler();
      this.Labs = new LabsController();
   }
}

const Collections = new Data();
export default Collections;

const { Pages, Posts, Contributions, Labs } = Collections;
export { Pages, Posts, Contributions, Labs };