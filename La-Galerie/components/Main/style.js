import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco para uma sensação limpa
    paddingHorizontal: 15, // Espaçamento nas laterais
    paddingTop: 20, // Um pequeno espaço do topo
  },
  viewArt: {
    backgroundColor: '#f9f9f9', // Fundo levemente cinza para cada item
    borderRadius: 10, // Bordas arredondadas para suavizar os elementos
    marginBottom: 20, // Espaço entre os itens
    overflow: 'hidden', // Garantir que a imagem não saia do contorno
    elevation: 3, // Sombra sutil para profundidade
    shadowColor: '#000', // Sombra para efeito minimalista
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 200, // Altura fixa para a imagem
    resizeMode: 'cover', // Manter a proporção da imagem sem distorcer
  },
  textContainer: {
    padding: 15, // Espaço interno para o texto
    alignItems: 'center', // Centraliza o texto
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Cor escura para o título
    marginBottom: 5, // Espaço entre o título e o autor
  },
  artist: {
    fontSize: 14,
    color: '#666', // Cor mais suave para o nome do artista
    marginBottom: 5, // Espaço entre o nome do artista e o texto abaixo
  },
  text: {
    fontSize: 12,
    color: '#aaa', // Cor para o texto extra (se necessário)
  }
});
