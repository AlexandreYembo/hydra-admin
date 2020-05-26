import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import { ActionsToolbarConfig } from 'src/app/components/actions-toolbar/actions-toolbar-config';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableColumns, DataTable } from 'src/app/components/data-table/data-table-datasource';
import { CategoryComponent } from '../category/category.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/modules/catalog/category.service';
import { CategoryModel } from 'src/app/models/category.model';
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
  categoriesSelect: CategoryModel[] = [];
  
  
  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute, 
              public dialog: MatDialog, 
              public categoryService: CategoryService,
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryComponent, {
      width: '250px',
      data: {name: 'TV', id: 1}
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.categoriesDatatable.dataSource = new Array.from({length: 2}, (_, k) => getCategories(k + 1))//this.categoryService.getList();
      //this.createColumns();
      this.categoriesSelect = this.categoryService.getList();
    });
  }

  onBack(){
    this.router.navigate(['/catalog'], { queryParamsHandling: 'preserve'})

  }
}
function getCategories(id: number): CategoryModel{
  const name = CATEGORIES[Math.round(Math.random() * (CATEGORIES.length - 1))] + ' ' +
  CATEGORIES[Math.round(Math.random() * (CATEGORIES.length - 1))].charAt(0) + '.';

  return {
    id: id,
    name: name
  };
}