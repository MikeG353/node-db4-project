
exports.seed = function(knex, Promise) {
  return knex('recipe-ingredients').insert([
    {
      recipe_id: 1,
      step_id: 1,
      ingredient_id: 1,
      measurement_id: 1
    },
    {
      recipe_id: 1,
      step_id: 2,
      ingredient_id: 2,
      measurement_id: 2
    },
    {
      recipe_id: 1,
      step_id: 2,
      ingredient_id: 4,
      measurement_id: 3
    },
    {
      recipe_id: 1,
      step_id: 2,
      ingredient_id: 3,
      measurement_id: 3
    },
    {
      recipe_id: 1,
      step_id: 2,
      ingredient_id: 5,
      measurement_id: 4
    },
    {
      recipe_id: 1,
      step_id: 2,
      ingredient_id: 6,
      measurement_id: 5
    },
    {
      recipe_id: 1,
      step_id: 2,
      ingredient_id: 7,
      measurement_id: 4
    },
    {
      recipe_id: 1,
      step_id: 2
    }
  ])
};
