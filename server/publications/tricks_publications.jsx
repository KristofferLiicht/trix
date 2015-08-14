Meteor.publish('FreestyleTrickData', function() {
  return FreestyleTricks.find({trickName: {$exists: true}});
});

Meteor.publish('StreetTrickData', function() {
  return StreetTricks.find({trickName: {$exists: true}});
});
