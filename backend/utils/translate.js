const axios = require('axios');

async function traduzirTexto(texto, source = 'en', target = 'pt') {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2`;

  const res = await axios.post(url, null, {
    params: {
      q: texto,
      source,
      target,
      key: apiKey,
      format: 'text'
    }
  });

  return res.data.data.translations[0].translatedText;
}

module.exports = traduzirTexto;
