/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import CoreSettings from './CoreSettings';
import clientInterface from './clientInterface';
import client from './client';

// constants
import abilityTags from './constants/abilityConstants/abilityTags';
import announcementType from './constants/announcementType';
import archetype from './constants/archetype';
import buildUIMode from './constants/buildUIMode';
import channelId from './constants/channelId';
import emotes from './constants/emotes';
import race from './constants/race';
import soundEvents from './constants/soundEvents';
import tagConstraintType from './constants/tagConstraintType';
import itemType from './constants/itemType';
import gearSlot from './constants/gearSlot';

// config
export * from './config/config';

// classes
import Ability from './classes/Ability';
import Announcement from './classes/Announcement';
import Combatant from './classes/Combatant';
import Player from './classes/Player';
import Character from './classes/Character';
import ControlGame from './classes/ControlGame';
import Injury from './classes/Injury';
import Population from './classes/Population';
import Inventory from './classes/Inventory';
import Item from './classes/Item';
import EquippedGear from './classes/EquippedGear';

export {
  // core
  CoreSettings,
  clientInterface,
  client,

  // core constants
  abilityTags,
  announcementType,
  archetype,
  buildUIMode,
  channelId,
  emotes,
  race,
  soundEvents,
  tagConstraintType,
  itemType,
  gearSlot,

  // core classes
  Ability,
  Announcement,
  Combatant,
  Player,
  Character,
  ControlGame,
  Injury,
  Population,
  Inventory,
  Item,
  EquippedGear,
}
