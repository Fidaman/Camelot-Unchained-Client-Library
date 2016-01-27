/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * These are needed by the C++ Layer to know which build variables
 * to send to the window.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configCategory;
(function (configCategory) {
  configCategory[configCategory["KEYBIND_MOVEMENT"] = 0] = "KEYBIND_MOVEMENT";
  configCategory[configCategory["KEYBIND_COMBAT"] = 1] = "KEYBIND_COMBAT";
  configCategory[configCategory["KEYBIND_BUILDING"] = 3] = "KEYBIND_BUILDING";
  configCategory[configCategory["KEYBIND_INTERFACE"] = 4] = "KEYBIND_INTERFACE";
  configCategory[configCategory["KEYBIND_UTILITY"] = 5] = "KEYBIND_UTILITY";
  configCategory[configCategory["AUDIO_PRIMARY"] = 6] = "AUDIO_PRIMARY";
  configCategory[configCategory["VIDEO_PRIMARY"] = 7] = "VIDEO_PRIMARY";
  configCategory[configCategory["GAME_PRIMARY"] = 8] = "GAME_PRIMARY";
})(configCategory || (configCategory = {}));
;
exports["default"] = configCategory;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29uZmlnL2NvbmZpZ0NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbImNvbmZpZ0NhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVVBLElBQUssY0FTSixDQUFBO0FBVEQsQ0FBQSxVQUFLLGNBQWMsRUFBQTtBQUNqQkEsZ0JBQUFBLENBQUFBLGNBQUFBLENBQUFBLGtCQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxrQkFBb0JBLENBQUFBO0FBQ3BCQSxnQkFBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsZ0JBQUFBLENBQUFBLEdBQUFBLENBQUFBLENBQUFBLEdBQUFBLGdCQUFrQkEsQ0FBQUE7QUFDbEJBLGdCQUFBQSxDQUFBQSxjQUFBQSxDQUFBQSxrQkFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsa0JBQW9CQSxDQUFBQTtBQUNwQkEsZ0JBQUFBLENBQUFBLGNBQUFBLENBQUFBLG1CQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxtQkFBcUJBLENBQUFBO0FBQ3JCQSxnQkFBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsaUJBQUFBLENBQUFBLEdBQUFBLENBQUFBLENBQUFBLEdBQUFBLGlCQUFtQkEsQ0FBQUE7QUFDbkJBLGdCQUFBQSxDQUFBQSxjQUFBQSxDQUFBQSxlQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxlQUFpQkEsQ0FBQUE7QUFDakJBLGdCQUFBQSxDQUFBQSxjQUFBQSxDQUFBQSxlQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxlQUFpQkEsQ0FBQUE7QUFDakJBLGdCQUFBQSxDQUFBQSxjQUFBQSxDQUFBQSxjQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxjQUFnQkEsQ0FBQUE7Q0FDakJBLENBQUFBLENBVEksY0FBYyxLQUFkLGNBQWMsR0FBQSxFQUFBLENBQUEsQ0FBQSxDQVNsQjtBQUFBLENBQUM7cUJBRWEsY0FBYyIsImZpbGUiOiJjb3JlL2NvbmZpZy9jb25maWdDYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG4vKipcbiAqIFRoZXNlIGFyZSBuZWVkZWQgYnkgdGhlIEMrKyBMYXllciB0byBrbm93IHdoaWNoIGJ1aWxkIHZhcmlhYmxlc1xuICogdG8gc2VuZCB0byB0aGUgd2luZG93LlxuICovXG5lbnVtIGNvbmZpZ0NhdGVnb3J5IHtcbiAgS0VZQklORF9NT1ZFTUVOVCA9IDAsXG4gIEtFWUJJTkRfQ09NQkFUID0gMSxcbiAgS0VZQklORF9CVUlMRElORyA9IDMsXG4gIEtFWUJJTkRfSU5URVJGQUNFID0gNCxcbiAgS0VZQklORF9VVElMSVRZID0gNSxcbiAgQVVESU9fUFJJTUFSWSA9IDYsXG4gIFZJREVPX1BSSU1BUlkgPSA3LFxuICBHQU1FX1BSSU1BUlkgPSA4LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnQ2F0ZWdvcnk7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9