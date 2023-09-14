import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesDashboardComponent } from './leagues-dashboard/leagues-dashboard.component';
import { LeagueListComponent } from './leagues-dashboard/league-list/league-list.component';
import { LeagueDetailComponent } from './leagues-dashboard/league-detail/league-detail.component';
import { TopScorersComponent } from './leagues-dashboard/league-detail/top-scorers/top-scorers.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesDashboardComponent,
    LeagueListComponent,
    LeagueDetailComponent,
    TopScorersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
