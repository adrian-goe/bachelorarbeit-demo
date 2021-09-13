import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../types/team.type";

@Injectable({
  providedIn: 'root'
})
export class LoadTeamsService {

  constructor(private http: HttpClient) {
  }

  loadTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:3333/api/teams')
  }
}
