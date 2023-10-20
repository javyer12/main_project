//middleware para comprobar la autenticacion del usuario

export {default} from 'next-auth/middleware';

 export const config = {matcher: ["/dashboard"]}

 