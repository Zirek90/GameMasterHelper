(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <div *ngIf='gamePage; else page'>\n    <div class=\"row\">\n      <app-form-list></app-form-list>\n      <app-form></app-form>\n      <div class=\"col-md start-btn\">\n        <button (click)='playGame()' class=\"btn\">Let's play a game!</button>\n      </div>\n    </div>\n  </div>\n  <ng-template #page>\n    <div class=\"row\">\n      <app-monster-list></app-monster-list>\n      <app-to-do></app-to-do>\n      <app-note-bar></app-note-bar>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-btn {\n  display: flex;\n  height: 100%;\n  align-self: center;\n  justify-content: flex-end; }\n  .start-btn .btn {\n    background: url('sword.jpeg') bottom/cover no-repeat;\n    height: 50px;\n    border: 10px;\n    font-weight: bolder;\n    font-size: 1.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsMEJBQXlCLEVBVTVCO0VBZEQ7SUFPUSxxREFBMkQ7SUFDM0QsYUFBWTtJQUNaLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsa0JBQWlCLEVBRXBCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAuYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvc3dvcmQuanBlZycpIGJvdHRvbS9jb3ZlciBuby1yZXBlYXQ7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcblxuICAgIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.gamePage = false;
    }
    AppComponent.prototype.playGame = function () {
        this.gamePage = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-list/form-list.component */ "./src/app/form-list/form-list.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monster-list/monster-list.component */ "./src/app/monster-list/monster-list.component.ts");
/* harmony import */ var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./to-do/to-do.component */ "./src/app/to-do/to-do.component.ts");
/* harmony import */ var _note_bar_note_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./note-bar/note-bar.component */ "./src/app/note-bar/note-bar.component.ts");
/* harmony import */ var _monster_list_dices_dices_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./monster-list/dices/dices.component */ "./src/app/monster-list/dices/dices.component.ts");
/* harmony import */ var _note_bar_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./note-bar/calculator/calculator.component */ "./src/app/note-bar/calculator/calculator.component.ts");
/* harmony import */ var _note_bar_sound_bar_sound_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./note-bar/sound-bar/sound-bar.component */ "./src/app/note-bar/sound-bar/sound-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_5__["FormListComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_8__["MonsterListComponent"],
                _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_9__["ToDoComponent"],
                _note_bar_note_bar_component__WEBPACK_IMPORTED_MODULE_10__["NoteBarComponent"],
                _monster_list_dices_dices_component__WEBPACK_IMPORTED_MODULE_11__["DicesComponent"],
                _note_bar_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorComponent"],
                _note_bar_sound_bar_sound_bar_component__WEBPACK_IMPORTED_MODULE_13__["SoundBarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form-list/form-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/form-list/form-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md form-list\">\n  <button (click)='refreshData()' class=\"btn\">Refresh</button>\n  <input type=\"text\" [(ngModel)]='searchMonster' placeholder=\"Fantasy\">\n  <ul *ngFor='let monster of filteredMonsterList()'>\n    <li><span> Name:</span> {{monster.name }}</li>\n    <li><span> HP:</span> {{monster.hp}}</li>\n    <li><span> Category:</span> {{monster.category}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/form-list/form-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/form-list/form-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-list {\n  background-color: rgba(255, 253, 253, 0.5);\n  border-radius: 25px;\n  width: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  height: 640px;\n  overflow: scroll; }\n  .form-list .btn {\n    width: 100%;\n    border: 10px;\n    margin-bottom: 10px;\n    background: url('axe.jpg') center/cover no-repeat;\n    opacity: 0.7;\n    font-weight: bolder;\n    font-size: 1.4rem; }\n  .form-list input {\n    display: block;\n    margin: auto;\n    border-radius: 10px;\n    text-align: center;\n    font-family: 'Gloria Hallelujah', 'Arial', cursive; }\n  .form-list ul {\n    padding: .3rem; }\n  .form-list ul li {\n      list-style: none;\n      font-size: 1.3rem;\n      font-family: 'Gloria Hallelujah', 'Arial', cursive; }\n  .form-list ul li span {\n        font-family: 'Mukta', 'Arial', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEwQztFQUMxQyxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLDJCQUEwQjtFQUN4Qix3QkFBdUI7RUFDekIsY0FBYTtFQUNiLGlCQUFnQixFQW9DakI7RUEzQ0Q7SUFVSSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CQUFtQjtJQUVuQixrREFBMkQ7SUFDM0QsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixrQkFBaUIsRUFFbEI7RUFuQkg7SUFzQkksZUFBYztJQUNkLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsbUJBQWtCO0lBQ2xCLG1EQUNGLEVBQUM7RUEzQkg7SUE4QkksZUFBYyxFQVlmO0VBMUNIO01BaUNNLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsbURBQWtELEVBTW5EO0VBekNMO1FBc0NRLDBDQUF5QyxFQUUxQyIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1MywgMjUzLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDY0MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1nL2ZpcmUuanBnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltZy9heGUuanBnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAvLyBjb2xvcjogd2hpdGVcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdHbG9yaWEgSGFsbGVsdWphaCcsICdBcmlhbCcsIGN1cnNpdmVcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAuM3JlbTtcblxuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2xvcmlhIEhhbGxlbHVqYWgnLCAnQXJpYWwnLCBjdXJzaXZlO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWt0YScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/form-list/form-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-list/form-list.component.ts ***!
  \**************************************************/
/*! exports provided: FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return FormListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormListComponent = /** @class */ (function () {
    function FormListComponent(http) {
        this.http = http;
        this.monsterList = [];
    }
    FormListComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    FormListComponent.prototype.refreshData = function () {
        var _this = this;
        this.http.get('https://monsterlist-59e3a.firebaseio.com/monsters.json')
            .subscribe(function (resp) {
            for (var key in resp) {
                _this.monsterList.push(resp[key]);
            }
            // console.log(this.monsterList);
        });
    };
    FormListComponent.prototype.filteredMonsterList = function () {
        var _this = this;
        return this.monsterList.filter(function (monster) {
            return monster.category.match(_this.searchMonster);
        });
    };
    FormListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-list',
            template: __webpack_require__(/*! ./form-list.component.html */ "./src/app/form-list/form-list.component.html"),
            styles: [__webpack_require__(/*! ./form-list.component.scss */ "./src/app/form-list/form-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormListComponent);
    return FormListComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md form-container\">\n  <div class=\"form\">\n    \n    <div class=\"form-group\">\n      <label>Name\n        <input [(ngModel)]='name' type='text' class=\"form-control\" />\n      </label>\n    </div>\n\n    <div class=\"form-group\">\n      <label>HP\n        <input [(ngModel)]='hp' type='text' class=\"form-control\" />\n      </label>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Category\n        <input [(ngModel)]='category' type='text' class=\"form-control\" />\n      </label>\n    </div>\n    <button (click)='submit()'>Submit</button>\n    <div class=\"preview\">\n        <p><span>Name:</span> {{name}}</p>\n        <p><span>HP:</span> {{hp}}</p>\n        <p><span>Category:</span> {{category}}</p>\n      </div>\n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/form/form.component.scss":
/*!******************************************!*\
  !*** ./src/app/form/form.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  justify-content: center;\n  margin: auto; }\n  .form-container .form {\n    background-color: rgba(255, 253, 253, 0.6);\n    border-radius: 25px;\n    padding: 2rem; }\n  .form-container .form label {\n      font-size: 1.5rem; }\n  .form-container .form button {\n      background: url('bow.jpg') center/cover no-repeat;\n      width: 100%;\n      font-size: 1.5rem;\n      font-weight: bolder;\n      border: 10px;\n      opacity: 0.8; }\n  .form-container .form .preview {\n      margin-top: 1rem; }\n  .form-container .form .preview p {\n        font-size: 1.5rem; }\n  .form-container .form .preview p span {\n          font-weight: bold;\n          font-size: 1.2rem; }\n  @media (min-width: 1200px) {\n  .form-container {\n    width: 630px; } }\n  @media (max-width: 1199px) {\n  .form-container {\n    width: 450px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUV2QixhQUFZLEVBa0NiO0VBdENEO0lBT0ksMkNBQTBDO0lBQzFDLG9CQUFtQjtJQUNuQixjQUFhLEVBNEJkO0VBckNIO01BV00sa0JBQWlCLEVBQ2xCO0VBWkw7TUFnQk0sa0RBQTJEO01BQzNELFlBQVc7TUFFWCxrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLGFBQVc7TUFDWCxhQUFZLEVBQ2I7RUF2Qkw7TUEwQk0saUJBQWdCLEVBVWpCO0VBcENMO1FBNkJRLGtCQUFpQixFQU1sQjtFQW5DUDtVQWdDVSxrQkFBaUI7VUFDakIsa0JBQWlCLEVBQ2xCO0VBS1Q7RUFDRTtJQUNFLGFBQVksRUFFYixFQUFBO0VBRUg7RUFDRTtJQUNFLGFBQVksRUFDYixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIHdpZHRoOiA2ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBcbiAgLmZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1nL3N1Ym1pdC5qcGVnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1nL2Jvdy5qcGcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyBjb2xvcjp3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIGJvcmRlcjoxMHB4O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIC5wcmV2aWV3IHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KSB7XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYzMHB4O1xuXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjExOTlweCkge1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(http) {
        this.http = http;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.submit = function () {
        var _this = this;
        this.http.post('https://monsterlist-59e3a.firebaseio.com/monsters.json', {
            name: this.name,
            hp: this.hp,
            category: this.category
        })
            .subscribe(function () {
            // this.resp = resp;
            // console.log(this.resp);
            _this.name = '';
            _this.hp = null;
            _this.category = '';
        });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"panel panel-primary\"> -->\n<div class=\"jumbotron\">\n  <h2>{{ dateInfo }}</h2>\n  <div class=\"timer\">\n    <button (click)='stoperStart()' class=\"btn btn-primary\">Start</button>\n    <button (click)='stoperStop()' class=\"btn btn-danger\">Stop</button>\n    <h3>Timer: {{stoper}}</h3>\n  </div>\n</div>\n\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  display: flex;\n  justify-content: center;\n  padding: 1rem 1rem;\n  background-color: rgba(255, 253, 253, 0.5); }\n  .jumbotron h2 {\n    margin-right: 2rem;\n    padding: 0.5rem; }\n  .jumbotron .timer {\n    display: flex; }\n  .jumbotron .timer button, .jumbotron .timer h3 {\n      margin: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLDJDQUEwQyxFQVc3QztFQWZEO0lBTVEsbUJBQWtCO0lBQ2xCLGdCQUFlLEVBQ2xCO0VBUkw7SUFVUSxjQUFhLEVBSWhCO0VBZEw7TUFZWSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC41KTtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgIH1cbiAgICAudGltZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBidXR0b24saDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.counter = 0;
        setInterval(function () {
            var currentDate = new Date();
            _this.dateInfo = currentDate.toLocaleTimeString();
        }, 1000);
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.stoperStart = function () {
        var _this = this;
        if (this.counter != 0) {
            this.counter = 0;
        }
        ;
        this.interval = setInterval(function () {
            _this.counter++;
            _this.stoper = _this.counter;
        }, 1000);
    };
    HeaderComponent.prototype.stoperStop = function () {
        clearInterval(this.interval);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/monster-list/dices/dices.component.html":
/*!*********************************************************!*\
  !*** ./src/app/monster-list/dices/dices.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dices\">\n  <div>\n    <button (click)='diceFour()' class=\"kFour\"></button>\n    <h3>Dice k4: <span>{{ four }}</span></h3>\n  </div>\n  <div>\n    <button (click)='diceSix()' class=\"kSix\"></button>\n    <h3>Dice k6: <span>{{ six }}</span></h3>\n  </div>\n  <div>\n    <button (click)='diceEight()' class=\"kEight\"></button>\n    <h3>Dice k8: <span>{{ eight }}</span></h3>\n  </div>\n  <div>\n    <button (click)='diceTen()' class=\"kTen\"></button>\n    <h3>Dice k10: <span>{{ ten }}</span></h3>\n  </div>\n  <div>\n    <button (click)='diceTwelve()' class=\"kTwelve\"></button>\n    <h3>Dice k12: <span>{{ twelve }}</span></h3>\n  </div>\n  <div>\n    <button (click)='diceTwenty()' class=\"kTwenty\"></button>\n    <h3>Dice k20: <span>{{ twenty }}</span></h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/monster-list/dices/dices.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/monster-list/dices/dices.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dices {\n  display: flex;\n  margin-bottom: 1rem;\n  border-bottom: 1px dashed black; }\n  .dices button {\n    width: 40px;\n    height: 40px;\n    margin: .2rem; }\n  .dices .kFour {\n    background: url('k4.jpg') center/cover no-repeat; }\n  .dices .kSix {\n    background: url('k6.jpg') center/cover no-repeat; }\n  .dices .kEight {\n    background: url('k8.jpg') center/cover no-repeat; }\n  .dices .kTen {\n    background: url('k10.jpg') center/cover no-repeat; }\n  .dices .kTwelve {\n    background: url('k12.jpg') center/cover no-repeat; }\n  .dices .kTwenty {\n    background: url('k20.jpg') center/cover no-repeat; }\n  .dices h3 {\n    font-size: 1.2rem; }\n  .dices h3 span {\n      display: block;\n      color: white;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvbW9uc3Rlci1saXN0L2RpY2VzL2RpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQ0FBK0IsRUFrQ2xDO0VBckNEO0lBS1EsWUFBVztJQUNYLGFBQVk7SUFDWixjQUFhLEVBRWhCO0VBVEw7SUFXUSxpREFBbUUsRUFDdEU7RUFaTDtJQWNRLGlEQUFtRSxFQUN0RTtFQWZMO0lBaUJRLGlEQUFtRSxFQUN0RTtFQWxCTDtJQW9CUSxrREFBb0UsRUFDdkU7RUFyQkw7SUF1QlEsa0RBQW9FLEVBQ3ZFO0VBeEJMO0lBMEJRLGtEQUFvRSxFQUN2RTtFQTNCTDtJQThCUSxrQkFBaUIsRUFNcEI7RUFwQ0w7TUFnQ1ksZUFBYztNQUNkLGFBQVk7TUFDWixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb25zdGVyLWxpc3QvZGljZXMvZGljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGljZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogLjJyZW07XG4gICAgICAgIFxuICAgIH1cbiAgICAua0ZvdXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2ltZy9kaWNlcy9rNC5qcGcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIH1cbiAgICAua1NpeCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vaW1nL2RpY2VzL2s2LmpwZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5rRWlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2ltZy9kaWNlcy9rOC5qcGcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIH1cbiAgICAua1RlbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vaW1nL2RpY2VzL2sxMC5qcGcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIH1cbiAgICAua1R3ZWx2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vaW1nL2RpY2VzL2sxMi5qcGcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIH1cbiAgICAua1R3ZW50eSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vaW1nL2RpY2VzL2syMC5qcGcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/monster-list/dices/dices.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/monster-list/dices/dices.component.ts ***!
  \*******************************************************/
/*! exports provided: DicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicesComponent", function() { return DicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DicesComponent = /** @class */ (function () {
    function DicesComponent() {
    }
    DicesComponent.prototype.ngOnInit = function () {
    };
    DicesComponent.prototype.diceFour = function () {
        this.four = Math.floor((Math.random() * 4) + 1);
    };
    DicesComponent.prototype.diceSix = function () {
        this.six = Math.floor((Math.random() * 6) + 1);
    };
    DicesComponent.prototype.diceEight = function () {
        this.eight = Math.floor((Math.random() * 8) + 1);
    };
    DicesComponent.prototype.diceTen = function () {
        this.ten = Math.floor((Math.random() * 10) + 1);
    };
    DicesComponent.prototype.diceTwelve = function () {
        this.twelve = Math.floor((Math.random() * 12) + 1);
    };
    DicesComponent.prototype.diceTwenty = function () {
        this.twenty = Math.floor((Math.random() * 20) + 1);
    };
    DicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dices',
            template: __webpack_require__(/*! ./dices.component.html */ "./src/app/monster-list/dices/dices.component.html"),
            styles: [__webpack_require__(/*! ./dices.component.scss */ "./src/app/monster-list/dices/dices.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DicesComponent);
    return DicesComponent;
}());



/***/ }),

/***/ "./src/app/monster-list/monster-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/monster-list/monster-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md monster-list\">\n  <app-dices></app-dices>\n  <input type=\"text\" [(ngModel)]='searchMonster' placeholder=\"Fantasy\">\n  <ul *ngFor='let monster of filteredMonsterList()'>\n    <li><span> Name:</span> {{monster.name}}</li>\n    <li><span> HP:</span> {{monster.hp}}</li>\n    <li><span> Category:</span> {{monster.category}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/monster-list/monster-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/monster-list/monster-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".monster-list {\n  width: 300px;\n  background-color: rgba(255, 253, 253, 0.5);\n  border-radius: 20px;\n  padding: 1rem;\n  height: 640px;\n  overflow: scroll; }\n  .monster-list input {\n    display: block;\n    margin: 5px auto;\n    border-radius: 10px;\n    text-align: center;\n    font-family: 'Gloria Hallelujah', 'Arial', cursive; }\n  .monster-list ul {\n    border: 1px dotted black; }\n  .monster-list ul li {\n      list-style: none;\n      font-size: 1.3rem;\n      font-family: 'Gloria Hallelujah', 'Arial', cursive; }\n  .monster-list ul li span {\n        font-family: 'Mukta', 'Arial', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvbW9uc3Rlci1saXN0L21vbnN0ZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWiwyQ0FBMEM7RUFDMUMsb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixjQUFhO0VBQ2IsaUJBQWdCLEVBdUJqQjtFQTdCRDtJQVNJLGVBQWM7SUFDZCxpQkFBZ0I7SUFDaEIsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixtREFBa0QsRUFDbkQ7RUFkSDtJQWlCSSx5QkFBd0IsRUFXekI7RUE1Qkg7TUFvQk0saUJBQWdCO01BQ2hCLGtCQUFpQjtNQUNqQixtREFBa0QsRUFLbkQ7RUEzQkw7UUF5QlEsMENBQXlDLEVBQzFDIiwiZmlsZSI6InNyYy9hcHAvbW9uc3Rlci1saXN0L21vbnN0ZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb25zdGVyLWxpc3Qge1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgaGVpZ2h0OiA2NDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0dsb3JpYSBIYWxsZWx1amFoJywgJ0FyaWFsJywgY3Vyc2l2ZTtcbiAgfVxuXG4gIHVsIHtcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XG5cbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LWZhbWlseTogJ0dsb3JpYSBIYWxsZWx1amFoJywgJ0FyaWFsJywgY3Vyc2l2ZTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/monster-list/monster-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/monster-list/monster-list.component.ts ***!
  \********************************************************/
/*! exports provided: MonsterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterListComponent", function() { return MonsterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonsterListComponent = /** @class */ (function () {
    function MonsterListComponent(http) {
        var _this = this;
        this.http = http;
        this.monsterList = [];
        this.http.get('https://monsterlist-59e3a.firebaseio.com/monsters.json')
            .subscribe(function (resp) {
            for (var key in resp) {
                _this.monsterList.push(resp[key]);
            }
        });
        // console.log(this.monsterList);
    }
    MonsterListComponent.prototype.ngOnInit = function () {
    };
    MonsterListComponent.prototype.filteredMonsterList = function () {
        var _this = this;
        return this.monsterList.filter(function (monster) {
            return monster.category.match(_this.searchMonster);
        });
    };
    MonsterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monster-list',
            template: __webpack_require__(/*! ./monster-list.component.html */ "./src/app/monster-list/monster-list.component.html"),
            styles: [__webpack_require__(/*! ./monster-list.component.scss */ "./src/app/monster-list/monster-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MonsterListComponent);
    return MonsterListComponent;
}());



/***/ }),

/***/ "./src/app/note-bar/calculator/calculator.component.html":
/*!***************************************************************!*\
  !*** ./src/app/note-bar/calculator/calculator.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Calculator</h2>\n<div class=\"calculator\">\n  <input type=\"number\" [(ngModel)]='numberOne' />\n  <input type=\"number\" [(ngModel)]='numberTwo' />\n  <!-- <div> -->\n    <button (click)='add()'>+</button>\n    <button (click)='subtract()'>-</button>\n    <button (click)='multiply()'>*</button>\n    <button (click)='divide()'>/</button>\n  <!-- </div> -->\n</div>\n<h3>Score: <span>{{ numberResult }}</span></h3>\n"

/***/ }),

/***/ "./src/app/note-bar/calculator/calculator.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/note-bar/calculator/calculator.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center; }\n\n.calculator {\n  width: 100%;\n  display: flex;\n  padding: .6rem; }\n\n.calculator input {\n    width: 60px;\n    margin: 1px; }\n\n.calculator button {\n    width: 50px;\n    margin: 1px; }\n\nh3 span {\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvbm90ZS1iYXIvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYixlQUFjLEVBU2pCOztBQVpEO0lBS1EsWUFBVztJQUNYLFlBQVcsRUFDZDs7QUFQTDtJQVNRLFlBQVc7SUFDWCxZQUFXLEVBQ2Q7O0FBRUw7RUFHUSxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ub3RlLWJhci9jYWxjdWxhdG9yL2NhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhbGN1bGF0b3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogLjZyZW07XG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgbWFyZ2luOiAxcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBtYXJnaW46IDFweDtcbiAgICB9XG59XG5oMyB7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/note-bar/calculator/calculator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/note-bar/calculator/calculator.component.ts ***!
  \*************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent.prototype.add = function () {
        if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
            this.numberResult = this.numberOne + this.numberTwo;
        }
    };
    CalculatorComponent.prototype.subtract = function () {
        if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
            this.numberResult = this.numberOne - this.numberTwo;
        }
    };
    CalculatorComponent.prototype.multiply = function () {
        if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
            this.numberResult = this.numberOne * this.numberTwo;
        }
    };
    CalculatorComponent.prototype.divide = function () {
        if (!isNaN(this.numberOne) && !isNaN(this.numberTwo)) {
            this.numberResult = this.numberOne / this.numberTwo;
        }
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/note-bar/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.scss */ "./src/app/note-bar/calculator/calculator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/note-bar/note-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/note-bar/note-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md note-bar\">\n\n  <textarea placeholder=\"write here your notes\"></textarea>\n  <app-calculator></app-calculator>\n  <app-sound-bar></app-sound-bar>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/note-bar/note-bar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/note-bar/note-bar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".note-bar {\n  width: 275px;\n  background-color: rgba(255, 253, 253, 0.5);\n  border-radius: 25px; }\n  .note-bar textarea {\n    width: 100%;\n    height: 275px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    font-family: 'Gloria Hallelujah', 'Arial', cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvbm90ZS1iYXIvbm90ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osMkNBQTBDO0VBQzFDLG9CQUFtQixFQVF0QjtFQVhEO0lBS1EsWUFBVztJQUNYLGNBQWE7SUFDYiw0QkFBMkI7SUFDM0IsNkJBQTRCO0lBQzVCLG1EQUFrRCxFQUNyRCIsImZpbGUiOiJzcmMvYXBwL25vdGUtYmFyL25vdGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGUtYmFyIHtcbiAgICB3aWR0aDogMjc1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1MywgMjUzLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNzVweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0dsb3JpYSBIYWxsZWx1amFoJywgJ0FyaWFsJywgY3Vyc2l2ZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/note-bar/note-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/note-bar/note-bar.component.ts ***!
  \************************************************/
/*! exports provided: NoteBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteBarComponent", function() { return NoteBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteBarComponent = /** @class */ (function () {
    function NoteBarComponent() {
    }
    NoteBarComponent.prototype.ngOnInit = function () {
    };
    NoteBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note-bar',
            template: __webpack_require__(/*! ./note-bar.component.html */ "./src/app/note-bar/note-bar.component.html"),
            styles: [__webpack_require__(/*! ./note-bar.component.scss */ "./src/app/note-bar/note-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoteBarComponent);
    return NoteBarComponent;
}());



/***/ }),

/***/ "./src/app/note-bar/sound-bar/sound-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/note-bar/sound-bar/sound-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md soundContainer\">\n    <h2>Sounds</h2>\n    <div class=\"btnContainer\">\n      <h4>Street</h4>\n      <button (click)=\"startStreet()\">Start</button>\n      <button (click)=\"stopStreet()\">Stop</button>\n    </div>\n    <div class=\"btnContainer\">\n      <h4>Forrest</h4>\n      <button (click)=\"startForrest()\">Start</button>\n      <button (click)=\"stopForrest()\">Stop</button>\n    </div>\n    <div class=\"btnContainer\">\n      <h4>River</h4>\n      <button (click)=\"startRiver()\">Start</button>\n      <button (click)=\"stopRiver()\">Stop</button>\n    </div>\n    <div class=\"btnContainer\">\n      <h4>Fight</h4>\n      <button (click)=\"startFight()\">Start</button>\n      <button (click)=\"stopFight()\">Stop</button>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/note-bar/sound-bar/sound-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/note-bar/sound-bar/sound-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".soundContainer {\n  text-align: center;\n  border-radius: 25px;\n  padding: 5px; }\n  .soundContainer .btnContainer {\n    border: 1px solid black;\n    padding: 5px;\n    display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvbm90ZS1iYXIvc291bmQtYmFyL3NvdW5kLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsYUFBWSxFQU1mO0VBVEQ7SUFLUSx3QkFBdUI7SUFDdkIsYUFBWTtJQUNaLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL25vdGUtYmFyL3NvdW5kLWJhci9zb3VuZC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc291bmRDb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAuYnRuQ29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/note-bar/sound-bar/sound-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/note-bar/sound-bar/sound-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SoundBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundBarComponent", function() { return SoundBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoundBarComponent = /** @class */ (function () {
    function SoundBarComponent() {
        //street
        this.audioStreet = new Audio();
        this.audioStreet.src = './assets/sounds/street.mp3';
        this.audioStreet.load();
        //forrest
        this.audioForrest = new Audio();
        this.audioForrest.src = './assets/sounds/forrest.mp3';
        this.audioForrest.load();
        //river
        this.audioRiver = new Audio();
        this.audioRiver.src = './assets/sounds/river.mp3';
        this.audioRiver.load();
        //fight
        this.audioFight = new Audio();
        this.audioFight.src = './assets/sounds/fight.mp3';
        this.audioFight.load();
    }
    SoundBarComponent.prototype.ngOnInit = function () {
    };
    SoundBarComponent.prototype.startStreet = function () {
        this.audioStreet.play();
        this.audioStreet.loop = true;
    };
    SoundBarComponent.prototype.stopStreet = function () {
        this.audioStreet.pause();
        this.audioStreet.currentTime = 0;
    };
    SoundBarComponent.prototype.startForrest = function () {
        this.audioForrest.play();
        this.audioForrest.loop = true;
    };
    SoundBarComponent.prototype.stopForrest = function () {
        this.audioForrest.pause();
        this.audioForrest.currentTime = 0;
    };
    SoundBarComponent.prototype.startRiver = function () {
        this.audioRiver.play();
        this.audioRiver.loop = true;
    };
    SoundBarComponent.prototype.stopRiver = function () {
        this.audioRiver.pause();
        this.audioRiver.currentTime = 0;
    };
    SoundBarComponent.prototype.startFight = function () {
        this.audioFight.play();
        this.audioFight.loop = true;
    };
    SoundBarComponent.prototype.stopFight = function () {
        this.audioFight.pause();
        this.audioFight.currentTime = 0;
    };
    SoundBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sound-bar',
            template: __webpack_require__(/*! ./sound-bar.component.html */ "./src/app/note-bar/sound-bar/sound-bar.component.html"),
            styles: [__webpack_require__(/*! ./sound-bar.component.scss */ "./src/app/note-bar/sound-bar/sound-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SoundBarComponent);
    return SoundBarComponent;
}());



/***/ }),

/***/ "./src/app/to-do/to-do.component.html":
/*!********************************************!*\
  !*** ./src/app/to-do/to-do.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md toDoContainer\">\n  <form>\n    <label>Add tasks to remember\n      <input type=\"text\" [(ngModel)]='newTask' [ngModelOptions]=\"{standalone: true}\">\n    </label>\n    <button (click)='submit(newTask)'>Add Reminder</button>\n  </form>\n\n  <ul *ngFor='let task of tasks'>\n    <li>\n      <input type=\"checkbox\">\n      <span>{{ task.title }}</span>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/to-do/to-do.component.scss":
/*!********************************************!*\
  !*** ./src/app/to-do/to-do.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toDoContainer {\n  display: block;\n  margin: 0.2rem;\n  background-color: rgba(255, 253, 253, 0.5);\n  border-radius: 25px;\n  padding: 5px; }\n  .toDoContainer form {\n    margin: auto; }\n  .toDoContainer form label {\n      font-size: 1.5rem;\n      display: grid;\n      text-align: center; }\n  .toDoContainer form button {\n      display: flex;\n      margin: auto;\n      width: 150px;\n      background: url('wand.png') center/contain no-repeat;\n      background-color: white;\n      font-weight: bolder;\n      font-size: 1.4rem; }\n  .toDoContainer ul {\n    text-align: center;\n    padding: .5rem; }\n  .toDoContainer ul li {\n      list-style: none;\n      text-transform: uppercase;\n      font-size: 1.4rem;\n      border-bottom: 1px dashed black;\n      font-family: 'Gloria Hallelujah', 'Arial', cursive; }\n  .toDoContainer ul li input {\n        float: left; }\n  @media (min-width: 1200px) {\n  .toDoContainer {\n    width: 550px; } }\n  @media (max-width: 1199px) {\n  .toDoContainer {\n    width: 370px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRldXN6L0Rlc2t0b3AvZ2FtZU1hc3RlckhlbHBlci9nYW1lTWFzdGVySGVscGVyL3NyYy9hcHAvdG8tZG8vdG8tZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFjO0VBQ2QsZUFBYztFQUNkLDJDQUEwQztFQUMxQyxvQkFBbUI7RUFDbkIsYUFBWSxFQWtDZjtFQXhDRDtJQVVRLGFBQVksRUFlbkI7RUF6QkQ7TUFZUSxrQkFBaUI7TUFDakIsY0FBYTtNQUNiLG1CQUFrQixFQUNyQjtFQWZMO01BaUJRLGNBQWE7TUFDYixhQUFZO01BQ1osYUFBWTtNQUNaLHFEQUE4RDtNQUM5RCx3QkFBdUI7TUFDdkIsb0JBQW1CO01BQ25CLGtCQUFpQixFQUNwQjtFQXhCTDtJQTJCUSxtQkFBa0I7SUFDbEIsZUFBYyxFQVdqQjtFQXZDTDtNQThCWSxpQkFBZ0I7TUFDaEIsMEJBQXlCO01BQ3pCLGtCQUFpQjtNQUNqQixnQ0FBK0I7TUFDL0IsbURBQWtELEVBSXJEO0VBdENUO1FBb0NnQixZQUFXLEVBQ2Q7RUFJYjtFQUNJO0lBQ0ksYUFBWSxFQUNmLEVBQUE7RUFFSDtFQUNFO0lBQ0UsYUFBWSxFQUNiLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90by1kby90by1kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b0RvQ29udGFpbmVyIHtcbiAgICAvLyB3aWR0aDogNTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1MywgMjUzLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8vIGhlaWdodDogNTAwcHg7XG4gICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBmb3JtIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1nL3dhbmQucG5nJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgfVxufVxuICAgIHVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgYmxhY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0dsb3JpYSBIYWxsZWx1amFoJywgJ0FyaWFsJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOjEyMDBweCkge1xuICAgIC50b0RvQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDU1MHB4OyAgXG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOjExOTlweCkge1xuICAgIC50b0RvQ29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAzNzBweDtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/to-do/to-do.component.ts":
/*!******************************************!*\
  !*** ./src/app/to-do/to-do.component.ts ***!
  \******************************************/
/*! exports provided: ToDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoComponent", function() { return ToDoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToDoComponent = /** @class */ (function () {
    function ToDoComponent() {
        this.tasks = [];
    }
    ToDoComponent.prototype.ngOnInit = function () {
    };
    ToDoComponent.prototype.submit = function (newTask) {
        var newTodo = {
            title: newTask,
            done: false
        };
        if (newTask) {
            this.tasks.push(newTodo);
            this.newTask = '';
        }
    };
    ToDoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-to-do',
            template: __webpack_require__(/*! ./to-do.component.html */ "./src/app/to-do/to-do.component.html"),
            styles: [__webpack_require__(/*! ./to-do.component.scss */ "./src/app/to-do/to-do.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToDoComponent);
    return ToDoComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mateusz/Desktop/gameMasterHelper/gameMasterHelper/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map