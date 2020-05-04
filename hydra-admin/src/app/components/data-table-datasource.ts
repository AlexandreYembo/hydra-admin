export class DataTable {
    public dataSource: any[];
    public columns: DataTableColumns[];
  }

  export class DataTableColumns {
    public columnDef: string;
    public header: string;
  }