import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';
import { LeaguesService } from 'src/app/services/leagues.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit{

  constructor(private leagueService: LeaguesService, private router: Router){}

  private destroy$ = new Subject<void>();
  leagues: Competition[] = []

  ngOnInit(): void{
    this.getLeagues();
  }

  getLeagues(){    
    this.leagueService.getAllLeagues()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {     
      this.leagues = data.competitions;      
    });
  }


  onLeagueClick(leagueCode: string | null, leagueName: string) {
    this.leagueService.setLeagueName(leagueName)    
    this.router.navigate(['/leagues', leagueCode]) 
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  

}
