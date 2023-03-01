// Array com os produtos
const produto = [{
	name: 'Placa Mãe Asus',
	img: 'assets/img/placamae.jpg',
	preco:'350',
	qtd: 1
},
{
	name: 'Processador i9',
	img: 'assets/img/processador.jpg',
	preco:'1200',
	qtd: 1
},
{
	name: 'Memória RAM 4Gb',
	img: 'assets/img/memoria.jpg',
	preco:'250',
	qtd: 1
},
{
	name: 'SSD M2 240Gb',
	img: 'assets/img/ssdm2.jpg',
	preco:'520',
	qtd: 1
},
{
	name: 'HD SATA 1TB',
	img: 'assets/img/hd.jpg',
	preco:'250',
	qtd: 1
},
{
	name: 'Gabinete Gamer RGB',
	img: 'assets/img/gabinete.jpg',
	preco:'200',
	qtd: 1
},
];

//

function iniciaLoja() {

	let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
	
	if(carrinho.length === 0){

		let btn_carrinho = document.getElementById('carrinho_btn');
		let anchor = document.createElement('a');
		
		anchor.href = "carrinho.html";
		anchor.innerHTML = "<img src='assets/img/carrinho.png' class='basket'/>"

		btn_carrinho.appendChild(anchor)

	} 

	else {

		let btn_carrinho = document.getElementById('carrinho_btn');
		let anchor = document.createElement('a');
		
		anchor.href = "carrinho.html";
		anchor.innerHTML = "<img src='assets/img/carrinho2.png' class='basket'/>"

		btn_carrinho.appendChild(anchor)

	}

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
    botaoComprar.onclick = function() {
      adicionarCarrinho(val);
    };

    conteudo.appendChild(item);
    item.appendChild(botaoComprar);
  }
};


function adicionarCarrinho(produto) {
  let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
  carrinho.push(produto);

  sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  window.location.reload();
}


window.onload = function(){
  iniciaLoja();
};


let topo = document.getElementById("backtop");

window.onscroll = function() {scrollFunction()};


// Scroll de volta ao topo
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backtop.style.display = "block";
  } else {
    backtop.style.display = "none";
  }
}

function voltartopo(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}
