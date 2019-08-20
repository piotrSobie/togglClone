import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(public http: HttpClient) { }

  getVideosForChanel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' +
      environment.apiKey +
      '&channelId=' +
      channel +
      '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;

    return this.http.get(url)
      .pipe(map((res) => {
        console.log(res);
        return res;
      }))
  }
}
