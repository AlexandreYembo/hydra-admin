import { Component, OnInit } from '@angular/core';
import { DataTable, DataTableColumns } from 'src/app/components/data-table/data-table-datasource';
import { Router, ActivatedRoute } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
      new DataTableColumns('id', 'No', 'width: 10%'), 
      new DataTableColumns('name', 'Name', 'width: 40%'), 
      new DataTableColumns('progress', 'My Progress', 'width: 10%'),
      new DataTableColumns('color', 'My Color', 'width: 10%'), 
     
      { columnDef: 'action', header: 'Actions', style: 'width: 80px;',
        actions: {
                  edit: {
                          fn: this.editTest //'editTest()'
                  },
                  delete: {
                    fn: this.editTest //'editTest()'
                  },
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
