angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing datas
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Orders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var orders = [{
    id: 0,
        inputFile: '',
    outputFile: './img/rabbit.JPG',
    size: '35x35x35cm',
    user: 'Alex Wu',
    itemImage: './img/rabbit.JPG',
    price: '$85',
    status: 'Delivering',
    payment: 'Paid',
    description: 'Present for Michel'

  }, {
    id: 1,
    inputFile: '',
    outputFile: './img/camera.jpg',
    size: '35x20x25cm',
    user: 'Alex Wu',
    itemImage: './img/camera.jpg',
    price: '$35.5',
    status: 'Processing',
    payment: 'Paid',
    description: 'My Camera'
  }, {
    id: 2,
    inputFile: '',
    outputFile: './img/car.JPG',
    size: '85x50x30cm',
    user: 'Alex Wu',
    itemImage: './img/car.JPG',
    price: '$95',
    status: 'Delivering',
    payment: 'Paid',
    description: 'Dream Car'
  }, {
    id: 3,
    inputFile: '',
    outputFile: './img/shoe.JPG',
    size: '30x10x12cm',
    user: 'Alex Wu',
    itemImage: './img/shoe.JPG',
    price: '$35',
    status: 'Delivering',
    payment: 'Paid',
    description: 'Shoe for homework'
  }, {
    id: 4,
    inputFile: '',
    outputFile: './img/lamp.jpg',
    size: '40x40x90cm',
    user: 'Alex Wu',
    itemImage: './img/lamp.jpg',
    price: '$97.5',
    status: 'Delivering',
    payment: 'Unpaid',
    description: 'Lamp cover'
  }, {
    id: 5,
    inputFile: '',
    outputFile: './img/cups.jpg',
    size: '30x20x40cm',
    user: 'Alex Wu',
    itemImage: './img/cups.jpg',
    price: '$55',
    status: 'Delivering',
    payment: 'Paid',
    description: 'Cup'
  }, {
    id: 6,
    inputFile: '',
    outputFile: './img/handbag.jpg',
    size: '40x5x20cm',
    user: 'Alex Wu',
    itemImage: './img/handbag.jpg',
    price: '$45',
    status: 'Delivering',
    payment: 'Paid',
    description: 'Handbag\'s figure'
  }, {
    id: 7,
    inputFile: '',
    outputFile: './img/cubic.JPG',
    size: '35x35x35cm',
    user: 'Alex Wu',
    itemImage: './img/cubic.JPG',
    price: '$65',
    status: 'Delivering',
    payment: 'Paid',
    description: 'Present for Gilbert'
  }, {
    id: 8,
    inputFile: '',
    outputFile: './img/cake.PNG',
    size: '50x50x20cm',
    user: 'Alex Wu',
    itemImage: './img/cake.JPG',
    price: '$75',
    status: 'Delivering',
    payment: 'Paid',
    description: 'Birthday Cake for Grace'
  }];

  return {
    all: function() {
      return orders;
    },
    remove: function(order) {
      orders.splice(orders.indexOf(orders), 1);
    },
    get: function(orderId) {
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === parseInt(orderId)) {
          return orders[i];
        }
      }
      return null;
    }
  };
});
