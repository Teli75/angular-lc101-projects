import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }
  favLinks = ['https://education.launchcode.org/intro-to-professional-web-dev/', 'https://education.launchcode.org/csharp-web-development/'];
  ngOnInit() {
  }

}
