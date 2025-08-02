import { CensorSensor } from "censor-sensor";

const Censor = new CensorSensor();

Censor.removeWord("hell");

Censor.setCleanFunction((str) => {
   return `<span class="profane" data-censor="true">${str}</span>`;
});

//@ts-ignore
function redactProfanity(htmlElement) {
   console.log(htmlElement);
   let censorPrefs = localStorage.getItem("censor");
   if (!censorPrefs) return;

   let elCensorState = htmlElement.getAttribute("data-censor");
   if (elCensorState === censorPrefs) return;

   htmlElement.setAttribute("data-censor", censorPrefs);
}

export default Censor;

export function cleanDocument() {
   const profanity = document.querySelectorAll("span.profane");
   if (!profanity.length) return;

   for (let i = 0; i < profanity.length; i++) {
      redactProfanity(profanity[i]);
   }
}