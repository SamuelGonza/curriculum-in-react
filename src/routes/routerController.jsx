import Home from '../pages/HomeP'
import Resume from '../pages/Resume'

const rutas = [
    {path: '/', component: Home},
    {path: '/Home', component: Home, exact: true},
    {path: '*', component: Home},

    
    {path: '/resume', component: Resume}
]

export default rutas;