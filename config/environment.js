
const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blacksomething',
    db:'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'bansal.pankaj.0786@gmail.com',
            pass: 'zyjquhltmlrnsmpd'
        },
        tls: {
            rejectUnauthorized: false
        }
    
    },
    google_client_id: "472624458359-jdl48kjalrtb612mlld3b3ab6t2epjnr.apps.googleusercontent.com",
    google_client_secret: "v__GjBgB9zuC3TyY1x-l_1lu",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
}

const production = {
    name: 'production',
    asset_path: process.env.ASSET_PATH,
    session_cookie_key: 'UdBbxMsRDeBbnYc44leLPjzYmAathwFj',
    db:'codeial_production',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'bansal.pankaj.0786@gmail.com',
            pass: 'zyjquhltmlrnsmpd'
        },
        tls: {
            rejectUnauthorized: false
        }
    
    },
    google_client_id: "472624458359-jdl48kjalrtb612mlld3b3ab6t2epjnr.apps.googleusercontent.com",
    google_client_secret: "v__GjBgB9zuC3TyY1x-l_1lu",
    google_call_back_url: "http://globalchat.com/users/auth/google/callback",
    jwt_secret: 'process.env.CODEIAL_JWT_SECRET',
}

module.exports = development;