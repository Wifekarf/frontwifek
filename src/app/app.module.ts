import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { ChambreListComponent } from './componed/chambre-list/chambre-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChambreListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule, // Add CommonModule here
    RouterModule.forRoot([]), // Add RouterModule with an empty array for now
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
