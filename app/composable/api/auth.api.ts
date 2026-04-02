export default class authApi {
        register = {
            path: '/auth/register',
            body: {
                login: String,
                nickname: String,
                email: String,
                password: String,
            },
            settings: {
                headers: {
                    "Content-Type": "application/json"
                },
                credential: 'include' 
            }
        }
        
        login = {
            path: '/auth/login',
            body: {
                login: String,
                password: String
            },
            settings: {
                headers: {
                    "Content-Type": "application/json"
                },
                credential: 'include' 
            }
        }

        refresh = {
            path: "/auth/refresh",
            settings: {
                credential: 'include'
            }
        }

        lofout = {
            path: "/auth/logout",
            settings: {
                credential: 'include'
            }
        }
}