export default {
    path: '/auth',
    name: 'AuthLayout',
    component: () => {
        return import('@/layouts/AuthLayout')
    },
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => {
          return import('@/pages/auth/login')
        },
      },
      {
        path: 'register',
        name: 'Register',
        component: () => {
          return import('@/pages/auth/register')
        },
      },
    ]
}
