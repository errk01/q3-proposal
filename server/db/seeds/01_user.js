
exports.seed = function(knex, Promise) {
  
  return knex('user').del()
    .then(function () {
    
      return knex('user').insert([
        {first_name:'jamie', last_name:'madrox',email:'madrox', password:'password'},
        {first_name:'justin', last_name:'knox',email:'knox', password:'password'},
        {first_name:'lex', last_name:'hex',email:'master', password:'password'}
      ]);
    });
};
