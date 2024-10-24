import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'date-time',
    loadComponent: () => import('./pages/date-time/date-time.page').then( m => m.DateTimePage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./pages/fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'infinite',
    loadComponent: () => import('./pages/infinite/infinite.page').then( m => m.InfinitePage)
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input.page').then( m => m.InputPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'list-reorder',
    loadComponent: () => import('./pages/list-reorder/list-reorder.page').then( m => m.ListReorderPage)
  },
  {
    path: 'loading',
    loadComponent: () => import('./pages/loading/loading.page').then( m => m.LoadingPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'modal-info',
    loadComponent: () => import('./pages/modal-info/modal-info.page').then( m => m.ModalInfoPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'progress',
    loadComponent: () => import('./pages/progress/progress.page').then( m => m.ProgressPage)
  },
  {
    path: 'refresher',
    loadComponent: () => import('./pages/refresher/refresher.page').then( m => m.RefresherPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./pages/segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'swipper',
    loadComponent: () => import('./pages/swipper/swipper.page').then( m => m.SwipperPage)
  },
  {
    path:'tabs',
    redirectTo:'/tabs/account',
    pathMatch:'full'
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children:[
      {path:'account',
        loadComponent:()=>import('./pages/avatar/avatar.page').then(p=>p.AvatarPage)
      },
      {path:'contact',
      loadComponent:()=>import('./pages/list/list.page').then(p=>p.ListPage)
    },
    {path:'settings',
    loadComponent:()=>import('./pages/infinite/infinite.page').then(p=>p.InfinitePage)
  }
    ]
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast.page').then( m => m.ToastPage)
  },
];
