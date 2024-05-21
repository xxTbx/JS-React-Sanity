export default {
    type: "document",
    name: "comment",
    fields: [
        {
            type: "string",
            name: "CreatedBy"
        },
        {
            type: "text",
            name: "Comment"
        },
        {
            type: "reference",
            name: "Lesson",
            to: { type: "lesson" },
        }
    ]
}