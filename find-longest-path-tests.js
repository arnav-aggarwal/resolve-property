module.exports = [
    {
        obj: {
            a: {
                b: {
                    c: {
                        d: {}
                    }
                }
            }
        },
        propertyToFind: 'd',
        path: 'a.b.c.d'
    },
    {
        obj: [
            {
                b: {
                    c: {
                        d: {}
                    }
                }
            }
        ],
        propertyToFind: 'd',
        path: '0.b.c.d'
    },
];
