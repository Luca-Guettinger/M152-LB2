import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: [
    './title.component.scss',
    '../../styles/basic-styles.scss',
    '../../styles/basic-animations.scss',
  ]
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
