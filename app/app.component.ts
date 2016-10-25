// Import Angular2 modules here
import { Component } from '@angular/core';

// Import components here
// import {  } from 'module';

// Import Services here
// import {  } from 'module';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard">Dashboard</a>
			<a routerLink="/heroes">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
		`
})
export class AppComponent {
	title = 'Tour of Heroes';
}
