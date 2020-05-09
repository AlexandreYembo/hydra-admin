import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataTable, DataTableColumns } from './data-table-datasource';
import { ActionsToolbarConfig, ActionsToolbarButtons } from '../actions-toolbar/actions-toolbar-config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[];
  columns: DataTableColumns[];
  toolbarParameter: ActionsToolbarConfig
  
  //input variable -> receives the data from a component to render the grid.
  @Input() dataTable: DataTable;

  //Generic dataSource --> Accept any type of array
  dataSource: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.toolbarParameter = new ActionsToolbarConfig();
    this.toolbarParameter.newButton.isVisible = true;
    this.toolbarParameter.newButton.fn = this.newRecord;

    //begin create menu
    this.toolbarParameter.menu.menuButton.isVisible = true;
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Print', true, 'print'));
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Archive', true, 'archive'));
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Export',  true, 'import_export'));

    //end

    
    //Bind the arrayObject to the grid
    
    this.columns = this.dataTable.columns;
    this.displayedColumns = this.columns.map(c => c.columnDef);

    this.dataSource = new MatTableDataSource(this.dataTable.dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  newRecord(){
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