import { CensorSensor } from "censor-sensor";

const Censor = new CensorSensor();

Censor.removeWord("hell");

Censor.addWord("shit.");
Censor.addWord("fuck.");
Censor.addWord("ass.");
Censor.addWord("asshole.");
Censor.addWord("motherfucker.");


Censor.setCleanFunction((str) => {
   return `<span class="profane" data-censor="true" data-redaction="synthwave">${str}</span>`;
});

//@ts-ignore
function redactProfanity(htmlElement) {
   let censorPrefs = localStorage.getItem("censor");
   let redactionStylePrefs = localStorage.getItem("redactionStyle");

   if (!censorPrefs || !redactionStylePrefs) return;

   let elCensorState = htmlElement.getAttribute("data-censor");
   htmlElement.setAttribute("data-redaction", redactionStylePrefs);
   
   if (elCensorState === censorPrefs) return;

   htmlElement.setAttribute("data-censor", censorPrefs);
}

export function cleanDocument() {
   const profanity = document.querySelectorAll("span.profane");

   if (!profanity.length) return;

   for (let i = 0; i < profanity.length; i++) {
      redactProfanity(profanity[i]);
   }
}

export default Censor;