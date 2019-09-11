import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../../shared/services/youtube.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any[];
  error = '';

  constructor(private youTubeService: YoutubeService) { }


  ngOnInit() {
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UCJTaes-TMoSxPZxxJF_seGw', 30)
      .subscribe((list) => {
        for (let element of list["items"]) {
          this.videos.push(element)
        }
      }, (error => {
        this.error = error.message;
      }));
  }
}
