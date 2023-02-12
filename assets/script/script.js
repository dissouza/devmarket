const produto = [{
	id: 0,
	name: 'Placa Mãe Asus',
	img: 'assets/img/placamae.jpg',
	preco:'350',
	qtd: 1
},
{
	id: 1,
	name: 'Processador i9',
	img: 'assets/img/processador.jpg',
	preco:'1200',
	qtd: 1

},
{
	id: 2,
	name: 'Memória RAM 4Gb',
	img: 'assets/img/memoria.jpg',
	preco:'250',
	qtd: 1
},
{
	id: 3,
	name: 'SSD M2 240Gb',
	img: 'assets/img/ssdm2.jpg',
	preco:'520',
	qtd: 1
},
{
	id: 4,
	name: 'HD SATA 1TB',
	img: 'assets/img/hd.jpg',
	preco:'250',
	qtd: 1
},
{
	id: 5,
	name: 'Gabinete Gamer RGB',
	img: 'assets/img/gabinete.jpg',
	preco:'200',
	qtd: 1
},
]

let carrinho = [];

function adicionarCarrinho(id) {
  for (const val of produto) {
    if (val.id === id) {
      carrinho.push(val);
      break;
    }
  }
}

const iniciaLoja = () => {
  const conteudo = document.getElementById('conteudo');

  for (const val of produto) {
    const item = document.createElement('section');
    item.classList.add('item');

    const product = document.createElement('article');
    product.classList.add('produto');
    product.innerHTML = `
      <img src="${val.img}" class="imagem_produto">
      <p class="product_name">${val.name}</p>
      <p class="price">R$ ${val.preco}</p>
      <p class="quantidade">${val.qtd}</p>
    `;

    item.appendChild(product);


    let botaoComprar = document.createElement("button");
    botaoComprar.classList.add("comprar");
    botaoComprar.textContent = "COMPRAR";
    botaoComprar.onclick = () => adicionarCarrinho(val.id);

    conteudo.appendChild(item);
    item.appendChild(botaoComprar);
  }
};

console.log(carrinho);

window.onload = function() {
  iniciaLoja();
};


