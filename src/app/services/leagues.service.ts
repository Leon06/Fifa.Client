import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environments';
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { Competition } from '../models/competition.model';
import { Team } from '../models/team.model';
import { Scorer } from '../models/scorer.model';


@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private readonly baseUrl = environment.baseUrl;
  private leagueNameSubject = new BehaviorSubject<string | null>(null);
  leagueName$ = this.leagueNameSubject.asObservable();

  constructor(private http: HttpClient) { }
  
  
  getAllLeagues(): Observable <{competitions: Competition[]}>{   
    const header = new HttpHeaders().set('X-Auth-Token', environment.apiToken)
    return this.http.get<{competitions: Competition[]}>(`${this.baseUrl}/competitions/`,{headers: header});
  }

  getLeagueDetails(leagueCode: string): Observable<{teams: Team[]}> {     
    const header = new HttpHeaders().set('X-Auth-Token', environment.apiToken)
    return this.http.get<{teams: Team[]}>(`${this.baseUrl}/competitions/${leagueCode}/teams`,{headers:header});
  }  

  getScorers(leagueCode: string):Observable<{scorers: Scorer[]}>{
    const header = new HttpHeaders().set('X-Auth-Token', environment.apiToken)
    return this.http.get<{scorers: Scorer[]}>(`${this.baseUrl}/competitions/${leagueCode}/scorers`,{headers:header})

  }

  setLeagueName(name: string) {
    this.leagueNameSubject.next(name);
  }
  
}
