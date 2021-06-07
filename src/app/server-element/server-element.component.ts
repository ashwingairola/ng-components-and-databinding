import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IServer } from '@app-models';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	encapsulation: ViewEncapsulation.Emulated // None, ShadowDom
})
export class ServerElementComponent implements OnInit {
	@Input('srvElement') element!: IServer;

	constructor() {}

	ngOnInit(): void {}
}
