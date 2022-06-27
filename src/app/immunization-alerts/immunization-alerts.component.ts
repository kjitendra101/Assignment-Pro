
import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/service/dataservice';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-immunization-alerts',
  templateUrl: './immunization-alerts.component.html',
  styleUrls: ['./immunization-alerts.component.sass']
})

export class ImmunizationAlertsComponent implements OnInit {
  datas: any;
  immuForm: any = FormGroup;
  selectedValues: string[] = ["val1"];
  constructor(private DateService: DateService, private fb: FormBuilder) {
    this.immuForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      webReference: ['', Validators.required],
      delete: [false]
    })
  }

  ngOnInit(): void {
    this.DateService.getData().then(data => this.datas = data.map(d => { return { ...d, delete: false } }));
  }

  addData(): void {
    this.datas.push({ ...this.immuForm.value, id: this.datas.length + 1 });
    this.reset()
  }


  reset() {
    this.immuForm.reset();
  }

  removeItem() {
    this.datas.forEach((data: any, index: number) => {
      if (data.delete) {
        this.datas.splice(index, 1);
        this.removeItem()
      }
    })
  }

  checkboxChange(d: any) {
    const objIndex = this.datas.findIndex(((obj: { id: number; }) => obj.id == d.id));
    this.datas[objIndex].delete = !this.datas[objIndex].delete;
  }

}

function value(value: any, arg1: (index: any) => void) {
  throw new Error('Function not implemented.');
}

