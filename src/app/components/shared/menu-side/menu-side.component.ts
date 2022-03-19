import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent implements OnInit {

  menuList: any[] = [
    {name: 'Deal',
    icon: 'fa fa-table-columns'
  },
    {name: 'Feed',
    icon: 'fa-solid fa-square-poll-horizontal'
  },
    {name: 'stadistics',
    icon: 'fa-solid fa-chart-line'
  },
    {name: 'Teams',
    icon: 'fa-solid fa-people-group'
  },
    {name: 'Projects',
    icon: 'fa-solid fa-list-check'
  },
    {name: 'Settings',
    icon: 'fa-solid fa-gear'
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
