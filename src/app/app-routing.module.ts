import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { SearchListComponent } from './components/search-list/search-list.component';
import { MapListComponent } from './components/map-list/map-list.component';
import { FlatmatesComponent } from './components/flatmates/flatmates.component';
import { House1Component } from './components/houses/house1/house1.component';
import { House2Component } from './components/houses/house2/house2.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'searchlist', component: SearchListComponent
  },
  {
    path: 'maplist', component: MapListComponent
  },
  {
    path: 'flatmates', component: FlatmatesComponent
  },
  {
    path: 'house1', component: House1Component
  },
  {
    path: 'house2', component: House2Component
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
