import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/alert',
    name: 'alert',
    component: () => import('../views/AlertView.vue')
  },
  {
    path: '/aspect',
    name: 'aspect',
    component: () => import('../views/AspectView.vue')
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: () => import('../views/AvatarView.vue')
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import('../views/BadgeView.vue')
  },
  {
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import('../views/BreadcrumbView.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/ButtonView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/CalendarView.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('../views/CardView.vue')
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('../views/CarouselView.vue')
  },
  {
    path: '/collapse',
    name: 'collapse',
    component: () => import('../views/CollapseView.vue')
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: () => import('../views/DropdownView.vue')
  },
  {
    path: '/embeded',
    name: 'embeded',
    component: () => import('../views/EmbededView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/FormView.vue')
  },
  {
    path: '/formcustom',
    name: 'formcustom',
    component: () => import('../views/FormCustomView.vue')
  },
  {
    path: '/jumbotron',
    name: 'jumbotron',
    component: () => import('../views/JumbotronView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/MediaView.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('../views/ModalView.vue')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../views/NavView.vue')
  },
  {
    path: '/overlay',
    name: 'overlay',
    component: () => import('../views/OverlayView.vue')
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import('../views/PaginationView.vue')
  },
  {
    path: '/popover',
    name: 'popover',
    component: () => import('../views/PopoverView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
