Meteor.startup(function () {

	Meteor.methods({
	
		Points: function (score) {
			if (Meteor.user()) {
				var name = Meteor.user().username;
			} else {
				var name = "Anonymous";
         }
         Players.insert({name: name, score: score});
  		}
  		
	});
	
});
