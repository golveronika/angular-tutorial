import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServerName';
  userName = '';
  allowupdateUserName = false;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  isHintVisible = false;
  timeOnHintShows = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onHintVisible(): void {
      this.isHintVisible = !this.isHintVisible;
      const moment = new Date();
      this.timeOnHintShows.push(moment.toLocaleString('en-US', { hour12: false }))
  }

  getHintVisible(): string {
    return (this.isHintVisible) ? 'block' : 'none';
  }

  onCreateServer(): void  {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: any): void  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: any): void  {
    const userName = (<HTMLInputElement>event.target).value;
    this.allowupdateUserName = (userName) ? true : false;
  }

  resetUserName(): void {
    this.userName = '';
  }

}
