import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AdminPage } from '../admin/admin';
import { ZiehungPage } from '../ziehung/ziehung';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabAbout = AboutPage;
  tabAdmin = AdminPage;
  tabZiehung = ZiehungPage;

  constructor() {

  }
}
