import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { SamsoluochComponent } from './samsoluoch/samsoluoch.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubFormComponent,
    SamsoluochComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
