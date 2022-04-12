import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audiovideo',
  templateUrl: './audiovideo.component.html',
  styleUrls: ['./audiovideo.component.css']
})
export class AudiovideoComponent implements OnInit {
  public videoTag = document.getElementById("video");
  public cameraBtn =  document.getElementById("cameraButton");
  constructor() { 
    
  }

  ngOnInit(): void {
  
 
}
}
