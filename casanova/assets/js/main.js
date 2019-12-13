(function() {

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

  var productsContainer = document.querySelector('.products');

  function renderProduct(product) {
    return [
      '<div>',
        '<img src="' + product.image + '">',
        '<h3>' + product.name + '</h3>',
      '</div>',
    ].join('');
  }

  /*
  iterar sobre o array de produtos
  e adicionar ao html do container o resultado da função renderProduct
  */



})();