export default {

  title: 'Sjanger',
  name: 'sjanger',
  type: 'document',
  fields: [
    {
      
      title: 'Title',
      name: 'title',
      type: 'string',
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
    {
      name: 'parents',
      title: 'Parent sjanger',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'sjanger'}],
        },
      ],
    },
  ],
}
