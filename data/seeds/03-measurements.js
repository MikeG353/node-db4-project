
exports.seed = function(knex, Promise) {
  return knex('Measurements').insert([
    {
      unit: 'oz',
      quantity: 8
    },
    {
      unit: 'cup',
      quantity: .25
    },
    {
      unit: 'teaspoon',
      quantity: .50
    },
    {
      unit: 'pinch',
      quantity: 1
    },
    {
      unit: 'cup',
      quantity: 2
    }
  ])
};
