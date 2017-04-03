import { Component } from '@angular/core';
import { AbilityDetail } from '../ability-detail/ability-detail';
import { NavController } from 'ionic-angular';

import { Ability } from '../../models/ability';

import { Character } from '../../models/character';
import { Characters } from '../../providers/characters';


@Component({
  selector: 'page-character',
  templateUrl: 'character.html'
})

export class CharacterPage {

  character: Character;

  constructor(public navCtrl: NavController, public characters: Characters) {
    console.log(this.characters.query());
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(ability: Ability) {
    this.navCtrl.push(AbilityDetail, {
      ability: ability
    });
  }

}
