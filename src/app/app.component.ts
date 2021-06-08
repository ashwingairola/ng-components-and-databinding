import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { EServerType, IServer, IServerAddData } from '@app-models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
	serverElements: IServer[] = [
		{
			type: EServerType.SERVER,
			name: 'Test Server',
			content: 'My test server.'
		},
		{
			content: 'Stuff',
			name: 'NewServer',
			type: EServerType.BLUEPRINT
		}
	];

	ngOnChanges(changes: SimpleChanges) {
		console.log('AppComponent ngOnChanges:', changes);
	}

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

	onChangeFirst() {
		// this.serverElements = [
		// 	...this.serverElements,
		// 	{
		// 		content: 'Stuff',
		// 		name: 'NewServer',
		// 		type: EServerType.BLUEPRINT
		// 	}
		// ];
		// this.serverElements.push({
		// 	content: 'Stuff',
		// 	name: 'NewServer',
		// 	type: EServerType.BLUEPRINT
		// });
		// this.serverElements[0] = {
		// 	...this.serverElements[0],
		// 	name: Math.random().toString()
		// };
		// this.serverElements[0].name = Math.random().toString();
		this.serverElements[0].name = 'Changed';
	}

	onDestroyFirst() {
		this.serverElements.splice(0, 1);
	}
}
