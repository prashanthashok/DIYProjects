import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No new server created";
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']

  constructor() {
    setTimeout(
      () => { this.allowNewServer = true; }
    , 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'New Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
  }
}
