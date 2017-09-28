import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogDetailComponent } from './catalog/catalog-detail.component';

import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import {DialogModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { OrdersComponent } from './orders/orders.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReactiveFormsModule, NG_VALIDATORS } from "@angular/forms";
import { DynamicFormsPrimeNGUIModule } from "@ng-dynamic-forms/ui-primeng";
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";



@NgModule({
  declarations: [
    AppComponent,
    CatalogDetailComponent,
   
    OrdersComponent,
    TasksComponent
         
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    DialogModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsPrimeNGUIModule,
    RouterModule.forRoot([
      { path: 'catalog', component: CatalogDetailComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'orders', component: OrdersComponent },
      { path: '', redirectTo: 'catalog', pathMatch:'full' }

      
    ])
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
