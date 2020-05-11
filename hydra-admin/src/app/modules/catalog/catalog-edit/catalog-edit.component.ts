import { Component, OnInit } from '@angular/core';
import { ActionsToolbarConfig, ActionsToolbarButtons } from 'src/app/components/actions-toolbar/actions-toolbar-config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog-edit',
  templateUrl: './catalog-edit.component.html',
  styleUrls: ['./catalog-edit.component.scss']
})
export class CatalogEditComponent implements OnInit {
  toolbarParameter: ActionsToolbarConfig;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

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

    //begin create menu
    // this.toolbarParameter.menu.menuButton.isVisible = true;
    // this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Print', true, null, null, 'print'));
    // this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Archive', true, null, null, 'archive'));
    // this.toolbarParameter.addItemToMenu(new ActionsToolbarButtons('Export',  true, null, null, 'import_export'));
    //end create menu
  }

  onBack(){
    this.router.navigate(['/catalog'], { queryParamsHandling: 'preserve'})

  }

}
