import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from './theme/types'

// https://vitepress.dev/reference/site-config

export default defineConfigWithTheme<ThemeConfig>({
    head: [
        ['link', { rel: 'icon', href: '/icon/m87.jpg' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Montserrat:wght@400;700&family=Noto+Sans&family=Noto+Serif+TC:wght@400;700&display=swap' }]
    ],
    title: "Bo-Yu Yang",
    description: "Site description or title description",
    sitemap: {
        hostname: 'https://yang-bo-yu.github.io/',
    },
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'CV', link: '/CV_Bo_Yu_Yang.pdf', target: '_blank' },
            { text: 'Publications', link: '/publications/pub.md' },
            { text: 'Projects', link: '/projects/proj.md' },
            { text: 'Resources', link: '/misc/resources.md' },
            { text: 'Blog', link: '/misc/misc.md' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Yang-Bo-Yu/Yang-Bo-Yu.github.io' }
        ],
        search: {
            provider: 'local'
        },

        // https://github.com/iann838/vitefolio
        sidebar: [{ text: '' }], // DO NOT DELETE force an empty sidebar
        profile: {
            title: 'Bo-Yu Yang', // hidden if empty
            bio: "There is a crack in everything, and that's how the light gets in.",
            avatar: '/icon/m87.jpg',
            links: [
                {
                    icon: {
                        svg: `
                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" role="img">
                                <path fill="#181717" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        `
                    },
                    link: 'https://github.com/Yang-Bo-Yu'
                },
                {
                    icon: {
                        svg: `
                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" role="img">
                                <path fill="#0077b5" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        `
                    },
                    link: 'https://www.linkedin.com/in/bo-yu-yang-337459245/'
                },
                {
                    icon: {
                        svg: `
                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" role="img">
                                <path fill="#4285F4" d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                            </svg>
                        `
                    },
                    link: 'https://scholar.google.com/citations?user=eEKcjywAAAAJ&hl=en',
                    text: 'Google Scholar'
                },
                {
                    icon: {
                        svg: `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="800px" height="800px" role="img">
                                <path fill="#FF0000" d="M3.7,11.5v3.1h15.2v8.2H3.7v4h16.2v8.2H0V11.5H3.7z M25.8,11.5h16.2c6.9,0,10.6,3.6,10.6,8.6c0,5-3.8,8.8-10.6,8.8h-7.7v6.1h-8.5V11.5z M34.3,22.6h3c1.7,0,3.3-0.5,3.3-2.6c0-2-1.5-2.5-3.3-2.5h-3V22.6z M55.3,11.5h19.5v8.2h-11v3.2 h11v8.2h-11v4h-8.5V11.5z M79.2,11.5h8.5v15.2h12v8.2H79.2V11.5z"/>
                            </svg>
                        `
                    },
                    link: 'https://people.epfl.ch/bo-yu.yang?lang=en',
                    text: 'EPFL / School'
                }
            ]
        },

    },
})
