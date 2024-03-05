import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth-service.component';
import { Router } from '@angular/router';

@Component({
    selector:'app-signout-callback',
    template: `<div></div>`,
})

export class SignOutRedirectCallbackComponent implements OnInit {
    constructor( private _authService: AuthService,
        private _router: Router) { }

    ngOnInit() {
        this._authService.completeLogout().then(_ => {
            this._router.navigate(['/'], {replaceUrl: true});
        })
    }
}