export const blog = [
    {
        type: "article",
        name: "microservices",
        readMore: true,
        tags: [
            "full-stack"
        ],
        image: "https://r2m.se/wp-content/uploads/2018/01/microservices-768x448.png"
    },
    {
        type: "article",
        name: "kubernetes",
        readMore: true,
        tags: [
            "Kubernetes", "Cloud", "Hosting"
        ],
        image: "https://www.techiescorner.in/wp-content/uploads/2019/12/k8s-logo.png",
        content: [
            {
                type: "paragraph",
                title: true
            },
            {
                type: "paragraph",
                title: false
            },
            {
                type: "image",
                format: "png"
            },
            {
                type: "image",
                format: "jpg"
            }
        ]

    },
    {
        type: "article",
        name: "nextjs",
        tags: [
            "front-end", "development"
        ],
        image: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png",
        readMore: true
    },
    {
        type: "news",
        name: "heijmans-configurator",
        tags: [
            "front-end", "development", "news"
        ],
        image: "https://media-exp1.licdn.com/dms/image/C4E22AQHN9-SNa-fzrw/feedshare-shrink_800-alternative/0?e=1606953600&v=beta&t=P5wD-WeR5AKiqrb8Wijdg7HXNOrwSZnlu_3LloUTGc4",
        url: "https://www.linkedin.com/posts/asrr_woningconfigurator-revit-bim-activity-6719622822328631296-6RQw",
        readMore: true,
        content: [
            // {
            //     type: "iframe",
            //     iframeType: "linkedin-compact",
            //     src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719531516357091328?compact=1"
            // },
            {
                type: "paragraph",
                title: true,
            },
            {
                type: "iframe",
                src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719531516357091328"
            },
            {
                type: "paragraph"
            },
            {
                type: "iframe",
                src:"https://www.linkedin.com/embed/feed/update/urn:li:share:6716653648182591488"
            }
        ]
    },
    {
        type: "tutorial",
        name: "code-tutorial",
        tags: [
            "tutorial"
        ],
        readMore: true,
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


    }
    // {
    //     type: "news",
    //     name: "new-office",
    //     tags: [
    //         "front-end", "development"
    //     ],
    //     url: ""
    // },
    // {
    //     type: "news",
    //     name: "asrr-bv",
    //     tags: [
    //         "front-end", "development"
    //     ],
    //     url: ""
    // },
]