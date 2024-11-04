import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { HeaderComponent } from './header/header.component';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [    
    FieldComponent,
    HeaderComponent,
    ButtonSaveComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FieldComponent,
    HeaderComponent,
    ButtonSaveComponent,
    ButtonsComponent
  ]
})
export class SharedModule { }
