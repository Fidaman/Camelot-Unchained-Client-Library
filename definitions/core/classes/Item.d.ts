/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import gearSlot from '../constants/gearSlot';
/**
 * Item
 */
declare class Item {
    /**
     * The item ID
     * @type {string}
     */
    id: string;
    /**
     * The Item Name
     * @type {string}
     */
    name: string;
    /**
     * The Item Description
     * @type {string}
     */
    description: string;
    /**
     * The Item Resource ID
     * @type {number}
     */
    resourceID: number;
    /**
     * The Item gearSlot
     * @type {gearSlot}
     */
    gearSlot: gearSlot;
    /**
     * Item Constructor
     * @param  {Item = <Item>{}} item - an existing item to create this new item from
     */
    constructor(item?: Item);
    static create(): Item;
}
export default Item;
