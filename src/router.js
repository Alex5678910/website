import VueRouter from 'vue-router'
import vMainWrapper from './components/v-main-wrapper'
import vProduct from './components/v-product'
import vMobile from './components/v-mobile'
import vCrm from './components/v-crm'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: vMainWrapper
        },
        {
            path: '/good',
            component: vProduct
        },
        {
            path: '/mobile',
            component: vMobile
        },
        {
            path: '/crm',
            component: vCrm
        },
    ],
    mode: 'history'
})