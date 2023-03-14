import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  ImagePath: string;

  constructor() {
    this.ImagePath = './assets/logo.jpg';
  }

  ngOnInit() {}
}
