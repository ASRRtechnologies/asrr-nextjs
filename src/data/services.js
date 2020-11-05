export const services = [
    {
        type: "service",
        name: "itaas",
        image: "https://media-exp1.licdn.com/dms/image/C4E22AQHN9-SNa-fzrw/feedshare-shrink_800-alternative/0?e=1606953600&v=beta&t=P5wD-WeR5AKiqrb8Wijdg7HXNOrwSZnlu_3LloUTGc4",
        readMore: true,
        landing: {
            backgroundImage: {
                extension: 'png'
            }
        },
        sections: [
            {
                type: "iframe",
                code: "<iframe src=\"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719531516357091328\" height=\"692\" width=\"504\" frameborder=\"0\" allowfullscreen=\"\" title=\"Ingevoegde bijdrage\"></iframe>"
            },
            {
                title: true,
                length: 1,
                image: {
                    extension: 'png',
                }
                // iframe: {
                //     code: "<iframe src=\"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719531516357091328\" height=\"692\" width=\"504\" frameborder=\"0\" allowfullscreen=\"\" title=\"Ingevoegde bijdrage\"></iframe>"
                // }
            },
            {
                title: false,
                length: 1,
                image: {
                    extension: 'png',
                    square: true
                }
            }
        ],
    },
];

