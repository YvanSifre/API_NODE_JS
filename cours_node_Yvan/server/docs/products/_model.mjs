export default {
    product: {
        type: "object",
        properties: {
            name: {
                type: "string",
                description: "name of product",
                example: "pomme"
            },
            quantity: {
                type: "number",
                description: "quantity of products",
                example: "12"
            }
        }
    },
    products: {
        type: "object",
        additionalProperties: { $ref: "#components/schemas/product" }
    }
}
