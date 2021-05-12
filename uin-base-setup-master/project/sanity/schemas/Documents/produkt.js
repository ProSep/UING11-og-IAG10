const produkt = {
  title: "Produkt",
  name: "produkt",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "tittel",
      type: "string",
      description: "Tittel",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      description: "Unique slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "tittel",
        maxLength: 96,
      },
    },
    {
      title: 'Bilde',
      name: 'bilde',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'beskrivelse',
          type: 'string',
          title: 'beskrivelse',
          options: {
            isHighlighted: true 
          }
        },
        {
          
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
    {
      title: "Forfatter",
      name: "forfatter",
      type: "reference",
      to: [{ type: "forfatter" }],
    },
    {
      title: 'Pris',
      name: 'price',
      type: 'number',
    },
    {
      title: "Kategorier",
      name: "kategori",
      type: "reference",
      to: [{ type: "kategori" }],
    },  
    {
      name: 'sjanger',
      title: 'Sjangere',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'sjanger'},
        },
      ],
    },
    {
      title: 'Detaljer',
      name: 'detaljer',
      type: 'text'
    },
  ]  
};

export default produkt;


