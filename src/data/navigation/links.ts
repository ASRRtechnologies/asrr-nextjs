type NavigationLinks =
    | { label: string, path: string, subPaths?:never }
    | { label: string, path?:never, subPaths: Record<'label' | 'path', string>[] }

export const navigationLinks: NavigationLinks[] = [
    {label: "Home", path: "/"},
    {label: "Portfolio", path: "/portfolio"},
    {label: "Diensten", path: "/diensten"},
    {
        label: "Over",
        subPaths: [
            {
                label: "Team",
                path: "/team",
            },
            {
                label: "Over ASRR",
                path: "/over",
            }
        ]
    },
    {label: "Blog", path: "/blog"},
    {label: "Contact", path: "/contact"},
]

export const footerNavigation = [
        {
            "title": "About",
            "links": [
                {
                    "label": "Features",
                    "link": "#"
                },
                {
                    "label": "Pricing",
                    "link": "#"
                },
                {
                    "label": "Support",
                    "link": "#"
                },
                {
                    "label": "Forums",
                    "link": "#"
                }
            ]
        },
        {
            "title": "Project",
            "links": [
                {
                    "label": "Contribute",
                    "link": "#"
                },
                {
                    "label": "Media assets",
                    "link": "#"
                },
                {
                    "label": "Changelog",
                    "link": "#"
                },
                {
                    "label": "Releases",
                    "link": "#"
                }
            ]
        },
        {
            "title": "Community",
            "links": [
                {
                    "label": "Join Discord",
                    "link": "#"
                },
                {
                    "label": "Follow on Twitter",
                    "link": "#"
                },
                {
                    "label": "Email newsletter",
                    "link": "#"
                },
                {
                    "label": "GitHub discussions",
                    "link": "#"
                }
            ]
        }
    ]
