const forfatter = {
    title: "Forfatter",
    name: "forfatter",
    type: "document",
    fields: [
      {
        name: "forfatter",
        type: "string",
        title: "Forfatter",
        description: "Forfatter navn",
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
  export default forfatter;
  