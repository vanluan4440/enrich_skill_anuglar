import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home/home.component';
import { AuthInterceptorService } from './services/auth/auth.service';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { ContentMenuComponent } from './components/content-menu/content-menu.component';
import { BodyMenuComponent } from './components/body-menu/body-menu.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { MyLibaryComponent } from './components/my-libary/my-libary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CdkTreeModule } from '@angular/cdk/tree';
import {MatIconModule} from '@angular/material/icon';
import { PlayListComponent } from './components/play-list/play-list.component';
import { SearchComponent } from './components/search/search.component';
import { AblumComponent } from './components/ablum/ablum.component';
import { ArtistsComponent } from './components/artists/artists.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    HeaderMenuComponent,
    ContentMenuComponent,
    BodyMenuComponent,
    DiscoverComponent,
    MyLibaryComponent,
    PlayListComponent,
    SearchComponent,
    AblumComponent,
    ArtistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CdkTreeModule,
    MatIconModule
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
