import VueRouter from 'vue-router'
import vMainWrapper from './components/v-main-wrapper'
import vProduct from './components/v-product'
import vMobile from './components/v-mobile'
import vCrm from './components/v-crm'
import vBots from './components/v-bots'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: vMainWrapper

        },
        {
            path: '/good',
            component: vProduct,
            name: 'good',

        },
        {
            path: '/mobile',
            component: vMobile,
            name: 'mobile',

        },
        {
            path: '/crm',
            component: vCrm,
            name: 'crm',
        },
        {
            path: '/bots',
            component: vBots,
            name: 'bots',
        },
    ],
    mode: 'history'
})