import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent implements OnInit {

  menuList: any[] = [
    {name: 'Deal',
    icon: 'fa fa-table-columns',
    route: 'deal'
  },
    {name: 'Feed',
    icon: 'fa-solid fa-square-poll-horizontal',
    route: 'feed'
  },
    {name: 'Stadistics',
    icon: 'fa-solid fa-chart-line',
    route: 'stadistics'
  },
    {name: 'Teams',
    icon: 'fa-solid fa-people-group',
    route: 'teams'
  },
    {name: 'Projects',
    icon: 'fa-solid fa-list-check',
    route: 'projects'
  },
    {name: 'Settings',
    icon: 'fa-solid fa-gear',
    route: 'settings'
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
