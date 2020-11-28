import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DataTableColumns } from 'src/app/components/data-table/data-table-datasource';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';
import { PlaceHolderDirective } from 'src/app/shared/components/placeholder/placeholder.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(PlaceHolderDirective) dataTableHost: PlaceHolderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  loadDynamicComponent(){
    const gridComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DataTableComponent);

    const hostViewContainerRef = this.dataTableHost.viewContainerRef;
    hostViewContainerRef.clear(); //interactive with the DOM cleaning any type of element

    const dataTableComponentRef = hostViewContainerRef.createComponent(gridComponentFactory);
    
    dataTableComponentRef.instance.configure(this.createColumns());
  }

  createColumns(): any{
    const columns = [ 
      new DataTableColumns('name', 'Name', 'width: 40%'), 
      new DataTableColumns('qty', 'Qty', 'width: 10%'),
      new DataTableColumns('price', 'Price', 'width: 10%'), 
      { columnDef: 'action', header: 'Actions', style: 'width: 80px;',
        actions: {
                  edit: {
                          fn: '' //'editTest()'
                  },
                  delete: {
                    fn: '' //'editTest()'
                  },
            }
      }
    ];

    return columns;
  }
}
