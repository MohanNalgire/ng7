const PROXY_CONFIG = [
    {
        context: [
            '/api/v1/diffrence',
            '/api/v1/logger',
            '/api/v1/users',
            '/api/v1/questions',
            '/api/v1/technologies',
            '/api/v1/votes',
            '/api/v1/answers',
            '/api/v1/headerMenu',
            '/api/v1/tickets',
            '/api/v1/owners',
            '/api/v1/environments',
            '/api/v1/pageMetaTags'
        ],
        target: "http://localhost:3000",
        secure: false,
        changeOrigin:true,
        logLevel:debug
    }
]

module.exports = PROXY_CONFIG;
