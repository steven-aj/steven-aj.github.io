function loadSettings() {
   return JSON.stringify({
      censor: localStorage.get
   });
}

export async function load() {
   return {
      theme: localStorage.getItem('auto') || 'auto',
      censor: localStorage.getItem('censor') === 'true',
      redactionSyle: localStorage.getItem('redactionStyle') || 'synthwave'
   }
}