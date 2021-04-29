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
    ],
  };
  
  export default kategori;
  