import NewsItem from "../models/NewsItem";
import { sortByDate, filterPublished } from "../shared/utils";
import uniq from "lodash/uniq";

export default class NewsController {
   private markdownEntries = Object.entries(import.meta.glob('/src/lib/markdown/news/**/*.md'));

   async getAll() {
      const articles: NewsItem[] = await Promise.all(
         this.markdownEntries.map(NewsItem.create)
      ).then(filterPublished).then(sortByDate);

      return articles;
   }

   public async filterTag(tag: string) {
      const byTag = (post: NewsItem) => post.hasTag(tag);

      var articles = await this.getAll()
         .then(articles => articles.filter(byTag));

      return articles;
   }

   public async getTags() {
      const toTag = (post: NewsItem) => post.tags;

      var tags: NewsItem[] | string[] = await this.getAll();
      tags = tags.map(toTag).flat(1);

      return uniq(tags);
   }

   public async getRecent(count = 6) {
      const articles: NewsItem[] = await this.getAll();
      return articles.slice(0, count);
   }
}