import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	DoCheck,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	ViewEncapsulation
} from '@angular/core';
import { IServer } from '@app-models';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.Emulated // None, ShadowDom
})
export class ServerElementComponent
	implements
		OnInit,
		OnChanges,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy
{
	@Input('srvElement') element!: IServer;
	@Input() name!: string;

	constructor() {
		console.log('constructor called');
	}

	ngOnInit(): void {
		console.log('ngOnInit called');
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges called');
		console.log(changes);
	}

	ngDoCheck() {
		console.log('ngDoCheck called');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit called');
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked called');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit called');
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy called');
	}
}
