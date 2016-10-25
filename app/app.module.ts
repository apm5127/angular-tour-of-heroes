// Import Angular2 modules here
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Import components here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

// Import Services here
import { HeroService } from './hero.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroesComponent,
		HeroDetailComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }