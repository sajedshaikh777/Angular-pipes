import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomHighlightDirective } from './custom-highlight.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RoutesProvider } from './app.routes';
import { LearnpipesComponent } from './learnpipes/learnpipes.component';
import { EllipsesPipe } from './ellipses.pipe';
import { SortPipe } from './sort.pipe';
import { AmountPipe } from './amount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomHighlightDirective,
    HomeComponent,
    AboutComponent,
    LearnpipesComponent,
    EllipsesPipe,
    SortPipe,
    AmountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
