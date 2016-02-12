/**
* Movie.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

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
    synopsis:{
      type:"string",
      columnName: 'c01'
    },
    tagline:{
      type:"string",
      columnName: 'c03'
    },
    vote:{
      type:"string",
      columnName: 'c04'
    },
    rating:{
      type:"string",
      columnName: 'c05'
    },
    writers:{
      type:"string",
      columnName: 'c06'
    },
    year:{
      type:"string",
      columnName: 'c07'
    },
    imdb:{
      type:"string",
      columnName: 'c09'
    },
    runtime:{
      type:"string",
      columnName: 'c11'
    },
    mpaa:{
      type:"string",
      columnName: 'c12'
    },
    c13:{
      type:"string"
    },
    genre:{
      type:"string",
      columnName: 'c14'
    },
    director:{
      type:"string",
      columnName: 'c15'
    },
    c16:{
      type:"string"
    },
    studio:{
      type:"string",
      columnName: 'c18'
    },
    country:{
      type:"string",
      columnName: 'c21'
    },
    path:{
      type:"string",
      columnName: 'c22'
    },
    c23:{
      type:"string"
    },
  }
};
