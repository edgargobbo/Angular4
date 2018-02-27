import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
