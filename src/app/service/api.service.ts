import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../model/stats.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://rocket-league1.p.rapidapi.com/ranks/";

  constructor(private httpClient: HttpClient) {
  }

  getPlayerRank(playerName: string): Observable<ApiResponse> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Host', ' localhost:4200')
      .set('X-RapidAPI-Key', '3c91812724msh74b9e871bf23c87p1694ebjsnc434e117a63b');
    return this.httpClient.get<ApiResponse>(this.baseUrl + playerName, {'headers': headers})
  }

}
