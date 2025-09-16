import { Component, Input } from '@angular/core';
import { Creditur } from '../interface/creditur';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: Creditur[] = []
  @Input() tableName: string = ''
}
