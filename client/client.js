Template.leaderboard.players = function () {
    return Players.find({}, {sort: {score: -1, name: 1}});
};

Template.messages.messages = function () {
	return Messages.find({},{sort:  {time: -1}});
}



Template.input.events = {
	'keydown input#message': function ( event ) {
			if (event.which == 13) {
				if (Meteor.user()) {
					var name = Meteor.user().username;
				} else {
					var name = 'Anonymous';
				}
				var message = $('#message');
				if (message.val() != "") {
					Messages.insert({name: name, message: message.val(), time: Date.now()});
					message.val("");
				}
			}
			
			if (event.which == 32) {
				 $('#message').val($('#message').val() + " ");
				 
			}
			
			if (event.which == 66) {
				 $('#message').val($('#message').val() + "b");
			}
			
			if (event.which == 78) {
				 $('#message').val($('#message').val() + "n");
			}
	}
}


Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});


// Añadir alien invasion al codigo
//
// Añadir contador de ranking de puntuacion
//
// Deps.autorun -- cliente

// cliente(s)                              Servidor
// Method.call                             Meteor.methods - Se define una interfaz de funciones (una API) que se puede llamar desde method.call,en la carpeta server o if server.

// me defino en servidor una funcion en la q se llama desde el cliente cuando se ha acabado una partida, esta funcion debe modificar una colleccion con los puntos y el nombre
// En Deps.autorun, busca el contenido de la coleccion y se inserta en html la puntuacion
