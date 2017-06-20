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
	cargar:function (req,res) {
		var data=req.body;
		return res.json(data.Productos[0].nombresuper);
	}
	
};

