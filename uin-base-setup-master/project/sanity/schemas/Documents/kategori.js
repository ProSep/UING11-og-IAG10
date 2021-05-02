const kategori = {
    title: "Kategori",
    name: "kategori",
    type: "document",
    fields: [
      {
        name: "kategori",
        type: "string",
        title: "Kategori",
        description: "kategori navn",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        type: "slug",
        title: "slug",
        description: "Unique slug",
        validation: (Rule) => Rule.required(),
        options: {
          source: "kategori",
          maxLength: 96,
        },
      },
    ],
  };
  
  export default kategori;
  