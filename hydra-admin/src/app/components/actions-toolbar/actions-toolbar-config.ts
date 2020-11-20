import { Router, ActivatedRoute } from '@angular/router';

export class ActionsToolbarConfig {
    constructor(public router: Router = null, public activatedRoute: ActivatedRoute = null){

    }
    public title: string;
    public newButton = new ActionsToolbarButtons('New', 'button', false, this.router, this.activatedRoute);
    public editButton = new ActionsToolbarButtons('Edit', 'button', false);
    public saveButton = new ActionsToolbarButtons('Save', 'Submit', false);
    public deleteButton = new ActionsToolbarButtons('Delete', 'button', false);
    public backButton = new ActionsToolbarButtons('Back', 'button', false, this.router, this.activatedRoute);
    public menu = new MenuToolbar();

    public addItemToMenu(item: ActionsToolbarButtons){
        this.menu.items.push(item);
    }
}

export class ActionsToolbarButtons {
    constructor(name: string, type: string, isVisible: boolean, public router: Router = null, public activatedRoute: ActivatedRoute = null, icon: string = ""){
        this.name = name;
        this.type = type;
        this.isVisible = isVisible
        this.icon = icon;
    }
    public name: string;
    public icon: string;
    public type: string;
    public isVisible: boolean;
    public fn: any;
}

export class MenuToolbar {
    constructor(){
        this.items = [];
    }

    public items : ActionsToolbarButtons[];
    public menuButton = new ActionsToolbarButtons('Actions', 'button', false);
}