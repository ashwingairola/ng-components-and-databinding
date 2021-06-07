import { Component, Input, OnInit } from '@angular/core';
import { IServer } from '@app-models';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
	@Input() element!: IServer;

	constructor() {}

	ngOnInit(): void {}
}
