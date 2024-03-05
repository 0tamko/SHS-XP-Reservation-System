import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/shared/auth-service.component";
import { AppComponent } from "../app.component";

@Component({
    selector: 'app-signin-callback',
    template: '',
})

export class SignInRedirectCallbackComponent implements OnInit {
    constructor(private _authService: AuthService,
                private _router: Router,
                private appComponent: AppComponent) {}

    ngOnInit(){
        this._authService.completeLogin().then(user => {
            this._router.navigate(['/'], {replaceUrl: true});
        })
    }
}