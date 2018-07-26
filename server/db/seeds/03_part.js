
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('part').del()
    .then(function () {
      // Inserts seed entries
      return knex('part').insert([
        { url_img:'https://b.cdnbrm.com/images/products/large/headers/gibson_header.jpg', partName:'Headers', partNumber:225, price:800, detail:'Gibson chrome headers',inCart:false},
        
        {url_img:'https://cdn.shopify.com/s/files/1/0890/6136/products/dvfd.jpg?v=1524084771', partName:'Turbo', partNumber:109, price:1500, detail:'Percision Turbo.',inCart:false},
        
        {url_img:'https://cdn.shopify.com/s/files/1/2160/9839/products/BP3314CT-1_900x.jpg?v=1527860669', partName:'Engine', partNumber:502,price:10000, detail:'331CI Stroker crate engine.',inCart:false},
        
        {url_img:'https://cdn.shopify.com/s/files/1/2160/9839/products/BP3314CT-1_900x.jpg?v=1527860669', partName:'Intercooler', partNumber:815, price:2000,  detail:'Mishimoto intercooler front mount.',inCart:false}
      ]);
    });
};
