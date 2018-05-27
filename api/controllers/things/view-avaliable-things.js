module.exports = {


  friendlyName: 'View avaliable things',


  description: 'Display "Avaliable things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/avaliable-things'
    }

  },


  fn: async function (inputs, exits) {

    // var things = [
    //   { id: 1, label: 'Sweet red drill'},
    //   { id: 2, label: 'Rad Mountain Bike'}
    // ];

    //Todo: Come back to this and only fetch thing current user is current see
    var things = await Thing.find({
      owner: this.req.me.id,
    });

    // Respond with view.
    return exits.success({
      things
    });

  }


};
