export class ActionsToolbarConfig {
    public title: string;
    public editButton = new ActionsToolbarButtons('Edit', true);
    public saveButton = new ActionsToolbarButtons('Save', true);
}

export class ActionsToolbarButtons {
    constructor(name: string, visible: boolean){
        this.name = name;
        this.visible = visible
    }
    public name: string;
    public visible: boolean;
    public fn: any;
}