import { Component, OnInit } from '@angular/core';
import { DataTable, DataTableColumns } from 'src/app/components/data-table/data-table-datasource';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';
import { DataSourceState } from 'src/app/components/data-table/store/models/data-source-state';
import { SharedStore } from 'src/app/store/shared-store';
import { CategoryModel } from 'src/app/models/category.model';
import { CatalogModel } from 'src/app/models/catalog-model';
import { SharedAction, TypeAction } from 'src/app/store/shared-action';
import { CategoryActionsType } from '../category/category-store';
import { CatalogActionsType } from '../catalog-store';

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

  constructor(public dataTableComponent: DataTableComponent, 
    private storeCatalog: SharedStore<DataSourceState<CatalogModel>>,
    private storeCategory: SharedStore<DataSourceState<CategoryModel>>) {
    this.users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.createColumns();
  // setTimeout(() =>  dataTableComponent.bind({name: 'alex'}), 5000 );

    //this.dataTable.dataSource = this.users;
  }
  ngOnInit(): void {
    this.storeCatalog.getStore((state: CatalogModel[] ) => state, (result: CatalogModel[]) => {
      console.log(result);
      });
  }

  editTest(element: any){
    alert('hi ' + element.name);
  }

  addTest(){
    let categoryObj: CategoryModel = new CategoryModel();
    categoryObj
    categoryObj.id = 1;
    categoryObj.name = "Category";
   
    let catalogObj: CatalogModel = new CatalogModel();
    catalogObj
    catalogObj.id = 1;
    catalogObj.name = "Catalog";
    catalogObj.categories = [categoryObj];

    this.storeCategory.dispatch(new SharedAction<CategoryModel>(CategoryActionsType.ADD_ITEM, TypeAction.add, categoryObj));
    this.storeCatalog.dispatch(new SharedAction<CatalogModel>(CatalogActionsType.ADD_ITEM, TypeAction.add, catalogObj));
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
