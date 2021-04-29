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
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'beskrivelse',
          type: 'string',
          title: 'beskrivelse',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
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
      title: "Kategorier",
      name: "kategori",
      type: "reference",
      to: [{ type: "kategori" }],
    },    
    {
      title: 'Detaljer',
      name: 'detaljer',
      type: 'text'
    },
  ]  
};

export default produkt;
