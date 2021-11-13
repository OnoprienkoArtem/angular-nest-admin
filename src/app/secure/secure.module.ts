import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { SecureComponent } from './secure.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [SecureComponent]
})
export class SecureModule { }
