import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './shared/table/table.component';
import { Creditur } from './shared/interface/creditur';
import { FormComponent } from './shared/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'day-3-angular';
  crediturList: Creditur[] = [
    {
      name: 'Andi',
      age: 25,
      occupation: 'Karyawan',
      dp: 6000000,
      price: 18000000,
      salary: 3500000,
    },
    {
      name: 'Budi',
      age: 19,
      occupation: 'Pelajar',
      dp: 4000000,
      price: 16000000,
      salary: 5000000,
    },
    {
      name: 'Citra',
      age: 33,
      occupation: 'Wiraswasta',
      dp: 8000000,
      price: 20000000,
      salary: 2000000,
    },
  ];

  approvedCrediturList: Creditur[] = [];

  ngOnInit(): void {
    this.populateApprovedCreditur();
  }

  onDataSubmit(data: Creditur) {
    this.crediturList.push(data);
    this.populateApprovedCreditur();
  }

  populateApprovedCreditur(){
    this.approvedCrediturList = this.crediturList.filter(creditur => creditur.age > 21 && creditur.age < 55 && creditur.salary > 3_000_000);
  }
}
