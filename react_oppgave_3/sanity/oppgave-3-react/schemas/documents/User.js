export default {
    type: "document",
    name: "user",
    fields: [
        {
            type: "string",
            name: "name",
            
        },
        {
            type: "string",
            name: "email"
        },
    ],
    preview: {
        select: {
            name: "name",
            created: "_createdAt",
        },
        prepare({ name, created }) {
            return {
                title: `Fra: ${name}`,
                subtitle: `Dato: ${created ? new Date(created).toDateString() : null}`,
            };
        },
    },  
}