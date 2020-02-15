(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper clearfix\">\n  <app-player\n  [activePlayer]='activePlayer'\n  [scorePlayer]='scorePlayer'\n  [currentScore]='currentScore'\n  [isWinner]='isWinner'\n  (handleEventIsWinner)='handleIsWinner()'\n  ></app-player>\n  <app-controls\n  [isOpenPopap]='isOpenPopap'\n  (handleEventNewGame)='handleEventNewGame()'\n  (handleEventRollDices)='handleRollDice($event)'\n  (handleEventHold)='handleHold($event)'\n  [finalScore]='finalScore'\n  [isPlaying]='isPlaying'\n  (handleEventInput)='handleInput($event)'\n  ></app-controls>\n\n  <app-dices\n  [dices]='dices'></app-dices>\n  <app-popap-rules [isOpenPopap]='isOpenPopap' [isPlaying]='isPlaying' [activePlayer]='activePlayer'\n    [scorePlayer]='scorePlayer' [currentScore]='currentScore' [dices]='dices'\n    (handleEventConfirm)='handleConfirm($event)'></app-popap-rules>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"control btn-new\" (click)='handleNewGame()'><i class=\"ion-ios-plus-outline\"></i>New game</button>\n<button class=\"control btn-roll\" (click)='rollDice()'><i class=\"ion-ios-loop\"></i>Roll dice</button>\n<button class=\"control btn-hold\" (click)='hold()'><i class=\"ion-ios-download-outline\"></i>Hold</button>\n\n<input type=\"number\" placeholder=\"Final score\" class=\"final-score\"\n[(ngModel)]='finalScore'\n[disabled]='isPlaying'\n(input)='handleInput($event)'\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dices/dices.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dices/dices.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dice-1\" class=\"dice\">\n  <div class=\"spinner\" [ngClass]=\"'dice-' + dices[0]\">\n      <div class=\"face1\">1</div>\n      <div class=\"face2\">2</div>\n      <div class=\"face3\">3</div>\n      <div class=\"face4\">4</div>\n      <div class=\"face5\">5</div>\n      <div class=\"face6\">6</div>\n  </div>\n</div>\n<div id=\"dice-2\" class=\"dice\">\n  <div class=\"spinner\" [ngClass]=\"'dice-' + dices[1]\">\n      <div class=\"face1\">1</div>\n      <div class=\"face2\">2</div>\n      <div class=\"face3\">3</div>\n      <div class=\"face4\">4</div>\n      <div class=\"face5\">5</div>\n      <div class=\"face6\">6</div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player-panel\"\n[ngClass]=\"{\n  active : activePlayer == 0 && !this.isWinner,\n  winner : activePlayer == 0 && this.isWinner\n}\"\n\n>\n  <div class=\"player-name\">{{getNamePlayer(0)}}</div>\n  <div class=\"player-score\">{{scorePlayer[0]}}</div>\n  <div class=\"player-current-box\">\n    <div class=\"player-current-label\">Current</div>\n    <div class=\"player-current-score\">{{ activePlayer == 0 ? currentScore : 0}}</div>\n  </div>\n</div>\n\n<div class=\"player-panel\"\n[ngClass]=\"{\n  active : activePlayer == 1 && !this.isWinner,\n  winner : activePlayer == 1 && this.isWinner\n}\">\n  <div class=\"player-name\">{{getNamePlayer(1)}}</div>\n  <div class=\"player-score\">{{scorePlayer[1]}}</div>\n  <div class=\"player-current-box\">\n    <div class=\"player-current-label\">Current</div>\n    <div class=\"player-current-score\">{{ activePlayer == 1 ? currentScore : 0}}</div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popap-rules/popap-rules.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popap-rules/popap-rules.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-popap\" [ngClass]=\"getClassPopap()\">\n  <div class=\"rule\">\n    <h3>Luật chơi</h3>\n    <h4>Điều 1:</h4>\n    <p>Người chơi sẽ điền số điểm cuối cùng vào ô FINALSCORE</p>\n    <h4>Điều 2:</h4>\n    <p>Người chơi chỉ bắt đầu game khi ấn nút NEW GAME</p>\n    <h4>Điều 3:</h4>\n    <p>Ấn nút ROLLDICE để xoay súc xắc, điểm của mỗi lần quay sẽ được tính vào ô Current. Người chơi có thể quay bao nhiêu lần tùy ý <b>nhưng khi quay vào ô số 1 thì sẽ mất hết điểm ở o Current và bị mất lượt</b> </p>\n    <h4>Điều 4:</h4>\n    <p>Người chơi dùng nút HOLD để lấy điểm ở ô Current</p>\n    <button class=\"confirm\" (click)='handleConfirm()'>Đã hiểu</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**********************************************\r\n*** GENERAL\r\n**********************************************/\r\n\r\n\r\n\r\n.clearfix::after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n.wrapper {\r\n  width: 1000px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzhDQUU4Qzs7OztBQUk5QztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOzs7O0FBSUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKioqIEdFTkVSQUxcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "diceGame";
        this.activePlayer = 0;
        this.scorePlayer = [20, 40];
        this.currentScore = 3;
        this.isPlaying = false;
        this.isOpenPopap = false;
        this.dices = [1, 5];
        this.finalScore = 0;
        this.isWinner = false;
    }
    handleEventNewGame() {
        this.isOpenPopap = true;
    }
    handleInput($event) {
        this.finalScore = $event;
    }
    handleIsWinner() {
        let { scorePlayer, finalScore } = this;
        if (scorePlayer[0] >= finalScore || scorePlayer[1] >= finalScore) {
            this.isPlaying = false;
            return (this.isWinner = true);
        }
        return (this.isWinner = false);
    }
    handleConfirm() {
        this.isPlaying = true;
        this.isOpenPopap = false;
        this.activePlayer = 0;
        this.scorePlayer = [0, 0];
        this.currentScore = 0;
        this.dices = [1, 1];
        this.isWinner = false;
    }
    handleRollDice() {
        //ktra xem neu da bat dau choi thi moi rolldice
        if (this.isPlaying) {
            var dice1 = Math.floor(Math.random() * 6) + 1;
            var dice2 = Math.floor(Math.random() * 6) + 1;
            this.dices = [dice1, dice2];
            // console.log(dice1, dice2);
            // ktra xem ng choi co quay trung o so 1 hay k
            if (dice1 === 1 || dice2 === 1) {
                let activePlayer = this.activePlayer;
                setTimeout(function () {
                    alert(`Người chơi số ${activePlayer + 1} đã qua trúng ô số 1. Rất tiếc :(`);
                }, 15);
                // chuyen nguoi choi
                this.next();
            }
            else {
                //cong vao diem tam thoi
                this.currentScore = this.currentScore + dice1 + dice2;
            }
        }
        else {
            alert("Vui lòng ấn nút NEW GAME!!");
        }
    }
    handleHold() {
        if (this.isPlaying) {
            let { scorePlayer, activePlayer, currentScore } = this;
            let oldScore = scorePlayer[activePlayer];
            let cloneScorePlayer = [...scorePlayer];
            cloneScorePlayer[activePlayer] = oldScore + currentScore;
            this.scorePlayer = cloneScorePlayer;
            if (!this.handleIsWinner()) {
                this.next();
            }
        }
        else {
            alert("Vui lòng ấn nút NEW GAME!!");
        }
    }
    next() {
        this.activePlayer = this.activePlayer == 0 ? 1 : 0;
        this.currentScore = 0;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/controls/controls.component */ "./src/app/components/controls/controls.component.ts");
/* harmony import */ var _components_dices_dices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dices/dices.component */ "./src/app/components/dices/dices.component.ts");
/* harmony import */ var _components_popap_rules_popap_rules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popap-rules/popap-rules.component */ "./src/app/components/popap-rules/popap-rules.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
            _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_6__["ControlsComponent"],
            _components_dices_dices_component__WEBPACK_IMPORTED_MODULE_7__["DicesComponent"],
            _components_popap_rules_popap_rules_component__WEBPACK_IMPORTED_MODULE_8__["PopapRulesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/controls/controls.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/controls/controls.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**********************************************\r\n*** Control\r\n**********************************************/\r\n.control {\r\n  position: absolute;\r\n  width: 200px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  color: #555;\r\n  background: none;\r\n  border: none;\r\n  font-family: Lato;\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  font-weight: 300;\r\n  -webkit-transition: background-color 0.3s, color 0.3s;\r\n  transition: background-color 0.3s, color 0.3s;\r\n}\r\n.control.disable {\r\n  pointer-events: none;\r\n}\r\n.control:hover { font-weight: 600; }\r\n.control:hover i { margin-right: 20px; }\r\n.control:focus {\r\n  outline: none;\r\n}\r\n.control i {\r\n  color: #42b983;\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n  font-size: 32px;\r\n  line-height: 1;\r\n  vertical-align: text-top;\r\n  margin-top: -4px;\r\n  -webkit-transition: margin 0.3s;\r\n  transition: margin 0.3s;\r\n}\r\n.btn-new { top: 45px;}\r\n.btn-roll { top: 403px;}\r\n.btn-hold { top: 467px;}\r\n.final-score {\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  top: 520px;\r\n  color: #555;\r\n  font-size: 18px;\r\n  font-family: 'Lato';\r\n  text-align: center;\r\n  padding: 10px;\r\n  width: 160px;\r\n  text-transform: uppercase;\r\n}\r\n.final-score:focus { outline: none; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs4Q0FFOEM7QUFDOUM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscURBQTZDO0VBQTdDLDZDQUE2QztBQUMvQztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUEsaUJBQWlCLGdCQUFnQixFQUFFO0FBQ25DLG1CQUFtQixrQkFBa0IsRUFBRTtBQUV2QztFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLCtCQUF1QjtFQUF2Qix1QkFBdUI7QUFDekI7QUFFQSxXQUFXLFNBQVMsQ0FBQztBQUNyQixZQUFZLFVBQVUsQ0FBQztBQUN2QixZQUFZLFVBQVUsQ0FBQztBQUV2QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUEscUJBQXFCLGFBQWEsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbioqKiBDb250cm9sXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5jb250cm9sIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xyXG59XHJcbi5jb250cm9sLmRpc2FibGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY29udHJvbDpob3ZlciB7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuLmNvbnRyb2w6aG92ZXIgaSB7IG1hcmdpbi1yaWdodDogMjBweDsgfVxyXG5cclxuLmNvbnRyb2w6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250cm9sIGkge1xyXG4gIGNvbG9yOiAjNDJiOTgzO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzO1xyXG59XHJcblxyXG4uYnRuLW5ldyB7IHRvcDogNDVweDt9XHJcbi5idG4tcm9sbCB7IHRvcDogNDAzcHg7fVxyXG4uYnRuLWhvbGQgeyB0b3A6IDQ2N3B4O31cclxuXHJcbi5maW5hbC1zY29yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgdG9wOiA1MjBweDtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZpbmFsLXNjb3JlOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/controls/controls.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/controls/controls.component.ts ***!
  \***********************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ControlsComponent = class ControlsComponent {
    constructor() {
        this.handleEventNewGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleEventRollDices = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleEventHold = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleEventInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    handleNewGame() {
        this.handleEventNewGame.emit(this.isOpenPopap);
    }
    rollDice() {
        this.handleEventRollDices.emit("handleRollDice");
    }
    hold() {
        this.handleEventHold.emit("handleHold");
    }
    handleInput($event) {
        var number = $event.target.value;
        // console.log(number);
        this.finalScore = number;
        return this.handleEventInput.emit(this.finalScore);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ControlsComponent.prototype, "handleEventNewGame", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ControlsComponent.prototype, "handleEventRollDices", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ControlsComponent.prototype, "handleEventHold", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ControlsComponent.prototype, "handleEventInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlsComponent.prototype, "isOpenPopap", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlsComponent.prototype, "finalScore", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlsComponent.prototype, "isPlaying", void 0);
ControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-controls",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./controls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./controls.component.css */ "./src/app/components/controls/controls.component.css")).default]
    })
], ControlsComponent);



/***/ }),

/***/ "./src/app/components/dices/dices.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/dices/dices.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#dice-1 { top: 120px; }\r\n#dice-2 { top: 250px; }\r\n.dice {\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    width: 120px;\r\n    height: 120px;\r\n    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);\r\n}\r\n.spinner div {\r\n    position: absolute;\r\n    width: 120px;\r\n    height: 120px;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 0 0 20px rgba(0,0,0,0.2);\r\n    text-align: center;\r\n    line-height: 120px;\r\n    font-size: 100px;\r\n    color: #42b983;\r\n    font-size: 0;\r\n    -webkit-transition: all .3s ease;\r\n    transition: all .3s ease;\r\n    opacity: 1;\r\n}\r\n.spinner .face1 {\r\n    -webkit-transform: translateZ(60px);\r\n    transform: translateZ(60px);\r\n    background-image: url('/assets/dice-1.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.spinner .face2 {\r\n    -webkit-transform: rotateY(90deg) translateZ(60px);\r\n    transform: rotateY(90deg) translateZ(60px);\r\n    background-image: url('/assets/dice-2.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.spinner .face3 {\r\n    -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);\r\n    transform: rotateY(90deg) rotateX(90deg) translateZ(60px);\r\n    background-image: url('/assets/dice-3.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.spinner .face4 {\r\n    -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);\r\n    transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);\r\n    background-image: url('/assets/dice-4.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.spinner .face5 {\r\n    -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);\r\n    transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);\r\n    background-image: url('/assets/dice-5.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.spinner .face6 {\r\n    -webkit-transform: rotateX(-90deg) translateZ(60px);\r\n    transform: rotateX(-90deg) translateZ(60px);\r\n    background-image: url('/assets/dice-6.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.spinner {\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform-origin: 60px 60px 0;\r\n    transform-origin: 60px 60px 0;\r\n    -webkit-transition: all .9s ease;\r\n    transition: all .9s ease;\r\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n\ttransform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n.spinner.dice-1 {\r\n\t-webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n.spinner.dice-2 {\r\n\t-webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);\r\n    transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);\r\n}\r\n.spinner.dice-3 {\r\n    -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);\r\n    transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);\r\n}\r\n.spinner.dice-4 {\r\n    -webkit-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);\r\n    transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);\r\n}\r\n.spinner.dice-5 {\r\n    -webkit-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);\r\n    transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);\r\n}\r\n.spinner.dice-6 {\r\n    -webkit-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);\r\n    transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWNlcy9kaWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsVUFBVSxFQUFFO0FBQ3RCLFVBQVUsVUFBVSxFQUFFO0FBRXRCO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQXdCO0lBQXhCLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7QUFFQTtJQUNJLG1DQUFtQztJQUVuQywyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtEQUFrRDtJQUVsRCwwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlFQUFpRTtJQUVqRSx5REFBeUQ7SUFDekQsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtFQUFrRTtJQUVsRSwwREFBMEQ7SUFDMUQsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtFQUFrRTtJQUVsRSwwREFBMEQ7SUFDMUQsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1EQUFtRDtJQUVuRCwyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLG9DQUFvQztJQUVwQyw0QkFBNEI7SUFDNUIscUNBQXFDO0lBRXJDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFFaEMsd0JBQXdCO0lBQ3hCLDREQUE0RDtDQUcvRCxvREFBb0Q7QUFDckQ7QUFDQTtDQUNDLDREQUE0RDtJQUd6RCxvREFBb0Q7QUFDeEQ7QUFDQTtDQUNDLDhEQUE4RDtJQUczRCxzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLCtEQUErRDtJQUcvRCx1REFBdUQ7QUFDM0Q7QUFDQTtJQUNJLCtEQUErRDtJQUcvRCx1REFBdUQ7QUFDM0Q7QUFDQTtJQUNJLDZEQUE2RDtJQUc3RCxxREFBcUQ7QUFDekQ7QUFDQTtJQUNJLDhEQUE4RDtJQUc5RCxzREFBc0Q7QUFDMUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpY2VzL2RpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGljZS0xIHsgdG9wOiAxMjBweDsgfVxyXG4jZGljZS0yIHsgdG9wOiAyNTBweDsgfVxyXG5cclxuLmRpY2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcclxufVxyXG4uc3Bpbm5lciBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6ICM0MmI5ODM7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc3Bpbm5lciAuZmFjZTEge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2RpY2UtMS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNwaW5uZXIgLmZhY2UyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDYwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig2MHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig2MHB4KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9kaWNlLTIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5zcGlubmVyIC5mYWNlMyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig2MHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooNjBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooNjBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZGljZS0zLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc3Bpbm5lciAuZmFjZTQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDYwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooNjBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDYwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2RpY2UtNC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNwaW5uZXIgLmZhY2U1IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig2MHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDYwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig2MHB4KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9kaWNlLTUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5zcGlubmVyIC5mYWNlNiB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooNjBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig2MHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooNjBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZGljZS02LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA2MHB4IDYwcHggMDtcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA2MHB4IDYwcHggMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDYwcHggNjBweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcclxufVxyXG4uc3Bpbm5lci5kaWNlLTEge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbn1cclxuLnNwaW5uZXIuZGljZS0yIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWigwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbn1cclxuLnNwaW5uZXIuZGljZS0zIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVaKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVaKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWig5MGRlZyk7XHJcbn1cclxuLnNwaW5uZXIuZGljZS00IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWig5MGRlZyk7XHJcbn1cclxuLnNwaW5uZXIuZGljZS01IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWigwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG59XHJcbi5zcGlubmVyLmRpY2UtNiB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWigwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/dices/dices.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/dices/dices.component.ts ***!
  \*****************************************************/
/*! exports provided: DicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicesComponent", function() { return DicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DicesComponent = class DicesComponent {
    constructor() {
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DicesComponent.prototype, "dices", void 0);
DicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dices",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dices/dices.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dices.component.css */ "./src/app/components/dices/dices.component.css")).default]
    })
], DicesComponent);



/***/ }),

/***/ "./src/app/components/player/player.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/player/player.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**********************************************\r\n*** PLAYERS\r\n**********************************************/\r\n.player-panel {\r\n  width: 50%;\r\n  float: left;\r\n  height: 600px;\r\n  padding: 100px;\r\n  -webkit-transition: all .3s ease;\r\n  transition: all .3s ease;\r\n  background-color: #fff;\r\n}\r\n.player-name {\r\n  font-size: 40px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  font-weight: 100;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n.player-score {\r\n  text-align: center;\r\n  font-size: 80px;\r\n  font-weight: 100;\r\n  color: #42b983;\r\n  margin-bottom: 130px;\r\n}\r\n.active { background-color: #f7f7f7; }\r\n.active .player-name { font-weight: 300; }\r\n.active .player-name::after {\r\n  content: \"\\2022\";\r\n  font-size: 47px;\r\n  position: absolute;\r\n  color: #42b983;\r\n  top: -7px;\r\n  right: 10px;\r\n\r\n}\r\n.player-current-box {\r\n  background-color: #42b983;\r\n  color: #fff;\r\n  width: 40%;\r\n  margin: 0 auto;\r\n  padding: 12px;\r\n  text-align: center;\r\n}\r\n.player-current-label {\r\n  text-transform: uppercase;\r\n  margin-bottom: 10px;\r\n  font-size: 12px;\r\n  color: #222;\r\n}\r\n.player-current-score {\r\n  font-size: 30px;\r\n}\r\n.winner { background-color: #f7f7f7; }\r\n.winner .player-name { font-weight: 300; color: #42b983; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzhDQUU4QztBQUM5QztFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQ0FBd0I7RUFBeEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0QjtBQUVBLFVBQVUseUJBQXlCLEVBQUU7QUFDckMsdUJBQXVCLGdCQUFnQixFQUFFO0FBRXpDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXOztBQUViO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUEsVUFBVSx5QkFBeUIsRUFBRTtBQUNyQyx1QkFBdUIsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qKiogUExBWUVSU1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ucGxheWVyLXBhbmVsIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcGFkZGluZzogMTAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnBsYXllci1uYW1lIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wbGF5ZXItc2NvcmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogIzQyYjk4MztcclxuICBtYXJnaW4tYm90dG9tOiAxMzBweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7IH1cclxuLmFjdGl2ZSAucGxheWVyLW5hbWUgeyBmb250LXdlaWdodDogMzAwOyB9XHJcblxyXG4uYWN0aXZlIC5wbGF5ZXItbmFtZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XHJcbiAgZm9udC1zaXplOiA0N3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogIzQyYjk4MztcclxuICB0b3A6IC03cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG4ucGxheWVyLWN1cnJlbnQtYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJiOTgzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItY3VycmVudC1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuLnBsYXllci1jdXJyZW50LXNjb3JlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi53aW5uZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OyB9XHJcbi53aW5uZXIgLnBsYXllci1uYW1lIHsgZm9udC13ZWlnaHQ6IDMwMDsgY29sb3I6ICM0MmI5ODM7IH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlayerComponent = class PlayerComponent {
    constructor() {
        this.handleEventIsWinner = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    getNamePlayer(index) {
        var defaultName = 'Player ' + (index + 1);
        // console.log(defaultName, index, this.isWinner, this.activePlayer);
        if (this.activePlayer == index && this.isWinner) {
            defaultName = "WINNER !";
        }
        return defaultName;
    }
    sendEvent() {
        this.handleEventIsWinner.emit('handleEventIsWinner');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlayerComponent.prototype, "handleEventIsWinner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "activePlayer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "scorePlayer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "currentScore", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "isWinner", void 0);
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-player",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/components/player/player.component.css")).default]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/components/popap-rules/popap-rules.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/popap-rules/popap-rules.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-popap{\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: rgba(0,0,0,0.4);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  -webkit-transition: all .4s ease;\r\n  transition: all .4s ease;\r\n}\r\n.wrapper-popap.open-popap{\r\n  opacity: 1;\r\n  visibility: visible;\r\n\r\n}\r\n.rule{\r\n  position: absolute;\r\n  background-color: white;\r\n  width: 350px;\r\n  padding: 20px;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%) scale(1.2);\r\n          transform: translate(-50%,-50%) scale(1.2);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  border-radius: 6px;\r\n  box-shadow: 0 0 22px 0 rgba(0,0,0,0.21);\r\n  -webkit-transition: all .4s ease;\r\n  transition: all .4s ease;\r\n}\r\n.open-popap .rule{\r\n  -webkit-transform: scale(1) translate(-50%,-50%);\r\n          transform: scale(1) translate(-50%,-50%);\r\n}\r\n.rule h3{\r\n  margin-bottom: 10px\r\n}\r\n.rule .confirm{\r\n  border: 2px solid #333;\r\n  outline: none;\r\n  background-color: white;\r\n  padding: 8px 15px;\r\n  margin-top: 20px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  -webkit-transition: all .4s ease;\r\n  transition: all .4s ease;\r\n}\r\n.rule .confirm:hover{\r\n  background-color: #333;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BhcC1ydWxlcy9wb3BhcC1ydWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQ0FBd0I7RUFBeEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1COztBQUVyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0RBQTBDO1VBQTFDLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxnQ0FBd0I7RUFBeEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQXdCO0VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wYXAtcnVsZXMvcG9wYXAtcnVsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLXBvcGFwe1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxufVxyXG4ud3JhcHBlci1wb3BhcC5vcGVuLXBvcGFwe1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHJcbn1cclxuXHJcbi5ydWxle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxLjIpO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3gtc2hhZG93OiAwIDAgMjJweCAwIHJnYmEoMCwwLDAsMC4yMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG59XHJcbi5vcGVuLXBvcGFwIC5ydWxle1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn1cclxuLnJ1bGUgaDN7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG59XHJcbi5ydWxlIC5jb25maXJte1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG59XHJcbi5ydWxlIC5jb25maXJtOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/popap-rules/popap-rules.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/popap-rules/popap-rules.component.ts ***!
  \*****************************************************************/
/*! exports provided: PopapRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopapRulesComponent", function() { return PopapRulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PopapRulesComponent = class PopapRulesComponent {
    constructor() {
        this.handleEventConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    getClassPopap() {
        return {
            'open-popap': this.isOpenPopap
        };
    }
    handleConfirm() {
        this.handleEventConfirm.emit('handleConfirm');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopapRulesComponent.prototype, "isPlaying", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopapRulesComponent.prototype, "activePlayer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopapRulesComponent.prototype, "scorePlayer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopapRulesComponent.prototype, "currentScore", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopapRulesComponent.prototype, "dices", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopapRulesComponent.prototype, "isOpenPopap", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PopapRulesComponent.prototype, "handleEventConfirm", void 0);
PopapRulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-popap-rules",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popap-rules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popap-rules/popap-rules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popap-rules.component.css */ "./src/app/components/popap-rules/popap-rules.component.css")).default]
    })
], PopapRulesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\diceGame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map