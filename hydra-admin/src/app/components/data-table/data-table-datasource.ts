import { Observable } from 'rxjs';

export class DataTable {
    public dataSource: Observable<any>;
  //  public dataSourceObservable: Observable<any>;
    public columns: DataTableColumns[];
  }

  export class DataTableColumns {
    constructor(columnDef: string, header: string, style: string = null){
      this.columnDef = columnDef;
      this.header = header;
      this.actions = null;
      this.style = style;
    }
    public columnDef: string;
    public header: string;
    public actions: any;
    public style: string;
  }