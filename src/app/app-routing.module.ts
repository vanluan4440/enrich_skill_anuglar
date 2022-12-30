import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { HomeComponent } from './page/home/home/home.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { MyLibaryComponent } from './components/my-libary/my-libary.component';
import { PlayListComponent } from './components/play-list/play-list.component';
import { SearchComponent } from './components/search/search.component';
import { AblumComponent } from './components/ablum/ablum.component';
import { ArtistsComponent } from './components/artists/artists.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DiscoverComponent, title: 'Home' },
      { path: 'discover', component: DiscoverComponent, title: 'Discover' },
      {
        path: 'libary',
        component: MyLibaryComponent,
        title: 'Libary'
      },
      {
        path: 'search',
        component: SearchComponent,
        title: 'Search'
      },
      {
        path: 'album',
        component: AblumComponent,
        title: 'Album'
      },
      {
        path: 'artists',
        component: ArtistsComponent,
        title: 'Artists'
      },
      {
        path: ':type/:id',
        component: PlayListComponent,
        title: 'Play List'
      },

    ],
    canActivate: [AuthGuardGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
