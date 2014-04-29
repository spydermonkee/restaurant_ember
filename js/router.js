Restaurant.Router.map(function() {
  this.resource('tables', { path: '/tables' }, function() {
    this.resource('new')
  });
});

Restaurant.TablesRoute = Ember.Route.extend ({
  model: function() {
    return Ember.RSVP.hash({
      tables: this.store.find('table'),
      items: this.store.find('item')
    });
  }
});
