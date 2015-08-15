Tricks = new Mongo.Collection('tricks');

/**
 * Constants
 */

_.extend(Tricks, {
	  trickType: {
	  	type: String,
	  },

	  trickSubType: {
	  	type: String,
	  }
});

TrickSchema = new SimpleSchema({
  trickName: {
    type: String
  },
  trickDescription: {
    type: String,
    optional: true
  },
  trickVideoId: {
  	type: String,
  	optional: true
  },
  trickTutorialId: {
  	type: String,
  	optional: true
  },
  trickLevel: {
    type: Number,
    optional: true
  }
});


Tricks.attachSchema(TrickSchema);

/**
 * Static methods
 *
 * each one is available on the global collection (Admins) object
 */
_.extend(Tricks, {
  findFreestyleTricks: function() {
    Tricks.find({ trickType: "freestyle" });
  },
  findStreetTricks: function() {
  	Tricks.find({trickType: "street" });
  }
});

/**
 * Instance methods
*
 Tricks.helpers({
});
 */


