import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth-service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public authService: AuthService,) { }
  images =[
    "assets/img/Nachalnik.png",
    "assets/img/Valodya.png",
    "assets/img/Zayolio.png"
  ];
  curImageIndex=0;
  curImage!: string;

  ngOnInit(): void {
    this.curImage = this.images[this.curImageIndex];
    setInterval(()=>{
      this.curImageIndex++;
      if(this.curImageIndex >= this.images.length){
        this.curImageIndex=0;
      }
      this.curImage = this.images[this.curImageIndex];
    },10000)
  }

}
