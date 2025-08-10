import { visit } from "unist-util-visit";
import CensorService from "../../src/lib/services/Censor.js";

function injectProfanityWrapper(node, index, parent) {
   const original = node.value;
   if (!CensorService.isProfane(original)) return;

   // Get the censored string (includes HTML span tags)
   const censored = CensorService.cleanProfanity(original);

   // Replace the text node with an HTML node
   parent.children.splice(index, 1, {
      type: 'html',
      value: censored,
   });
}

export default function profanityClassifier() {
   return function transformer(tree) {
      visit(tree, 'heading', (node) => {
         if (node.children.length === 0) return;

         for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (child.type === 'text') {
               injectProfanityWrapper(child, i, node);
            }
         }
      });

      visit(tree, 'text', (node, index, parent) => {
         injectProfanityWrapper(node, index, parent);
      });
   };
}