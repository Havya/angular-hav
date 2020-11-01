import {Component} from '@angular/core';

@Component({
selector : 'app-servers',
templateUrl : './servers.component.html'
//template : '<app-havya> </app-havya><app-havya> </app-havya>'
})

export class serversComponent  {
  allowServer=false;

  constructor(){
  setTimeout(()=>{
  this.allowServer = true;
  },2000)

}
}

