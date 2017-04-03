import { Component } from '@angular/core';

import { DungeonPage } from '../dungeon/dungeon';
import { CharacterPage } from '../character/character';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DungeonPage;
  tab2Root: any = CharacterPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
