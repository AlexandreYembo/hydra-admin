import { Component, OnInit } from '@angular/core';
import { DataTable, DataTableColumns } from 'src/app/components/data-table/data-table-datasource';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

// export interface DataTable {
//   dataSource: UserData[],
//   columns: ['id', 'name', 'progress', 'color'],
//   display: ['Id', 'Name', 'My Progress', 'My Color']
// }

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  users: UserData[];
  dataTable: DataTable = new DataTable();
  columns: DataTableColumns[]; //= ['id', 'name', 'progress', 'color'];

  constructor() {
    this.users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.createColumns();
    this.dataTable.dataSource = this.users;
  }
  ngOnInit(): void {
  }

  editTest(element: any){
    alert('hi ' + element.name);
  }

  createColumns(): void{
    this.dataTable.columns = [ 
      new DataTableColumns('id', 'No'), 
      new DataTableColumns('name', 'Name'), 
      new DataTableColumns('progress', 'My Progress'), 
      new DataTableColumns('color', 'My Color'), 
     
      { columnDef: 'action', header: 'Actions', 
        actions: {
                  edit: {
                          fn: this.editTest //'editTest()'
                  },
                  delete: {
                    fn: this.editTest //'editTest()'
                  },
                  style: 'width: 100px'
            }
      }
    ];
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
