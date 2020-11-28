import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import { ActionsToolbarButtons, ActionsToolbarConfig } from 'src/app/components/actions-toolbar/actions-toolbar-config';
import { Router, ActivatedRoute } from '@angular/router';
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
  
  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute, 
              public dialog: MatDialog, 
              @Inject(DataTableComponent) public dataTable: DataTableComponent) {
   }

  ngOnInit(): void {
    this.configureToolbar();
  }

  configureToolbar(){
    this.toolbarParameter = new ActionsToolbarConfig(this.router, this.activatedRoute);
    this.toolbarParameter.backButton.isVisible = true;
    this.toolbarParameter.backButton.fn = this.onBack;
    this.toolbarParameter.saveButton.isVisible = true;
    this.toolbarParameter.deleteButton.isVisible = true;

    this.toolbarParameter.menu.menuButton.isVisible = true;
    this.toolbarParameter.menu.menuButton.name = "More options"
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Archive', true, null, null, 'archive'));
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Copy',  true, null, null, 'file_copy'));
    this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Log',  true, null, null, 'history'));
  }

  onBack(){
    this.router.navigate(['/catalog'], { queryParamsHandling: 'preserve'})

  }
}