
export class CatalogPagedModel{
    public list: CatalogModel[];
}

export class CatalogModel {
    public id: string;
    public name: string;
    public description: string;
    public active: boolean;
    public price: number;
    public createdDate: Date;
    public image: string;
    public qty: number;
    public height: number;
    public width: number;
    public length: number;
    public category: string;
}