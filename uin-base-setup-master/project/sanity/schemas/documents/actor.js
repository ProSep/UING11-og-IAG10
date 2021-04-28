const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'navn',
            type: 'string',
            title: 'actor',
            description: 'Actor sitt navn',
            validation: (Rule) => Rule.required(),
        },

    ]
}

export default actor;