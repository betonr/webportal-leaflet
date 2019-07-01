
export default [
  {
    path: '/',
    component: () => import('./layouts/Navigation.vue'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('./pages/Home.vue')
      }
    ]
  }
]
