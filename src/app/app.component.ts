import { Component } from '@angular/core';
import { EServerType, IServer } from '@app-models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements: IServer[] = [
		{
			type: EServerType.SERVER,
			name: 'Test Server',
			content: 'My test server.'
		}
	];
}
