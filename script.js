const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-cipreste', 
    pasta: 'verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-inverno', 
    pasta:'azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite', 
    pasta:'meia-noite'
};

const estrelar = {
    nome: 'Estelar', 
    pasta:'estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta:'rosa-claro'
};

const opcaoDeCores = [verdeCipreste, azulInverno, meiaNoite, estrelar, rosaClaro]
const opcoesTamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1; // imagem em miniatura selecionada 
let tamanhoSelecionado = 1; // escolha do tamanho do Relogio
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = `./img/apple-watch-color-options/${opcaoDeCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`

}

function trocarTamanho(){
    //atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    // mudar o tamanho do titulo
    tituloProduto.innerText = "Pulseira loop esportiva " + opcaoDeCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function alterarCor(){
    // atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // trocar nome da cor
    tituloProduto.innerText = "Pulseira loop esportiva " + opcaoDeCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    nomeCor.innerText = "Cor: " + opcaoDeCores[corSelecionada].nome
    // trocar imagans da miniaturas exibidas
    miniaturaImagem0.src = `./img/apple-watch-color-options/${opcaoDeCores[corSelecionada].pasta}/imagem-0.jpeg`
    miniaturaImagem1.src = `./img/apple-watch-color-options/${opcaoDeCores[corSelecionada].pasta}/imagem-1.jpeg`
    miniaturaImagem2.src = `./img/apple-watch-color-options/${opcaoDeCores[corSelecionada].pasta}/imagem-2.jpeg`
    // trocar imagem de visualização
    imagemVisualizacao.src = `./img/apple-watch-color-options/${opcaoDeCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
}