export class DataTable {
    public dataSource: any[];
    public columns: DataTableColumns[];
  }

  export class DataTableColumns {
    constructor(columnDef: string, header: string){
      this.columnDef = columnDef;
      this.header = header;
      this.actions = null;
    }
    public columnDef: string;
    public header: string;
    public actions: any;
  }