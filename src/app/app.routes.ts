import { Routes } from '@angular/router';
import { Home } from './compontents/home/home';
import { About } from './compontents/about/about';
import { Contacts } from './compontents/contacts/contacts';
import { Portfolio } from './compontents/portfolio/portfolio';
import { Notfound } from './compontents/notfound/notfound';

export const routes: Routes = [
    {path:'',component:Home,title:'home'},
    {path:'home',component:Home,title:'home'},
    {path:'about',component:About,title:'about'},
    {path:'contact',component:Contacts,title:'contact'},
    {path:'portfolio',component:Portfolio,title:'portfolio'},
    {path:'**',component:Notfound,title:'404'}
];
