document.getElementById('translateBtn').addEventListener('click', async () => {
    const text = document.getElementById('textToTranslate').value;
    const targetLang = 'pt-BR';
    
    if (text) {
      try {
        const translatedText = await translateText(text, targetLang);
        document.getElementById('result').innerText = translatedText;
      } catch (error) {
        console.error('Erro ao traduzir', error);
      }
    }
  });
  
  async function translateText(text, targetLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const result = await response.json();
    return result[0][0][0];
  }
  