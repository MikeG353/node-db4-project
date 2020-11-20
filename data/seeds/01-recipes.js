
exports.seed = function(knex, Promise) {
  return knex('Recipes').insert([
    {
      name: 'Macaroni and Cheese',
      description: 'Quick and easy tasty side'
    }
  ])
};
