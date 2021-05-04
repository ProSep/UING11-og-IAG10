// Dette er en demo for måter å hente data på.
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity
import client from './client';

const productInfo = `
  tittel, detaljer,
  'slug': slug.current,
  'kategori': kategori->kategori,
  'forfatter': forfatter->forfatter,
  'bilde': bilde{beskrivelse, asset->{url}}
`;

const kategoriInfo = `
kategori, 
'slug': slug.current,
`;


export const getKategori = async (slug) => {
  const data = await client.fetch(`*[_type == "kategori" && slug.current == $slug]{${kategoriInfo}}`, { slug });
  return data?.[0];
};

export const getKategoris = async () => {
  const data = await client.fetch(`*[_type == "kategori"]{${kategoriInfo}}`);
  return data;
};

export const getProduct = async (slug) => {
  const data = await client.fetch(`*[_type == "produkt" && slug.current == $slug]{${productInfo}}`, { slug });
  return data?.[0];
};

export const getProducts = async (slug) => {
  const data = await client.fetch(`*[_type== "produkt" && kategori -> slug.current == $slug] | order(tittel){${productInfo}}[0...20]`, { slug });
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
