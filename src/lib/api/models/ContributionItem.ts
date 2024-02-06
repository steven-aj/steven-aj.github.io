import { IContributionItem, IContributionMeta} from "../shared/interfaces/contribution.interfaces";

export default class ContributionItem implements IContributionItem {
   path: string;
   meta: IContributionMeta;
   content: any;

   constructor(post: IContributionItem) {
      this.path = post.path;
      this.meta = post.meta;
      this.content = post.content;
   }

   static async createFromPromise([path, resolver]) {
      const contribution = await resolver();
      const contributionPath = path.slice(18, -3);
   
      return new ContributionItem({
         path: `/contributions/${contributionPath}`,
         meta: contribution.metadata,
         content: contribution.default
      });
   }

   public get title() {
      return this.meta.title;
   }

   public get url() {
      return this.meta.url;
   }

   public get screenshot() {
      return this.meta.screenshot;
   }

   public get employer() {
      return this.meta.employer;
   }

   public get employerUrl() {
      return this.meta.employerUrl;
   }

   public get location() {
      return this.meta.location;
   }

   public get skills() {
      return this.meta.skills;
   }

   public get significance() {
      return this.meta.significance;
   }
}