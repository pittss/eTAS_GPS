app.factory('Profiles', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var profiles = [{
    id: 0,
    name: 'Anoop Kumar',
    deseg: 'Team Lead',
    face: 'img/150x165/anoop-kumar.png'
  }, {
    id: 1,
    name: 'Vijay Kumar',
    deseg: 'Project Manager',
    face: 'img/150x165/vijay-kumar.png'
  }, {
    id: 2,
    name: 'Durgesh Soni',
    deseg: 'Team Lead',
    face: 'img/150x165/durgesh-soni.png'
  }, {
    id: 3,
    name: 'Manish Mittal',
    deseg: 'Project Manager',
    face: 'img/150x165/manish-mittal.png'
  }, {
    id: 4,
    name: 'Vinay Kumar',
    deseg: 'UI Designer',
    face: 'img/150x165/vinay-kumar.png'
  }, {
    id: 5,
    name: 'Ankit Gera',
    deseg: 'System Administrator',
    face: 'img/150x165/ankit-gera.png'
  }];

  return {
    all: function () {
      return profiles;
    },
    remove: function (id) {
      profiles.splice(profiles.indexOf(id), 1);
    },
    get: function (profileId) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id === parseInt(profileId)) {
          return profiles[i];
        }
      }
      return null;
    }
  };
});
app.factory('Records', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [];
  var id;

  return {
    all: function () {
      return items;
    },
    remove: function (id) {
      items.splice(items.indexOf(id), 1);
    },
    get: function (recordId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(recordId)) {
          return items[i];
        }
      }
      return null;
    },
    push: function (value) {
      items.push(value);
    },
    setId: function (id_) {
      id = id_;
    },
    getId: function() {
      return id;
    }
  };
});
