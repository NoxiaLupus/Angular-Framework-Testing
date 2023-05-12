import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AdditionComponent } from '../addition/addition.component';
import { SubtractionComponent } from '../subtraction/subtraction.component';
import { MultiplicationComponent } from '../multiplication/multiplication.component';
import { DivisionComponent } from '../division/division.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'start', component: AppComponent},
  { path: 'addition', component: AdditionComponent},
  { path: 'subtraction', component: SubtractionComponent},
  { path: 'multiplication', component: MultiplicationComponent},
  { path: 'division', component: DivisionComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
