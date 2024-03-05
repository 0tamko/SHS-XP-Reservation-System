import { Injectable } from '@angular/core';
import { UserManager , User } from 'oidc-client';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    public _userManager: UserManager;
    public _user: User;
    private _loginChangedSubject = new Subject<boolean>();

    loginChanged = this._loginChangedSubject.asObservable();

    constructor() {
        const stsSettings = {
            authority: 'https://dev-bzocb4xu4u8ubczr.us.auth0.com/',
            client_id: 'IUKlzWaVdrIXNo4O9DFxHD7Wm9s5jcn9',
            redirect_uri: `${'http://localhost:4200/'}signin-callback`,
            scope: 'openid profile email',
            response_type: 'code',
            post_logoout_redirect_uri: `${'http://localhost:4200/'}signout-callback`,
            
        };
        this._userManager = new UserManager(stsSettings);
        this._userManager.events.addAccessTokenExpired(_ => {
            this._loginChangedSubject.next(false);
        });
    }

    login(){
        return this._userManager.signinRedirect();
    }

    isLoggedIn(): Promise<boolean> {
        return this._userManager.getUser().then(user => {
            const userCurrent = !!user && !user.expired;
            if(this._user !== user){
                this._loginChangedSubject.next(userCurrent);
            }
            if(user != null){
            this._user = user;
            }
            return userCurrent;
        });
    }

    completeLogin(){
        return this._userManager.signinRedirectCallback().then(user => {
            this._user = user;
            console.log(user.id_token);
            console.log(this._user.profile.nickname);
            this._loginChangedSubject.next(!!user && !user.expired);
            return user;
            
        })
    }

    logout(){
        this._userManager.signoutRedirect();
    }

    completeLogout(){
        this._user == null;
        this._loginChangedSubject.next(false);
        return this._userManager.signoutRedirectCallback();
    }   

    getAccesToken(){
        return this._userManager.getUser().then(user => {
            if (user != null && !user.expired){
                return user.access_token;
            } 
            else{
                return null;
            }
        })
    }

}