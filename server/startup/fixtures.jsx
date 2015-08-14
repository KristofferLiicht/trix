Meteor.startup(function () {

  if (Tricks.find().count() === 0) {
    console.log('Seeding trick fixtures...');

    Tricks.insert({
      trickType: 'street football',
      trickSubType: 'groundmoves',
      trickName: 'Jeand360',
      trickDescription: 'Jeand Doest awesome tasmanian killer move',
      trickVideoId: 'n8fLGTO07hE',
      trickTutorialId: 'jdzOjhBXZTU',
      trickLevel: 3
    });
  }
});