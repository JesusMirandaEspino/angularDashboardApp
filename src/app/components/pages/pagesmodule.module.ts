import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealDashboardComponent } from './deal-dashboard/deal-dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamsComponent } from './teams/teams.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  declarations: [
    DealDashboardComponent,
    ProjectsComponent,
    TeamsComponent,
    StadisticsComponent,
    SettingsComponent,
    FeedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesmoduleModule { }
