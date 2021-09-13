import {HttpClient} from "@angular/common/http";
import {TunierType} from "../types/tunier.type";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoadTunierService {
  constructor(private http: HttpClient) {
  }

  public loadTunier(): Observable<TunierType> {
    return this.http.get<TunierType>('http://localhost:3333/api/tunier')

  }
}
