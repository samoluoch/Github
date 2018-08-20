import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { SamsoluochComponent } from './samsoluoch/samsoluoch.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import {RouterModule, Routes} from '@angular/router';
import { GithubService } from './repository/github.service';

const routes: Routes = [
  {path: 'github', component: GithubComponent},
  {path: 'samsoluoch', component: SamsoluochComponent},
  {path: 'github-form', component: GithubFormComponent},
  {path: 'users' , component: UsersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubFormComponent,
    SamsoluochComponent,
    UsersComponent,
    DateCountPipe,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
