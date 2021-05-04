// Dette er en demo for måter å hente data på.
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity
import client from './client';

const productInfo = `
  tittel, detaljer,
  'slug': slug.current,
  'kategori': kategori->kategori,
  'kslug': kategori->slug.current,
  'forfatter': forfatter->forfatter,
  'bilde': bilde{beskrivelse, asset->{url}}
`;

const kategoriInfo = `
kategori, 
'slug': slug.current,
`;

//Single kategori for kategori page
export const getKategori = async (slug) => {
  const data = await client.fetch(`*[_type == "kategori" && slug.current == $slug]{${kategoriInfo}}`, { slug });
  return data?.[0];
};

//All kategories for navbar
export const getKategoris = async () => {
  const data = await client.fetch(`*[_type == "kategori"]{${kategoriInfo}}`);
  return data;
};

//Single product
export const getProduct = async (slug) => {
  const data = await client.fetch(`*[_type == "produkt" && slug.current == $slug]{${productInfo}}`, { slug });
  return data?.[0];
};

export const getProducts = async (slug) => {
  const data = await client.fetch(`*[_type== "produkt" && kategori -> slug.current == $slug] | order(tittel){${productInfo}}[0...20]`, { slug });
  return data;
};


// //Products under kategori
// export const getProducts = async (slug) => {
//   const data = await client.fetch(`*[_type== "produkt" && kategori -> slug.current == $slug && slug.current in ["one-punch-banana-duck-vol-3-what-the-quack-is-that", "one-punch-banana-duck"]] | order(tittel){${productInfo}}[0...20]`, { slug });
//   return data;
// };

//Products search
export const getSearch = async () => {
  const data = await client.fetch(`*[[tittel, kategori->kategori, forfatter->forfatter] match ["one duck", "one duck", "one duck"]]{${productInfo}}[0...20]`);
  return data;
};




// const fields = `
//   add_your_fields_here
// `

// const otherFields = `
//   add_your_fields_here
// `

// const anotherFields = `
//   add_your_fields_here
// `

// export const firstService = async () => {
//   const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${fields}}`);
//   return data;
// };

// export const secondService = async () => {
//   const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${otherFields}}`);
//   return data;
// };

// export const firstServiceWithParam = async (slug) => {
//   const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${anotherFields}}`, { slug });
//   return data?.[0];
// };
