
exports.seed = function(knex, Promise) {
  return knex('Ingredients').insert([
    {
      name: 'Elbow Macaroni'
    },
    {
      name: 'Butter'
    },
    {
      name: 'All-Purpose Flour'
    },
    {
      name: 'Salt'
    },
    {
      name: 'Pepper'
    },
    {
      name: 'Milk'
    },
    {
      name: 'Shredded Cheese'
    }
  ])
};
