Restaurant.Item = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('integer'),
  gluteny: DS.attr('boolean')
});

Restaurant.Item.FIXTURES = [
  {
    id: 1,
    name: "Apple Pie",
    price: 4,
    gluteny: true
  },

  {
    id: 2,
    name: "Blueberry Pie",
    price: 2,
    gluteny: true
  },
];
