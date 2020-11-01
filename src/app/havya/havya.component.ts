import {Component} from '@angular/core';

@Component({
selector : '[app-havya]',
templateUrl : './havya.component.html'
})

export class havyaComponent  {
  serverID : number = 10;
  serverName : string='offline';
  getdetails(){
    return this.serverID;
  }
}