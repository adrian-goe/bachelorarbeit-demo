import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GroupMatch} from "../types/group-match.type";

@Injectable({
  providedIn: 'root'
})
export class LoadMatchesService {

  constructor(private http: HttpClient) {
  }

  public loadMatches(): Observable<GroupMatch[]> {
    return this.http.get<GroupMatch[]>('http://localhost:3333/api/matches')

  }
}
