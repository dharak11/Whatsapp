import { Component, OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { UserCredentials } from '../../../both/interfaces/userCredentials.interface';
import { Credentials } from '../../../both/collections/userCredentials.collection';
import template from './signup.component.html';

@Component({
   selector: 'signup-form',
   template,
   directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class SignupComponent implements OnInit {
   signupForm: FormGroup;
   
   constructor(private formBuilder: FormBuilder, private redirectionRoute: Router) {
       this.signupForm = this.formBuilder.group({
           userName: ['', Validators.required],
           emailAddress: ['', Validators.required],
           password: ['', Validators.required]
       });
   }

   ngOnInit() {
       
   }

   cancelUser() {
       this.signupForm.controls['userName']['updateValue']('');
       this.signupForm.controls['emailAddress']['updateValue']('');
       this.signupForm.controls['password']['updateValue']('');
   }

   registerUser()
   {
       if(this.signupForm.valid)
       {
           var email = this.signupForm.controls['emailAddress'].value;
           var userName = this.signupForm.controls['userName'].value;
           var password = this.signupForm.controls['password'].value;

           Accounts.createUser({
               email: email,
               password: password,
               username: userName
            },
            (error) =>
            {
              if (error) 
                {
                    console.log(error.reason);
                    alert(error.reason);
                }
                else 
                {
                    Meteor.loginWithPassword(email, password);
                    alert('You have successfully signed in. Please login to continue');
                }

            });
            this.cancelUser();
      }
   }
}

