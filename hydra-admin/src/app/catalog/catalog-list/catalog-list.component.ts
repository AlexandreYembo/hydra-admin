import { Component, OnInit } from '@angular/core';
import { CatalogModel } from 'src/app/models/catalog-model';
import { DataTable, DataTableColumns } from 'src/app/shared/components/data-table/data-table-datasource';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  catalog: CatalogModel[];
  dataTable: DataTable = new DataTable();

  constructor(public dataTableComponent: DataTableComponent, 
    private catalogService: CatalogService) {
  }
  ngOnInit(): void {
    this.dataTable.dataSource = this.catalogService.getProducts();
    this.createColumns();
  }

  editTest(element: any){
    alert('hi ' + element.name);
  }

  createColumns(): void{
    this.dataTable.columns = [ 
      new DataTableColumns('name', 'Name', 'width: 40%'), 
      new DataTableColumns('qty', 'Qty', 'width: 10%'),
      new DataTableColumns('price', 'Price', 'width: 10%'), 
     
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