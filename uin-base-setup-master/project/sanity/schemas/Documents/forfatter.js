const forfatter = {
    title: "Forfatter",
    name: "forfatter",
    type: "document",
    fields: [
      {
        name: "forfatter",
        type: "string",
        title: "F   orfatter",
        description: "Forfatter navn",
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  
  export default forfatter;
  