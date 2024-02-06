import { sortByDate } from "../shared/utils";
import ContributionItem from "../models/ContributionItem";

export default class ContributionsControler {
   private markdownEntries = Object.entries(import.meta.glob('/src/content/contributions/*.md'));

   public async getAll() {
      const contributions: ContributionItem[] = await Promise.all(
         this.markdownEntries.map(ContributionItem.createFromPromise)
      );

      return contributions.sort(contribution => contribution.significance ? -1 : 1);
   }

   public async get(path) {
      const contribution: ContributionItem = (await this.getAll()).filter(lab => lab.path.includes(path))[0];

      if (contribution) return contribution;
      else throw new Error(`Contribution path not found: ${path}`)
   }
}