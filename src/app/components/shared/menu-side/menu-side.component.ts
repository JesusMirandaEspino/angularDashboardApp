import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent implements OnInit {

  menuList: string[] = [
    'Deal',
    'Feed',
    'stadistics',
    'Teams',
    'Projects',
    'Settings',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
