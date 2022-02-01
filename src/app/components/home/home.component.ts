import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'blue'">
      Hola mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');

  }

ngOnChanges(){
  console.log("OnChanges");
}
ngDoCheck(){
  console.log("DoCheck");
}
ngAfterContentInit(){
  console.log("AfterContentInit");
}
ngAfterContentChecked(){
  console.log("AfterContentChecked");
}
ngAfterViewChecked(){
  console.log("AfterViewChecked");
}
ngAfterViewInit(){
  console.log("AfterViewInit");
}
ngOnDestroy(){
  console.log("OnDestroy");
}

}
