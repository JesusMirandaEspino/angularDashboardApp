import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showiconChat: boolean = true;
  title = 'dashboardApp';

  iconActivatedChat(){
    this.showiconChat = !this.showiconChat;
  }

}
