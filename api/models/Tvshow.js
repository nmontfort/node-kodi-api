/**
* Tvshow.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'tvshow',

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'idShow'
    },

  }
};
