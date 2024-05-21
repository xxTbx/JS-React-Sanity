export default {

    type:'document', 
    name:'course', 
    fields: [
        {
            type: "string",
            name: "Title",
        },
        {
            type: "slug",
            name: "Slug",
            title: "Slug",
            options: {
                source: "title",
                slugify: (input) =>
                  input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
              },
              validation: (Rule) => Rule.required(),
        },
        {
            type: "text",
            name: "Description",
        },
        {
            type: "array",
            name: "Lessons",
            title: "Lesson",
            of: [
            {   
                type: "reference",
                to: [
                    { type: 'lesson' }
                    ]
                }
            ]
        },
        {
            type: "string",
            name: "Category",
        }
    ]
}