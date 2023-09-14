import { ActivatedRoute } from '@angular/router';
import { LeaguesService } from 'src/app/services/leagues.service';
import { Component, OnInit } from '@angular/core';
import { Scorer } from 'src/app/models/scorer.model';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.scss']
})
export class TopScorersComponent implements OnInit {

  leagueCode: string = '';
  scorers: Scorer[]= [];
  topScorer: Scorer | null = null;

  constructor(private leagueService: LeaguesService, private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.getScorers();
  }

  getScorers(){
    this.activateRoute.params.subscribe(param => {
      this.leagueCode = param['leagueCode']
      if (this.leagueCode){
        this.leagueService.getScorers(this.leagueCode).subscribe(data =>{
          this.scorers = data.scorers;
           
          this.topScorer = this.scorers.reduce((prev, current) => {
            return (prev.goals > current.goals) ? prev : current;
          });

        });
      }

    });
    
  }
}
