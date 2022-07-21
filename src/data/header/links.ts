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
