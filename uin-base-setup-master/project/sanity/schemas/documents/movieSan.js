const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
            description: 'Titel er bra',
            validation: (Rule) => Rule.required(),
        },  
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Det er viktig med en slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'actor',
            type: 'reference',
            title: 'skuespiller',
            to: [{type: 'actor'}]
        }
    ]
}

export default movie;