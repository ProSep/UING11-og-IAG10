import client from './client';

const productInfo = `
  tittel, detaljer,
  'slug': slug.current,
  'kategori': kategori->kategori,
  'kslug': kategori->slug.current,
  'forfatter': forfatter->forfatter,
  'bilde': bilde{beskrivelse, asset->{url}},
  price,
  "sjangerer":sjanger[]->slug.current
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
  const data = await client.fetch(`*[_type == "kategori"] | order(kategori){${kategoriInfo}}`);
  return data;
};

//Single product
export const getProduct = async (slug) => {
  const data = await client.fetch(`*[_type== "produkt" && slug.current == $slug]{${productInfo}}`, { slug });
  return data?.[0];
};

export const getProducts = async (slug) => {
  const data = await client.fetch(`*[_type== "produkt" && kategori -> slug.current == $slug] | order(tittel){${productInfo}}[0...20]`, { slug });
  return data;
};

export const getSearch = async (search) => {
  const data = await client.fetch(`*[_type== "produkt" && ([kategori->kategori, tittel, forfatter->forfatter] match ['${search}*', '${search}*', '${search}*'])] | order(tittel){${productInfo}}[0...20]`, { search });
  console.log(search);
  return data;
};

export const getHome = async () => {
  const data = await client.fetch(`*[_type== "produkt"] | order(tittel){${productInfo}}[0...4]`);
  return data;
};