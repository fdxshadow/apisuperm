/**
 * SupermercadoController
 *
 * @description :: Server-side logic for managing supermercadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//Damian: cada vez que se manden los datos actualizar la bd del supermercado
	//validar el supermercado nombre de usuario - password
	//supermercado habilitado y no habilitado
	mostrarsuper:function(req,res){
		Supermercado.find({estado:"habilitado"}).populateAll().exec(function(err,sup){
				if(err){ console.log(err);}
				else{
				return res.json(sup);
				}


		});
	}
	
};

