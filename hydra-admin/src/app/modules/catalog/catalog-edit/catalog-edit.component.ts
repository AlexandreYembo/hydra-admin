import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import { ActionsToolbarConfig } from 'src/app/components/actions-toolbar/actions-toolbar-config';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableColumns, DataTable } from 'src/app/components/data-table/data-table-datasource';
import { CategoryComponent } from '../category/category.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/modules/catalog/category.service';
import { CategoryModel } from 'src/app/models/category.model';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  productForm: FormGroup;


  // {
  //   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "categoryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "name": "string",
  //   "description": "string",
  //   "active": true,
  //   "price": 0,
  //   "createdDate": "2020-11-15T13:59:12.609Z",
  //   "image": "string",
  //   "qty": 0,
  //   "height": 0,
  //   "width": 0,
  //   "length": 0,
  //   "category": {
  //     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "name": "string",
  //     "code": 0
  //   }
  // }


  
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
    this.configureForm();
  }

  configureToolbar(){
    this.toolbarParameter = new ActionsToolbarConfig(this.router, this.activatedRoute);
    this.toolbarParameter.backButton.isVisible = true;
    this.toolbarParameter.backButton.fn = this.onBack;
    this.toolbarParameter.saveButton.isVisible = true;
    this.toolbarParameter.newButton.isVisible = true;
    this.toolbarParameter.deleteButton.isVisible = true;
  }

  configureForm(){
    this.productForm = new FormGroup(
      {
        'name': new FormControl(null, Validators.required),
        'description': new FormControl(),
        'qty': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(15)]),
        'price': new FormControl(null, [Validators.required, Validators.min(1)]),
        'active': new FormControl(true),
        'image': new FormControl(),
        'dimensions': new FormGroup({
          'height': new FormControl(),
          'width': new FormControl(),
          'length': new FormControl()
        })
      }
    );
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

  onSubmit(){

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.productForm.controls[controlName].hasError(errorName);
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