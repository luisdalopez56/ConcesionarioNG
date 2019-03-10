import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { AlertModule } from 'ngx-bootstrap';
const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarComponent,
    data: { title: 'Car List' }
  },
  {
    path: 'cars-details/:id',
    component: CarDetailComponent,
    data: { title: 'Car Details' }
  },
  {
    path: 'car-add',
    component: CarAddComponent,
    data: { title: 'Car Add' }
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent,
    data: { title: 'Car Edit' }
  },
  { path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent,
    CarDetailComponent,
    CarEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


