export default {

    type: "document",
    name: "lesson",
    fields: [
        {
            type: "string",
            name: "Title",
        },
        {
            type: "slug",
            name: "Slug",
        },
        {
            type: "text",
            name: "Preamble",
        },
        {
            type: "array",
            name: "Text",
            of: [{ type: "lessonText" }],
        },
        {
            type: "number",
            name: "Order"
        }
    ]
}