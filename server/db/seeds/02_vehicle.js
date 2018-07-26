
exports.seed = function(knex, Promise) {
  
  return knex('vehicle').del()
    .then(function () {
      return knex('vehicle').insert([
        {make:'ford', model:'mustangGT', year:1967, engine:427, reason:'not getting enough fuel', partNumber:12345, note:'needs a new 2 barrel carburetor',user_id:2},
        {make:'oldsmobile', model:'442', year:1969, engine:400, reason:'needs an upgrad', partNumber:200507, note:'adding 50 shot of NOS, upgraded fuel injector w/ fuel rail',user_id:3},
        {make:'cheverolet', model:'chevelleSS', year:1969, engine:396,reason:'oil change', partNumber:017, note:'running dominator 10W-30',user_id:1}
      ]);
    });
};
