import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/mainpage']">Main</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/map']">Map</a></li>

                    <li routerLinkActive="deactive"><a [routerLink]="['/auth/logout']">logout</a></li>
                </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}

//original lines
/*                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
<li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
<li routerLinkActive="active"><a [routerLink]="['/map']">Map</a></li>  */