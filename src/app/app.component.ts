import { Component } from '@angular/core';
import { EServerType, IServer, IServerAddData } from '@app-models';

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

	onServerAdded(serverData: IServerAddData) {
		this.serverElements.push({
			type: EServerType.SERVER,
			name: serverData.serverName,
			content: serverData.serverContent
		});
	}

	onBlueprintAdded(serverData: IServerAddData) {
		this.serverElements.push({
			type: EServerType.BLUEPRINT,
			name: serverData.serverName,
			content: serverData.serverContent
		});
	}
}
