import { Component, ViewChild } from '@angular/core'
import { ChildComponent } from './child.component'
@Component({
  selector: 'app-parent',
  template:
  // cách 1: sử dụng template variable #child
  // <button (click)="child.value = child.value + 1">Add for child</button>
  // <app-child #child></app-child>
  // cách 2: sử dụng ViewChild
  `
    <button (click)="onAddForChild()">Add for child</button>
    <app-child></app-child>
  `
})

export class ParentComponent {
  @ViewChild(ChildComponent)
  myChild: ChildComponent;

  onAddForChild(){
    this.myChild.value++;
  }

}
