import {
	Component,
	ElementRef,
	EventEmitter,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { IServerAddData } from '@app-models';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	// newServerName = '';
	// newServerContent = '';
	@Output() serverCreated = new EventEmitter<IServerAddData>();
	@Output('bpCreated') blueprintCreated = new EventEmitter<IServerAddData>();
	@ViewChild('serverContentInput')
	serverContentInput!: ElementRef<HTMLInputElement>;

	constructor() {}

	ngOnInit(): void {}

	onAddServer(nameInput: HTMLInputElement) {
		this.serverCreated.emit({
			serverContent: this.serverContentInput.nativeElement.value,
			serverName: nameInput.value
		});
	}

	onAddBlueprint(nameInput: HTMLInputElement) {
		this.blueprintCreated.emit({
			serverContent: this.serverContentInput.nativeElement.value,
			serverName: nameInput.value
		});
	}
}
