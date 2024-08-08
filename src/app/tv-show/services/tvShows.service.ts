import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {


  private readonly url: string = `https://localhost:7012/api/TvShows`

  constructor(private http: HttpClient) { }

  //Method to get the tvShows from the API
  getTvShows(){
    return this.http.get(this.url)
  }

  postTvShows(body: any):Observable<any>{
    return this.http.post(this.url, body);
  }

  deleteTvShow(id: number){
    const url = `${this.url}/${id}`
    return this.http.delete(url);
  }

  putTvShow(id: number, body: any){
    const url = `${this.url}/${id}`;

    return this.http.put(url, body)
  }

}
