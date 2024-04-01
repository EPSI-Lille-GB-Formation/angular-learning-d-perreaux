import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageEditorComponent } from './components/page/page-editor.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PageEditorComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
})
export class AppModule { }

