export default {
    get: {
        tags: ['Products'],
        description: 'Get all products',
        operationId: 'getAllproducts',
        parameters: [],
        responses: {
            200: {
                description: 'Get all products',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/products',
                        },
                    },
                },
            },
        },
    },
};