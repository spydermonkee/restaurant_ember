Restaurant.Table = DS.Model.extend({
  number: DS.attr('integer'),
  available: DS.attr('boolean'),
  balance: DS.attr('boolean')
});

Restaurant.Table.FIXTURES = [
  {
    id: 1,
    number: 1,
    available: true,
    balance: false,
  },
  {
    id: 2,
    number: 2,
    available: false,
    balance: true,
  },
  {
    id: 3,
    number: 3,
    available: false,
    balance: true,
  },
  {
    id: 4,
    number: 4,
    available: true,
    balance: false,
  },
  {
    id: 5,
    number: 5,
    available: true,
    balance: false,
  },
  {
    id: 6,
    number: 6,
    available: false,
    balance: false,
  },
];
