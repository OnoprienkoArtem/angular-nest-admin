import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SecureModule { }
