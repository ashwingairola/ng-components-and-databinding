import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	DoCheck,
	ElementRef,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	ViewChild,
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
	@ViewChild('heading', { static: true }) heading!: ElementRef<HTMLDivElement>;

	constructor() {
		console.log('constructor called');
	}

	ngOnInit(): void {
		console.log('ngOnInit called');
		console.log('Text content:', this.heading.nativeElement.textContent);
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
		console.log('Text content:', this.heading.nativeElement.textContent);
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy called');
	}
}
