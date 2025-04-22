import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco para manter o estilo limpo
    paddingHorizontal: 15, // Espaçamento nas laterais
    paddingTop: 20, // Espaço do topo para dar respiro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Título com cor escura para destaque
    textAlign: 'center', // Centralizar título
    marginBottom: 10, // Espaço abaixo do título
  },
  artist: {
    fontSize: 18,
    color: '#555', // Cor suave para o nome do artista
    textAlign: 'center', // Centralizar nome do artista
    marginBottom: 20, // Espaço abaixo do nome do artista
  },
  image: {
    width: '100%',
    height: 300, // Altura fixa para a imagem
    resizeMode: 'contain', // Manter a proporção da imagem
    borderRadius: 10, // Bordas arredondadas para suavidade
    marginBottom: 20, // Espaço abaixo da imagem
  },
  description: {
    fontSize: 14,
    color: '#666', // Texto suave para a descrição
    lineHeight: 20, // Aumentar altura da linha para uma leitura confortável
    textAlign: 'justify', // Justificar o texto para uma apresentação alinhada
    marginBottom: 20, // Espaço abaixo da descrição
  },
  noImage: {
    fontSize: 16,
    color: '#999', // Texto para quando a imagem não está disponível
    textAlign: 'center',
  },
});
