import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IonicModule, IonRouterOutlet, Platform } from '@ionic/angular';
import { ToastPage } from "./components/toast/toast.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterOutlet, ToastPage],
})
export class AppComponent {
  constructor(private router: Router, private platform: Platform) {
    this.initializeApp();
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('splash');
    });
  }
}
