Restaurant.Router.map(function() {
  this.resource('restaurant', { path: '/' });
});

Restaurant.RestaurantRoute = Ember.Route.extend ({
  model: function() {
    return this.store.find('table');
  }
});
