import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueListComponent } from './leagues-dashboard/league-list/league-list.component';
import { LeagueDetailComponent } from './leagues-dashboard/league-detail/league-detail.component';
import { TopScorersComponent } from './leagues-dashboard/league-detail/top-scorers/top-scorers.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'leagues',
    pathMatch: 'full'
  },
  {
    path: 'leagues',
    component: LeagueListComponent
  },
  {
    path: 'leagues/:leagueCode',
    component: LeagueDetailComponent,
    // children: [   
    //   {
    //     path: 'top-scorers',
    //     component: TopScorersComponent       
    //   }
     
    // ]
  },
  {
    path: 'leagues/:leagueCode/top-scorers',
    component: TopScorersComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
