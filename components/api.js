export default async function (url, setter) {
  console.log('Iniciando busca na API');

  try {
    const res = await fetch(url);
    const json = await res.json();

    // Filtra os que têm image_id
    const itemsWithImageId = json.data.filter(item => item.image_id !== null);

    // Mapeia cada item para uma promessa que verifica a URL da imagem
    const checkImages = itemsWithImageId.map(async (item) => {
      const infoUrl = `https://www.artic.edu/iiif/2/${item.image_id}/info.json`;

      try {
        const response = await fetch(infoUrl);
        if (response.status === 200) {
          return item; // válido
        } else {
          console.log(`Imagem inválida para ID ${item.image_id}`);
          return null;
        }
      } catch (error) {
        console.log(`Erro ao verificar imagem ${item.image_id}:`, error);
        return null;
      }
    });

    // Aguarda todas as verificações em paralelo
    const results = await Promise.all(checkImages);

    // Remove os nulos (imagens inválidas)
    const validItems = results.filter(item => item !== null);

    // console.log(`Itens válidos encontrados: ${validItems.length}`);
    setter(validItems);
  } catch (err) {
    console.log('Erro ao buscar dados da API:', err);
  }
}
