import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataTable, DataTableColumns } from './data-table-datasource';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionsToolbarConfig, ActionsToolbarButtons } from '../actions-toolbar/actions-toolbar-config';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[];
  columns: DataTableColumns[];
  toolbarParameter: ActionsToolbarConfig;
  //input variable -> receives the data from a component to render the grid.
  @Input() dataTable: DataTable;
  @Input() title: string;
  @Input() showActionToolbar: boolean;
  //Generic dataSource --> Accept any type of array
  dataSource: MatTableDataSource<any>;
  //dataTable$: Observable<DataTable>;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public router: Router, public activatedRoute: ActivatedRoute){}//, private store: Store<DataSourceState>) { }



  ngOnInit() {
    this.dataTable?.dataSource?.subscribe(s => {
      if(!this.dataSource){
          this.dataSource = new MatTableDataSource(s);
          this.configure();
      }
      else{
        this.dataSource.data = s;
      }
    });
   

    // this.store.pipe(select(state => state)).subscribe(dataResult => {
    //   if(!this.dataSource){
    //     this.dataSource = new MatTableDataSource(dataResult.dataSource);
    //     this.configure();
    //   }
    //   else{
    //     this.dataSource.data = dataResult.dataSource;
    //     // const totalPages = this.dataSource.data.length / this.dataSource.paginator.pageSize;
    //     // if(this.dataSource.paginator.hasPreviousPage() && this.dataSource.paginator.pageIndex >= totalPages){
    //     //   this.dataSource.paginator.previousPage();
    //     // }
    //   }
    // });

   if(this.showActionToolbar)
    this.configureToolbar();
  }

  bind(obj: any){
    //this.store.dispatch(new AddItemAction(obj));
  }

  configure(){
    this.columns = this.dataTable.columns;
    this.displayedColumns = this.columns.map(c => c.columnDef);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  configureToolbar(){
    this.toolbarParameter = new ActionsToolbarConfig(this.router, this.activatedRoute);
    this.toolbarParameter.newButton.isVisible = true;
    this.toolbarParameter.newButton.fn = this.onNewRecord;

    //begin create menu
    this.toolbarParameter.menu.menuButton.isVisible = true;
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Print', true, null, null, 'print'));
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Archive', true, null, null, 'archive'));
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Export',  true, null, null, 'import_export'));
    //end create menu
  }

  onNewRecord(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'})
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}