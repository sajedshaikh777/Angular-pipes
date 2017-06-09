import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { AppComponent } from './app.component';

const routes: Route[] = [
	// { path: "", component: HomeComponent },
	{ path: "home/:id", component: HomeComponent },
	{ path: "about", component: AboutComponent }
]

export const RoutesProvider = RouterModule.forRoot(routes);