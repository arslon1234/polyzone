export default {
  path: '/',
  name: 'DefaultLayout',
  component: () => {
    return import('@/layouts/DefaultLayout')
  },
  // meta: {
  //   requiresAuth: true,
  // },
  redirect: '/home',
  children: [
    {
      path: '/',
      name: 'home',
      component: () => {
        return import('@/pages/home')
      },
    },
    {
      path: 'contact',
      name: 'contact',
      component: () => {
        return import ('@/pages/contact')
      },
    },
    {
      path: 'authors',
      name: 'authors',
      component: () => {
        return import ('@/pages/authors')
      },
    },
    {
      path: 'about',
      name: 'about',
      component: () => {
        return import ('@/pages/about')
      },
    },
    {
      path: 'shopping_cart',
      name: 'shopping_cart',
      component: () => {
        return import ('@/pages/shopping-cart')
      },
    },
    {
      path: 'privacy-policy',
      name: 'privacy-policy',
      component: () => {
        return import ('@/pages/privacy-policy')
      },
    },
    {
      path: '404',
      name: '404',
      component: () => {
        return import('@/pages/error/404')
      },
    },
    {
      path: '*',
      name: 'not_page',
      redirect: '/404'
    }
  ]
}
