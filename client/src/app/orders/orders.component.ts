import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DynamicFormService, DynamicFormControlModel } from "@ng-dynamic-forms/core";
import { TASK_LIST } from "./orders.model";


@Component({
  moduleId: module.id,
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  formModel: DynamicFormControlModel[] = TASK_LIST;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
      this.formGroup = this.formService.createFormGroup(this.formModel);
  }

 
}
