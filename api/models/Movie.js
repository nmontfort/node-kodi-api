/**
* Movie.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'kodiDb',
  tableName: 'movie',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'idMovie'
    },
    idFile: {
      model:'files'
    },
    title:{
      type:"string",
      columnName: 'c00'
    },
    c01:{
      type:"string"
    },
    c02:{
      type:"string"
    },
    c03:{
      type:"string"
    },
    c04:{
      type:"string"
    },
    c05:{
      type:"string"
    },
    c06:{
      type:"string"
    },
    c07:{
      type:"string"
    },
    c08:{
      type:"string"
    },
    c09:{
      type:"string"
    },
    c10:{
      type:"string"
    },
    c11:{
      type:"string"
    },
    c12:{
      type:"string"
    },
    c13:{
      type:"string"
    },
    c14:{
      type:"string"
    },
    c15:{
      type:"string"
    },
    c16:{
      type:"string"
    },
    c17:{
      type:"string"
    },
    c18:{
      type:"string"
    },
    c19:{
      type:"string"
    },
    c20:{
      type:"string"
    },
    c21:{
      type:"string"
    },
    c22:{
      type:"string"
    },
    c23:{
      type:"string"
    },
  }
};
