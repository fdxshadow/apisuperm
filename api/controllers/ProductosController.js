/**
 * ProductosController
 *
 * @description :: Server-side logic for managing productos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	mostrar:function (req,res) {
		Productos.find({nombresuper:req.body.Super,categotia:req.body.Categoria}).populateAll().exec(function(err,prod){
			if(err){ console.log(err);}
			else{
				return res.json(prod);
			}

		});	
	},
		
};

