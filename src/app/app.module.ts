import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubApiService } from './shared/github-api.service';
import { GithubSearchRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    GithubSearchRoutingModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
