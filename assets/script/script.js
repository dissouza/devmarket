const produto = [{
	id: 0,
	name: 'Placa Mãe Asus',
	img: 'assets/img/placamae.jpg',
	preco:'350',
	qtd: 0
},
{
	id: 1,
	name: 'Processador i9',
	img: 'assets/img/processador.jpg',
	preco:'1200',
	qtd: 0

},
{
	id: 2,
	name: 'Memória RAM 4Gb',
	img: 'assets/img/memoria.jpg',
	preco:'250',
	qtd: 0

},
{
	id: 3,
	name: 'SSD M2 240Gb',
	img: 'assets/img/ssdm2.jpg',
	preco:'520',
	qtd: 0
},
{
	id: 4,
	name: 'HD SATA 1Tb',
	img: 'assets/img/placamae.jpg',
	preco:'250',
	qtd: 0
},
{
	id: 5,
	name: 'Gabinete Gamer RGB',
	img: 'assets/img/placamae.jpg',
	preco:'200',
	qtd: 0
},
]


iniciaLoja = () => {
	produto.map((val)=>{
		console.log(val.name);
	})

	let item_ = document.createElement('section');
	item_.classList.add('item');
	document.getElementsByTag('content').appendChild(item_);

	let product = document.createElement('article');
	product.classList.add('produto');
	product.innerHTML = `<img src='+val.img+' class="imagem_produto">
						<p class="product_name">+val.name+</p>
						<p class="price">R$ +val.preco+</p>
						<p class="quantidade">+val.qtd+</p>`;

	document.getElementsByClassName('item').appendChild(product);

	item.innerHTML = '<button class="comprar" onclick="adicionarCarrinho();">COMPRAR</button>'
	};


iniciaLoja();



adicionarCarrinho = () => {


}