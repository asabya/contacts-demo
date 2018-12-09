import {Component, NgZone} from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Order, group & filter list alphabetically Angular and Web worker';
  contacts: any;
  groupedContacts: any;
  myWorker: any;

  constructor(private contactService: ContactService,
              public ngZone: NgZone) {
    this.myWorker = new Worker('./assets/workers/worker.js');

    this.myWorker.onmessage = (event) => {
      this.ngZone.run(() => {
        this.groupedContacts = event.data;
      });
    };

    this.contactService.fetch().then( res => {
      this.myWorker.postMessage({stack : res, needle: ''});
      this.contacts = res;
    });
  }

  messageWorker(event) {
    this.myWorker.postMessage({stack : this.contacts, needle: event.target.value});
  }
}
