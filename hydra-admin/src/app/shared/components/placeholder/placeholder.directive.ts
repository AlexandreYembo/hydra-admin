import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appPlaceholder]'
})
export class PlaceHolderDirective {
    // gives a pointer to access the place the this directive will be used. Add something to the DOM.
    constructor(public viewContainerRef: ViewContainerRef) { } 
} 