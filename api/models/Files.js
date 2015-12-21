/**
* Files.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'kodiDb',

  attributes: {
    idFile: {
      type: 'integer',
      primaryKey: true,
      required: true
    },
    strFilename: {
      type:'string'
    },
    playCount: {
      type:'integer'
    },
    lastPlayed: {
      type:'string'
    },
    dateAdded: {
      type:'string'
    },
  }
};
