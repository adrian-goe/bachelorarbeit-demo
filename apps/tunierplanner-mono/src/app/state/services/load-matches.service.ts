import {HttpClient} from "@angular/common/http";
import {GroupMatch, TunierType} from "../types/tunier.type";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

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
