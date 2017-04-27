import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { SpoopyDungeon } from './app.component';
import { CharacterPage } from '../pages/character/character';
import { ContactPage } from '../pages/contact/contact';
import { DungeonPage } from '../pages/dungeon/dungeon';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AbilityDetail } from '../pages/ability-detail/ability-detail';
import { Characters } from '../providers/characters';
import { Users } from '../providers/users';

import { Api } from '../providers/api';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    SpoopyDungeon,
    CharacterPage,
    ContactPage,
    DungeonPage,
    TabsPage,
    LoginPage,
    AbilityDetail
  ],
  imports: [
    IonicModule.forRoot(SpoopyDungeon),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpoopyDungeon,
    CharacterPage,
    ContactPage,
    DungeonPage,
    TabsPage,
    LoginPage,
    AbilityDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Characters,
    Users,
    Api,
    IonicStorageModule,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
