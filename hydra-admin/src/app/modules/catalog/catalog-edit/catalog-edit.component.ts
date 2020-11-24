import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import { ActionsToolbarConfig } from 'src/app/components/actions-toolbar/actions-toolbar-config';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableColumns, DataTable } from 'src/app/components/data-table/data-table-datasource';
import { MatDialog } from '@angular/material/dialog';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';

const CATEGORIES: string[] = [
  'Eletronics', 'TV', 'Computer', 'jewelry'
];

@Component({
  selector: 'app-catalog-edit',
  templateUrl: './catalog-edit.component.html',
  styleUrls: ['./catalog-edit.component.scss']
})

export class CatalogEditComponent implements OnInit {
  toolbarParameter: ActionsToolbarConfig;
  categoriesDatatable: DataTable = new DataTable();
  
  
  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute, 
              public dialog: MatDialog, 
              @Inject(DataTableComponent) public dataTable: DataTableComponent) {
    //this.categoriesDatatable.dataSource = [];//Array.from({length: 2}, (_, k) => getCategories(k + 1));
    this.createColumns();

   // this.categoriesSelect = [Array.from({length: 2}, (_, k) => getCategories(k + 1))];
   }

  ngOnInit(): void {
    this.configureToolbar();
  }

  configureToolbar(){
    this.toolbarParameter = new ActionsToolbarConfig(this.router, this.activatedRoute);
    this.toolbarParameter.backButton.isVisible = true;
    this.toolbarParameter.backButton.fn = this.onBack;
    this.toolbarParameter.saveButton.isVisible = true;
    this.toolbarParameter.newButton.isVisible = true;
    this.toolbarParameter.deleteButton.isVisible = true;
  }

  createColumns(){
    this.categoriesDatatable.columns = [ 
      new DataTableColumns('id', 'No', 'width: 10%'), 
      new DataTableColumns('name', 'Name', 'width: 80%'), 
      { columnDef: 'action', header: 'Actions', style: 'width: 100px;',
        actions: {
                  delete: {
                   // fn: this.editTest //'editTest()'
                  },
                  // style: 'width: 10%'
            }
      }
    ];
  }
  onBack(){
    this.router.navigate(['/catalog'], { queryParamsHandling: 'preserve'})

  }
}