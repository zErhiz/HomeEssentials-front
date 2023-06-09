import { createAction } from "@reduxjs/toolkit"

const SaveUserLogin = createAction (
    'user_login', //nombre de la acción
    (object) => { //función que va a enviar datos al reductor
        return { //el objeto debe tener todas las propiedades a guardarse en el estado global
            payload: {
                token: object.token,
                user: object.user
            }
        }
    }
)
const actions = {SaveUserLogin}
export default actions