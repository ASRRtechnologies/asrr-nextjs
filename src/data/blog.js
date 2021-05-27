export const blog = [
    // {
    //     type: "written",
    //     name: "working-from-home",
    //     readMore: true,
    // },
    {
        type: "article",
        name: "ittaas",
        description: "",
        availableLanguages: ["nl"],
        readMore: true,
        image: "https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,w_624,h_351,c_scale/v1393498157/2469.webp",
        landing: {
            backgroundImage: {
                extension: 'webp'
            }
        },
        sections: [
            {
                title: true,
                length: 4,
                image: {
                    src: "https://images.unsplash.com/photo-1519309621146-2a47d1f7103a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3906&q=80"
                }
            },
            {
                title: true,
                length: 3,
                image: {
                    extension: 'webp'
                }
            },
            {
                title: true,
                length: 1
            }
        ],
    },
    {
        type: "article",
        name: "microservices",
        availableLanguages: ["en"],
        description: "",
        readMore: true,
        image: "https://r2m.se/wp-content/uploads/2018/01/microservices-768x448.webp",
        landing: {
            backgroundImage: {
                extension: 'webp'
            }
        },
        sections: [
            {
                title: true,
                length: 2,
                image: {
                    extension: 'webp'
                }
            },
            {
                title: true,
                length: 3,
            }
        ],
    },
    {
        type: "news",
        name: "heijmans-configurator",
        image: "https://media-exp1.licdn.com/dms/image/C4E22AQHN9-SNa-fzrw/feedshare-shrink_800-alternative/0?e=1606953600&v=beta&t=P5wD-WeR5AKiqrb8Wijdg7HXNOrwSZnlu_3LloUTGc4",
        readMore: true,
        landing: {
            backgroundImage: {
                extension: 'webp'
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
                    extension: 'webp',
                }
                // iframe: {
                //     code: "<iframe src=\"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719531516357091328\" height=\"692\" width=\"504\" frameborder=\"0\" allowfullscreen=\"\" title=\"Ingevoegde bijdrage\"></iframe>"
                // }
            },
            {
                title: false,
                length: 1,
                image: {
                    extension: 'webp',
                    square: true
                }
            }
        ],
    },
    // {
    //     type: "written",
    //     name: "microservices",
    //     readMore: true,
    //     tags: [
    //         "development", "technology"
    //     ],
    //     content: [
    //         {
    //             type: "paragraph",
    //             title: true
    //         },
    //         {
    //             type: "paragraph",
    //             title: false
    //         },
    //         {
    //             type: "image",
    //             format: "webp"
    //         },
    //         {
    //             type: "paragraph",
    //             title: true
    //         },
    //         {
    //             type: "paragraph",
    //             title: false
    //         },
    //         {
    //             type: "paragraph",
    //             title: false
    //         }
    //     ],
    //     image: "https://r2m.se/wp-content/uploads/2018/01/microservices-768x448.webp"
    // },
    // {
    //     type: "written",
    //     name: "kubernetes",
    //     readMore: true,
    //     tags: [
    //         "Kubernetes", "Cloud", "Hosting"
    //     ],
    //     image: "https://www.techiescorner.in/wp-content/uploads/2019/12/k8s-logo.webp",
    //     content: [
    //         {
    //             type: "paragraph",
    //             title: true
    //         },
    //         {
    //             type: "paragraph",
    //             title: false
    //         },
    //         {
    //             type: "paragraph",
    //             title: false
    //         },
    //         {
    //             type: "paragraph",
    //             title: true
    //         },
    //         {
    //             type: "image",
    //             format: "webp"
    //         },
    //         {
    //             type: "image",
    //             format: "webp"
    //         }
    //     ]
    //
    // },
    // {
    //     type: "written",
    //     name: "nextjs",
    //     tags: [
    //         "front-end", "development"
    //     ],
    //     image: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.webp",
    //     readMore: true
    // },
    // {
    //     type: "news",
    //     name: "heijmans-contfigurator",
    //     tags: [
    //         "front-end", "development", "news"
    //     ],
    //     image: "https://media-exp1.licdn.com/dms/image/C4E22AQHN9-SNa-fzrw/feedshare-shrink_800-alternative/0?e=1606953600&v=beta&t=P5wD-WeR5AKiqrb8Wijdg7HXNOrwSZnlu_3LloUTGc4",
    //     url: "https://www.linkedin.com/posts/asrr_woningconfigurator-revit-bim-activity-6719622822328631296-6RQw",
    //     readMore: true,
    //     content: [
    //         {
    //             type: "paragraph",
    //             title: true,
    //         },
    //         {
    //             type: "iframe",
    //             src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719531516357091328"
    //         },
    //         {
    //             type: "paragraph"
    //         },
    //         {
    //             type: "iframe",
    //             src: "https://www.linkedin.com/embed/feed/update/urn:li:share:6716653648182591488"
    //         }
    //     ]
    // },
    // {
    //     type: "tutorial",
    //     name: "code-tutorial",
    //     tags: [
    //         "tutorial"
    //     ],
    //     readMore: true,
    //     content: [
    //         {
    //             type: "code",
    //             code: "<iframe\n" +
    //                 "  src=\"https://carbon.now.sh/embed/\"\n" +
    //                 "  style=\"width: 873px; height: 417px; border:0; transform: scale(1); overflow:hidden;\"\n" +
    //                 "  sandbox=\"allow-scripts allow-same-origin\">\n" +
    //                 "</iframe>"
    //         }
    //     ]
    // },
    {
        type: "news",
        name: "new-office",
        image: "https://media-exp1.licdn.com/dms/image/C4E22AQFAltbZ4auSUQ/feedshare-shrink_1280-alternative/0?e=1606953600&v=beta&t=7uENkv7zCd5IEyt5ew9CRta3_3MV-Xc9NUYYUiVTcig",
        tags: [
            "ASRR", "office"
        ],
        content: [
            {
                type: "code",
                code: "<iframe\n" +
                    "  src=\"https://carbon.now.sh/embed/\"\n" +
                    "  style=\"width: 873px; height: 417px; border:0; transform: scale(1); overflow:hidden;\"\n" +
                    "  sandbox=\"allow-scripts allow-same-origin\">\n" +
                    "</iframe>"
            }
        ]
    },
    // {
    //     type: "news",
    //     name: "asrr-bv",
    //     tags: [
    //         "front-end", "development"
    //     ],
    //     url: ""
    // },
];
