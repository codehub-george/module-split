import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ShortenTextDirective } from './shorten-text.directive';
import { BoldHoverDirective } from './bold-hover.directive';
import { TrimmerDirective } from './trimmer.directive';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ShortenTextDirective,
    BoldHoverDirective,
    TrimmerDirective,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
