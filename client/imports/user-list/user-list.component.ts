import { Component, OnInit, NgZone } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Chats, ChatBetweenUsers }   from '../../../both/collections/chats.collection';
import { Chat, ChatBetween } from '../../../both/interfaces/messages.interface';
import template from './user-list.component.html';
import { LogoutComponent } from '../logout/logout.component';

@Component({
   selector: 'user-list',
   template,
   directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, LogoutComponent]
})

export class UserListComponent implements OnInit
{
    users : Mongo.Cursor<any>;
    currentUser: any;
    numofMessages:any[];
    currentUserId:any;
    arryofUsers:Array<any>;
    totalUsers:any;
    totalMessages:number;
    usersArray:any[];
    fromusers:any[];
    toid:any;
    temp=new Array();
    count:number=0;
    isLast:boolean=false;
    keepgoing:boolean=true;
    constructor(private redirectionRoute: Router, private ngZone: NgZone)
    {

    }

    ngOnInit()
    {
      this.ngZone.run(() =>
      {
        this.users = Meteor.users.find({}, { sort: {username: 1} });
        this.currentUser = Meteor.user().username;
        this.currentUserId=Meteor.userId();
        //this.totalUsers = Meteor.users.find({}).count();
        //this.numofMessages=Chats.find({read:false,"chatBetween.to":this.currentUserId}).fetch();
        //this.toid = Meteor.users.find({});
        this.fromusers=Chats.find({read:false,"chatBetween.to":this.currentUserId}).map(function name(params)
        {
          return params.chatBetween.from;
        });

        this.temp.push({id:this.fromusers[0],count:this.count});
        console.log(this.temp);
        this.fromusers.forEach(fromEle => 
        {
          this.keepgoing = true;
          this.temp.forEach(TempEle=>
          {
            if(this.keepgoing)
            {
              if(fromEle==TempEle.id)
              {
                TempEle.count++;
                this.isLast=false;
                this.keepgoing = false;
              }
              else
              {
                this.isLast=true;
              }
             }
          });
          if (this.isLast==true) 
          {
            this.temp.push({id:fromEle,count:1})
          }
          
        });
      console.log(this.isLast);
      console.log(this.temp);
        
      });
    }
}


