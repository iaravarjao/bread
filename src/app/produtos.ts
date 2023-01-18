export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Café", preco: 7.00, descricaoPreco: "À vista no PIX", imagem: "./assets/cafe.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Cookie", preco: 4.50, descricaoPreco: "À vista no PIX", imagem: "./assets/cookie.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Cupcake", preco: 8.99, descricaoPreco: "À vista no PIX", imagem: "./assets/cupcake.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Sonho", preco: 5.99, descricaoPreco: "À vista no PIX", imagem: "./assets/sonho.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Suco", preco: 7.99, descricaoPreco: "À vista no PIX", imagem: "./assets/suco.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Sanduíche", preco: 12.99, descricaoPreco: "À vista no PIX", imagem: "./assets/sanduiche.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Salada de Frutas", preco: 6.99, descricaoPreco: "À vista no PIX", imagem: "./assets/frutas.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Chá", preco: 7.00, descricaoPreco: "À vista no PIX", imagem: "./assets/cha.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Torta de Morango", preco: 20.00, descricaoPreco: "À vista no PIX", imagem: "./assets/torta.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Pão Francês", preco: 2.00, descricaoPreco: "À vista no PIX", imagem: "./assets/pao.jpg", quantidadeEstoque: 10 }
]
    