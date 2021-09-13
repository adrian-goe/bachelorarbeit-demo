import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TunierType} from "../types/tunier.type";

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
