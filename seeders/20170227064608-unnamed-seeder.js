'use strict';
let base64 = require('base-64');
let crypto = require('crypto');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Users', [{
        username: 'John Doe',
        email:'esedaea@gmail.com',
        salt : base64.encode('esedaea@gmail.com'),
        password : crypto.createHmac('sha256', base64.encode('esedaea@gmail.com'))
        .update('password').digest('hex'),
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Users', null, {});

  }
};
