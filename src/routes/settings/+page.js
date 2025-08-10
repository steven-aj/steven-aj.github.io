function loadSettings() {
   return JSON.stringify({
      censor: localStorage.get
   });
}

export async function load() {
   return {
      censor: localStorage.getItem('censor') === 'true'
   }
}