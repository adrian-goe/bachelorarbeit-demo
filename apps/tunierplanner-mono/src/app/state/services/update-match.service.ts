import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GroupMatch} from "../types/tunier.type";

@Injectable({
  providedIn: 'root'
})
export class UpdateMatchService {
  constructor(private http: HttpClient) {
  }

  public updateMatch(match: GroupMatch): Observable<any> {
    return this.http.post('http://localhost:3333/api/tunier/match', match)

  }
}
