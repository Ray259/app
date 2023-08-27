import HomePage from '~/pages/Home/Home'
import AboutPage from '~/pages/About'
import ProfilePage from '~/pages/Profile/Profile.js'



const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/profile', component: ProfilePage}
]


//Need to login
const privateRoutes = [

]

export {publicRoutes, privateRoutes}