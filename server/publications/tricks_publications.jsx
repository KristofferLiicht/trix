Meteor.publish('StreetTricks', function() {
  console.log("publishing...")
  const publish = Tricks.find();
  return publish;
});

