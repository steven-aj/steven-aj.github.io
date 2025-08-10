import DailyController from "./controllers/DailyController";
import NewsController from "./controllers/NewsController";
import PostsController from "./controllers/PostsController";

class ContentAPI {

   public readonly Daily: DailyController;
   public readonly News: NewsController;
   public readonly Posts: PostsController;

   constructor() {
      this.Daily = new DailyController();
      this.News = new NewsController();
      this.Posts = new PostsController();
   }
}

const Collections = new ContentAPI();
const { Posts, News, Daily } = Collections;

export default Collections;
export { Posts, News, Daily };