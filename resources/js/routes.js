import Home from './components/Home';
import About from './components/About';

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home,
            name: 'index'
        },

        {
            path: '/about',
            component: About,
            name: 'about'
        },

    ]
};
