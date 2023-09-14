import { LeaguesService } from 'src/app/services/leagues.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player, Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.scss']
})
export class LeagueDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute, private leagueService: LeaguesService,private router: Router){}

  showTeams: boolean = true; // para decidir si mostrar equipos o jugadores
  detailLeague: Team[] = []
  leagueCode: string = ''
  leagueName: string | null = null;
  selectedPlayers: Player[] = [];

  ngOnInit(): void {
    this.getDetail();
    this.getleagueName();
  }

  getDetail(){
    this.route.params.subscribe(params => {
       this.leagueCode = params['leagueCode'] 
      if(this.leagueCode){
        this.leagueService.getLeagueDetails(this.leagueCode).subscribe(res => {
          this.detailLeague = res.teams;
        });
      }
    })
  }

  getleagueName(){
    this.leagueService.leagueName$.subscribe(name => {
      this.leagueName = name;
    });
  }

  seeScorers(){
    this.router.navigate(['/leagues', this.leagueCode,'top-scorers'])    
  }

  showPlayers(team: Team){
    this.selectedPlayers = team.squad
    this.showTeams = false; 
  }

  backToTeams(): void {
    this.showTeams = true;
  }
  
  

}
