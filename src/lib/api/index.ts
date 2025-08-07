import DailyController from "./controllers/DailyController";
import PostsController from "./controllers/PostsController";

class ContentAPI {

   public readonly Daily: DailyController;
   public readonly Posts: PostsController;

   constructor() {
      this.Daily = new DailyController();
      this.Posts = new PostsController();
   }
}

const Collections = new ContentAPI();
const { Posts, Daily } = Collections;

export default Collections;
export { Posts, Daily };