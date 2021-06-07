import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IServerAddData } from '@app-models';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	newServerName = '';
	newServerContent = '';

	@Output() serverCreated = new EventEmitter<IServerAddData>();
	@Output() blueprintCreated = new EventEmitter<IServerAddData>();

	constructor() {}

	ngOnInit(): void {}

	onAddServer() {
		this.serverCreated.emit({
			serverContent: this.newServerContent,
			serverName: this.newServerName
		});
	}

	onAddBlueprint() {
		this.blueprintCreated.emit({
			serverContent: this.newServerContent,
			serverName: this.newServerName
		});
	}
}
