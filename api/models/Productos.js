/**
 * Productos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	nombresuper:{
  		type:'string'
  	},
  	nombreproduccto:{
  		type:'string'

  	},

    categoria:{
      type:'string'

    },

  	precio:{
  		type:'integer'

  	},
  	stock:{
  		type:'integer'
  	},
  	descripcion:{
  		type:'string'
  	},
    oferta:{
      type:'boolean'
    },
    imagen:{
      type:'string'
    }

  }
};

