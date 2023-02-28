let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];


function exibeCarrinho() {

    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];

    if(carrinho.length === 0){
        const conteudo = document.getElementById('conteudo_carrinho');
        const mensagem = document.createElement('h3');
        mensagem.classList.add('empty');
        
        mensagem.textContent = 'Não há produtos no carrinho.';

        conteudo.appendChild(mensagem);
    } 

    else {

      const conteudo = document.getElementById('conteudo_carrinho');
      conteudo.innerHTML = ''; // Clear the cart content before generating the new list

      carrinho.forEach((produto) => {
        
        const product = document.createElement('section');
        product.classList.add('produto_carrinho');
        product.innerHTML = `
          <img src="${produto.img}" class="imgproduto">
          <p class="nome_produto">${produto.name}</p>
          <input type="number" name="quantidade_carrinho" id="qtde_carrinho" min="1" max="50" value="${produto.qtd}">
          <p class="valor_produto">R$ ${produto.preco}</p>
          <button id="delete" onclick="removerItem()">X</button>                               
        `;

        const pulaLinha = document.createElement('hr');

        conteudo.appendChild(product);
        conteudo.appendChild(pulaLinha);        

        })}

      }
    // Fim exibe carrinho

    function soma_total(){

        let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
        let totalValue = 0;

        for (const item of carrinho) {
          let itemValue = item.preco * item.qtd;
          totalValue += itemValue;
        }


        const main = document.getElementById('produtos_carrinho');
        const soma = document.createElement('label');
            soma.classList.add('total');
            soma.innerHTML = `
                    <h3>valor.total()</h3>
                    <p>R$ ${totalValue.toFixed(2)}</p>`;

                    main.appendChild(soma);
                    }

    console.log(carrinho);



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

    window.onload = function() {exibeCarrinho();soma_total();};
