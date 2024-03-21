import { Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import HomeComponent from './components/home/home.component';
import HospitalComponent from './components/hospital/hospital.component';
import HospitalFormComponent from './components/hospital-form/hospital-form.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'create',
        component: HospitalFormComponent,
        data: { title: 'Registrar nuevo hospital', flujo: 'create' }
      },
      {
        path:'update',
        component: HospitalFormComponent,
        data: { title: 'Modificar hospital', flujo: 'update'  }
      },
      {
        path:'search',
        component: HospitalComponent
      },
    ],
  },
  // {
  //   path: 'hospital',
  //   loadComponent: () => import('./components/hospital/hospital.component'),
  // },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
