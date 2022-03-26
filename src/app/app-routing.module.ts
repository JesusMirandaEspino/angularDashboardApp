import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealDashboardComponent } from './components/pages/deal-dashboard/deal-dashboard.component';
import { FeedComponent } from './components/pages/feed/feed.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { StadisticsComponent } from './components/pages/stadistics/stadistics.component';
import { TeamsComponent } from './components/pages/teams/teams.component';

const routes: Routes = [
  {
    path: 'deal',
    component: DealDashboardComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'stadistics',
    component: StadisticsComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  { path: '**', redirectTo: 'deal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
