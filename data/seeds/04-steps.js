
exports.seed = function(knex, Promise) {
  return knex('Steps').insert([
    {
      recipe_id: 1,
      step_number: 1,
      instructions: 'Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain.'
    },
    {
      recipe_id: 1,
      step_number: 2,
      instructions: 'Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.'
    },
    {
      recipe_id: 1,
      step_number: 3,
      instructions: 'Fold macaroni into cheese sauce until coated.'
    },
  ])
};
