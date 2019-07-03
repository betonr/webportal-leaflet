export default [
  {
    path: '/',
    component: () => import('./layouts/Navigation/Navigation.vue'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('./components/Home/Home.vue')
      }
    ]
  }
]
