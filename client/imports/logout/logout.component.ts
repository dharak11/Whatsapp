import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import template from './logout.component.html';


@Component({
   selector: 'logout',
   template,
   directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class LogoutComponent
{
    constructor(private redirectionRoute: Router) 
    {
        
    }

    LogOut()
    {
      console.log("logging out");
      Meteor.logout();
      alert('You have been successfully logged out.');
      this.redirectionRoute.navigate(['/']);
    }
}


