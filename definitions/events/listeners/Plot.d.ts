/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter from '../classes/EventEmitter';
import HandlesPlot from '../classes/HandlesPlot';
export default class PlotListener {
    listening: boolean;
    type: string;
    handles: HandlesPlot;
    constructor(handles: HandlesPlot);
    start(emitter: EventEmitter): void;
}
