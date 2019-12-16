(function() {

  /* UTILS */
  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function slugify(str) {
    return normalize(str).replace(/[\s_-]/g, '-');
  }

  /* VARIABLES */
  var products = [
    {
      "name": "Girafa em Betão Armado",
      "image": "assets/images/animais.jpg",
      "stock": 7
    },
    {
      "name": "Campânula",
      "image": "assets/images/campanula.jpg",
      "stock": 6
    },
    {
      "name": "Tabuleiro de Madeira",
      "image": "assets/images/tabuleiro1.jpg",
      "stock": 17
    },
    {
      "name": "Candeeiro",
      "image": "assets/images/lamp.jpg",
      "stock": 7
    },
    {
      "name": "Quadro",
      "image": "assets/images/quadro.jpg",
      "stock": 2
    },
    {
      "name": "Tabuleiro",
      "image": "assets/images/tabuleiro2.jpg",
      "stock": 0
    },
    {
      "name": "Spoon Bag",
      "image": "assets/images/spoonbag.jpg",
      "stock": 5
    },
    {
      "name": "Cesto",
      "image": "assets/images/cesto.jpg",
      "stock": 4
    }
  ];

  var productsList = document.querySelector('#products ul');
  var now = new Date();

  /* METHODS */
  function renderProduct(product) {
    productsList.innerHTML += [
      '<li>',
        '<a href="products/' + slugify(product.name) + '">',
          '<figure class="ratio ratio-1by1">',
            '<img src="' + product.image + '" alt="' + product.name + '" aria-hidden="true">' +
          '</figure>',
          '<h2>' + product.name + '</h2>',
        '</a>',
      '</li>',
    ].join('');
  }

  function setCopyrightRange() {
    var dateRange = document.querySelector('.date-range');
    var startDate = new Date(2018, 0, 1);
    var endDate = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    dateRange.innerHTML += [
      '<time datetime="' + startDate.toISOString() + '">' + startDate.getFullYear() + '</time>',
      '-',
      '<time datetime="' + endDate.toISOString() + '">' + endDate.getFullYear() + '</time>',
    ].join(' ');
  }

  /*
    SEARCH PRODUCTS
    1) seleccionar o input de pesquisa com .querySelector()
    2) adicionar um event listener com .addEventListener() do tipo 'input' ao input de pesquisa
    3) passar uma função anónima que recebe o evento
    4) criar uma variável "value" e atribuir-lhe o valor do input (event.target.value)
    5) filtrar o array de produtos com o método .filter()
    6) passar uma função anónima ao método .filter() que recebe o item do array
    7) retornar o teste se o nome normalizado do item corresponde ao valor normalizado da pesquisa
    8) a seguir ao .filter() usar o métido .forEach() passando a função renderProduct
  */

  var input = document.querySelector('.search input');

  input.addEventListener('input', function(evt) {
    var value = evt.target.value;

    productsList.innerHTML = '';

    products.filter(function(product) {
      //return product.name.toLocaleLowerCase().includes(value.toLowerCase());
      // return product.name.indexOf(value);
      return normalize(product.name).includes(normalize(value));
    }).forEach(renderProduct); 
  });

  /* INIT */
  products.forEach(renderProduct);
  setCopyrightRange();

})();