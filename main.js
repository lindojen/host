(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\Website\J-ANG-Jenkin-Website\jenkin-website\src\main.ts */"zUnb");


/***/ }),

/***/ "0pw2":
/*!***************************************************!*\
  !*** ./src/app/private/private-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PrivateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutingModule", function() { return PrivateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo.component */ "2s/R");





const routes = [
    { path: '', redirectTo: '/private/photo', pathMatch: 'full' },
    { path: 'photo', component: _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"] }
];
class PrivateRoutingModule {
}
PrivateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrivateRoutingModule });
PrivateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrivateRoutingModule_Factory(t) { return new (t || PrivateRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrivateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "1d/W":
/*!**************************************************!*\
  !*** ./src/app/web/eminent/eminent.component.ts ***!
  \**************************************************/
/*! exports provided: EminentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EminentComponent", function() { return EminentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EminentComponent {
}
EminentComponent.ɵfac = function EminentComponent_Factory(t) { return new (t || EminentComponent)(); };
EminentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EminentComponent, selectors: [["app-eminent"]], decls: 123, vars: 0, consts: [["id", "eminent", 1, "eminent"], [1, "skills", "container", "skills-container"], [1, "section-left-title"], [1, "row"], [1, "col-lg-7", "col-md-12", "col-sm-12", "col-xs-12"], [1, "circle-container"], [1, "card"], [1, "title"], [1, "bar"], [1, "emptybar"], [1, "filledbar"], [1, "circle"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "60", "cy", "60", "r", "50", 1, "stroke", "circ1"], ["cx", "60", "cy", "60", "r", "50", 1, "stroke", "circ2"], ["cx", "60", "cy", "60", "r", "50", 1, "stroke", "circ3"], ["cx", "60", "cy", "60", "r", "50", 1, "stroke", "circ4"], [1, "col-lg-5", "col-md-12", "col-sm-12", "col-xs-12"], [1, "skills-inner"], [1, "detail-skills"], [1, "each-skills"], [1, "skill-type"], [1, "skill-info"], [1, "skill-info-detail"], [1, "skill-info-name"], [1, "percentage-num"], [1, "progressBar"], [1, "percentage", 2, "width", "99%"], [1, "percentage", 2, "width", "90%"], [1, "percentage", 2, "width", "70%"], [1, "percentage", 2, "width", "40%"], [1, "counts", "container"], [1, "col-lg-3", "col-md-6", "mt-5", "mt-lg-0"], [1, "count-box"], [1, "fa", "fa-calendar"], [1, "col-lg-3", "col-md-6", "mt-5", "mt-md-0"], [1, "fa", "fa-laptop"], [1, "fa", "fa-firefox"], [1, "fa", "fa-street-view"]], template: function EminentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Networking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hardware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Azure Cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "99%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Angular JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Gatsby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Total IT Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Projects Worked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "ERP Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Mobile Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#eminent[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, rgba(37, 37, 38, 0.82), rgba(37, 37, 38, 0.82)), url('skill-img.jpg') no-repeat;\n  min-height: 750px;\n}\n.skills[_ngcontent-%COMP%]   .detail-skills[_ngcontent-%COMP%] {\n  padding-right: 60px;\n}\n.detail-skills[_ngcontent-%COMP%] {\n  padding-left: 20%;\n}\n.skill-type[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 15px;\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  vertical-align: middle;\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .skill-info-detail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .skill-info-detail[_ngcontent-%COMP%]   .skill-info-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 15px;\n  font-weight: 600;\n  opacity: 0.9;\n  color: #fffaf0;\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .skill-info-detail[_ngcontent-%COMP%]   .eleito[_ngcontent-%COMP%], .skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .skill-info-detail[_ngcontent-%COMP%] {\n  padding: 0 5px 2px 5px;\n  border-radius: 2px;\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .skill-info-detail[_ngcontent-%COMP%]   .percentage-num[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 14px;\n  color: #fffaf0;\n  font-weight: normal;\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .progressBar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 7px;\n  margin: 30px 0 2px;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.5);\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 7px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background: linear-gradient(90deg, #009ad9 0%, #d99300 65%, #ffba00 100%);\n  animation: animationProgress 3s ease-in-out;\n}\n.skill-type[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.counts[_ngcontent-%COMP%] {\n  padding: 70px 0 60px;\n}\n.counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%] {\n  padding: 30px 30px 25px 30px;\n  width: 100%;\n  position: relative;\n  text-align: center;\n  color: #d9b710;\n  background: rgba(255, 255, 255, 0.08);\n}\n.counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 24px;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 12px;\n  color: #0098f1;\n  border-radius: 50px;\n}\n.counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 36px;\n  display: block;\n  font-weight: 600;\n  color: #fff;\n}\n.counts[_ngcontent-%COMP%]   .count-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 14px;\n}\n.circle-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n  width: 600px;\n  top: 10px;\n  display: flex;\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  height: 280px;\n  width: 200px;\n  background-color: #17141d;\n  border-radius: 10px;\n  box-shadow: -1rem 0 3rem #000;\n  transition: 0.4s ease-out;\n  position: relative;\n  left: 0px;\n}\n.card[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -50px;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-20px);\n  transition: 0.4s ease-out;\n}\n.card[_ngcontent-%COMP%]:hover    ~ .card[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50px;\n  transition: 0.4s ease-out;\n}\n.title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 300;\n  position: absolute;\n  left: 20px;\n  top: 15px;\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  left: 20px;\n  height: 5px;\n  width: 150px;\n}\n.emptybar[_ngcontent-%COMP%] {\n  background-color: #2e3033;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #009ad9 0%, #d99300 65%, #ffba00 100%);\n  animation: animationProgress 3s ease-in-out;\n}\n.filledbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  z-index: 3;\n  width: 0px;\n  height: 100%;\n  background: linear-gradient(90deg, #009ad9 0%, #d99300 65%, #ffba00 100%);\n  transition: 0.6s ease-out;\n}\n.card[_ngcontent-%COMP%]:hover   .filledbar[_ngcontent-%COMP%] {\n  width: 120px;\n  transition: 0.4s ease-out;\n}\n.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: calc(50% - 60px);\n}\n.stroke[_ngcontent-%COMP%] {\n  stroke: #fff;\n  stroke-dasharray: 360;\n  stroke-dashoffset: 360;\n  transition: 0.6s ease-out;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #17141d;\n  stroke-width: 5px;\n}\n.card[_ngcontent-%COMP%]:hover   .stroke[_ngcontent-%COMP%] {\n  transition: 0.6s ease-out;\n}\n.circ1[_ngcontent-%COMP%] {\n  stroke-dashoffset: 100;\n}\n.circ2[_ngcontent-%COMP%] {\n  stroke-dashoffset: 150;\n}\n.circ3[_ngcontent-%COMP%] {\n  stroke-dashoffset: 80;\n}\n.circ4[_ngcontent-%COMP%] {\n  stroke-dashoffset: 50;\n}\n@media (max-width: 568px) {\n  .card[_ngcontent-%COMP%] {\n    width: 120px !important;\n  }\n}\n@keyframes animationProgress {\n  from {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGVtaW5lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OytEQUFBO0FBcUVBOzsrREFBQTtBQ25FQTtFQUNFLHFIQUFBO0VBQ0EsaUJBQUE7QUFLRjtBQUZBO0VBQ0ksbUJBQUE7QUFLSjtBQUZBO0VBQ0ksaUJBQUE7QUFLSjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQU1KO0FBSEE7RUFDSSxrQkFBQTtBQU1KO0FBSEE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNEaEJpQjtBQ3NCckI7QUFIQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjRDdCaUI7RUM4QmpCLG1CQUFBO0FBTUo7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFNSjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlFQUFBO0VBR0EsMkNBQUE7QUFNSjtBQUhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFNSjtBQUhBOzsrREFBQTtBQUdBO0VBQ0ksb0JBQUE7QUFNSjtBQUhBO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtBQU1KO0FBSEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRGhHVTtBQ3NHZDtBQUhBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFNSjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBTUo7QUFIQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTUo7QUFIQTtFQUNNLGtCQUFBO0FBTU47QUFIQTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7QUFNSjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFNSjtBQUhBO0VBQ0ksV0Q5SVU7RUMrSVYsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTUo7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU1KO0FBSEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUVBQUE7RUFHQSwyQ0FBQTtBQU1KO0FBSEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5RUFBQTtFQUNBLHlCQUFBO0FBTUo7QUFIQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQU1KO0FBSEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQU1KO0FBSEE7RUFDSSxZRDdMVTtFQzhMVixxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFNSjtBQUhBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBTUo7QUFIQTtFQUNJLHlCQUFBO0FBTUo7QUFIQTtFQUNJLHNCQUFBO0FBTUo7QUFIQTtFQUNJLHNCQUFBO0FBTUo7QUFIQTtFQUNJLHFCQUFBO0FBTUo7QUFIQTtFQUNJLHFCQUFBO0FBTUo7QUFIQTtFQUNJO0lBQ0ksdUJBQUE7RUFNTjtBQUNGO0FBR0E7RUFDRTtJQUNFLFFBQUE7RUFJRjtBQUNGIiwiZmlsZSI6ImVtaW5lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgQ29sb3JcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHJcbiRjb2xvci1sb2FkZXItYTogI2ZmNGI1YztcclxuJGNvbG9yLWxvYWRlci1iOiAjYTRiNzg3O1xyXG4kY29sb3ItbG9hZGVyLWM6ICNmZmJiOTE7XHJcbiRjb2xvci1sb2FkZXItZDogIzY2YmZiZjtcclxuXHJcbiRjb2xvci1tZW51OiAjZTExMDY0O1xyXG4kY29sb3ItbWVudS1ob3ZlcjogI2NjZDE0NDtcclxuJGNvbG9yLW1lbnUtYmFja2dyb3VuZDogI2U2ZTllYztcclxuJGNvbG9yLWxpbms6ICNlMTEwNjQ7XHJcbiRjb2xvci1saW5rLWhvdmVyOiAjY2NkMTQ0O1xyXG4kY29sb3ItYm9keTogIzI3MjgyOTtcclxuXHJcblxyXG4kY29sb3ItYmxhY2s6ICMwMDA7XHJcbiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWZsb3JhbC13aGl0ZTogI2ZmZmFmMDtcclxuJGNvbG9yLXdoaXRlLWxpZ2h0LWxpdHRsZTogI2U2ZTllYztcclxuJGNvbG9yLWJsYWNrLWRhcmstbGl0dGxlOiAjMjIyODMxO1xyXG4kY29sb3ItYmxhY2stYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kY29sb3ItZ3JheS1kYXJrLWxpdHRsZTogIzVkNWM2MTtcclxuJGNvbG9yLWdyYXktbGlnaHQ6ICMzNzk2ODM7XHJcbiRjb2xvci1tYXJvb24tZGFyazogIzk1MDc0MDtcclxuJGNvbG9yLW1hcm9vbi1saWdodDogI2UxMTA2NDtcclxuJGNvbG9yLWdvbGQtbGlnaHQ6ICNjY2QxNDQ7XHJcbiRjb2xvci1nb2xkLW1lZGl1bTogI2JkYjc2YjtcclxuJGNvbG9yLWJsYWNrLWxpZ2h0OiAjNTU1NTRlO1xyXG4kY29sb3ItYnJvd24tbGlnaHQ6ICNkN2Q0YmU7XHJcblxyXG4kY29sb3ItaG9tZS1tZW51LWZvbnQ6ICM5NDk0OTQ7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtMTogIzgwMDA4MDtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTE6ICNkODcwOTM7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtMjogI2RiYTE3MDtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTI6ICM3MGRiZGI7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtMzogI2UzNWU4MztcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTM6ICNjMDM4YmM7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtNDogIzAwZTJmZjtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTQ6ICM1YTk3N2U7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtNTogI2ZmZmYwMDtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTU6ICNlNTY3Njc7XHJcblxyXG4kY29sb3ItaG9tZS10ZXh0LTE6ICNjODVjMWQ7XHJcbiRjb2xvci1ob21lLXRleHQtMjogIzUyZDFjYjtcclxuJGNvbG9yLWhvbWUtdGV4dC0zOiAjZDEyNmE0O1xyXG5cclxuJGNvbG9yLWZhY2Vib29rOiAjM2I1OTk5O1xyXG4kY29sb3ItaW5zdGFncmFtOiAjZDc4MTkxO1xyXG4kY29sb3ItdHdpdHRlcjogIzU1YWNlZTtcclxuJGNvbG9yLWdpdGh1YjogIzQwNzhjMDtcclxuJGNvbG9yLXN0ZWFtOiAjNTA5YjdmO1xyXG5cclxuJGNvbG9yLWZhY2Vib29rLWRhcms6ICMwYzM1OGQ7XHJcbiRjb2xvci1pbnN0YWdyYW0tZGFyazogI2I0M2M1MztcclxuJGNvbG9yLXR3aXR0ZXItZGFyazogIzIyOTZlZDtcclxuJGNvbG9yLWdpdGh1Yi1kYXJrOiAjMTQ1ZmMwO1xyXG4kY29sb3Itc3RlYW0tZGFyazogIzNlN2U2NjtcclxuXHJcbiRjbG9zZS1kZWZhdWx0OiAjOTUwNzQwO1xyXG4kY2xvc2UtaG92ZXI6ICM1NTU1NGU7XHJcblxyXG4kdGFibGUtc3BhY2luZy11bml0OiAyNHB4O1xyXG4kaGFsZi10YWJsZS1zcGFjaW5nLXVuaXQ6ICR0YWJsZS1zcGFjaW5nLXVuaXQgLyAyO1xyXG5cclxuJHRhYmxlLWhpZ2hsaWdodDogI0VFRUVFRTtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBGb250XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGZvbnQtZ2VuZXJhbDogJ2NvbWZvcnRhYScsJ1JvYm90bycsJ0FyaWFsJywnc2Fucy1zZXJpZic7XHJcbiRmb250LXByaW1hcnk6ICdjb21mb3J0YWEnLCdBcmlhbCcsJ3NhbnMtc2VyaWYnO1xyXG4kZm9udC1zZWNvbmRhcnk6ICdSb2JvdG8nLCdzYW5zLXNlcmlmJzsiLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4jZW1pbmVudCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMzcsIDM3LCAzOCwgMC44MikscmdiYSgzNywzNywzOCwwLjgyKSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9za2lsbC1pbWcuanBnXCIpIG5vLXJlcGVhdDtcclxuICBtaW4taGVpZ2h0OiA3NTBweDtcclxufVxyXG5cclxuLnNraWxscyAuZGV0YWlsLXNraWxscyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXNraWxscyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLnNraWxsLXR5cGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uc2tpbGwtdHlwZSAuc2tpbGwtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5za2lsbC10eXBlIC5za2lsbC1pbmZvIC5za2lsbC1pbmZvLWRldGFpbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5za2lsbC10eXBlIC5za2lsbC1pbmZvIC5za2lsbC1pbmZvLWRldGFpbCAuc2tpbGwtaW5mby1uYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgY29sb3I6ICRjb2xvci1mbG9yYWwtd2hpdGU7XHJcbn1cclxuXHJcbi5za2lsbC10eXBlIC5za2lsbC1pbmZvIC5za2lsbC1pbmZvLWRldGFpbCAuZWxlaXRvLCAuc2tpbGwtdHlwZSAuc2tpbGwtaW5mbyAuc2tpbGwtaW5mby1kZXRhaWwge1xyXG4gICAgcGFkZGluZzogMCA1cHggMnB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnNraWxsLXR5cGUgLnNraWxsLWluZm8gLnNraWxsLWluZm8tZGV0YWlsIC5wZXJjZW50YWdlLW51bSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAkY29sb3ItZmxvcmFsLXdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNraWxsLXR5cGUgLnNraWxsLWluZm8gLnByb2dyZXNzQmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBtYXJnaW46IDMwcHggMCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uc2tpbGwtdHlwZSAuc2tpbGwtaW5mbyAucGVyY2VudGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwxNTQsMjE3LDEpIDAlLCByZ2JhKDIxNywxNDcsMCwxKSA2NSUsIHJnYmEoMjU1LDE4NiwwLDEpIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGlvblByb2dyZXNzIDNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei1hbmltYXRpb246IGFuaW1hdGlvblByb2dyZXNzIDNzIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb25Qcm9ncmVzcyAzcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNraWxsLXR5cGUgLnNraWxsLWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBDb3VudHNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uY291bnRzIHtcclxuICAgIHBhZGRpbmc6IDcwcHggMCA2MHB4O1xyXG59XHJcblxyXG4uY291bnRzIC5jb3VudC1ib3gge1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDI1cHggMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNkOWI3MTA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG59XHJcblxyXG4uY291bnRzIC5jb3VudC1ib3ggaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yNXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGNvbG9yOiAjMDA5OGYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmNvdW50cyAuY291bnQtYm94IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxufVxyXG5cclxuLmNvdW50cyAuY291bnQtYm94IHAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNpcmNsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTQxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtMXJlbSAwIDNyZW0gIzAwMDtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgfiAuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMTVweDtcclxufVxyXG5cclxuLmJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uZW1wdHliYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzAzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMTU0LDIxNywxKSAwJSwgcmdiYSgyMTcsMTQ3LDAsMSkgNjUlLCByZ2JhKDI1NSwxODYsMCwxKSAxMDAlKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRpb25Qcm9ncmVzcyAzcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBhbmltYXRpb25Qcm9ncmVzcyAzcyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uUHJvZ3Jlc3MgM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5maWxsZWRiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDE1NCwyMTcsMSkgMCUsIHJnYmEoMjE3LDE0NywwLDEpIDY1JSwgcmdiYSgyNTUsMTg2LDAsMSkgMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuZmlsbGVkYmFyIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNjBweCk7XHJcbn1cclxuXHJcbi5zdHJva2Uge1xyXG4gICAgc3Ryb2tlOiAkY29sb3Itd2hpdGU7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAzNjA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzYwO1xyXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlLW91dDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIGZpbGw6ICMxNzE0MWQ7XHJcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLnN0cm9rZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2lyYzEge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcclxufVxyXG5cclxuLmNpcmMyIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxNTA7XHJcbn1cclxuXHJcbi5jaXJjMyB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogODA7XHJcbn1cclxuXHJcbi5jaXJjNCB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNTA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0aW9uUHJvZ3Jlc3Mge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvblByb2dyZXNzIHtcclxuICBmcm9tIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EminentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eminent',
                templateUrl: './eminent.component.html',
                styleUrls: ['./eminent.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "2s/R":
/*!**************************************************!*\
  !*** ./src/app/private/photo/photo.component.ts ***!
  \**************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PhotoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoComponent.ɵfac = function PhotoComponent_Factory(t) { return new (t || PhotoComponent)(); };
PhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoComponent, selectors: [["app-photo"]], decls: 2, vars: 0, template: function PhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "photo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo',
                templateUrl: './photo.component.html',
                styleUrls: ['./photo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "38kq":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
    ])
]);


/***/ }),

/***/ "5+t2":
/*!*******************************************!*\
  !*** ./src/app/private/private.module.ts ***!
  \*******************************************/
/*! exports provided: PrivateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateModule", function() { return PrivateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _private_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private-routing.module */ "0pw2");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo/photo.component */ "2s/R");





class PrivateModule {
}
PrivateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PrivateModule });
PrivateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PrivateModule_Factory(t) { return new (t || PrivateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _private_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivateRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrivateModule, { declarations: [_photo_photo_component__WEBPACK_IMPORTED_MODULE_3__["PhotoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _private_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivateRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrivateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _photo_photo_component__WEBPACK_IMPORTED_MODULE_3__["PhotoComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _private_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivateRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6OIh":
/*!********************************************!*\
  !*** ./src/app/web/home/home.component.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mobile View !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Disabling some animations and rescaling the site. For the best view, open the site on the Laptop.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Click Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "P\u00E9rson\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Itin\u00E9r\u00E0ry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Emin\u00E9nt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "F\u00E0scin\u00E0t\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "G\u00E0z\u00E9tt\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.enableMenu = true;
        this.mobileView = false;
        this.items = [];
        for (let index = 0; index < 100; index++) {
            this.items.push(index);
        }
    }
    onResize() {
        this.enableHomeItem(window.screen.width);
    }
    ngOnInit() {
        this.enableHomeItem(window.screen.width);
    }
    enableHomeItem(width) {
        if (width > 768) {
            this.enableMenu = true;
        }
        else {
            this.enableMenu = false;
            this.mobileView = true;
        }
    }
    closePopup() {
        this.mobileView = false;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 11, vars: 4, consts: [["id", "home", 1, "d-flex", "flex-column", "justify-content-center"], ["class", "modal", 3, "click", 4, "ngIf"], ["id", "particle-container"], ["class", "particle", 4, "ngFor", "ngForOf"], [1, "container"], ["class", "social-links", 4, "ngIf"], [4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-dialog"], [1, "card"], [1, "card-img"], ["src", "../../../assets/image/pop-image.jpg", 1, "img-fluid"], [1, "card-title"], [1, "card-text"], [1, "btn"], [1, "particle"], [1, "social-links"], ["href", "https://www.facebook.com/lindojen/", "target", "_blank", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/lindojen/", "target", "_blank", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "https://www.twitter.com/lindojen/", "target", "_blank", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "https://www.github.com/lindojen/", "target", "_blank", 1, "github"], [1, "fa", "fa-github"], ["href", "https://www.steamcommunity.com/profiles/76561198082198783/", "target", "_blank", 1, "steam"], [1, "fa", "fa-steam"], [1, "home-nav-menu"], ["routerLink", "/web/persona"], [1, "fa", "fa-user-secret"], ["routerLink", "/web/itinerary"], [1, "fa", "fa-snowflake-o"], ["routerLink", "/web/eminent"], [1, "fa", "fa-star"], ["routerLink", "/web/fascinate"], [1, "fa", "fa-magic"], ["routerLink", "/gazette/blog"], [1, "fa", "fa-server"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 13, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "JENKIN ANTO X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 11, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 22, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enableMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["#home[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background: url('home-img.jpg') no-repeat;\n  background-size: cover;\n  position: relative;\n}\n#home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n#home[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n#home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin-left: 20%;\n  font-size: 64px;\n  font-weight: 900;\n  line-height: 56px;\n  background-image: linear-gradient(90deg, #c85c1d, #52d1cb, #d126a4);\n  background-repeat: no-repeat;\n  font-family: \"comfortaa\", \"Roboto\", \"Arial\", \"sans-serif\";\n  background-size: 80% 100%;\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  animation: shine 6s linear infinite;\n}\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 0 0;\n}\n.home-nav-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80%;\n  right: 0;\n  left: 0;\n  width: 319px;\n  display: table;\n  margin: 0 auto;\n  transform: translateY(-50%);\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  width: 33.333%;\n  display: table-cell;\n  text-align: center;\n  color: #949494;\n  text-decoration: none;\n  font-family: \"comfortaa\", \"Roboto\", \"Arial\", \"sans-serif\";\n  font-weight: bold;\n  padding: 10px 20px;\n  transition: 0.2s ease color;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: 0.2s ease transform;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  top: 0;\n  left: 10px;\n  width: 6px;\n  height: 6px;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  top: 5px;\n  left: 18px;\n  width: 4px;\n  height: 4px;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  transform: scale(1);\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):before {\n  background-color: #800080;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):after {\n  background-color: #d87093;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):before {\n  background-color: #dba170;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):after {\n  background-color: #70dbdb;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):before {\n  background-color: #e35e83;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):after {\n  background-color: #c038bc;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):before {\n  background-color: #00e2ff;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):after {\n  background-color: #5a977e;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):before {\n  background-color: #ffff00;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):after {\n  background-color: #e56767;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):hover {\n  color: #d87093;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):hover {\n  color: #70dbdb;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):hover {\n  color: #c038bc;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):hover {\n  color: #5a977e;\n}\n.home-nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):hover {\n  color: #e56767;\n}\n@media (min-width: 992px) {\n  #home[_ngcontent-%COMP%] {\n    padding-left: 160px;\n  }\n}\n@media (max-width: 992px) {\n  #home[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  #home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n  }\n\n  #home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n  #home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    margin-left: -45%;\n  }\n}\n@media (max-width: 465px) {\n  #home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    margin-left: -10%;\n  }\n\n  #home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-top: 40%;\n  }\n}\n@media (max-width: 992px) and (max-height: 540px) {\n  #home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    margin-left: -5% !important;\n  }\n}\n@keyframes shine {\n  0% {\n    background-position: -500% 0;\n  }\n  100% {\n    background-position: 500% 0;\n  }\n}\n.particle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n}\n@keyframes particle-animation-1 {\n  100% {\n    transform: translate3d(47vw, 8vh, 65px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(1) {\n  animation: particle-animation-1 60s infinite;\n  opacity: 0.9;\n  height: 11px;\n  width: 11px;\n  animation-delay: -0.2s;\n  transform: translate3d(30vw, 39vh, 18px);\n  background: #85d926;\n}\n@keyframes particle-animation-2 {\n  100% {\n    transform: translate3d(35vw, 25vh, 51px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(2) {\n  animation: particle-animation-2 60s infinite;\n  opacity: 0.61;\n  height: 21px;\n  width: 21px;\n  animation-delay: -0.4s;\n  transform: translate3d(14vw, 67vh, 57px);\n  background: #26d991;\n}\n@keyframes particle-animation-3 {\n  100% {\n    transform: translate3d(44vw, 51vh, 5px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(3) {\n  animation: particle-animation-3 60s infinite;\n  opacity: 0.81;\n  height: 21px;\n  width: 21px;\n  animation-delay: -0.6s;\n  transform: translate3d(83vw, 52vh, 66px);\n  background: #d9cd26;\n}\n@keyframes particle-animation-4 {\n  100% {\n    transform: translate3d(51vw, 8vh, 43px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(4) {\n  animation: particle-animation-4 60s infinite;\n  opacity: 0.6;\n  height: 9px;\n  width: 9px;\n  animation-delay: -0.8s;\n  transform: translate3d(45vw, 79vh, 79px);\n  background: #8026d9;\n}\n@keyframes particle-animation-5 {\n  100% {\n    transform: translate3d(5vw, 83vh, 77px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(5) {\n  animation: particle-animation-5 60s infinite;\n  opacity: 0.89;\n  height: 14px;\n  width: 14px;\n  animation-delay: -1s;\n  transform: translate3d(57vw, 26vh, 85px);\n  background: #d9d626;\n}\n@keyframes particle-animation-6 {\n  100% {\n    transform: translate3d(2vw, 23vh, 36px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(6) {\n  animation: particle-animation-6 60s infinite;\n  opacity: 0.09;\n  height: 19px;\n  width: 19px;\n  animation-delay: -1.2s;\n  transform: translate3d(39vw, 46vh, 82px);\n  background: #d92632;\n}\n@keyframes particle-animation-7 {\n  100% {\n    transform: translate3d(79vw, 18vh, 39px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(7) {\n  animation: particle-animation-7 60s infinite;\n  opacity: 0.43;\n  height: 19px;\n  width: 19px;\n  animation-delay: -1.4s;\n  transform: translate3d(87vw, 41vh, 58px);\n  background: #d97d26;\n}\n@keyframes particle-animation-8 {\n  100% {\n    transform: translate3d(23vw, 82vh, 71px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(8) {\n  animation: particle-animation-8 60s infinite;\n  opacity: 0.74;\n  height: 16px;\n  width: 16px;\n  animation-delay: -1.6s;\n  transform: translate3d(46vw, 36vh, 46px);\n  background: #a026d9;\n}\n@keyframes particle-animation-9 {\n  100% {\n    transform: translate3d(48vw, 88vh, 31px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(9) {\n  animation: particle-animation-9 60s infinite;\n  opacity: 0.01;\n  height: 14px;\n  width: 14px;\n  animation-delay: -1.8s;\n  transform: translate3d(65vw, 34vh, 59px);\n  background: #d94426;\n}\n@keyframes particle-animation-10 {\n  100% {\n    transform: translate3d(7vw, 76vh, 13px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(10) {\n  animation: particle-animation-10 60s infinite;\n  opacity: 0.07;\n  height: 13px;\n  width: 13px;\n  animation-delay: -2s;\n  transform: translate3d(71vw, 41vh, 37px);\n  background: #2688d9;\n}\n@keyframes particle-animation-11 {\n  100% {\n    transform: translate3d(51vw, 82vh, 5px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(11) {\n  animation: particle-animation-11 60s infinite;\n  opacity: 0.58;\n  height: 20px;\n  width: 20px;\n  animation-delay: -2.2s;\n  transform: translate3d(82vw, 86vh, 63px);\n  background: #26d977;\n}\n@keyframes particle-animation-12 {\n  100% {\n    transform: translate3d(52vw, 75vh, 7px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(12) {\n  animation: particle-animation-12 60s infinite;\n  opacity: 0.45;\n  height: 12px;\n  width: 12px;\n  animation-delay: -2.4s;\n  transform: translate3d(65vw, 18vh, 99px);\n  background: #26d94a;\n}\n@keyframes particle-animation-13 {\n  100% {\n    transform: translate3d(51vw, 29vh, 62px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(13) {\n  animation: particle-animation-13 60s infinite;\n  opacity: 0.03;\n  height: 16px;\n  width: 16px;\n  animation-delay: -2.6s;\n  transform: translate3d(13vw, 65vh, 41px);\n  background: #d9cd26;\n}\n@keyframes particle-animation-14 {\n  100% {\n    transform: translate3d(36vw, 49vh, 34px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(14) {\n  animation: particle-animation-14 60s infinite;\n  opacity: 0.99;\n  height: 10px;\n  width: 10px;\n  animation-delay: -2.8s;\n  transform: translate3d(13vw, 38vh, 100px);\n  background: #d9ca26;\n}\n@keyframes particle-animation-15 {\n  100% {\n    transform: translate3d(74vw, 79vh, 77px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(15) {\n  animation: particle-animation-15 60s infinite;\n  opacity: 0.59;\n  height: 15px;\n  width: 15px;\n  animation-delay: -3s;\n  transform: translate3d(67vw, 26vh, 13px);\n  background: #2677d9;\n}\n@keyframes particle-animation-16 {\n  100% {\n    transform: translate3d(88vw, 10vh, 78px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(16) {\n  animation: particle-animation-16 60s infinite;\n  opacity: 0.92;\n  height: 17px;\n  width: 17px;\n  animation-delay: -3.2s;\n  transform: translate3d(85vw, 68vh, 44px);\n  background: #d9a926;\n}\n@keyframes particle-animation-17 {\n  100% {\n    transform: translate3d(72vw, 48vh, 12px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(17) {\n  animation: particle-animation-17 60s infinite;\n  opacity: 0.37;\n  height: 18px;\n  width: 18px;\n  animation-delay: -3.4s;\n  transform: translate3d(61vw, 44vh, 66px);\n  background: #26d953;\n}\n@keyframes particle-animation-18 {\n  100% {\n    transform: translate3d(52vw, 37vh, 80px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(18) {\n  animation: particle-animation-18 60s infinite;\n  opacity: 0.67;\n  height: 17px;\n  width: 17px;\n  animation-delay: -3.6s;\n  transform: translate3d(18vw, 76vh, 47px);\n  background: #26d956;\n}\n@keyframes particle-animation-19 {\n  100% {\n    transform: translate3d(15vw, 87vh, 67px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(19) {\n  animation: particle-animation-19 60s infinite;\n  opacity: 0.95;\n  height: 13px;\n  width: 13px;\n  animation-delay: -3.8s;\n  transform: translate3d(87vw, 47vh, 20px);\n  background: #26d99a;\n}\n@keyframes particle-animation-20 {\n  100% {\n    transform: translate3d(53vw, 20vh, 22px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(20) {\n  animation: particle-animation-20 60s infinite;\n  opacity: 0.75;\n  height: 9px;\n  width: 9px;\n  animation-delay: -4s;\n  transform: translate3d(24vw, 36vh, 16px);\n  background: #26d9d3;\n}\n@keyframes particle-animation-21 {\n  100% {\n    transform: translate3d(9vw, 89vh, 92px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(21) {\n  animation: particle-animation-21 60s infinite;\n  opacity: 0.83;\n  height: 23px;\n  width: 23px;\n  animation-delay: -4.2s;\n  transform: translate3d(34vw, 13vh, 64px);\n  background: #26cdd9;\n}\n@keyframes particle-animation-22 {\n  100% {\n    transform: translate3d(47vw, 90vh, 39px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(22) {\n  animation: particle-animation-22 60s infinite;\n  opacity: 0.9;\n  height: 20px;\n  width: 20px;\n  animation-delay: -4.4s;\n  transform: translate3d(25vw, 31vh, 60px);\n  background: #26d9c7;\n}\n@keyframes particle-animation-23 {\n  100% {\n    transform: translate3d(44vw, 12vh, 70px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(23) {\n  animation: particle-animation-23 60s infinite;\n  opacity: 0.71;\n  height: 19px;\n  width: 19px;\n  animation-delay: -4.6s;\n  transform: translate3d(35vw, 84vh, 87px);\n  background: #26d938;\n}\n@keyframes particle-animation-24 {\n  100% {\n    transform: translate3d(8vw, 36vh, 27px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(24) {\n  animation: particle-animation-24 60s infinite;\n  opacity: 0.77;\n  height: 16px;\n  width: 16px;\n  animation-delay: -4.8s;\n  transform: translate3d(80vw, 14vh, 36px);\n  background: #4426d9;\n}\n@keyframes particle-animation-25 {\n  100% {\n    transform: translate3d(28vw, 58vh, 57px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(25) {\n  animation: particle-animation-25 60s infinite;\n  opacity: 0.86;\n  height: 12px;\n  width: 12px;\n  animation-delay: -5s;\n  transform: translate3d(5vw, 83vh, 70px);\n  background: #26bbd9;\n}\n@keyframes particle-animation-26 {\n  100% {\n    transform: translate3d(86vw, 79vh, 88px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(26) {\n  animation: particle-animation-26 60s infinite;\n  opacity: 0.27;\n  height: 18px;\n  width: 18px;\n  animation-delay: -5.2s;\n  transform: translate3d(87vw, 66vh, 12px);\n  background: #d9265c;\n}\n@keyframes particle-animation-27 {\n  100% {\n    transform: translate3d(47vw, 33vh, 90px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(27) {\n  animation: particle-animation-27 60s infinite;\n  opacity: 0.18;\n  height: 14px;\n  width: 14px;\n  animation-delay: -5.4s;\n  transform: translate3d(34vw, 33vh, 64px);\n  background: #59d926;\n}\n@keyframes particle-animation-28 {\n  100% {\n    transform: translate3d(9vw, 57vh, 59px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(28) {\n  animation: particle-animation-28 60s infinite;\n  opacity: 0.49;\n  height: 23px;\n  width: 23px;\n  animation-delay: -5.6s;\n  transform: translate3d(44vw, 84vh, 76px);\n  background: #a6d926;\n}\n@keyframes particle-animation-29 {\n  100% {\n    transform: translate3d(18vw, 85vh, 77px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(29) {\n  animation: particle-animation-29 60s infinite;\n  opacity: 0.18;\n  height: 16px;\n  width: 16px;\n  animation-delay: -5.8s;\n  transform: translate3d(70vw, 59vh, 80px);\n  background: #26afd9;\n}\n@keyframes particle-animation-30 {\n  100% {\n    transform: translate3d(43vw, 61vh, 31px);\n  }\n}\n.particle[_ngcontent-%COMP%]:nth-child(30) {\n  animation: particle-animation-30 60s infinite;\n  opacity: 0.84;\n  height: 12px;\n  width: 12px;\n  animation-delay: -6s;\n  transform: translate3d(34vw, 74vh, 41px);\n  background: #d9d626;\n}\n.mt-100[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.modal[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 20%;\n  margin-left: 5%;\n}\n.modal-button[_ngcontent-%COMP%] {\n  background-color: #1de2e2;\n  border-color: #1de2e2;\n  border-radius: 6px;\n  color: white;\n  font-size: 17px;\n  padding-right: 76px;\n  padding-left: 76px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 3vh;\n  margin: auto;\n  max-width: 380px;\n  padding: 7vh 6vh;\n  align-items: center;\n  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n.card-img[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 40%;\n}\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n.card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #1de2e2;\n  font-weight: 900;\n  font-size: 30px;\n  margin-bottom: unset;\n}\n.card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 25px;\n  text-align: center;\n  padding: 3vh 0;\n  font-weight: lighter;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #1de2e2;\n  border-color: #1de2e2;\n  border-radius: 25px;\n  color: white;\n  font-size: 20px;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  box-shadow: none;\n  color: white;\n  -webkit-box-shadow: none;\n  -webkit-user-select: none;\n  transition: none;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OytEQUFBO0FBcUVBOzsrREFBQTtBQ25FQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBS0o7QUFGQTtFQUNFLGVBQUE7QUFLRjtBQUZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUtKO0FBRkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRUFBQTtFQUNBLDRCQUFBO0VBQ0EseUREeUNXO0VDeENYLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUFLSjtBQUZBO0VBQ0ksa0JBQUE7QUFLSjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUtKO0FBRkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0QxQm1CO0VDMkJuQixxQkFBQTtFQUNBLHlERFdXO0VDVlgsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBS0o7QUFGQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUtKO0FBRkE7RUFDSSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBS0o7QUFGQTtFQUNJLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFLSjtBQUZBO0VBQ0ksbUJBQUE7QUFLSjtB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QUFBO0FBbWJKO0FBaGJBO0VBQ0k7SUFDSSxXQUFBO0VBbWJOO0FBQ0Y7QUFoYkE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQWtiSjtBQS9hQTtFQUNJLFlBQUE7QUFrYko7QUEvYUE7RUFDSSxvQkFBQTtBQWtiSjtBQS9hQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQWtiSjtBQS9hQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFrYko7QUEvYUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFrYko7QUEvYUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFrYko7QUEvYUE7RUFDSSxZQUFBO0FBa2JKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgQ29sb3JcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHJcbiRjb2xvci1sb2FkZXItYTogI2ZmNGI1YztcclxuJGNvbG9yLWxvYWRlci1iOiAjYTRiNzg3O1xyXG4kY29sb3ItbG9hZGVyLWM6ICNmZmJiOTE7XHJcbiRjb2xvci1sb2FkZXItZDogIzY2YmZiZjtcclxuXHJcbiRjb2xvci1tZW51OiAjZTExMDY0O1xyXG4kY29sb3ItbWVudS1ob3ZlcjogI2NjZDE0NDtcclxuJGNvbG9yLW1lbnUtYmFja2dyb3VuZDogI2U2ZTllYztcclxuJGNvbG9yLWxpbms6ICNlMTEwNjQ7XHJcbiRjb2xvci1saW5rLWhvdmVyOiAjY2NkMTQ0O1xyXG4kY29sb3ItYm9keTogIzI3MjgyOTtcclxuXHJcblxyXG4kY29sb3ItYmxhY2s6ICMwMDA7XHJcbiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWZsb3JhbC13aGl0ZTogI2ZmZmFmMDtcclxuJGNvbG9yLXdoaXRlLWxpZ2h0LWxpdHRsZTogI2U2ZTllYztcclxuJGNvbG9yLWJsYWNrLWRhcmstbGl0dGxlOiAjMjIyODMxO1xyXG4kY29sb3ItYmxhY2stYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kY29sb3ItZ3JheS1kYXJrLWxpdHRsZTogIzVkNWM2MTtcclxuJGNvbG9yLWdyYXktbGlnaHQ6ICMzNzk2ODM7XHJcbiRjb2xvci1tYXJvb24tZGFyazogIzk1MDc0MDtcclxuJGNvbG9yLW1hcm9vbi1saWdodDogI2UxMTA2NDtcclxuJGNvbG9yLWdvbGQtbGlnaHQ6ICNjY2QxNDQ7XHJcbiRjb2xvci1nb2xkLW1lZGl1bTogI2JkYjc2YjtcclxuJGNvbG9yLWJsYWNrLWxpZ2h0OiAjNTU1NTRlO1xyXG4kY29sb3ItYnJvd24tbGlnaHQ6ICNkN2Q0YmU7XHJcblxyXG4kY29sb3ItaG9tZS1tZW51LWZvbnQ6ICM5NDk0OTQ7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtMTogIzgwMDA4MDtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTE6ICNkODcwOTM7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtMjogI2RiYTE3MDtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTI6ICM3MGRiZGI7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtMzogI2UzNWU4MztcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTM6ICNjMDM4YmM7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtNDogIzAwZTJmZjtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTQ6ICM1YTk3N2U7XHJcbiRjb2xvci1ob21lLW1lbnUtbGlnaHQtNTogI2ZmZmYwMDtcclxuJGNvbG9yLWhvbWUtbWVudS1kYXJrLTU6ICNlNTY3Njc7XHJcblxyXG4kY29sb3ItaG9tZS10ZXh0LTE6ICNjODVjMWQ7XHJcbiRjb2xvci1ob21lLXRleHQtMjogIzUyZDFjYjtcclxuJGNvbG9yLWhvbWUtdGV4dC0zOiAjZDEyNmE0O1xyXG5cclxuJGNvbG9yLWZhY2Vib29rOiAjM2I1OTk5O1xyXG4kY29sb3ItaW5zdGFncmFtOiAjZDc4MTkxO1xyXG4kY29sb3ItdHdpdHRlcjogIzU1YWNlZTtcclxuJGNvbG9yLWdpdGh1YjogIzQwNzhjMDtcclxuJGNvbG9yLXN0ZWFtOiAjNTA5YjdmO1xyXG5cclxuJGNvbG9yLWZhY2Vib29rLWRhcms6ICMwYzM1OGQ7XHJcbiRjb2xvci1pbnN0YWdyYW0tZGFyazogI2I0M2M1MztcclxuJGNvbG9yLXR3aXR0ZXItZGFyazogIzIyOTZlZDtcclxuJGNvbG9yLWdpdGh1Yi1kYXJrOiAjMTQ1ZmMwO1xyXG4kY29sb3Itc3RlYW0tZGFyazogIzNlN2U2NjtcclxuXHJcbiRjbG9zZS1kZWZhdWx0OiAjOTUwNzQwO1xyXG4kY2xvc2UtaG92ZXI6ICM1NTU1NGU7XHJcblxyXG4kdGFibGUtc3BhY2luZy11bml0OiAyNHB4O1xyXG4kaGFsZi10YWJsZS1zcGFjaW5nLXVuaXQ6ICR0YWJsZS1zcGFjaW5nLXVuaXQgLyAyO1xyXG5cclxuJHRhYmxlLWhpZ2hsaWdodDogI0VFRUVFRTtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBGb250XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGZvbnQtZ2VuZXJhbDogJ2NvbWZvcnRhYScsJ1JvYm90bycsJ0FyaWFsJywnc2Fucy1zZXJpZic7XHJcbiRmb250LXByaW1hcnk6ICdjb21mb3J0YWEnLCdBcmlhbCcsJ3NhbnMtc2VyaWYnO1xyXG4kZm9udC1zZWNvbmRhcnk6ICdSb2JvdG8nLCdzYW5zLXNlcmlmJzsiLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4jaG9tZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvaG9tZS1pbWcuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNob21lIC5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG4gIFxyXG4jaG9tZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4gIFxyXG4jaG9tZSBoMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7ICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGNvbG9yLWhvbWUtdGV4dC0xLCAkY29sb3ItaG9tZS10ZXh0LTIsICRjb2xvci1ob21lLXRleHQtMyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWdlbmVyYWw7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBhbmltYXRpb246IHNoaW5lIDZzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4gIFxyXG4jaG9tZSBwIHtcclxuICAgIG1hcmdpbjogMTVweCAwIDAgMDtcclxufVxyXG5cclxuLmhvbWUtbmF2LW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMzE5cHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkY29sb3ItaG9tZS1tZW51LWZvbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZ2VuZXJhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGNvbG9yO1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOmJlZm9yZSwgbmF2IGE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOmJlZm9yZSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOmFmdGVyIHtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogMThweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDRweFxyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOmhvdmVyOmJlZm9yZSwgbmF2IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLmhvbWUtbmF2LW1lbnUgYTpudGgtY2hpbGQoMSk6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ob21lLW1lbnUtbGlnaHQtMTtcclxufVxyXG5cclxuLmhvbWUtbmF2LW1lbnUgYTpudGgtY2hpbGQoMSk6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhvbWUtbWVudS1kYXJrLTE7XHJcbn1cclxuXHJcbi5ob21lLW5hdi1tZW51IGE6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaG9tZS1tZW51LWxpZ2h0LTI7XHJcbn1cclxuXHJcbi5ob21lLW5hdi1tZW51IGE6bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ob21lLW1lbnUtZGFyay0yO1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOm50aC1jaGlsZCgzKTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhvbWUtbWVudS1saWdodC0zO1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOm50aC1jaGlsZCgzKTphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaG9tZS1tZW51LWRhcmstMztcclxufVxyXG5cclxuLmhvbWUtbmF2LW1lbnUgYTpudGgtY2hpbGQoNCk6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ob21lLW1lbnUtbGlnaHQtNDtcclxufVxyXG5cclxuLmhvbWUtbmF2LW1lbnUgYTpudGgtY2hpbGQoNCk6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhvbWUtbWVudS1kYXJrLTQ7XHJcbn1cclxuXHJcbi5ob21lLW5hdi1tZW51IGE6bnRoLWNoaWxkKDUpOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaG9tZS1tZW51LWxpZ2h0LTU7XHJcbn1cclxuXHJcbi5ob21lLW5hdi1tZW51IGE6bnRoLWNoaWxkKDUpOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ob21lLW1lbnUtZGFyay01O1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOm50aC1jaGlsZCgxKTpob3ZlciB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWhvbWUtbWVudS1kYXJrLTE7XHJcbn1cclxuXHJcbi5ob21lLW5hdi1tZW51IGE6bnRoLWNoaWxkKDIpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkY29sb3ItaG9tZS1tZW51LWRhcmstMjtcclxufVxyXG5cclxuLmhvbWUtbmF2LW1lbnUgYTpudGgtY2hpbGQoMyk6aG92ZXIge1xyXG4gICAgY29sb3I6ICRjb2xvci1ob21lLW1lbnUtZGFyay0zO1xyXG59XHJcblxyXG4uaG9tZS1uYXYtbWVudSBhOm50aC1jaGlsZCg0KTpob3ZlciB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWhvbWUtbWVudS1kYXJrLTQ7XHJcbn1cclxuXHJcbi5ob21lLW5hdi1tZW51IGE6bnRoLWNoaWxkKDUpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkY29sb3ItaG9tZS1tZW51LWRhcmstNTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjaG9tZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTYwcHg7XHJcbiAgICB9XHJcbn1cclxuICBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjaG9tZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICNob21lIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIH1cclxuICAgICNob21lIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gICAgI2hvbWUgaDEsICNob21lIC5zb2NpYWwtbGlua3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDY1cHgpIHtcclxuICAjaG9tZSBoMSwgI2hvbWUgLnNvY2lhbC1saW5rcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcclxuICB9XHJcbiAgI2hvbWUgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWF4LWhlaWdodDogNTQwcHgpIHtcclxuICAgICNob21lIGgxLCAjaG9tZSAuc29jaWFsLWxpbmtzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01JSAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGluZSB7XHJcbiAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTAwJSAwO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MDAlIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXJ0aWNsZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMzAge1xyXG5cdEBrZXlmcmFtZXMgcGFydGljbGUtYW5pbWF0aW9uLSN7JGl9IHtcclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKChyYW5kb20oOTApICogMXZ3KSwgKHJhbmRvbSg5MCkgKiAxdmgpLCAocmFuZG9tKDEwMCkgKiAxcHgpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LnBhcnRpY2xlOm50aC1jaGlsZCgjeyRpfSl7XHJcblx0XHRhbmltYXRpb246IHBhcnRpY2xlLWFuaW1hdGlvbi0jeyRpfSA2MHMgaW5maW5pdGU7XHJcblx0XHQkc2l6ZTogcmFuZG9tKDE1KSArIDggKyBweDtcclxuXHRcdG9wYWNpdHk6IHJhbmRvbSgxMDApLzEwMDtcclxuXHRcdGhlaWdodDogJHNpemU7XHJcblx0XHR3aWR0aDogJHNpemU7XHJcblx0XHRhbmltYXRpb24tZGVsYXk6IC0kaSAqIC4ycztcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoKHJhbmRvbSg5MCkgKiAxdncpLCAocmFuZG9tKDkwKSAqIDF2aCksIChyYW5kb20oMTAwKSAqIDFweCkpO1xyXG5cdFx0YmFja2dyb3VuZDogaHNsKHJhbmRvbSgzNjApLCA3MCUsIDUwJSk7XHJcblx0fVxyXG59XHJcblxyXG4ubXQtMTAwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLm1vZGFsLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDIyNiwgMjI2KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI5LCAyMjYsIDIyNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3NnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3NnB4XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDN2aDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogMzgwcHg7XHJcbiAgICBwYWRkaW5nOiA3dmggNnZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogOTB2d1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgd2lkdGg6IDQwJVxyXG59XHJcblxyXG4uY2FyZC1pbWcgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuN1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB1bnNldFxyXG59XHJcblxyXG4uY2FyZC10aXRsZSBwIHtcclxuICAgIGNvbG9yOiByZ2IoMjksIDIyNiwgMjI2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB1bnNldFxyXG59XHJcblxyXG4uY2FyZC10ZXh0IHAge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzdmggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDIyNiwgMjI2KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI5LCAyMjYsIDIyNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcbn1cclxuXHJcbi5idG46Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG5vbmVcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


/***/ }),

/***/ "9ilz":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-content/blog-content.component */ "ZCni");
/* harmony import */ var _blog_content_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-content/blog-item/blog-item.component */ "Gs0i");
/* harmony import */ var _homeblog_homeblog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeblog/homeblog.component */ "BYWQ");







const routes = [
    { path: '', redirectTo: '/gazette/blog', pathMatch: 'full' },
    { path: 'blog', component: _homeblog_homeblog_component__WEBPACK_IMPORTED_MODULE_4__["HomeblogComponent"], data: { animation: 'blogPage' } },
    { path: 'content', component: _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_2__["BlogContentComponent"], data: { animation: 'contentPage' } },
    { path: 'item/:id', component: _blog_content_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_3__["BlogItemComponent"], data: { animation: 'itemPage' } }
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AgZI":
/*!**************************************************!*\
  !*** ./src/app/web/persona/persona.component.ts ***!
  \**************************************************/
/*! exports provided: PersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaComponent", function() { return PersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class PersonaComponent {
    constructor() {
        this.label = 'Resume';
        this.downloadValue = '';
    }
    changeLabel() {
        this.label = 'Invalid Code';
        this.downloadValue = '';
    }
}
PersonaComponent.ɵfac = function PersonaComponent_Factory(t) { return new (t || PersonaComponent)(); };
PersonaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonaComponent, selectors: [["app-persona"]], decls: 86, vars: 2, consts: [["id", "persona", 1, "persona"], [1, "about-me", "container", "about-container"], [1, "section-left-title"], [1, "row", "about-content"], [1, "col-lg-4"], ["src", "assets/image/profile-img.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-8", "pt-4", "pt-lg-0", "content"], [1, "font-italic", "data-color"], [1, "row", "detail"], [1, "col-lg-6"], [1, "icofont-rounded-right"], [1, "row"], [1, "social-links"], ["href", "https://www.facebook.com/lindojen/", "target", "_blank", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/lindojen/", "target", "_blank", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "https://www.twitter.com/lindojen/", "target", "_blank", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "https://www.github.com/lindojen/", "target", "_blank", 1, "github"], [1, "fa", "fa-github"], ["href", "https://www.steamcommunity.com/profiles/76561198082198783/", "target", "_blank", 1, "steam"], [1, "fa", "fa-steam"], [1, "wrapper"], ["type", "checkbox", "id", "click"], ["for", "click", 1, "resume-button"], [1, "resume-field"], ["type", "text", "placeholder", "Download Code", 3, "ngModel", "ngModelChange"], ["for", "click", 1, "download-button", 3, "click"], [1, "row", "explain", "data-color"], [1, "col-lg-12"]], template: function PersonaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Learn more about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Web & Cloud Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I may not be perfect, but I\u2019m always me with jovial mood, Being thankful What I have and I love what I do. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Jenkin Anto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Designation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Senior Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " +91 **** *** 079");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Nagercoil, Kanyakumari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Birthday:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 5 June 1991");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Degree:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Post Graduate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " *****jen@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Language:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Tamil, English, French");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonaComponent_Template_input_ngModelChange_79_listener($event) { return ctx.downloadValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonaComponent_Template_label_click_80_listener() { return ctx.changeLabel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "I'm blessed and I thank God every day for everything that happens for me. I am usually quite and I don't like attention and keeping everyone jovial mood around me. My hobbies is to watch series ~ movies ~ sports, playing football ~ cricket ~ badminton ~ video games, listening to music, coin ~ card ~ unqiue collection of item. For me, family always come first no matter if any other things come, it will be always next. That made me to have a loving family and take every step forward in my life and finally not to forgot my friends, I may have lot of friends but I am always stick to the best friends, you all know who are they. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.downloadValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".about-content[_ngcontent-%COMP%] {\n  color: #ccd144;\n}\nh2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"comfortaa\", \"Roboto\", \"Arial\", \"sans-serif\";\n}\n.detail[_ngcontent-%COMP%] {\n  color: #e11064;\n}\n.data-color[_ngcontent-%COMP%] {\n  color: #d7d4be;\n}\n.about-me[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ccd144;\n  font-family: \"comfortaa\", \"Roboto\", \"Arial\", \"sans-serif\";\n}\n.about-me[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.about-me[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.about-me[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-right: 2px;\n  color: #ccd144;\n}\n.about-me[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.explain[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHBlcnNvbmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OytEQUFBO0FBcUVBOzsrREFBQTtBQ25FQTtFQUNJLGNEeUJlO0FDcEJuQjtBQUZBO0VBQ0kseUREaUVXO0FDNURmO0FBRkE7RUFDSSxjRGdCaUI7QUNYckI7QUFGQTtFQUNJLGNEZ0JnQjtBQ1hwQjtBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0RPZTtFQ05mLHlERGtEVztBQzdDZjtBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBS0o7QUFGQTtFQUNJLG9CQUFBO0FBS0o7QUFGQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNEVGU7QUNjbkI7QUFGQTtFQUNJLGdCQUFBO0FBS0o7QUFGQTtFQUNJLGlCQUFBO0FBS0oiLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBDb2xvclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRjb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cclxuJGNvbG9yLWxvYWRlci1hOiAjZmY0YjVjO1xyXG4kY29sb3ItbG9hZGVyLWI6ICNhNGI3ODc7XHJcbiRjb2xvci1sb2FkZXItYzogI2ZmYmI5MTtcclxuJGNvbG9yLWxvYWRlci1kOiAjNjZiZmJmO1xyXG5cclxuJGNvbG9yLW1lbnU6ICNlMTEwNjQ7XHJcbiRjb2xvci1tZW51LWhvdmVyOiAjY2NkMTQ0O1xyXG4kY29sb3ItbWVudS1iYWNrZ3JvdW5kOiAjZTZlOWVjO1xyXG4kY29sb3ItbGluazogI2UxMTA2NDtcclxuJGNvbG9yLWxpbmstaG92ZXI6ICNjY2QxNDQ7XHJcbiRjb2xvci1ib2R5OiAjMjcyODI5O1xyXG5cclxuXHJcbiRjb2xvci1ibGFjazogIzAwMDtcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZmxvcmFsLXdoaXRlOiAjZmZmYWYwO1xyXG4kY29sb3Itd2hpdGUtbGlnaHQtbGl0dGxlOiAjZTZlOWVjO1xyXG4kY29sb3ItYmxhY2stZGFyay1saXR0bGU6ICMyMjI4MzE7XHJcbiRjb2xvci1ibGFjay1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRjb2xvci1ncmF5LWRhcmstbGl0dGxlOiAjNWQ1YzYxO1xyXG4kY29sb3ItZ3JheS1saWdodDogIzM3OTY4MztcclxuJGNvbG9yLW1hcm9vbi1kYXJrOiAjOTUwNzQwO1xyXG4kY29sb3ItbWFyb29uLWxpZ2h0OiAjZTExMDY0O1xyXG4kY29sb3ItZ29sZC1saWdodDogI2NjZDE0NDtcclxuJGNvbG9yLWdvbGQtbWVkaXVtOiAjYmRiNzZiO1xyXG4kY29sb3ItYmxhY2stbGlnaHQ6ICM1NTU1NGU7XHJcbiRjb2xvci1icm93bi1saWdodDogI2Q3ZDRiZTtcclxuXHJcbiRjb2xvci1ob21lLW1lbnUtZm9udDogIzk0OTQ5NDtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0xOiAjODAwMDgwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMTogI2Q4NzA5MztcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0yOiAjZGJhMTcwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMjogIzcwZGJkYjtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0zOiAjZTM1ZTgzO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMzogI2MwMzhiYztcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC00OiAjMDBlMmZmO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstNDogIzVhOTc3ZTtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC01OiAjZmZmZjAwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstNTogI2U1Njc2NztcclxuXHJcbiRjb2xvci1ob21lLXRleHQtMTogI2M4NWMxZDtcclxuJGNvbG9yLWhvbWUtdGV4dC0yOiAjNTJkMWNiO1xyXG4kY29sb3ItaG9tZS10ZXh0LTM6ICNkMTI2YTQ7XHJcblxyXG4kY29sb3ItZmFjZWJvb2s6ICMzYjU5OTk7XHJcbiRjb2xvci1pbnN0YWdyYW06ICNkNzgxOTE7XHJcbiRjb2xvci10d2l0dGVyOiAjNTVhY2VlO1xyXG4kY29sb3ItZ2l0aHViOiAjNDA3OGMwO1xyXG4kY29sb3Itc3RlYW06ICM1MDliN2Y7XHJcblxyXG4kY29sb3ItZmFjZWJvb2stZGFyazogIzBjMzU4ZDtcclxuJGNvbG9yLWluc3RhZ3JhbS1kYXJrOiAjYjQzYzUzO1xyXG4kY29sb3ItdHdpdHRlci1kYXJrOiAjMjI5NmVkO1xyXG4kY29sb3ItZ2l0aHViLWRhcms6ICMxNDVmYzA7XHJcbiRjb2xvci1zdGVhbS1kYXJrOiAjM2U3ZTY2O1xyXG5cclxuJGNsb3NlLWRlZmF1bHQ6ICM5NTA3NDA7XHJcbiRjbG9zZS1ob3ZlcjogIzU1NTU0ZTtcclxuXHJcbiR0YWJsZS1zcGFjaW5nLXVuaXQ6IDI0cHg7XHJcbiRoYWxmLXRhYmxlLXNwYWNpbmctdW5pdDogJHRhYmxlLXNwYWNpbmctdW5pdCAvIDI7XHJcblxyXG4kdGFibGUtaGlnaGxpZ2h0OiAjRUVFRUVFO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIEZvbnRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZm9udC1nZW5lcmFsOiAnY29tZm9ydGFhJywnUm9ib3RvJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcclxuJGZvbnQtcHJpbWFyeTogJ2NvbWZvcnRhYScsJ0FyaWFsJywnc2Fucy1zZXJpZic7XHJcbiRmb250LXNlY29uZGFyeTogJ1JvYm90bycsJ3NhbnMtc2VyaWYnOyIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5hYm91dC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAkY29sb3ItZ29sZC1saWdodDtcclxufVxyXG5cclxuaDIgcCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZ2VuZXJhbDtcclxufVxyXG5cclxuLmRldGFpbCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLW1hcm9vbi1saWdodDtcclxufVxyXG5cclxuLmRhdGEtY29sb3Ige1xyXG4gICAgY29sb3I6ICRjb2xvci1icm93bi1saWdodDtcclxufVxyXG5cclxuLmFib3V0LW1lIC5jb250ZW50IGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogJGNvbG9yLWdvbGQtbGlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZ2VuZXJhbDtcclxufVxyXG4gIFxyXG4uYWJvdXQtbWUgLmNvbnRlbnQgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuICBcclxuLmFib3V0LW1lIC5jb250ZW50IHVsIGxpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiAgXHJcbi5hYm91dC1tZSAuY29udGVudCB1bCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiAkY29sb3ItZ29sZC1saWdodDtcclxufVxyXG4gIFxyXG4uYWJvdXQtbWUgLmNvbnRlbnQgcDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5leHBsYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-persona',
                templateUrl: './persona.component.html',
                styleUrls: ['./persona.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    domainName: 'https://www.jenkinanto.in'
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

/***/ "B4v+":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "JXfj");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "Y2Ng");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "aMKx");
/* harmony import */ var _web_web_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../web/web.module */ "wGiJ");
/* harmony import */ var _private_private_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../private/private.module */ "5+t2");
/* harmony import */ var _blog_blog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blog/blog.module */ "U4+L");











class ViewModule {
}
ViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewModule });
ViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewModule_Factory(t) { return new (t || ViewModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _web_web_module__WEBPACK_IMPORTED_MODULE_7__["WebModule"],
            _private_private_module__WEBPACK_IMPORTED_MODULE_8__["PrivateModule"],
            _blog_blog_module__WEBPACK_IMPORTED_MODULE_9__["BlogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _web_web_module__WEBPACK_IMPORTED_MODULE_7__["WebModule"],
        _private_private_module__WEBPACK_IMPORTED_MODULE_8__["PrivateModule"],
        _blog_blog_module__WEBPACK_IMPORTED_MODULE_9__["BlogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _web_web_module__WEBPACK_IMPORTED_MODULE_7__["WebModule"],
                    _private_private_module__WEBPACK_IMPORTED_MODULE_8__["PrivateModule"],
                    _blog_blog_module__WEBPACK_IMPORTED_MODULE_9__["BlogModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "BYWQ":
/*!*****************************************************!*\
  !*** ./src/app/blog/homeblog/homeblog.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeblogComponent", function() { return HomeblogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/blog.service */ "hRo8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeblogComponent {
    constructor(blogService) {
        this.blogService = blogService;
        this.blogs = [];
        this.blogs = this.blogService.getBlogs();
    }
}
HomeblogComponent.ɵfac = function HomeblogComponent_Factory(t) { return new (t || HomeblogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
HomeblogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeblogComponent, selectors: [["app-homeblog"]], decls: 85, vars: 9, consts: [["id", "blog", 1, "itinerary"], [1, "timeline", "container", "timeline-container"], [1, "section-left-title"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title"], [1, "titles"], [1, "title", "title-line", "text-uppercase", "mb-4", "pb-4"], [1, "sub-text", "mx-auto", "para-desc", "mb-0"], [1, "row"], ["routerLink", "/gazette/content", 1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2", "blog-set"], [1, "blog-post", "rounded", "shadow"], ["src", "assets/image/blog-img-1.jpg", "alt", "", 1, "img-fluid", "rounded-top"], [1, "content", "pt-4", "pb-4", "p-3"], [1, "list-unstyled", "d-flex", "justify-content-between", "post-meta"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-tag", "fea", "icon-sm", "mr-1"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], [1, "mb-3"], [1, "title", "text-dark"], [1, "list-unstyled", "mb-0", "pt-3", "border-top", "d-flex", "justify-content-between"], ["routerLink", "/gazette/content", 1, "text-dark"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-right", "fea", "icon-sm"], ["points", "9 18 15 12 9 6"], [1, "mdi", "mdi-calendar-edit", "mr-1"], ["src", "assets/image/blog-img-2.jpg", "alt", "", 1, "img-fluid", "rounded-top"], ["src", "assets/image/blog-img-3.jpg", "alt", "", 1, "img-fluid", "rounded-top"]], template: function HomeblogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Latest News & Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "If you know a good thing, share that knowledge with others so they can light up their life in it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "polyline", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "polyline", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "polyline", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[0].category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[0].date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[1].category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[1].date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[1].category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs[2].date);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".blog-post[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n\n.blog-post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n\n.blog-post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover {\n  color: #e54b4b !important;\n}\n\n.blog-post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n\n.blog-post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e54b4b !important;\n}\n\n.blog-post[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 25px rgba(60, 72, 88, 0.15) !important;\n  background: #ffffff;\n  transform: translateY(-5px);\n}\n\n.rounded-top[_ngcontent-%COMP%] {\n  border-top-left-radius: 7px !important;\n  border-top-right-radius: 7px !important;\n}\n\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #3c4858 !important;\n}\n\n.blog-set[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  cursor: pointer;\n  outline: none !important;\n}\n\n.title-line[_ngcontent-%COMP%] {\n  color: #bdb76b;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  color: #cedce7 !important;\n}\n\n.blog-post[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUVBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBRUkseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFFWSx5REFBQTtFQUNSLG1CQUFBO0VBRVEsMkJBQUE7QUFDWjs7QUFFQTtFQUNJLHNDQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFFQTtFQUNJLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6ImhvbWVibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctcG9zdCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcbiAgXHJcbi5ibG9nLXBvc3QgLmNvbnRlbnQgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcbiAgXHJcbi5ibG9nLXBvc3QgLmNvbnRlbnQgLnRpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZTU0YjRiICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLmJsb2ctcG9zdCAuY29udGVudCBhIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuICBcclxuLmJsb2ctcG9zdCAuY29udGVudCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZTU0YjRiICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLmJsb2ctcG9zdDpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoNjAsIDcyLCA4OCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSg2MCwgNzIsIDg4LCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuXHJcbi5yb3VuZGVkLXRvcCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci10b3Age1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtZGFyayB7XHJcbiAgICBjb2xvcjogIzNjNDg1OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmxvZy1zZXQge1xyXG4gIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxlLWxpbmUge1xyXG4gICAgY29sb3I6ICNiZGI3NmI7XHJcbn1cclxuXHJcbi5zdWItdGV4dCB7XHJcbiAgICBjb2xvcjogI2NlZGNlNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmxvZy1wb3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeblogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homeblog',
                templateUrl: './homeblog.component.html',
                styleUrls: ['./homeblog.component.scss']
            }]
    }], function () { return [{ type: _service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "G7zu":
/*!******************************************************!*\
  !*** ./src/app/web/itinerary/itinerary.component.ts ***!
  \******************************************************/
/*! exports provided: ItineraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryComponent", function() { return ItineraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ItineraryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} }
function ItineraryComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ex_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ex_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ex_r4.year);
} }
function ItineraryComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const st_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", st_r5.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](st_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](st_r5.year);
} }
class ItineraryComponent {
    constructor() {
        this.items = [];
        this.exData = [];
        this.stData = [];
        for (let index = 0; index < 100; index++) {
            this.items.push(index);
        }
        this.stData.push({ year: '2015 ~ 2017', title: 'M.B.A - Information System', description: 'Annamalai University' });
        this.stData.push({ year: '2008 ~ 2012', title: 'B.E - Computer Science ', description: 'St.Joseph\'s College Of Engineering' });
        this.stData.push({ year: '2006 ~ 2008', title: 'Higher Secondary School ', description: 'Carmel Higher Secondary School' });
        this.stData.push({ year: '2001 ~ 2006', title: 'High School ', description: 'Carmel Higher Secondary School' });
        this.stData.push({ year: '1996 ~ 2001', title: 'School', description: 'St. Joseph\'s Matriculation Higher Secondary School' });
        this.stData.push({ year: '1994 ~ 1996', title: 'Pre School ', description: 'St. Joseph\'s Matriculation Higher Secondary School' });
        this.exData.push({ year: '2018 ~ ', title: 'Senior Software Developer', description: 'Data Software Research Company' });
        this.exData.push({ year: '2015 ~ 2018', title: 'Software Developer', description: 'TIBS Software Solution' });
        this.exData.push({ year: '2013 ~ 2015', title: 'Analyst', description: 'HCL Technologies - Business Service' });
        this.exData.push({ year: '2012 ~ 2013', title: 'Junior System Administrator', description: 'Arul Anto & Co' });
    }
}
ItineraryComponent.ɵfac = function ItineraryComponent_Factory(t) { return new (t || ItineraryComponent)(); };
ItineraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItineraryComponent, selectors: [["app-itinerary"]], decls: 14, vars: 3, consts: [["id", "itinerary", 1, "itinerary"], ["class", "snow", 4, "ngFor", "ngForOf"], [1, "timeline", "container", "timeline-container"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "title-timeline"], [1, "timeline-holder"], ["class", "timeline-event", 4, "ngFor", "ngForOf"], [1, "snow"], [1, "timeline-event"], [1, "timeline-circle"], [1, "timeline-event-content"], [1, "year"], [1, "timeline-event-date"], [1, "fa", "fa-calendar"]], template: function ItineraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItineraryComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItineraryComponent_li_8_Template, 13, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ItineraryComponent_li_13_Template, 14, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#itinerary[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);\n  filter: drop-shadow(0 0 10px #fff);\n  background-size: cover;\n  position: relative;\n}\nh2[_ngcontent-%COMP%] {\n  color: #afeeee;\n}\n.year[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.snow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  border-radius: 50%;\n}\n.snow[_ngcontent-%COMP%]:nth-child(1) {\n  opacity: 0.2805;\n  transform: translate(0.9769vw, -10px) scale(0.1801);\n  animation: fall-1 17s -20s linear infinite;\n}\n@keyframes fall-1 {\n  69.399% {\n    transform: translate(1.9957vw, 69.399vh) scale(0.1801);\n  }\n  to {\n    transform: translate(1.4863vw, 100vh) scale(0.1801);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0.7177;\n  transform: translate(27.2951vw, -10px) scale(0.5042);\n  animation: fall-2 29s -14s linear infinite;\n}\n@keyframes fall-2 {\n  45.323% {\n    transform: translate(23.2117vw, 45.323vh) scale(0.5042);\n  }\n  to {\n    transform: translate(25.2534vw, 100vh) scale(0.5042);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(3) {\n  opacity: 0.4382;\n  transform: translate(53.1172vw, -10px) scale(0.055);\n  animation: fall-3 16s -20s linear infinite;\n}\n@keyframes fall-3 {\n  61.489% {\n    transform: translate(54.1736vw, 61.489vh) scale(0.055);\n  }\n  to {\n    transform: translate(53.6454vw, 100vh) scale(0.055);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(4) {\n  opacity: 0.2415;\n  transform: translate(15.3913vw, -10px) scale(0.5307);\n  animation: fall-4 22s -8s linear infinite;\n}\n@keyframes fall-4 {\n  37.049% {\n    transform: translate(23.8835vw, 37.049vh) scale(0.5307);\n  }\n  to {\n    transform: translate(19.6374vw, 100vh) scale(0.5307);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(5) {\n  opacity: 0.3427;\n  transform: translate(47.4623vw, -10px) scale(0.2892);\n  animation: fall-5 12s -24s linear infinite;\n}\n@keyframes fall-5 {\n  48.829% {\n    transform: translate(47.2655vw, 48.829vh) scale(0.2892);\n  }\n  to {\n    transform: translate(47.3639vw, 100vh) scale(0.2892);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(6) {\n  opacity: 0.0163;\n  transform: translate(6.7096vw, -10px) scale(0.9784);\n  animation: fall-6 18s -30s linear infinite;\n}\n@keyframes fall-6 {\n  48.751% {\n    transform: translate(5.7709vw, 48.751vh) scale(0.9784);\n  }\n  to {\n    transform: translate(6.24025vw, 100vh) scale(0.9784);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(7) {\n  opacity: 0.2873;\n  transform: translate(6.7738vw, -10px) scale(0.9953);\n  animation: fall-7 18s -30s linear infinite;\n}\n@keyframes fall-7 {\n  69.597% {\n    transform: translate(12.8774vw, 69.597vh) scale(0.9953);\n  }\n  to {\n    transform: translate(9.8256vw, 100vh) scale(0.9953);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(8) {\n  opacity: 0.6377;\n  transform: translate(77.6332vw, -10px) scale(0.6297);\n  animation: fall-8 14s -6s linear infinite;\n}\n@keyframes fall-8 {\n  73.055% {\n    transform: translate(86.9816vw, 73.055vh) scale(0.6297);\n  }\n  to {\n    transform: translate(82.3074vw, 100vh) scale(0.6297);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(9) {\n  opacity: 0.7437;\n  transform: translate(37.8921vw, -10px) scale(0.5895);\n  animation: fall-9 24s -22s linear infinite;\n}\n@keyframes fall-9 {\n  74.955% {\n    transform: translate(37.7712vw, 74.955vh) scale(0.5895);\n  }\n  to {\n    transform: translate(37.83165vw, 100vh) scale(0.5895);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(10) {\n  opacity: 0.0362;\n  transform: translate(4.7974vw, -10px) scale(0.2123);\n  animation: fall-10 12s -23s linear infinite;\n}\n@keyframes fall-10 {\n  67.326% {\n    transform: translate(6.5378vw, 67.326vh) scale(0.2123);\n  }\n  to {\n    transform: translate(5.6676vw, 100vh) scale(0.2123);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(11) {\n  opacity: 0.9007;\n  transform: translate(66.7986vw, -10px) scale(0.6094);\n  animation: fall-11 14s -30s linear infinite;\n}\n@keyframes fall-11 {\n  79.287% {\n    transform: translate(68.598vw, 79.287vh) scale(0.6094);\n  }\n  to {\n    transform: translate(67.6983vw, 100vh) scale(0.6094);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(12) {\n  opacity: 0.6575;\n  transform: translate(53.5289vw, -10px) scale(0.5058);\n  animation: fall-12 11s -14s linear infinite;\n}\n@keyframes fall-12 {\n  52.563% {\n    transform: translate(43.5972vw, 52.563vh) scale(0.5058);\n  }\n  to {\n    transform: translate(48.56305vw, 100vh) scale(0.5058);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(13) {\n  opacity: 0.2121;\n  transform: translate(13.2164vw, -10px) scale(0.9677);\n  animation: fall-13 18s -24s linear infinite;\n}\n@keyframes fall-13 {\n  40.019% {\n    transform: translate(15.3941vw, 40.019vh) scale(0.9677);\n  }\n  to {\n    transform: translate(14.30525vw, 100vh) scale(0.9677);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(14) {\n  opacity: 0.7112;\n  transform: translate(75.312vw, -10px) scale(0.6235);\n  animation: fall-14 18s -28s linear infinite;\n}\n@keyframes fall-14 {\n  67.776% {\n    transform: translate(83.2159vw, 67.776vh) scale(0.6235);\n  }\n  to {\n    transform: translate(79.26395vw, 100vh) scale(0.6235);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(15) {\n  opacity: 0.8448;\n  transform: translate(55.5867vw, -10px) scale(0.418);\n  animation: fall-15 14s -19s linear infinite;\n}\n@keyframes fall-15 {\n  53.227% {\n    transform: translate(48.8242vw, 53.227vh) scale(0.418);\n  }\n  to {\n    transform: translate(52.20545vw, 100vh) scale(0.418);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(16) {\n  opacity: 0.2728;\n  transform: translate(26.5314vw, -10px) scale(0.9071);\n  animation: fall-16 23s -23s linear infinite;\n}\n@keyframes fall-16 {\n  62.474% {\n    transform: translate(20.5556vw, 62.474vh) scale(0.9071);\n  }\n  to {\n    transform: translate(23.5435vw, 100vh) scale(0.9071);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(17) {\n  opacity: 0.8141;\n  transform: translate(70.428vw, -10px) scale(0.6206);\n  animation: fall-17 27s -5s linear infinite;\n}\n@keyframes fall-17 {\n  54.193% {\n    transform: translate(72.4888vw, 54.193vh) scale(0.6206);\n  }\n  to {\n    transform: translate(71.4584vw, 100vh) scale(0.6206);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(18) {\n  opacity: 0.5791;\n  transform: translate(79.7508vw, -10px) scale(0.5728);\n  animation: fall-18 25s -30s linear infinite;\n}\n@keyframes fall-18 {\n  33.558% {\n    transform: translate(87.9444vw, 33.558vh) scale(0.5728);\n  }\n  to {\n    transform: translate(83.8476vw, 100vh) scale(0.5728);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(19) {\n  opacity: 0.7437;\n  transform: translate(27.1636vw, -10px) scale(0.1633);\n  animation: fall-19 15s -28s linear infinite;\n}\n@keyframes fall-19 {\n  77.88% {\n    transform: translate(33.2571vw, 77.88vh) scale(0.1633);\n  }\n  to {\n    transform: translate(30.21035vw, 100vh) scale(0.1633);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(20) {\n  opacity: 0.0925;\n  transform: translate(53.8177vw, -10px) scale(0.5901);\n  animation: fall-20 19s -15s linear infinite;\n}\n@keyframes fall-20 {\n  32.466% {\n    transform: translate(44.3953vw, 32.466vh) scale(0.5901);\n  }\n  to {\n    transform: translate(49.1065vw, 100vh) scale(0.5901);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(21) {\n  opacity: 0.4792;\n  transform: translate(84.2817vw, -10px) scale(0.6159);\n  animation: fall-21 15s -5s linear infinite;\n}\n@keyframes fall-21 {\n  75.756% {\n    transform: translate(90.4738vw, 75.756vh) scale(0.6159);\n  }\n  to {\n    transform: translate(87.37775vw, 100vh) scale(0.6159);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(22) {\n  opacity: 0.3646;\n  transform: translate(88.7954vw, -10px) scale(0.8483);\n  animation: fall-22 30s -26s linear infinite;\n}\n@keyframes fall-22 {\n  65.497% {\n    transform: translate(98.6029vw, 65.497vh) scale(0.8483);\n  }\n  to {\n    transform: translate(93.69915vw, 100vh) scale(0.8483);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(23) {\n  opacity: 0.8421;\n  transform: translate(76.7453vw, -10px) scale(0.5851);\n  animation: fall-23 12s -26s linear infinite;\n}\n@keyframes fall-23 {\n  41.313% {\n    transform: translate(83.6605vw, 41.313vh) scale(0.5851);\n  }\n  to {\n    transform: translate(80.2029vw, 100vh) scale(0.5851);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(24) {\n  opacity: 0.9819;\n  transform: translate(22.5374vw, -10px) scale(0.8796);\n  animation: fall-24 15s -1s linear infinite;\n}\n@keyframes fall-24 {\n  79.069% {\n    transform: translate(16.9914vw, 79.069vh) scale(0.8796);\n  }\n  to {\n    transform: translate(19.7644vw, 100vh) scale(0.8796);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(25) {\n  opacity: 0.9453;\n  transform: translate(99.1893vw, -10px) scale(0.3763);\n  animation: fall-25 24s -27s linear infinite;\n}\n@keyframes fall-25 {\n  43.113% {\n    transform: translate(90.1305vw, 43.113vh) scale(0.3763);\n  }\n  to {\n    transform: translate(94.6599vw, 100vh) scale(0.3763);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(26) {\n  opacity: 0.5256;\n  transform: translate(38.1747vw, -10px) scale(0.0855);\n  animation: fall-26 13s -6s linear infinite;\n}\n@keyframes fall-26 {\n  73.833% {\n    transform: translate(42.8599vw, 73.833vh) scale(0.0855);\n  }\n  to {\n    transform: translate(40.5173vw, 100vh) scale(0.0855);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(27) {\n  opacity: 0.105;\n  transform: translate(53.7545vw, -10px) scale(0.4727);\n  animation: fall-27 18s -8s linear infinite;\n}\n@keyframes fall-27 {\n  39.096% {\n    transform: translate(59.0346vw, 39.096vh) scale(0.4727);\n  }\n  to {\n    transform: translate(56.39455vw, 100vh) scale(0.4727);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(28) {\n  opacity: 0.2787;\n  transform: translate(68.1368vw, -10px) scale(0.9271);\n  animation: fall-28 22s -3s linear infinite;\n}\n@keyframes fall-28 {\n  78.712% {\n    transform: translate(62.1695vw, 78.712vh) scale(0.9271);\n  }\n  to {\n    transform: translate(65.15315vw, 100vh) scale(0.9271);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(29) {\n  opacity: 0.5929;\n  transform: translate(34.7177vw, -10px) scale(0.5373);\n  animation: fall-29 17s -11s linear infinite;\n}\n@keyframes fall-29 {\n  30.653% {\n    transform: translate(32.3318vw, 30.653vh) scale(0.5373);\n  }\n  to {\n    transform: translate(33.52475vw, 100vh) scale(0.5373);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(30) {\n  opacity: 0.5879;\n  transform: translate(11.1697vw, -10px) scale(0.2934);\n  animation: fall-30 21s -7s linear infinite;\n}\n@keyframes fall-30 {\n  73.952% {\n    transform: translate(21.1221vw, 73.952vh) scale(0.2934);\n  }\n  to {\n    transform: translate(16.1459vw, 100vh) scale(0.2934);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(31) {\n  opacity: 0.9162;\n  transform: translate(62.0017vw, -10px) scale(0.0697);\n  animation: fall-31 19s -24s linear infinite;\n}\n@keyframes fall-31 {\n  64.168% {\n    transform: translate(60.4024vw, 64.168vh) scale(0.0697);\n  }\n  to {\n    transform: translate(61.20205vw, 100vh) scale(0.0697);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(32) {\n  opacity: 0.9235;\n  transform: translate(26.6467vw, -10px) scale(0.7553);\n  animation: fall-32 30s -9s linear infinite;\n}\n@keyframes fall-32 {\n  68.269% {\n    transform: translate(16.8662vw, 68.269vh) scale(0.7553);\n  }\n  to {\n    transform: translate(21.75645vw, 100vh) scale(0.7553);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(33) {\n  opacity: 0.1148;\n  transform: translate(66.2098vw, -10px) scale(0.2332);\n  animation: fall-33 11s -26s linear infinite;\n}\n@keyframes fall-33 {\n  38.774% {\n    transform: translate(74.8528vw, 38.774vh) scale(0.2332);\n  }\n  to {\n    transform: translate(70.5313vw, 100vh) scale(0.2332);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(34) {\n  opacity: 0.4013;\n  transform: translate(14.7499vw, -10px) scale(0.9775);\n  animation: fall-34 25s -24s linear infinite;\n}\n@keyframes fall-34 {\n  56.067% {\n    transform: translate(13.8052vw, 56.067vh) scale(0.9775);\n  }\n  to {\n    transform: translate(14.27755vw, 100vh) scale(0.9775);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(35) {\n  opacity: 0.3103;\n  transform: translate(50.3402vw, -10px) scale(0.7849);\n  animation: fall-35 22s -15s linear infinite;\n}\n@keyframes fall-35 {\n  78.775% {\n    transform: translate(41.3299vw, 78.775vh) scale(0.7849);\n  }\n  to {\n    transform: translate(45.83505vw, 100vh) scale(0.7849);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(36) {\n  opacity: 0.3466;\n  transform: translate(40.0812vw, -10px) scale(0.2159);\n  animation: fall-36 11s -11s linear infinite;\n}\n@keyframes fall-36 {\n  77.333% {\n    transform: translate(46.0235vw, 77.333vh) scale(0.2159);\n  }\n  to {\n    transform: translate(43.05235vw, 100vh) scale(0.2159);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(37) {\n  opacity: 0.6309;\n  transform: translate(19.5884vw, -10px) scale(0.9347);\n  animation: fall-37 23s -10s linear infinite;\n}\n@keyframes fall-37 {\n  62.982% {\n    transform: translate(15.3514vw, 62.982vh) scale(0.9347);\n  }\n  to {\n    transform: translate(17.4699vw, 100vh) scale(0.9347);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(38) {\n  opacity: 0.5733;\n  transform: translate(75.8378vw, -10px) scale(0.3281);\n  animation: fall-38 24s -1s linear infinite;\n}\n@keyframes fall-38 {\n  72.607% {\n    transform: translate(79.2606vw, 72.607vh) scale(0.3281);\n  }\n  to {\n    transform: translate(77.5492vw, 100vh) scale(0.3281);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(39) {\n  opacity: 0.7187;\n  transform: translate(89.7119vw, -10px) scale(0.7653);\n  animation: fall-39 12s -28s linear infinite;\n}\n@keyframes fall-39 {\n  43.375% {\n    transform: translate(97.8173vw, 43.375vh) scale(0.7653);\n  }\n  to {\n    transform: translate(93.7646vw, 100vh) scale(0.7653);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(40) {\n  opacity: 0.8587;\n  transform: translate(28.028vw, -10px) scale(0.8888);\n  animation: fall-40 29s -5s linear infinite;\n}\n@keyframes fall-40 {\n  70.642% {\n    transform: translate(35.7178vw, 70.642vh) scale(0.8888);\n  }\n  to {\n    transform: translate(31.8729vw, 100vh) scale(0.8888);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(41) {\n  opacity: 0.4821;\n  transform: translate(94.9795vw, -10px) scale(0.7195);\n  animation: fall-41 24s -13s linear infinite;\n}\n@keyframes fall-41 {\n  31.134% {\n    transform: translate(99.1969vw, 31.134vh) scale(0.7195);\n  }\n  to {\n    transform: translate(97.0882vw, 100vh) scale(0.7195);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(42) {\n  opacity: 0.508;\n  transform: translate(90.6464vw, -10px) scale(0.9763);\n  animation: fall-42 15s -18s linear infinite;\n}\n@keyframes fall-42 {\n  62.813% {\n    transform: translate(97.3546vw, 62.813vh) scale(0.9763);\n  }\n  to {\n    transform: translate(94.0005vw, 100vh) scale(0.9763);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(43) {\n  opacity: 0.0028;\n  transform: translate(42.7521vw, -10px) scale(0.8415);\n  animation: fall-43 28s -12s linear infinite;\n}\n@keyframes fall-43 {\n  59.057% {\n    transform: translate(37.3157vw, 59.057vh) scale(0.8415);\n  }\n  to {\n    transform: translate(40.0339vw, 100vh) scale(0.8415);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(44) {\n  opacity: 0.0938;\n  transform: translate(3.0112vw, -10px) scale(0.3095);\n  animation: fall-44 24s -11s linear infinite;\n}\n@keyframes fall-44 {\n  63.436% {\n    transform: translate(-6.7102vw, 63.436vh) scale(0.3095);\n  }\n  to {\n    transform: translate(-1.8495vw, 100vh) scale(0.3095);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(45) {\n  opacity: 0.3108;\n  transform: translate(44.9879vw, -10px) scale(0.8453);\n  animation: fall-45 14s -25s linear infinite;\n}\n@keyframes fall-45 {\n  34.108% {\n    transform: translate(35.3478vw, 34.108vh) scale(0.8453);\n  }\n  to {\n    transform: translate(40.16785vw, 100vh) scale(0.8453);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(46) {\n  opacity: 0.8279;\n  transform: translate(85.8254vw, -10px) scale(0.2209);\n  animation: fall-46 21s -19s linear infinite;\n}\n@keyframes fall-46 {\n  53.326% {\n    transform: translate(85.1386vw, 53.326vh) scale(0.2209);\n  }\n  to {\n    transform: translate(85.482vw, 100vh) scale(0.2209);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(47) {\n  opacity: 0.63;\n  transform: translate(0.006vw, -10px) scale(0.5151);\n  animation: fall-47 28s -4s linear infinite;\n}\n@keyframes fall-47 {\n  67.32% {\n    transform: translate(7.8302vw, 67.32vh) scale(0.5151);\n  }\n  to {\n    transform: translate(3.9181vw, 100vh) scale(0.5151);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(48) {\n  opacity: 0.5299;\n  transform: translate(76.757vw, -10px) scale(0.5197);\n  animation: fall-48 25s -14s linear infinite;\n}\n@keyframes fall-48 {\n  79.767% {\n    transform: translate(81.5584vw, 79.767vh) scale(0.5197);\n  }\n  to {\n    transform: translate(79.1577vw, 100vh) scale(0.5197);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(49) {\n  opacity: 0.9394;\n  transform: translate(69.8088vw, -10px) scale(0.1568);\n  animation: fall-49 20s -21s linear infinite;\n}\n@keyframes fall-49 {\n  56.709% {\n    transform: translate(60.8987vw, 56.709vh) scale(0.1568);\n  }\n  to {\n    transform: translate(65.35375vw, 100vh) scale(0.1568);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(50) {\n  opacity: 0.8211;\n  transform: translate(4.6501vw, -10px) scale(0.6244);\n  animation: fall-50 22s -10s linear infinite;\n}\n@keyframes fall-50 {\n  70.948% {\n    transform: translate(3.3512vw, 70.948vh) scale(0.6244);\n  }\n  to {\n    transform: translate(4.00065vw, 100vh) scale(0.6244);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(51) {\n  opacity: 0.2511;\n  transform: translate(11.0097vw, -10px) scale(0.9557);\n  animation: fall-51 14s -15s linear infinite;\n}\n@keyframes fall-51 {\n  50.409% {\n    transform: translate(20.9371vw, 50.409vh) scale(0.9557);\n  }\n  to {\n    transform: translate(15.9734vw, 100vh) scale(0.9557);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(52) {\n  opacity: 0.4635;\n  transform: translate(9.7681vw, -10px) scale(0.1637);\n  animation: fall-52 23s -13s linear infinite;\n}\n@keyframes fall-52 {\n  42.45% {\n    transform: translate(19.4872vw, 42.45vh) scale(0.1637);\n  }\n  to {\n    transform: translate(14.62765vw, 100vh) scale(0.1637);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(53) {\n  opacity: 0.0319;\n  transform: translate(26.4606vw, -10px) scale(0.3638);\n  animation: fall-53 21s -26s linear infinite;\n}\n@keyframes fall-53 {\n  34.205% {\n    transform: translate(34.6299vw, 34.205vh) scale(0.3638);\n  }\n  to {\n    transform: translate(30.54525vw, 100vh) scale(0.3638);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(54) {\n  opacity: 0.777;\n  transform: translate(76.1707vw, -10px) scale(0.3693);\n  animation: fall-54 14s -3s linear infinite;\n}\n@keyframes fall-54 {\n  64.319% {\n    transform: translate(67.8458vw, 64.319vh) scale(0.3693);\n  }\n  to {\n    transform: translate(72.00825vw, 100vh) scale(0.3693);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(55) {\n  opacity: 0.4126;\n  transform: translate(57.5656vw, -10px) scale(0.9258);\n  animation: fall-55 30s -22s linear infinite;\n}\n@keyframes fall-55 {\n  52.137% {\n    transform: translate(64.2569vw, 52.137vh) scale(0.9258);\n  }\n  to {\n    transform: translate(60.91125vw, 100vh) scale(0.9258);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(56) {\n  opacity: 0.9434;\n  transform: translate(53.0106vw, -10px) scale(0.9231);\n  animation: fall-56 10s -25s linear infinite;\n}\n@keyframes fall-56 {\n  66.789% {\n    transform: translate(59.833vw, 66.789vh) scale(0.9231);\n  }\n  to {\n    transform: translate(56.4218vw, 100vh) scale(0.9231);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(57) {\n  opacity: 0.8749;\n  transform: translate(81.0004vw, -10px) scale(0.1571);\n  animation: fall-57 19s -8s linear infinite;\n}\n@keyframes fall-57 {\n  67.425% {\n    transform: translate(71.2051vw, 67.425vh) scale(0.1571);\n  }\n  to {\n    transform: translate(76.10275vw, 100vh) scale(0.1571);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(58) {\n  opacity: 0.9456;\n  transform: translate(47.705vw, -10px) scale(0.8733);\n  animation: fall-58 24s -16s linear infinite;\n}\n@keyframes fall-58 {\n  33.455% {\n    transform: translate(44.009vw, 33.455vh) scale(0.8733);\n  }\n  to {\n    transform: translate(45.857vw, 100vh) scale(0.8733);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(59) {\n  opacity: 0.8383;\n  transform: translate(46.9834vw, -10px) scale(0.8761);\n  animation: fall-59 28s -25s linear infinite;\n}\n@keyframes fall-59 {\n  39.319% {\n    transform: translate(40.3335vw, 39.319vh) scale(0.8761);\n  }\n  to {\n    transform: translate(43.65845vw, 100vh) scale(0.8761);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(60) {\n  opacity: 0.6809;\n  transform: translate(77.1231vw, -10px) scale(0.5803);\n  animation: fall-60 14s -18s linear infinite;\n}\n@keyframes fall-60 {\n  58.585% {\n    transform: translate(79.0436vw, 58.585vh) scale(0.5803);\n  }\n  to {\n    transform: translate(78.08335vw, 100vh) scale(0.5803);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(61) {\n  opacity: 0.2201;\n  transform: translate(99.1903vw, -10px) scale(0.2659);\n  animation: fall-61 16s -1s linear infinite;\n}\n@keyframes fall-61 {\n  76.474% {\n    transform: translate(98.8279vw, 76.474vh) scale(0.2659);\n  }\n  to {\n    transform: translate(99.0091vw, 100vh) scale(0.2659);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(62) {\n  opacity: 0.9642;\n  transform: translate(69.5426vw, -10px) scale(0.7956);\n  animation: fall-62 22s -14s linear infinite;\n}\n@keyframes fall-62 {\n  79.276% {\n    transform: translate(70.1738vw, 79.276vh) scale(0.7956);\n  }\n  to {\n    transform: translate(69.8582vw, 100vh) scale(0.7956);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(63) {\n  opacity: 0.6468;\n  transform: translate(33.3015vw, -10px) scale(0.3227);\n  animation: fall-63 22s -10s linear infinite;\n}\n@keyframes fall-63 {\n  56.359% {\n    transform: translate(31.7749vw, 56.359vh) scale(0.3227);\n  }\n  to {\n    transform: translate(32.5382vw, 100vh) scale(0.3227);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(64) {\n  opacity: 0.2321;\n  transform: translate(0.3605vw, -10px) scale(0.8791);\n  animation: fall-64 18s -25s linear infinite;\n}\n@keyframes fall-64 {\n  62.055% {\n    transform: translate(10.2255vw, 62.055vh) scale(0.8791);\n  }\n  to {\n    transform: translate(5.293vw, 100vh) scale(0.8791);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(65) {\n  opacity: 0.9269;\n  transform: translate(2.5224vw, -10px) scale(0.3375);\n  animation: fall-65 29s -10s linear infinite;\n}\n@keyframes fall-65 {\n  79.747% {\n    transform: translate(7.119vw, 79.747vh) scale(0.3375);\n  }\n  to {\n    transform: translate(4.8207vw, 100vh) scale(0.3375);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(66) {\n  opacity: 0.7828;\n  transform: translate(21.7452vw, -10px) scale(0.6804);\n  animation: fall-66 30s -1s linear infinite;\n}\n@keyframes fall-66 {\n  41.234% {\n    transform: translate(22.4558vw, 41.234vh) scale(0.6804);\n  }\n  to {\n    transform: translate(22.1005vw, 100vh) scale(0.6804);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(67) {\n  opacity: 0.3379;\n  transform: translate(72.0647vw, -10px) scale(0.1004);\n  animation: fall-67 29s -14s linear infinite;\n}\n@keyframes fall-67 {\n  31.61% {\n    transform: translate(72.8876vw, 31.61vh) scale(0.1004);\n  }\n  to {\n    transform: translate(72.47615vw, 100vh) scale(0.1004);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(68) {\n  opacity: 0.4917;\n  transform: translate(21.1796vw, -10px) scale(0.7042);\n  animation: fall-68 14s -2s linear infinite;\n}\n@keyframes fall-68 {\n  71.657% {\n    transform: translate(17.3509vw, 71.657vh) scale(0.7042);\n  }\n  to {\n    transform: translate(19.26525vw, 100vh) scale(0.7042);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(69) {\n  opacity: 0.799;\n  transform: translate(12.963vw, -10px) scale(0.4572);\n  animation: fall-69 19s -29s linear infinite;\n}\n@keyframes fall-69 {\n  77.655% {\n    transform: translate(20.9552vw, 77.655vh) scale(0.4572);\n  }\n  to {\n    transform: translate(16.9591vw, 100vh) scale(0.4572);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(70) {\n  opacity: 0.0057;\n  transform: translate(79.6336vw, -10px) scale(0.5234);\n  animation: fall-70 26s -16s linear infinite;\n}\n@keyframes fall-70 {\n  59.503% {\n    transform: translate(73.7524vw, 59.503vh) scale(0.5234);\n  }\n  to {\n    transform: translate(76.693vw, 100vh) scale(0.5234);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(71) {\n  opacity: 0.8856;\n  transform: translate(56.2827vw, -10px) scale(0.7505);\n  animation: fall-71 11s -22s linear infinite;\n}\n@keyframes fall-71 {\n  39.251% {\n    transform: translate(55.0387vw, 39.251vh) scale(0.7505);\n  }\n  to {\n    transform: translate(55.6607vw, 100vh) scale(0.7505);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(72) {\n  opacity: 0.149;\n  transform: translate(39.6942vw, -10px) scale(0.7323);\n  animation: fall-72 21s -3s linear infinite;\n}\n@keyframes fall-72 {\n  49.569% {\n    transform: translate(39.062vw, 49.569vh) scale(0.7323);\n  }\n  to {\n    transform: translate(39.3781vw, 100vh) scale(0.7323);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(73) {\n  opacity: 0.7689;\n  transform: translate(95.1392vw, -10px) scale(0.3099);\n  animation: fall-73 23s -21s linear infinite;\n}\n@keyframes fall-73 {\n  35.014% {\n    transform: translate(98.5859vw, 35.014vh) scale(0.3099);\n  }\n  to {\n    transform: translate(96.86255vw, 100vh) scale(0.3099);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(74) {\n  opacity: 0.3731;\n  transform: translate(13.2666vw, -10px) scale(0.6334);\n  animation: fall-74 19s -18s linear infinite;\n}\n@keyframes fall-74 {\n  56.607% {\n    transform: translate(3.5582vw, 56.607vh) scale(0.6334);\n  }\n  to {\n    transform: translate(8.4124vw, 100vh) scale(0.6334);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(75) {\n  opacity: 0.1312;\n  transform: translate(18.1984vw, -10px) scale(0.4852);\n  animation: fall-75 14s -2s linear infinite;\n}\n@keyframes fall-75 {\n  55.797% {\n    transform: translate(22.6143vw, 55.797vh) scale(0.4852);\n  }\n  to {\n    transform: translate(20.40635vw, 100vh) scale(0.4852);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(76) {\n  opacity: 0.7578;\n  transform: translate(18.1806vw, -10px) scale(0.3789);\n  animation: fall-76 10s -5s linear infinite;\n}\n@keyframes fall-76 {\n  72.1% {\n    transform: translate(9.8507vw, 72.1vh) scale(0.3789);\n  }\n  to {\n    transform: translate(14.01565vw, 100vh) scale(0.3789);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(77) {\n  opacity: 0.4274;\n  transform: translate(67.827vw, -10px) scale(0.4141);\n  animation: fall-77 21s -6s linear infinite;\n}\n@keyframes fall-77 {\n  37.872% {\n    transform: translate(63.7281vw, 37.872vh) scale(0.4141);\n  }\n  to {\n    transform: translate(65.77755vw, 100vh) scale(0.4141);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(78) {\n  opacity: 0.9304;\n  transform: translate(31.564vw, -10px) scale(0.4147);\n  animation: fall-78 18s -12s linear infinite;\n}\n@keyframes fall-78 {\n  33.774% {\n    transform: translate(27.3837vw, 33.774vh) scale(0.4147);\n  }\n  to {\n    transform: translate(29.47385vw, 100vh) scale(0.4147);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(79) {\n  opacity: 0.6422;\n  transform: translate(55.0048vw, -10px) scale(0.8718);\n  animation: fall-79 18s -26s linear infinite;\n}\n@keyframes fall-79 {\n  62.435% {\n    transform: translate(62.2396vw, 62.435vh) scale(0.8718);\n  }\n  to {\n    transform: translate(58.6222vw, 100vh) scale(0.8718);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(80) {\n  opacity: 0.5067;\n  transform: translate(66.1025vw, -10px) scale(0.4054);\n  animation: fall-80 17s -26s linear infinite;\n}\n@keyframes fall-80 {\n  62.917% {\n    transform: translate(74.974vw, 62.917vh) scale(0.4054);\n  }\n  to {\n    transform: translate(70.53825vw, 100vh) scale(0.4054);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(81) {\n  opacity: 0.4301;\n  transform: translate(75.9235vw, -10px) scale(0.0837);\n  animation: fall-81 15s -27s linear infinite;\n}\n@keyframes fall-81 {\n  40.258% {\n    transform: translate(67.4137vw, 40.258vh) scale(0.0837);\n  }\n  to {\n    transform: translate(71.6686vw, 100vh) scale(0.0837);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(82) {\n  opacity: 0.9264;\n  transform: translate(62.7943vw, -10px) scale(0.4264);\n  animation: fall-82 15s -20s linear infinite;\n}\n@keyframes fall-82 {\n  68.718% {\n    transform: translate(57.0235vw, 68.718vh) scale(0.4264);\n  }\n  to {\n    transform: translate(59.9089vw, 100vh) scale(0.4264);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(83) {\n  opacity: 0.5048;\n  transform: translate(79.8834vw, -10px) scale(0.1486);\n  animation: fall-83 24s -14s linear infinite;\n}\n@keyframes fall-83 {\n  49.018% {\n    transform: translate(88.8791vw, 49.018vh) scale(0.1486);\n  }\n  to {\n    transform: translate(84.38125vw, 100vh) scale(0.1486);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(84) {\n  opacity: 0.1606;\n  transform: translate(16.4525vw, -10px) scale(0.5929);\n  animation: fall-84 27s -14s linear infinite;\n}\n@keyframes fall-84 {\n  64.563% {\n    transform: translate(14.9874vw, 64.563vh) scale(0.5929);\n  }\n  to {\n    transform: translate(15.71995vw, 100vh) scale(0.5929);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(85) {\n  opacity: 0.0733;\n  transform: translate(94.6449vw, -10px) scale(0.9575);\n  animation: fall-85 16s -26s linear infinite;\n}\n@keyframes fall-85 {\n  36.736% {\n    transform: translate(103.0127vw, 36.736vh) scale(0.9575);\n  }\n  to {\n    transform: translate(98.8288vw, 100vh) scale(0.9575);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(86) {\n  opacity: 0.6099;\n  transform: translate(27.568vw, -10px) scale(0.1272);\n  animation: fall-86 18s -28s linear infinite;\n}\n@keyframes fall-86 {\n  71.149% {\n    transform: translate(27.2971vw, 71.149vh) scale(0.1272);\n  }\n  to {\n    transform: translate(27.43255vw, 100vh) scale(0.1272);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(87) {\n  opacity: 0.9601;\n  transform: translate(91.51vw, -10px) scale(0.305);\n  animation: fall-87 23s -24s linear infinite;\n}\n@keyframes fall-87 {\n  63.011% {\n    transform: translate(90.0531vw, 63.011vh) scale(0.305);\n  }\n  to {\n    transform: translate(90.78155vw, 100vh) scale(0.305);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(88) {\n  opacity: 0.6151;\n  transform: translate(92.8034vw, -10px) scale(0.1596);\n  animation: fall-88 11s -18s linear infinite;\n}\n@keyframes fall-88 {\n  38.184% {\n    transform: translate(93.6109vw, 38.184vh) scale(0.1596);\n  }\n  to {\n    transform: translate(93.20715vw, 100vh) scale(0.1596);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(89) {\n  opacity: 0.8652;\n  transform: translate(86.8465vw, -10px) scale(0.549);\n  animation: fall-89 21s -15s linear infinite;\n}\n@keyframes fall-89 {\n  52.385% {\n    transform: translate(82.0281vw, 52.385vh) scale(0.549);\n  }\n  to {\n    transform: translate(84.4373vw, 100vh) scale(0.549);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(90) {\n  opacity: 0.5047;\n  transform: translate(25.5819vw, -10px) scale(0.6114);\n  animation: fall-90 12s -4s linear infinite;\n}\n@keyframes fall-90 {\n  34.561% {\n    transform: translate(23.6436vw, 34.561vh) scale(0.6114);\n  }\n  to {\n    transform: translate(24.61275vw, 100vh) scale(0.6114);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(91) {\n  opacity: 0.3141;\n  transform: translate(72.8736vw, -10px) scale(0.9593);\n  animation: fall-91 22s -15s linear infinite;\n}\n@keyframes fall-91 {\n  38.541% {\n    transform: translate(64.7246vw, 38.541vh) scale(0.9593);\n  }\n  to {\n    transform: translate(68.7991vw, 100vh) scale(0.9593);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(92) {\n  opacity: 0.9575;\n  transform: translate(8.6448vw, -10px) scale(0.4913);\n  animation: fall-92 13s -23s linear infinite;\n}\n@keyframes fall-92 {\n  69.348% {\n    transform: translate(16.9067vw, 69.348vh) scale(0.4913);\n  }\n  to {\n    transform: translate(12.77575vw, 100vh) scale(0.4913);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(93) {\n  opacity: 0.3572;\n  transform: translate(96.6289vw, -10px) scale(0.4603);\n  animation: fall-93 17s -11s linear infinite;\n}\n@keyframes fall-93 {\n  44.773% {\n    transform: translate(104.9319vw, 44.773vh) scale(0.4603);\n  }\n  to {\n    transform: translate(100.7804vw, 100vh) scale(0.4603);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(94) {\n  opacity: 0.7278;\n  transform: translate(15.5936vw, -10px) scale(0.5121);\n  animation: fall-94 30s -28s linear infinite;\n}\n@keyframes fall-94 {\n  64.185% {\n    transform: translate(17.2298vw, 64.185vh) scale(0.5121);\n  }\n  to {\n    transform: translate(16.4117vw, 100vh) scale(0.5121);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(95) {\n  opacity: 0.3543;\n  transform: translate(77.363vw, -10px) scale(0.931);\n  animation: fall-95 10s -28s linear infinite;\n}\n@keyframes fall-95 {\n  43.218% {\n    transform: translate(81.8631vw, 43.218vh) scale(0.931);\n  }\n  to {\n    transform: translate(79.61305vw, 100vh) scale(0.931);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(96) {\n  opacity: 0.8045;\n  transform: translate(4.3009vw, -10px) scale(0.7664);\n  animation: fall-96 30s -15s linear infinite;\n}\n@keyframes fall-96 {\n  48.444% {\n    transform: translate(-1.9361vw, 48.444vh) scale(0.7664);\n  }\n  to {\n    transform: translate(1.1824vw, 100vh) scale(0.7664);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(97) {\n  opacity: 0.2202;\n  transform: translate(25.3704vw, -10px) scale(0.0304);\n  animation: fall-97 10s -17s linear infinite;\n}\n@keyframes fall-97 {\n  76.707% {\n    transform: translate(16.1895vw, 76.707vh) scale(0.0304);\n  }\n  to {\n    transform: translate(20.77995vw, 100vh) scale(0.0304);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(98) {\n  opacity: 0.5085;\n  transform: translate(66.5383vw, -10px) scale(0.6239);\n  animation: fall-98 27s -30s linear infinite;\n}\n@keyframes fall-98 {\n  46.269% {\n    transform: translate(71.9815vw, 46.269vh) scale(0.6239);\n  }\n  to {\n    transform: translate(69.2599vw, 100vh) scale(0.6239);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(99) {\n  opacity: 0.6397;\n  transform: translate(29.2425vw, -10px) scale(0.2516);\n  animation: fall-99 23s -17s linear infinite;\n}\n@keyframes fall-99 {\n  41.307% {\n    transform: translate(37.6682vw, 41.307vh) scale(0.2516);\n  }\n  to {\n    transform: translate(33.45535vw, 100vh) scale(0.2516);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(100) {\n  opacity: 0.5853;\n  transform: translate(48.4018vw, -10px) scale(0.7271);\n  animation: fall-100 11s -26s linear infinite;\n}\n@keyframes fall-100 {\n  78.457% {\n    transform: translate(49.27vw, 78.457vh) scale(0.7271);\n  }\n  to {\n    transform: translate(48.8359vw, 100vh) scale(0.7271);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(101) {\n  opacity: 0.7726;\n  transform: translate(56.0452vw, -10px) scale(0.1235);\n  animation: fall-101 11s -3s linear infinite;\n}\n@keyframes fall-101 {\n  37.366% {\n    transform: translate(64.1925vw, 37.366vh) scale(0.1235);\n  }\n  to {\n    transform: translate(60.11885vw, 100vh) scale(0.1235);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(102) {\n  opacity: 0.9749;\n  transform: translate(72.5165vw, -10px) scale(0.1396);\n  animation: fall-102 20s -2s linear infinite;\n}\n@keyframes fall-102 {\n  76.46% {\n    transform: translate(65.414vw, 76.46vh) scale(0.1396);\n  }\n  to {\n    transform: translate(68.96525vw, 100vh) scale(0.1396);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(103) {\n  opacity: 0.3172;\n  transform: translate(63.8492vw, -10px) scale(0.8416);\n  animation: fall-103 15s -7s linear infinite;\n}\n@keyframes fall-103 {\n  33.1% {\n    transform: translate(60.3916vw, 33.1vh) scale(0.8416);\n  }\n  to {\n    transform: translate(62.1204vw, 100vh) scale(0.8416);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(104) {\n  opacity: 0.8683;\n  transform: translate(47.8938vw, -10px) scale(0.7853);\n  animation: fall-104 12s -15s linear infinite;\n}\n@keyframes fall-104 {\n  49.331% {\n    transform: translate(53.8253vw, 49.331vh) scale(0.7853);\n  }\n  to {\n    transform: translate(50.85955vw, 100vh) scale(0.7853);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(105) {\n  opacity: 0.2342;\n  transform: translate(86.6287vw, -10px) scale(0.9467);\n  animation: fall-105 29s -8s linear infinite;\n}\n@keyframes fall-105 {\n  48.967% {\n    transform: translate(83.6602vw, 48.967vh) scale(0.9467);\n  }\n  to {\n    transform: translate(85.14445vw, 100vh) scale(0.9467);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(106) {\n  opacity: 0.611;\n  transform: translate(46.0825vw, -10px) scale(0.4452);\n  animation: fall-106 24s -22s linear infinite;\n}\n@keyframes fall-106 {\n  61.859% {\n    transform: translate(45.5751vw, 61.859vh) scale(0.4452);\n  }\n  to {\n    transform: translate(45.8288vw, 100vh) scale(0.4452);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(107) {\n  opacity: 0.5757;\n  transform: translate(25.2309vw, -10px) scale(0.2392);\n  animation: fall-107 11s -14s linear infinite;\n}\n@keyframes fall-107 {\n  42.518% {\n    transform: translate(31.6983vw, 42.518vh) scale(0.2392);\n  }\n  to {\n    transform: translate(28.4646vw, 100vh) scale(0.2392);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(108) {\n  opacity: 0.8958;\n  transform: translate(74.0854vw, -10px) scale(0.6103);\n  animation: fall-108 28s -16s linear infinite;\n}\n@keyframes fall-108 {\n  34.48% {\n    transform: translate(83.5099vw, 34.48vh) scale(0.6103);\n  }\n  to {\n    transform: translate(78.79765vw, 100vh) scale(0.6103);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(109) {\n  opacity: 0.1034;\n  transform: translate(98.7552vw, -10px) scale(0.4014);\n  animation: fall-109 11s -6s linear infinite;\n}\n@keyframes fall-109 {\n  41.989% {\n    transform: translate(92.2785vw, 41.989vh) scale(0.4014);\n  }\n  to {\n    transform: translate(95.51685vw, 100vh) scale(0.4014);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(110) {\n  opacity: 0.4035;\n  transform: translate(58.3411vw, -10px) scale(0.1169);\n  animation: fall-110 30s -22s linear infinite;\n}\n@keyframes fall-110 {\n  65.614% {\n    transform: translate(53.8399vw, 65.614vh) scale(0.1169);\n  }\n  to {\n    transform: translate(56.0905vw, 100vh) scale(0.1169);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(111) {\n  opacity: 0.2576;\n  transform: translate(61.4805vw, -10px) scale(0.2844);\n  animation: fall-111 13s -27s linear infinite;\n}\n@keyframes fall-111 {\n  61.383% {\n    transform: translate(69.6676vw, 61.383vh) scale(0.2844);\n  }\n  to {\n    transform: translate(65.57405vw, 100vh) scale(0.2844);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(112) {\n  opacity: 0.2362;\n  transform: translate(23.9945vw, -10px) scale(0.7365);\n  animation: fall-112 16s -15s linear infinite;\n}\n@keyframes fall-112 {\n  72.472% {\n    transform: translate(32.5273vw, 72.472vh) scale(0.7365);\n  }\n  to {\n    transform: translate(28.2609vw, 100vh) scale(0.7365);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(113) {\n  opacity: 0.8005;\n  transform: translate(29.1147vw, -10px) scale(0.1511);\n  animation: fall-113 13s -1s linear infinite;\n}\n@keyframes fall-113 {\n  37.377% {\n    transform: translate(37.544vw, 37.377vh) scale(0.1511);\n  }\n  to {\n    transform: translate(33.32935vw, 100vh) scale(0.1511);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(114) {\n  opacity: 0.8567;\n  transform: translate(50.0897vw, -10px) scale(0.4998);\n  animation: fall-114 30s -5s linear infinite;\n}\n@keyframes fall-114 {\n  65.937% {\n    transform: translate(46.8908vw, 65.937vh) scale(0.4998);\n  }\n  to {\n    transform: translate(48.49025vw, 100vh) scale(0.4998);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(115) {\n  opacity: 0.0098;\n  transform: translate(51.7219vw, -10px) scale(0.6619);\n  animation: fall-115 11s -2s linear infinite;\n}\n@keyframes fall-115 {\n  68.013% {\n    transform: translate(61.2865vw, 68.013vh) scale(0.6619);\n  }\n  to {\n    transform: translate(56.5042vw, 100vh) scale(0.6619);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(116) {\n  opacity: 0.7155;\n  transform: translate(10.936vw, -10px) scale(0.6291);\n  animation: fall-116 21s -8s linear infinite;\n}\n@keyframes fall-116 {\n  50.755% {\n    transform: translate(6.4658vw, 50.755vh) scale(0.6291);\n  }\n  to {\n    transform: translate(8.7009vw, 100vh) scale(0.6291);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(117) {\n  opacity: 0.6352;\n  transform: translate(23.6953vw, -10px) scale(0.4536);\n  animation: fall-117 27s -12s linear infinite;\n}\n@keyframes fall-117 {\n  45.319% {\n    transform: translate(16.9255vw, 45.319vh) scale(0.4536);\n  }\n  to {\n    transform: translate(20.3104vw, 100vh) scale(0.4536);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(118) {\n  opacity: 0.2883;\n  transform: translate(77.3206vw, -10px) scale(0.7956);\n  animation: fall-118 27s -13s linear infinite;\n}\n@keyframes fall-118 {\n  39.624% {\n    transform: translate(83.1555vw, 39.624vh) scale(0.7956);\n  }\n  to {\n    transform: translate(80.23805vw, 100vh) scale(0.7956);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(119) {\n  opacity: 0.4051;\n  transform: translate(88.947vw, -10px) scale(0.7797);\n  animation: fall-119 26s -25s linear infinite;\n}\n@keyframes fall-119 {\n  59.801% {\n    transform: translate(88.409vw, 59.801vh) scale(0.7797);\n  }\n  to {\n    transform: translate(88.678vw, 100vh) scale(0.7797);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(120) {\n  opacity: 0.4217;\n  transform: translate(68.1051vw, -10px) scale(0.3126);\n  animation: fall-120 21s -11s linear infinite;\n}\n@keyframes fall-120 {\n  73.653% {\n    transform: translate(72.9489vw, 73.653vh) scale(0.3126);\n  }\n  to {\n    transform: translate(70.527vw, 100vh) scale(0.3126);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(121) {\n  opacity: 0.0132;\n  transform: translate(33.772vw, -10px) scale(0.109);\n  animation: fall-121 22s -18s linear infinite;\n}\n@keyframes fall-121 {\n  32.16% {\n    transform: translate(35.6552vw, 32.16vh) scale(0.109);\n  }\n  to {\n    transform: translate(34.7136vw, 100vh) scale(0.109);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(122) {\n  opacity: 0.2643;\n  transform: translate(63.3441vw, -10px) scale(0.6998);\n  animation: fall-122 16s -25s linear infinite;\n}\n@keyframes fall-122 {\n  65.215% {\n    transform: translate(70.7074vw, 65.215vh) scale(0.6998);\n  }\n  to {\n    transform: translate(67.02575vw, 100vh) scale(0.6998);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(123) {\n  opacity: 0.6879;\n  transform: translate(58.357vw, -10px) scale(0.2043);\n  animation: fall-123 13s -16s linear infinite;\n}\n@keyframes fall-123 {\n  57.421% {\n    transform: translate(59.5584vw, 57.421vh) scale(0.2043);\n  }\n  to {\n    transform: translate(58.9577vw, 100vh) scale(0.2043);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(124) {\n  opacity: 0.3002;\n  transform: translate(56.0104vw, -10px) scale(0.6974);\n  animation: fall-124 13s -21s linear infinite;\n}\n@keyframes fall-124 {\n  62.563% {\n    transform: translate(52.3908vw, 62.563vh) scale(0.6974);\n  }\n  to {\n    transform: translate(54.2006vw, 100vh) scale(0.6974);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(125) {\n  opacity: 0.6513;\n  transform: translate(26.4336vw, -10px) scale(0.4148);\n  animation: fall-125 18s -7s linear infinite;\n}\n@keyframes fall-125 {\n  75.929% {\n    transform: translate(30.7175vw, 75.929vh) scale(0.4148);\n  }\n  to {\n    transform: translate(28.57555vw, 100vh) scale(0.4148);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(126) {\n  opacity: 0.2625;\n  transform: translate(68.1347vw, -10px) scale(0.6517);\n  animation: fall-126 18s -11s linear infinite;\n}\n@keyframes fall-126 {\n  69.926% {\n    transform: translate(74.2378vw, 69.926vh) scale(0.6517);\n  }\n  to {\n    transform: translate(71.18625vw, 100vh) scale(0.6517);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(127) {\n  opacity: 0.2368;\n  transform: translate(78.2231vw, -10px) scale(0.4319);\n  animation: fall-127 30s -19s linear infinite;\n}\n@keyframes fall-127 {\n  63.024% {\n    transform: translate(87.1767vw, 63.024vh) scale(0.4319);\n  }\n  to {\n    transform: translate(82.6999vw, 100vh) scale(0.4319);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(128) {\n  opacity: 0.2283;\n  transform: translate(41.2327vw, -10px) scale(0.7998);\n  animation: fall-128 20s -5s linear infinite;\n}\n@keyframes fall-128 {\n  76.869% {\n    transform: translate(41.7953vw, 76.869vh) scale(0.7998);\n  }\n  to {\n    transform: translate(41.514vw, 100vh) scale(0.7998);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(129) {\n  opacity: 0.2036;\n  transform: translate(87.3996vw, -10px) scale(0.8068);\n  animation: fall-129 17s -21s linear infinite;\n}\n@keyframes fall-129 {\n  65.012% {\n    transform: translate(90.3785vw, 65.012vh) scale(0.8068);\n  }\n  to {\n    transform: translate(88.88905vw, 100vh) scale(0.8068);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(130) {\n  opacity: 0.7177;\n  transform: translate(68.1296vw, -10px) scale(0.0199);\n  animation: fall-130 16s -9s linear infinite;\n}\n@keyframes fall-130 {\n  36.566% {\n    transform: translate(67.0312vw, 36.566vh) scale(0.0199);\n  }\n  to {\n    transform: translate(67.5804vw, 100vh) scale(0.0199);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(131) {\n  opacity: 0.379;\n  transform: translate(17.844vw, -10px) scale(0.7072);\n  animation: fall-131 16s -22s linear infinite;\n}\n@keyframes fall-131 {\n  42.72% {\n    transform: translate(15.3479vw, 42.72vh) scale(0.7072);\n  }\n  to {\n    transform: translate(16.59595vw, 100vh) scale(0.7072);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(132) {\n  opacity: 0.4614;\n  transform: translate(59.642vw, -10px) scale(0.2519);\n  animation: fall-132 21s -4s linear infinite;\n}\n@keyframes fall-132 {\n  71.592% {\n    transform: translate(65.7867vw, 71.592vh) scale(0.2519);\n  }\n  to {\n    transform: translate(62.71435vw, 100vh) scale(0.2519);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(133) {\n  opacity: 0.259;\n  transform: translate(90.8172vw, -10px) scale(0.8895);\n  animation: fall-133 13s -27s linear infinite;\n}\n@keyframes fall-133 {\n  75.946% {\n    transform: translate(86.2272vw, 75.946vh) scale(0.8895);\n  }\n  to {\n    transform: translate(88.5222vw, 100vh) scale(0.8895);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(134) {\n  opacity: 0.0557;\n  transform: translate(91.9607vw, -10px) scale(0.7896);\n  animation: fall-134 11s -6s linear infinite;\n}\n@keyframes fall-134 {\n  32.761% {\n    transform: translate(97.1288vw, 32.761vh) scale(0.7896);\n  }\n  to {\n    transform: translate(94.54475vw, 100vh) scale(0.7896);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(135) {\n  opacity: 0.6639;\n  transform: translate(31.1421vw, -10px) scale(0.7317);\n  animation: fall-135 21s -23s linear infinite;\n}\n@keyframes fall-135 {\n  30.025% {\n    transform: translate(35.565vw, 30.025vh) scale(0.7317);\n  }\n  to {\n    transform: translate(33.35355vw, 100vh) scale(0.7317);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(136) {\n  opacity: 0.7811;\n  transform: translate(36.6709vw, -10px) scale(0.6011);\n  animation: fall-136 10s -20s linear infinite;\n}\n@keyframes fall-136 {\n  58.396% {\n    transform: translate(35.3178vw, 58.396vh) scale(0.6011);\n  }\n  to {\n    transform: translate(35.99435vw, 100vh) scale(0.6011);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(137) {\n  opacity: 0.2995;\n  transform: translate(91.7028vw, -10px) scale(0.7202);\n  animation: fall-137 24s -24s linear infinite;\n}\n@keyframes fall-137 {\n  71.826% {\n    transform: translate(86.9181vw, 71.826vh) scale(0.7202);\n  }\n  to {\n    transform: translate(89.31045vw, 100vh) scale(0.7202);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(138) {\n  opacity: 0.9383;\n  transform: translate(69.1285vw, -10px) scale(0.6337);\n  animation: fall-138 13s -10s linear infinite;\n}\n@keyframes fall-138 {\n  47.888% {\n    transform: translate(68.8898vw, 47.888vh) scale(0.6337);\n  }\n  to {\n    transform: translate(69.00915vw, 100vh) scale(0.6337);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(139) {\n  opacity: 0.9473;\n  transform: translate(40.2853vw, -10px) scale(0.3519);\n  animation: fall-139 29s -26s linear infinite;\n}\n@keyframes fall-139 {\n  79.38% {\n    transform: translate(45.6458vw, 79.38vh) scale(0.3519);\n  }\n  to {\n    transform: translate(42.96555vw, 100vh) scale(0.3519);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(140) {\n  opacity: 0.7939;\n  transform: translate(13.1966vw, -10px) scale(0.8387);\n  animation: fall-140 30s -25s linear infinite;\n}\n@keyframes fall-140 {\n  63.355% {\n    transform: translate(11.5668vw, 63.355vh) scale(0.8387);\n  }\n  to {\n    transform: translate(12.3817vw, 100vh) scale(0.8387);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(141) {\n  opacity: 0.3225;\n  transform: translate(13.2665vw, -10px) scale(0.5955);\n  animation: fall-141 25s -4s linear infinite;\n}\n@keyframes fall-141 {\n  53.054% {\n    transform: translate(11.4168vw, 53.054vh) scale(0.5955);\n  }\n  to {\n    transform: translate(12.34165vw, 100vh) scale(0.5955);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(142) {\n  opacity: 0.1577;\n  transform: translate(20.2229vw, -10px) scale(0.3441);\n  animation: fall-142 14s -3s linear infinite;\n}\n@keyframes fall-142 {\n  50.829% {\n    transform: translate(29.9145vw, 50.829vh) scale(0.3441);\n  }\n  to {\n    transform: translate(25.0687vw, 100vh) scale(0.3441);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(143) {\n  opacity: 0.0037;\n  transform: translate(3.5035vw, -10px) scale(0.603);\n  animation: fall-143 16s -17s linear infinite;\n}\n@keyframes fall-143 {\n  41.277% {\n    transform: translate(1.6905vw, 41.277vh) scale(0.603);\n  }\n  to {\n    transform: translate(2.597vw, 100vh) scale(0.603);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(144) {\n  opacity: 0.45;\n  transform: translate(16.6466vw, -10px) scale(0.9762);\n  animation: fall-144 15s -18s linear infinite;\n}\n@keyframes fall-144 {\n  59.5% {\n    transform: translate(12.5168vw, 59.5vh) scale(0.9762);\n  }\n  to {\n    transform: translate(14.5817vw, 100vh) scale(0.9762);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(145) {\n  opacity: 0.1516;\n  transform: translate(20.8223vw, -10px) scale(0.8744);\n  animation: fall-145 30s -19s linear infinite;\n}\n@keyframes fall-145 {\n  74.361% {\n    transform: translate(24.0955vw, 74.361vh) scale(0.8744);\n  }\n  to {\n    transform: translate(22.4589vw, 100vh) scale(0.8744);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(146) {\n  opacity: 0.5219;\n  transform: translate(8.0191vw, -10px) scale(0.0609);\n  animation: fall-146 17s -23s linear infinite;\n}\n@keyframes fall-146 {\n  39.963% {\n    transform: translate(6.152vw, 39.963vh) scale(0.0609);\n  }\n  to {\n    transform: translate(7.08555vw, 100vh) scale(0.0609);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(147) {\n  opacity: 0.2257;\n  transform: translate(64.7267vw, -10px) scale(0.9956);\n  animation: fall-147 21s -17s linear infinite;\n}\n@keyframes fall-147 {\n  37.612% {\n    transform: translate(60.7555vw, 37.612vh) scale(0.9956);\n  }\n  to {\n    transform: translate(62.7411vw, 100vh) scale(0.9956);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(148) {\n  opacity: 0.9641;\n  transform: translate(44.0112vw, -10px) scale(0.2675);\n  animation: fall-148 11s -16s linear infinite;\n}\n@keyframes fall-148 {\n  36.533% {\n    transform: translate(37.7116vw, 36.533vh) scale(0.2675);\n  }\n  to {\n    transform: translate(40.8614vw, 100vh) scale(0.2675);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(149) {\n  opacity: 0.345;\n  transform: translate(36.222vw, -10px) scale(0.9787);\n  animation: fall-149 10s -2s linear infinite;\n}\n@keyframes fall-149 {\n  79.462% {\n    transform: translate(42.5714vw, 79.462vh) scale(0.9787);\n  }\n  to {\n    transform: translate(39.3967vw, 100vh) scale(0.9787);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(150) {\n  opacity: 0.8711;\n  transform: translate(77.5032vw, -10px) scale(0.9455);\n  animation: fall-150 17s -29s linear infinite;\n}\n@keyframes fall-150 {\n  39.593% {\n    transform: translate(81.6134vw, 39.593vh) scale(0.9455);\n  }\n  to {\n    transform: translate(79.5583vw, 100vh) scale(0.9455);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(151) {\n  opacity: 0.3673;\n  transform: translate(61.6015vw, -10px) scale(0.076);\n  animation: fall-151 26s -10s linear infinite;\n}\n@keyframes fall-151 {\n  42.887% {\n    transform: translate(71.2939vw, 42.887vh) scale(0.076);\n  }\n  to {\n    transform: translate(66.4477vw, 100vh) scale(0.076);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(152) {\n  opacity: 0.109;\n  transform: translate(22.152vw, -10px) scale(0.5903);\n  animation: fall-152 25s -26s linear infinite;\n}\n@keyframes fall-152 {\n  40.61% {\n    transform: translate(14.5333vw, 40.61vh) scale(0.5903);\n  }\n  to {\n    transform: translate(18.34265vw, 100vh) scale(0.5903);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(153) {\n  opacity: 0.9162;\n  transform: translate(91.4827vw, -10px) scale(0.1135);\n  animation: fall-153 14s -3s linear infinite;\n}\n@keyframes fall-153 {\n  68.122% {\n    transform: translate(82.5501vw, 68.122vh) scale(0.1135);\n  }\n  to {\n    transform: translate(87.0164vw, 100vh) scale(0.1135);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(154) {\n  opacity: 0.8742;\n  transform: translate(27.1273vw, -10px) scale(0.9793);\n  animation: fall-154 20s -24s linear infinite;\n}\n@keyframes fall-154 {\n  43.677% {\n    transform: translate(32.6464vw, 43.677vh) scale(0.9793);\n  }\n  to {\n    transform: translate(29.88685vw, 100vh) scale(0.9793);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(155) {\n  opacity: 0.8513;\n  transform: translate(19.3706vw, -10px) scale(0.4595);\n  animation: fall-155 21s -29s linear infinite;\n}\n@keyframes fall-155 {\n  59.993% {\n    transform: translate(11.6272vw, 59.993vh) scale(0.4595);\n  }\n  to {\n    transform: translate(15.4989vw, 100vh) scale(0.4595);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(156) {\n  opacity: 0.8923;\n  transform: translate(74.2691vw, -10px) scale(0.4659);\n  animation: fall-156 21s -20s linear infinite;\n}\n@keyframes fall-156 {\n  35.335% {\n    transform: translate(65.9879vw, 35.335vh) scale(0.4659);\n  }\n  to {\n    transform: translate(70.1285vw, 100vh) scale(0.4659);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(157) {\n  opacity: 0.0514;\n  transform: translate(70.3003vw, -10px) scale(0.9619);\n  animation: fall-157 18s -25s linear infinite;\n}\n@keyframes fall-157 {\n  38.088% {\n    transform: translate(74.2036vw, 38.088vh) scale(0.9619);\n  }\n  to {\n    transform: translate(72.25195vw, 100vh) scale(0.9619);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(158) {\n  opacity: 0.2184;\n  transform: translate(89.0272vw, -10px) scale(0.0424);\n  animation: fall-158 30s -19s linear infinite;\n}\n@keyframes fall-158 {\n  75.707% {\n    transform: translate(85.9126vw, 75.707vh) scale(0.0424);\n  }\n  to {\n    transform: translate(87.4699vw, 100vh) scale(0.0424);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(159) {\n  opacity: 0.5198;\n  transform: translate(34.2177vw, -10px) scale(0.178);\n  animation: fall-159 12s -22s linear infinite;\n}\n@keyframes fall-159 {\n  42.503% {\n    transform: translate(40.7242vw, 42.503vh) scale(0.178);\n  }\n  to {\n    transform: translate(37.47095vw, 100vh) scale(0.178);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(160) {\n  opacity: 0.1808;\n  transform: translate(55.2529vw, -10px) scale(0.3639);\n  animation: fall-160 28s -21s linear infinite;\n}\n@keyframes fall-160 {\n  56.761% {\n    transform: translate(55.8666vw, 56.761vh) scale(0.3639);\n  }\n  to {\n    transform: translate(55.55975vw, 100vh) scale(0.3639);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(161) {\n  opacity: 0.5674;\n  transform: translate(41.475vw, -10px) scale(0.3471);\n  animation: fall-161 25s -3s linear infinite;\n}\n@keyframes fall-161 {\n  59.781% {\n    transform: translate(50.1606vw, 59.781vh) scale(0.3471);\n  }\n  to {\n    transform: translate(45.8178vw, 100vh) scale(0.3471);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(162) {\n  opacity: 0.346;\n  transform: translate(25.5378vw, -10px) scale(0.253);\n  animation: fall-162 25s -22s linear infinite;\n}\n@keyframes fall-162 {\n  69.87% {\n    transform: translate(26.9056vw, 69.87vh) scale(0.253);\n  }\n  to {\n    transform: translate(26.2217vw, 100vh) scale(0.253);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(163) {\n  opacity: 0.5754;\n  transform: translate(11.1228vw, -10px) scale(0.3377);\n  animation: fall-163 17s -3s linear infinite;\n}\n@keyframes fall-163 {\n  66.982% {\n    transform: translate(3.0056vw, 66.982vh) scale(0.3377);\n  }\n  to {\n    transform: translate(7.0642vw, 100vh) scale(0.3377);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(164) {\n  opacity: 0.5992;\n  transform: translate(27.3517vw, -10px) scale(0.4398);\n  animation: fall-164 24s -24s linear infinite;\n}\n@keyframes fall-164 {\n  46.669% {\n    transform: translate(20.0443vw, 46.669vh) scale(0.4398);\n  }\n  to {\n    transform: translate(23.698vw, 100vh) scale(0.4398);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(165) {\n  opacity: 0.319;\n  transform: translate(49.2571vw, -10px) scale(0.6812);\n  animation: fall-165 29s -29s linear infinite;\n}\n@keyframes fall-165 {\n  52.14% {\n    transform: translate(47.318vw, 52.14vh) scale(0.6812);\n  }\n  to {\n    transform: translate(48.28755vw, 100vh) scale(0.6812);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(166) {\n  opacity: 0.2835;\n  transform: translate(17.1946vw, -10px) scale(0.7259);\n  animation: fall-166 26s -27s linear infinite;\n}\n@keyframes fall-166 {\n  52.583% {\n    transform: translate(11.766vw, 52.583vh) scale(0.7259);\n  }\n  to {\n    transform: translate(14.4803vw, 100vh) scale(0.7259);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(167) {\n  opacity: 0.3036;\n  transform: translate(99.2002vw, -10px) scale(0.6586);\n  animation: fall-167 15s -15s linear infinite;\n}\n@keyframes fall-167 {\n  43.359% {\n    transform: translate(92.9944vw, 43.359vh) scale(0.6586);\n  }\n  to {\n    transform: translate(96.0973vw, 100vh) scale(0.6586);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(168) {\n  opacity: 0.22;\n  transform: translate(25.4257vw, -10px) scale(0.1787);\n  animation: fall-168 24s -8s linear infinite;\n}\n@keyframes fall-168 {\n  37.542% {\n    transform: translate(16.7308vw, 37.542vh) scale(0.1787);\n  }\n  to {\n    transform: translate(21.07825vw, 100vh) scale(0.1787);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(169) {\n  opacity: 0.7798;\n  transform: translate(71.7829vw, -10px) scale(0.1242);\n  animation: fall-169 16s -13s linear infinite;\n}\n@keyframes fall-169 {\n  39.503% {\n    transform: translate(74.6479vw, 39.503vh) scale(0.1242);\n  }\n  to {\n    transform: translate(73.2154vw, 100vh) scale(0.1242);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(170) {\n  opacity: 0.3668;\n  transform: translate(15.988vw, -10px) scale(0.0576);\n  animation: fall-170 15s -18s linear infinite;\n}\n@keyframes fall-170 {\n  75.398% {\n    transform: translate(9.1055vw, 75.398vh) scale(0.0576);\n  }\n  to {\n    transform: translate(12.54675vw, 100vh) scale(0.0576);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(171) {\n  opacity: 0.1678;\n  transform: translate(18.5376vw, -10px) scale(0.5624);\n  animation: fall-171 15s -24s linear infinite;\n}\n@keyframes fall-171 {\n  52.929% {\n    transform: translate(14.636vw, 52.929vh) scale(0.5624);\n  }\n  to {\n    transform: translate(16.5868vw, 100vh) scale(0.5624);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(172) {\n  opacity: 0.4936;\n  transform: translate(61.3011vw, -10px) scale(0.1862);\n  animation: fall-172 25s -11s linear infinite;\n}\n@keyframes fall-172 {\n  34.133% {\n    transform: translate(68.9739vw, 34.133vh) scale(0.1862);\n  }\n  to {\n    transform: translate(65.1375vw, 100vh) scale(0.1862);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(173) {\n  opacity: 0.3046;\n  transform: translate(53.8656vw, -10px) scale(0.1327);\n  animation: fall-173 13s -13s linear infinite;\n}\n@keyframes fall-173 {\n  32.19% {\n    transform: translate(58.7899vw, 32.19vh) scale(0.1327);\n  }\n  to {\n    transform: translate(56.32775vw, 100vh) scale(0.1327);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(174) {\n  opacity: 0.6887;\n  transform: translate(40.31vw, -10px) scale(0.969);\n  animation: fall-174 16s -24s linear infinite;\n}\n@keyframes fall-174 {\n  46.656% {\n    transform: translate(44.5556vw, 46.656vh) scale(0.969);\n  }\n  to {\n    transform: translate(42.4328vw, 100vh) scale(0.969);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(175) {\n  opacity: 0.0246;\n  transform: translate(80.985vw, -10px) scale(0.9456);\n  animation: fall-175 17s -6s linear infinite;\n}\n@keyframes fall-175 {\n  55.964% {\n    transform: translate(84.3808vw, 55.964vh) scale(0.9456);\n  }\n  to {\n    transform: translate(82.6829vw, 100vh) scale(0.9456);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(176) {\n  opacity: 0.7131;\n  transform: translate(36.6555vw, -10px) scale(0.435);\n  animation: fall-176 20s -30s linear infinite;\n}\n@keyframes fall-176 {\n  45.013% {\n    transform: translate(32.7239vw, 45.013vh) scale(0.435);\n  }\n  to {\n    transform: translate(34.6897vw, 100vh) scale(0.435);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(177) {\n  opacity: 0.8185;\n  transform: translate(54.2945vw, -10px) scale(0.7768);\n  animation: fall-177 29s -29s linear infinite;\n}\n@keyframes fall-177 {\n  57.259% {\n    transform: translate(55.6587vw, 57.259vh) scale(0.7768);\n  }\n  to {\n    transform: translate(54.9766vw, 100vh) scale(0.7768);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(178) {\n  opacity: 0.323;\n  transform: translate(75.2278vw, -10px) scale(0.9429);\n  animation: fall-178 23s -18s linear infinite;\n}\n@keyframes fall-178 {\n  50.987% {\n    transform: translate(70.3465vw, 50.987vh) scale(0.9429);\n  }\n  to {\n    transform: translate(72.78715vw, 100vh) scale(0.9429);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(179) {\n  opacity: 0.7901;\n  transform: translate(42.4686vw, -10px) scale(0.7398);\n  animation: fall-179 13s -10s linear infinite;\n}\n@keyframes fall-179 {\n  52.441% {\n    transform: translate(34.6902vw, 52.441vh) scale(0.7398);\n  }\n  to {\n    transform: translate(38.5794vw, 100vh) scale(0.7398);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(180) {\n  opacity: 0.1179;\n  transform: translate(42.995vw, -10px) scale(0.411);\n  animation: fall-180 26s -27s linear infinite;\n}\n@keyframes fall-180 {\n  31.716% {\n    transform: translate(48.1809vw, 31.716vh) scale(0.411);\n  }\n  to {\n    transform: translate(45.58795vw, 100vh) scale(0.411);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(181) {\n  opacity: 0.2605;\n  transform: translate(50.8587vw, -10px) scale(0.7056);\n  animation: fall-181 17s -1s linear infinite;\n}\n@keyframes fall-181 {\n  38.12% {\n    transform: translate(43.1668vw, 38.12vh) scale(0.7056);\n  }\n  to {\n    transform: translate(47.01275vw, 100vh) scale(0.7056);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(182) {\n  opacity: 0.204;\n  transform: translate(70.4805vw, -10px) scale(0.744);\n  animation: fall-182 23s -2s linear infinite;\n}\n@keyframes fall-182 {\n  33.183% {\n    transform: translate(69.1331vw, 33.183vh) scale(0.744);\n  }\n  to {\n    transform: translate(69.8068vw, 100vh) scale(0.744);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(183) {\n  opacity: 0.8971;\n  transform: translate(51.3247vw, -10px) scale(0.1784);\n  animation: fall-183 13s -29s linear infinite;\n}\n@keyframes fall-183 {\n  32.735% {\n    transform: translate(48.3409vw, 32.735vh) scale(0.1784);\n  }\n  to {\n    transform: translate(49.8328vw, 100vh) scale(0.1784);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(184) {\n  opacity: 0.8539;\n  transform: translate(28.7464vw, -10px) scale(0.6874);\n  animation: fall-184 14s -20s linear infinite;\n}\n@keyframes fall-184 {\n  55.235% {\n    transform: translate(35.3864vw, 55.235vh) scale(0.6874);\n  }\n  to {\n    transform: translate(32.0664vw, 100vh) scale(0.6874);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(185) {\n  opacity: 0.3296;\n  transform: translate(51.3452vw, -10px) scale(0.7387);\n  animation: fall-185 15s -9s linear infinite;\n}\n@keyframes fall-185 {\n  35.923% {\n    transform: translate(54.286vw, 35.923vh) scale(0.7387);\n  }\n  to {\n    transform: translate(52.8156vw, 100vh) scale(0.7387);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(186) {\n  opacity: 0.211;\n  transform: translate(40.6935vw, -10px) scale(0.8923);\n  animation: fall-186 26s -20s linear infinite;\n}\n@keyframes fall-186 {\n  48.482% {\n    transform: translate(41.8045vw, 48.482vh) scale(0.8923);\n  }\n  to {\n    transform: translate(41.249vw, 100vh) scale(0.8923);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(187) {\n  opacity: 0.7086;\n  transform: translate(9.2405vw, -10px) scale(0.1996);\n  animation: fall-187 12s -7s linear infinite;\n}\n@keyframes fall-187 {\n  69.403% {\n    transform: translate(2.2099vw, 69.403vh) scale(0.1996);\n  }\n  to {\n    transform: translate(5.7252vw, 100vh) scale(0.1996);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(188) {\n  opacity: 0.8193;\n  transform: translate(65.7295vw, -10px) scale(0.2904);\n  animation: fall-188 17s -1s linear infinite;\n}\n@keyframes fall-188 {\n  70.773% {\n    transform: translate(72.6473vw, 70.773vh) scale(0.2904);\n  }\n  to {\n    transform: translate(69.1884vw, 100vh) scale(0.2904);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(189) {\n  opacity: 0.7773;\n  transform: translate(99.8628vw, -10px) scale(0.4141);\n  animation: fall-189 28s -23s linear infinite;\n}\n@keyframes fall-189 {\n  30.921% {\n    transform: translate(92.6734vw, 30.921vh) scale(0.4141);\n  }\n  to {\n    transform: translate(96.2681vw, 100vh) scale(0.4141);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(190) {\n  opacity: 0.0954;\n  transform: translate(20.1129vw, -10px) scale(0.9373);\n  animation: fall-190 27s -11s linear infinite;\n}\n@keyframes fall-190 {\n  56.106% {\n    transform: translate(25.6797vw, 56.106vh) scale(0.9373);\n  }\n  to {\n    transform: translate(22.8963vw, 100vh) scale(0.9373);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(191) {\n  opacity: 0.3595;\n  transform: translate(91.6566vw, -10px) scale(0.6633);\n  animation: fall-191 19s -28s linear infinite;\n}\n@keyframes fall-191 {\n  76.842% {\n    transform: translate(101.186vw, 76.842vh) scale(0.6633);\n  }\n  to {\n    transform: translate(96.4213vw, 100vh) scale(0.6633);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(192) {\n  opacity: 0.5723;\n  transform: translate(90.7573vw, -10px) scale(0.4698);\n  animation: fall-192 20s -8s linear infinite;\n}\n@keyframes fall-192 {\n  37.57% {\n    transform: translate(93.8646vw, 37.57vh) scale(0.4698);\n  }\n  to {\n    transform: translate(92.31095vw, 100vh) scale(0.4698);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(193) {\n  opacity: 0.482;\n  transform: translate(5.6529vw, -10px) scale(0.3857);\n  animation: fall-193 24s -16s linear infinite;\n}\n@keyframes fall-193 {\n  31.577% {\n    transform: translate(8.9855vw, 31.577vh) scale(0.3857);\n  }\n  to {\n    transform: translate(7.3192vw, 100vh) scale(0.3857);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(194) {\n  opacity: 0.9771;\n  transform: translate(58.3634vw, -10px) scale(0.733);\n  animation: fall-194 11s -19s linear infinite;\n}\n@keyframes fall-194 {\n  42.141% {\n    transform: translate(62.6507vw, 42.141vh) scale(0.733);\n  }\n  to {\n    transform: translate(60.50705vw, 100vh) scale(0.733);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(195) {\n  opacity: 0.4959;\n  transform: translate(40.8109vw, -10px) scale(0.4219);\n  animation: fall-195 30s -6s linear infinite;\n}\n@keyframes fall-195 {\n  31.662% {\n    transform: translate(48.7039vw, 31.662vh) scale(0.4219);\n  }\n  to {\n    transform: translate(44.7574vw, 100vh) scale(0.4219);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(196) {\n  opacity: 0.9705;\n  transform: translate(70.0223vw, -10px) scale(0.4051);\n  animation: fall-196 19s -8s linear infinite;\n}\n@keyframes fall-196 {\n  75.285% {\n    transform: translate(79.2948vw, 75.285vh) scale(0.4051);\n  }\n  to {\n    transform: translate(74.65855vw, 100vh) scale(0.4051);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(197) {\n  opacity: 0.4055;\n  transform: translate(83.7034vw, -10px) scale(0.0216);\n  animation: fall-197 23s -21s linear infinite;\n}\n@keyframes fall-197 {\n  63.695% {\n    transform: translate(92.266vw, 63.695vh) scale(0.0216);\n  }\n  to {\n    transform: translate(87.9847vw, 100vh) scale(0.0216);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(198) {\n  opacity: 0.6747;\n  transform: translate(23.822vw, -10px) scale(0.4331);\n  animation: fall-198 20s -23s linear infinite;\n}\n@keyframes fall-198 {\n  32.369% {\n    transform: translate(24.1666vw, 32.369vh) scale(0.4331);\n  }\n  to {\n    transform: translate(23.9943vw, 100vh) scale(0.4331);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(199) {\n  opacity: 0.6079;\n  transform: translate(89.2079vw, -10px) scale(0.1727);\n  animation: fall-199 22s -21s linear infinite;\n}\n@keyframes fall-199 {\n  44.272% {\n    transform: translate(88.9351vw, 44.272vh) scale(0.1727);\n  }\n  to {\n    transform: translate(89.0715vw, 100vh) scale(0.1727);\n  }\n}\n.snow[_ngcontent-%COMP%]:nth-child(200) {\n  opacity: 0.1408;\n  transform: translate(41.5358vw, -10px) scale(0.0511);\n  animation: fall-200 30s -4s linear infinite;\n}\n@keyframes fall-200 {\n  71.687% {\n    transform: translate(37.3076vw, 71.687vh) scale(0.0511);\n  }\n  to {\n    transform: translate(39.4217vw, 100vh) scale(0.0511);\n  }\n}\n#itinerary[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateZ(0) scale(1);\n  background: transparent;\n}\nul.timeline-holder[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 20px 20px 20px 55px;\n}\nli.timeline-event[_ngcontent-%COMP%] {\n  margin: 0 0 42px 60px;\n  position: relative;\n  padding-top: 5px;\n  list-style: none;\n  transition: 0.3s;\n  color: #55554e;\n  font-style: italic;\n  font-weight: bold;\n}\nli.timeline-event[_ngcontent-%COMP%]:hover {\n  color: #bdb76b;\n}\nli.timeline-event[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 3px;\n  height: calc(100% - 20px);\n  position: absolute;\n  background-color: #950740;\n  left: -30px;\n  top: 51px;\n}\nli.timeline-event[_ngcontent-%COMP%]:last-child:before {\n  display: none;\n}\nli.timeline-event[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\nli.timeline-event[_ngcontent-%COMP%]   span.timeline-circle[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 19px;\n  height: 19px;\n  left: -8px;\n  top: 11px;\n  border-radius: 90%;\n  background-color: #950740;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\nli.timeline-event[_ngcontent-%COMP%]:hover   span.timeline-circle[_ngcontent-%COMP%]:after {\n  opacity: 1;\n}\nspan.timeline-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -30px;\n}\nspan.timeline-circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 35px;\n  height: 35px;\n  border-radius: 90%;\n  border: 3px solid #950740;\n  position: absolute;\n  left: -16px;\n  top: 3px;\n  z-index: 1;\n  transition: 0.3s;\n}\n.timeline-event-date[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -115px;\n  top: 2px;\n  transition: 0.3s;\n  color: #950740;\n  font-weight: 700;\n}\nli.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-date[_ngcontent-%COMP%] {\n  transform: translateX(-10px);\n  color: #bdb76b;\n}\n.timeline-event-content[_ngcontent-%COMP%] {\n  line-height: 160%;\n  text-align: left;\n  margin-left: 50px;\n}\n.timeline-event-content[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 25px rgba(60, 72, 88, 0.15);\n  transform: translateY(-5px);\n  border-color: transparent !important;\n}\n@media (max-width: 568px) {\n  .timeline-event-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGl0aW5lcmFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7K0RBQUE7QUFxRUE7OytEQUFBO0FDbkVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUtKO0FBRkE7RUFDSSxjQUFBO0FBS0o7QUFGQTtFQUNJLGtCQUFBO0FBS0o7QUFJQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkRYVTtFQ1lWLGtCQUFBO0FBRko7QUFlTTtFQUNFLGVBQUE7RUFDQSxtREFBQTtFQUNBLDBDQUFBO0FBYlI7QUFnQk07RUFDRTtJQUNFLHNEQUFBO0VBZFI7RUFpQk07SUFDRSxtREFBQTtFQWZSO0FBQ0Y7QUFFTTtFQUNFLGVBQUE7RUFDQSxvREFBQTtFQUNBLDBDQUFBO0FBQVI7QUFHTTtFQUNFO0lBQ0UsdURBQUE7RUFEUjtFQUlNO0lBQ0Usb0RBQUE7RUFGUjtBQUNGO0FBWE07RUFDRSxlQUFBO0VBQ0EsbURBQUE7RUFDQSwwQ0FBQTtBQWFSO0FBVk07RUFDRTtJQUNFLHNEQUFBO0VBWVI7RUFUTTtJQUNFLG1EQUFBO0VBV1I7QUFDRjtBQXhCTTtFQUNFLGVBQUE7RUFDQSxvREFBQTtFQUNBLHlDQUFBO0FBMEJSO0FBdkJNO0VBQ0U7SUFDRSx1REFBQTtFQXlCUjtFQXRCTTtJQUNFLG9EQUFBO0VBd0JSO0FBQ0Y7QUFyQ007RUFDRSxlQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQ0FBQTtBQXVDUjtBQXBDTTtFQUNFO0lBQ0UsdURBQUE7RUFzQ1I7RUFuQ007SUFDRSxvREFBQTtFQXFDUjtBQUNGO0FBbERNO0VBQ0UsZUFBQTtFQUNBLG1EQUFBO0VBQ0EsMENBQUE7QUFvRFI7QUFqRE07RUFDRTtJQUNFLHNE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RkE7RUFDSSxhQUFBO0FBMGdGSjtBQXZnRkE7RUFDSSxnQkFBQTtBQTBnRko7QUF2Z0ZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJEeEZnQjtFQ3lGaEIsVUFBQTtFQUNBLHdCQUFBO0FBMGdGSjtBQXZnRkE7RUFDSSxVQUFBO0FBMGdGSjtBQXZnRkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBMGdGSjtBQXZnRkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUEwZ0ZKO0FBdmdGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGNEMUhnQjtFQzJIaEIsZ0JBQUE7QUEwZ0ZKO0FBdmdGQTtFQUNJLDRCQUFBO0VBQ0EsY0Q3SGdCO0FDdW9GcEI7QUF2Z0ZBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBMGdGSjtBQXZnRkE7RUFFSSw4Q0FBQTtFQUVBLDJCQUFBO0VBQ0Esb0NBQUE7QUEwZ0ZKO0FBdmdGQTtFQUNJO0lBQ0ksZ0JBQUE7RUEwZ0ZOO0FBQ0YiLCJmaWxlIjoiaXRpbmVyYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIENvbG9yXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcblxyXG4kY29sb3ItbG9hZGVyLWE6ICNmZjRiNWM7XHJcbiRjb2xvci1sb2FkZXItYjogI2E0Yjc4NztcclxuJGNvbG9yLWxvYWRlci1jOiAjZmZiYjkxO1xyXG4kY29sb3ItbG9hZGVyLWQ6ICM2NmJmYmY7XHJcblxyXG4kY29sb3ItbWVudTogI2UxMTA2NDtcclxuJGNvbG9yLW1lbnUtaG92ZXI6ICNjY2QxNDQ7XHJcbiRjb2xvci1tZW51LWJhY2tncm91bmQ6ICNlNmU5ZWM7XHJcbiRjb2xvci1saW5rOiAjZTExMDY0O1xyXG4kY29sb3ItbGluay1ob3ZlcjogI2NjZDE0NDtcclxuJGNvbG9yLWJvZHk6ICMyNzI4Mjk7XHJcblxyXG5cclxuJGNvbG9yLWJsYWNrOiAjMDAwO1xyXG4kY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1mbG9yYWwtd2hpdGU6ICNmZmZhZjA7XHJcbiRjb2xvci13aGl0ZS1saWdodC1saXR0bGU6ICNlNmU5ZWM7XHJcbiRjb2xvci1ibGFjay1kYXJrLWxpdHRsZTogIzIyMjgzMTtcclxuJGNvbG9yLWJsYWNrLWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGNvbG9yLWdyYXktZGFyay1saXR0bGU6ICM1ZDVjNjE7XHJcbiRjb2xvci1ncmF5LWxpZ2h0OiAjMzc5NjgzO1xyXG4kY29sb3ItbWFyb29uLWRhcms6ICM5NTA3NDA7XHJcbiRjb2xvci1tYXJvb24tbGlnaHQ6ICNlMTEwNjQ7XHJcbiRjb2xvci1nb2xkLWxpZ2h0OiAjY2NkMTQ0O1xyXG4kY29sb3ItZ29sZC1tZWRpdW06ICNiZGI3NmI7XHJcbiRjb2xvci1ibGFjay1saWdodDogIzU1NTU0ZTtcclxuJGNvbG9yLWJyb3duLWxpZ2h0OiAjZDdkNGJlO1xyXG5cclxuJGNvbG9yLWhvbWUtbWVudS1mb250OiAjOTQ5NDk0O1xyXG4kY29sb3ItaG9tZS1tZW51LWxpZ2h0LTE6ICM4MDAwODA7XHJcbiRjb2xvci1ob21lLW1lbnUtZGFyay0xOiAjZDg3MDkzO1xyXG4kY29sb3ItaG9tZS1tZW51LWxpZ2h0LTI6ICNkYmExNzA7XHJcbiRjb2xvci1ob21lLW1lbnUtZGFyay0yOiAjNzBkYmRiO1xyXG4kY29sb3ItaG9tZS1tZW51LWxpZ2h0LTM6ICNlMzVlODM7XHJcbiRjb2xvci1ob21lLW1lbnUtZGFyay0zOiAjYzAzOGJjO1xyXG4kY29sb3ItaG9tZS1tZW51LWxpZ2h0LTQ6ICMwMGUyZmY7XHJcbiRjb2xvci1ob21lLW1lbnUtZGFyay00OiAjNWE5NzdlO1xyXG4kY29sb3ItaG9tZS1tZW51LWxpZ2h0LTU6ICNmZmZmMDA7XHJcbiRjb2xvci1ob21lLW1lbnUtZGFyay01OiAjZTU2NzY3O1xyXG5cclxuJGNvbG9yLWhvbWUtdGV4dC0xOiAjYzg1YzFkO1xyXG4kY29sb3ItaG9tZS10ZXh0LTI6ICM1MmQxY2I7XHJcbiRjb2xvci1ob21lLXRleHQtMzogI2QxMjZhNDtcclxuXHJcbiRjb2xvci1mYWNlYm9vazogIzNiNTk5OTtcclxuJGNvbG9yLWluc3RhZ3JhbTogI2Q3ODE5MTtcclxuJGNvbG9yLXR3aXR0ZXI6ICM1NWFjZWU7XHJcbiRjb2xvci1naXRodWI6ICM0MDc4YzA7XHJcbiRjb2xvci1zdGVhbTogIzUwOWI3ZjtcclxuXHJcbiRjb2xvci1mYWNlYm9vay1kYXJrOiAjMGMzNThkO1xyXG4kY29sb3ItaW5zdGFncmFtLWRhcms6ICNiNDNjNTM7XHJcbiRjb2xvci10d2l0dGVyLWRhcms6ICMyMjk2ZWQ7XHJcbiRjb2xvci1naXRodWItZGFyazogIzE0NWZjMDtcclxuJGNvbG9yLXN0ZWFtLWRhcms6ICMzZTdlNjY7XHJcblxyXG4kY2xvc2UtZGVmYXVsdDogIzk1MDc0MDtcclxuJGNsb3NlLWhvdmVyOiAjNTU1NTRlO1xyXG5cclxuJHRhYmxlLXNwYWNpbmctdW5pdDogMjRweDtcclxuJGhhbGYtdGFibGUtc3BhY2luZy11bml0OiAkdGFibGUtc3BhY2luZy11bml0IC8gMjtcclxuXHJcbiR0YWJsZS1oaWdobGlnaHQ6ICNFRUVFRUU7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgRm9udFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRmb250LWdlbmVyYWw6ICdjb21mb3J0YWEnLCdSb2JvdG8nLCdBcmlhbCcsJ3NhbnMtc2VyaWYnO1xyXG4kZm9udC1wcmltYXJ5OiAnY29tZm9ydGFhJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcclxuJGZvbnQtc2Vjb25kYXJ5OiAnUm9ib3RvJywnc2Fucy1zZXJpZic7IiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuI2l0aW5lcmFyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgIzFiMjczNSAwJSwgIzA5MGEwZiAxMDAlKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEwcHggJGNvbG9yLXdoaXRlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGNvbG9yOiAjYWZlZWVlO1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiByYW5kb21fcmFuZ2UoJG1pbiwgJG1heCkge1xyXG4gICAgJHJhbmQ6IHJhbmRvbSgpO1xyXG4gICAgJHJhbmRvbV9yYW5nZTogJG1pbiArIGZsb29yKCRyYW5kICogKCgkbWF4IC0gJG1pbikgKyAxKSk7XHJcbiAgICBAcmV0dXJuICRyYW5kb21fcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4uc25vdyB7XHJcbiAgICAkdG90YWw6IDIwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIFxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkdG90YWwge1xyXG4gICAgICAkcmFuZG9tLXg6IHJhbmRvbSgxMDAwMDAwKSAqIDAuMDAwMXZ3O1xyXG4gICAgICAkcmFuZG9tLW9mZnNldDogcmFuZG9tX3JhbmdlKC0xMDAwMDAsIDEwMDAwMCkgKiAwLjAwMDF2dztcclxuICAgICAgJHJhbmRvbS14LWVuZDogJHJhbmRvbS14ICsgJHJhbmRvbS1vZmZzZXQ7XHJcbiAgICAgICRyYW5kb20teC1lbmQteW95bzogJHJhbmRvbS14ICsgKCRyYW5kb20tb2Zmc2V0IC8gMik7XHJcbiAgICAgICRyYW5kb20teW95by10aW1lOiByYW5kb21fcmFuZ2UoMzAwMDAsIDgwMDAwKSAvIDEwMDAwMDtcclxuICAgICAgJHJhbmRvbS15b3lvLXk6ICRyYW5kb20teW95by10aW1lICogMTAwdmg7XHJcbiAgICAgICRyYW5kb20tc2NhbGU6IHJhbmRvbSgxMDAwMCkgKiAwLjAwMDE7XHJcbiAgICAgICRmYWxsLWR1cmF0aW9uOiByYW5kb21fcmFuZ2UoMTAsIDMwKSAqIDFzO1xyXG4gICAgICAkZmFsbC1kZWxheTogcmFuZG9tKDMwKSAqIC0xcztcclxuICBcclxuICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICBvcGFjaXR5OiByYW5kb20oMTAwMDApICogMC4wMDAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRyYW5kb20teCwgLTEwcHgpIHNjYWxlKCRyYW5kb20tc2NhbGUpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFsbC0jeyRpfSAkZmFsbC1kdXJhdGlvbiAkZmFsbC1kZWxheSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgQGtleWZyYW1lcyBmYWxsLSN7JGl9IHtcclxuICAgICAgICAje3BlcmNlbnRhZ2UoJHJhbmRvbS15b3lvLXRpbWUpfSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkcmFuZG9tLXgtZW5kLCAkcmFuZG9tLXlveW8teSkgc2NhbGUoJHJhbmRvbS1zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRyYW5kb20teC1lbmQteW95bywgMTAwdmgpIHNjYWxlKCRyYW5kb20tc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgXHJcbiNpdGluZXJhcnkgLmNvbnRhaW5lciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnVsLnRpbWVsaW5lLWhvbGRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA1NXB4O1xyXG59XHJcblxyXG5saS50aW1lbGluZS1ldmVudCB7XHJcbiAgICBtYXJnaW46IDAgMCA0MnB4IDYwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGNvbG9yOiAkY29sb3ItYmxhY2stbGlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxubGkudGltZWxpbmUtZXZlbnQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICRjb2xvci1nb2xkLW1lZGl1bTtcclxufVxyXG5cclxubGkudGltZWxpbmUtZXZlbnQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tYXJvb24tZGFyaztcclxuICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgdG9wOiA1MXB4O1xyXG59XHJcblxyXG5saS50aW1lbGluZS1ldmVudDpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5saS50aW1lbGluZS1ldmVudDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmxpLnRpbWVsaW5lLWV2ZW50IHNwYW4udGltZWxpbmUtY2lyY2xlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICBsZWZ0OiAtOHB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1hcm9vbi1kYXJrOyAgICBcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxufVxyXG5cclxubGkudGltZWxpbmUtZXZlbnQ6aG92ZXIgc3Bhbi50aW1lbGluZS1jaXJjbGU6YWZ0ZXIgeyBcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbnNwYW4udGltZWxpbmUtY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0zMHB4O1xyXG59XHJcblxyXG5zcGFuLnRpbWVsaW5lLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkY29sb3ItbWFyb29uLWRhcms7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTZweDtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLnRpbWVsaW5lLWV2ZW50LWRhdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTExNXB4O1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBjb2xvcjogJGNvbG9yLW1hcm9vbi1kYXJrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxubGkudGltZWxpbmUtZXZlbnQ6aG92ZXIgLnRpbWVsaW5lLWV2ZW50LWRhdGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICAgIGNvbG9yOiAkY29sb3ItZ29sZC1tZWRpdW07XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC1jb250ZW50IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtZXZlbnQtY29udGVudDpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoNjAsIDcyLCA4OCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDYwLCA3MiwgODgsIDAuMTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgLnRpbWVsaW5lLWV2ZW50LWNvbnRlbnQgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItineraryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-itinerary',
                templateUrl: './itinerary.component.html',
                styleUrls: ['./itinerary.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GU/y":
/*!************************************************************************!*\
  !*** ./src/app/shared/ui/loading-spinner/loading-spinner.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 6, vars: 0, consts: [[1, "loadSpinner"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loadSpinner[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n  display: flex;\n  box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  overflow: hidden;\n  background: #222831;\n}\n@media (min-width: 992px) {\n  .loadSpinner[_ngcontent-%COMP%] {\n    padding-top: 25%;\n    padding-left: 40%;\n  }\n}\n@media (min-width: 768px) and (max-width: 992px) {\n  .loadSpinner[_ngcontent-%COMP%] {\n    padding-top: 40%;\n    padding-left: 40%;\n  }\n}\n@media (max-width: 500px) {\n  .loadSpinner[_ngcontent-%COMP%] {\n    padding-top: 70%;\n    padding-left: 30%;\n  }\n}\n.loadSpinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n  background: #ff4b5c;\n  border-radius: 50%;\n  margin: 0 5px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n}\n.loadSpinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #a4b787;\n}\n.loadSpinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: #ffbb91;\n}\n.loadSpinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  background: #66bfbf;\n}\n.loadSpinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child) {\n  animation: animate 1.5s linear infinite;\n}\n@keyframes animate {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(30px);\n  }\n}\n.loadSpinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  animation: jump 1.5s ease-in-out infinite;\n}\n@keyframes jump {\n  0% {\n    transform: translate(0, 0);\n  }\n  10% {\n    transform: translate(10px, -10px);\n  }\n  20% {\n    transform: translate(20px, 10px);\n  }\n  30% {\n    transform: translate(30px, -50px);\n  }\n  70% {\n    transform: translate(-150px, -50px);\n  }\n  80% {\n    transform: translate(-140px, 10px);\n  }\n  90% {\n    transform: translate(-130px, -10px);\n  }\n  100% {\n    transform: translate(-120px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7K0RBQUE7QUFxRUE7OytEQUFBO0FDbkVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJEUXNCO0FDSDFCO0FBRkE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFLTjtBQUNGO0FBSEE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFLTjtBQUNGO0FBSEE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFLTjtBQUNGO0FBRkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkRuQ2E7RUNvQ2Isa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUFJSjtBQURBO0VBQ0ksbUJEekNhO0FDNkNqQjtBQURBO0VBQ0ksbUJENUNhO0FDZ0RqQjtBQURBO0VBQ0ksbUJEL0NhO0FDbURqQjtBQURBO0VBQ0ksdUNBQUE7QUFJSjtBQURBO0VBQ0k7SUFDRSx3QkFBQTtFQUlKO0VBREU7SUFDRSwyQkFBQTtFQUdKO0FBQ0Y7QUFBQTtFQUNJLHlDQUFBO0FBRUo7QUFDQTtFQUNJO0lBQ0UsMEJBQUE7RUFFSjtFQUFFO0lBQ0UsaUNBQUE7RUFFSjtFQUFFO0lBQ0UsZ0NBQUE7RUFFSjtFQUFFO0lBQ0UsaUNBQUE7RUFFSjtFQUFFO0lBQ0UsbUNBQUE7RUFFSjtFQUFFO0lBQ0Usa0NBQUE7RUFFSjtFQUFFO0lBQ0UsbUNBQUE7RUFFSjtFQUFFO0lBQ0UsK0JBQUE7RUFFSjtBQUNGIiwiZmlsZSI6ImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBDb2xvclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRjb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cclxuJGNvbG9yLWxvYWRlci1hOiAjZmY0YjVjO1xyXG4kY29sb3ItbG9hZGVyLWI6ICNhNGI3ODc7XHJcbiRjb2xvci1sb2FkZXItYzogI2ZmYmI5MTtcclxuJGNvbG9yLWxvYWRlci1kOiAjNjZiZmJmO1xyXG5cclxuJGNvbG9yLW1lbnU6ICNlMTEwNjQ7XHJcbiRjb2xvci1tZW51LWhvdmVyOiAjY2NkMTQ0O1xyXG4kY29sb3ItbWVudS1iYWNrZ3JvdW5kOiAjZTZlOWVjO1xyXG4kY29sb3ItbGluazogI2UxMTA2NDtcclxuJGNvbG9yLWxpbmstaG92ZXI6ICNjY2QxNDQ7XHJcbiRjb2xvci1ib2R5OiAjMjcyODI5O1xyXG5cclxuXHJcbiRjb2xvci1ibGFjazogIzAwMDtcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZmxvcmFsLXdoaXRlOiAjZmZmYWYwO1xyXG4kY29sb3Itd2hpdGUtbGlnaHQtbGl0dGxlOiAjZTZlOWVjO1xyXG4kY29sb3ItYmxhY2stZGFyay1saXR0bGU6ICMyMjI4MzE7XHJcbiRjb2xvci1ibGFjay1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRjb2xvci1ncmF5LWRhcmstbGl0dGxlOiAjNWQ1YzYxO1xyXG4kY29sb3ItZ3JheS1saWdodDogIzM3OTY4MztcclxuJGNvbG9yLW1hcm9vbi1kYXJrOiAjOTUwNzQwO1xyXG4kY29sb3ItbWFyb29uLWxpZ2h0OiAjZTExMDY0O1xyXG4kY29sb3ItZ29sZC1saWdodDogI2NjZDE0NDtcclxuJGNvbG9yLWdvbGQtbWVkaXVtOiAjYmRiNzZiO1xyXG4kY29sb3ItYmxhY2stbGlnaHQ6ICM1NTU1NGU7XHJcbiRjb2xvci1icm93bi1saWdodDogI2Q3ZDRiZTtcclxuXHJcbiRjb2xvci1ob21lLW1lbnUtZm9udDogIzk0OTQ5NDtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0xOiAjODAwMDgwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMTogI2Q4NzA5MztcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0yOiAjZGJhMTcwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMjogIzcwZGJkYjtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0zOiAjZTM1ZTgzO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMzogI2MwMzhiYztcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC00OiAjMDBlMmZmO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstNDogIzVhOTc3ZTtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC01OiAjZmZmZjAwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstNTogI2U1Njc2NztcclxuXHJcbiRjb2xvci1ob21lLXRleHQtMTogI2M4NWMxZDtcclxuJGNvbG9yLWhvbWUtdGV4dC0yOiAjNTJkMWNiO1xyXG4kY29sb3ItaG9tZS10ZXh0LTM6ICNkMTI2YTQ7XHJcblxyXG4kY29sb3ItZmFjZWJvb2s6ICMzYjU5OTk7XHJcbiRjb2xvci1pbnN0YWdyYW06ICNkNzgxOTE7XHJcbiRjb2xvci10d2l0dGVyOiAjNTVhY2VlO1xyXG4kY29sb3ItZ2l0aHViOiAjNDA3OGMwO1xyXG4kY29sb3Itc3RlYW06ICM1MDliN2Y7XHJcblxyXG4kY29sb3ItZmFjZWJvb2stZGFyazogIzBjMzU4ZDtcclxuJGNvbG9yLWluc3RhZ3JhbS1kYXJrOiAjYjQzYzUzO1xyXG4kY29sb3ItdHdpdHRlci1kYXJrOiAjMjI5NmVkO1xyXG4kY29sb3ItZ2l0aHViLWRhcms6ICMxNDVmYzA7XHJcbiRjb2xvci1zdGVhbS1kYXJrOiAjM2U3ZTY2O1xyXG5cclxuJGNsb3NlLWRlZmF1bHQ6ICM5NTA3NDA7XHJcbiRjbG9zZS1ob3ZlcjogIzU1NTU0ZTtcclxuXHJcbiR0YWJsZS1zcGFjaW5nLXVuaXQ6IDI0cHg7XHJcbiRoYWxmLXRhYmxlLXNwYWNpbmctdW5pdDogJHRhYmxlLXNwYWNpbmctdW5pdCAvIDI7XHJcblxyXG4kdGFibGUtaGlnaGxpZ2h0OiAjRUVFRUVFO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIEZvbnRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZm9udC1nZW5lcmFsOiAnY29tZm9ydGFhJywnUm9ib3RvJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcclxuJGZvbnQtcHJpbWFyeTogJ2NvbWZvcnRhYScsJ0FyaWFsJywnc2Fucy1zZXJpZic7XHJcbiRmb250LXNlY29uZGFyeTogJ1JvYm90bycsJ3NhbnMtc2VyaWYnOyIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sb2FkU3Bpbm5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0MHB4IDYwcHggLTIwcHggJGNvbG9yLWJsYWNrLWJveC1zaGFkb3c7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibGFjay1kYXJrLWxpdHRsZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubG9hZFNwaW5uZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmxvYWRTcGlubmVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubG9hZFNwaW5uZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDcwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcclxuICAgIH1cclxufVxyXG4gIFxyXG4ubG9hZFNwaW5uZXIgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWxvYWRlci1hO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAkY29sb3ItYmxhY2stYm94LXNoYWRvdztcclxufVxyXG4gIFxyXG4ubG9hZFNwaW5uZXIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWxvYWRlci1iO1xyXG59XHJcbiAgXHJcbi5sb2FkU3Bpbm5lciBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbG9hZGVyLWM7XHJcbn1cclxuICBcclxuLmxvYWRTcGlubmVyIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1sb2FkZXItZDtcclxufVxyXG4gIFxyXG4ubG9hZFNwaW5uZXIgc3Bhbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4gIFxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5sb2FkU3Bpbm5lciBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgYW5pbWF0aW9uOiBqdW1wIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBqdW1wIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCk7XHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAxMHB4KTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIC01MHB4KTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTBweCwgLTUwcHgpO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE0MHB4LCAxMHB4KTtcclxuICAgIH1cclxuICAgIDkwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMzBweCwgLTEwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgMCk7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                template: '<div class="loadSpinner"><span></span><span></span><span></span><span></span><span></span></div>',
                styleUrls: ['./loading-spinner.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Gs0i":
/*!********************************************************************!*\
  !*** ./src/app/blog/blog-content/blog-item/blog-item.component.ts ***!
  \********************************************************************/
/*! exports provided: BlogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemComponent", function() { return BlogItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/blog.service */ "hRo8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class BlogItemComponent {
    constructor(blogService, route) {
        this.blogService = blogService;
        this.route = route;
        this.blog = [];
        this.route.params.subscribe(params => {
            this.blog = this.blogService.getBlog(params.id);
        });
    }
}
BlogItemComponent.ɵfac = function BlogItemComponent_Factory(t) { return new (t || BlogItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BlogItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogItemComponent, selectors: [["app-blog-item"]], decls: 21, vars: 2, consts: [["id", "blog-item", 1, "blog-item"], [1, "timeline", "container", "timeline-container"], [1, "section-left-title"], [1, "container", "blog-container"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title"], [1, "row"], [1, "titles", "col-10"], [1, "title", "title-line", "text-uppercase", "mb-4", "pb-4"], [1, "col-2"], ["routerLink", "/gazette/content", 1, "close-container"], [1, "leftright"], [1, "rightleft"], [1, "close"], [1, "blog-item-content"], [3, "innerHTML"]], template: function BlogItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blog[0].subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.blog[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#blog-item[_ngcontent-%COMP%] {\n  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);\n  min-height: 750px;\n}\n.blog-container[_ngcontent-%COMP%] {\n  background-color: #f6efe4;\n  border-radius: 25px;\n  padding: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n.titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.blog-content[_ngcontent-%COMP%] {\n  min-height: 750px;\n}\n.close-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  outline: none;\n}\n.leftright[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 50px;\n  position: absolute;\n  margin-top: 24px;\n  background-color: #950740;\n  border-radius: 2px;\n  transform: rotate(45deg);\n  transition: all 0.3s ease-in;\n}\n.rightleft[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 50px;\n  position: absolute;\n  margin-top: 24px;\n  background-color: #950740;\n  border-radius: 2px;\n  transform: rotate(-45deg);\n  transition: all 0.3s ease-in;\n}\nlabel[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 0.6em;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  transition: all 0.3s ease-in;\n  opacity: 0;\n}\n.close[_ngcontent-%COMP%] {\n  margin: 60px 0 0 -20px;\n  position: absolute;\n}\n.close-container[_ngcontent-%COMP%]:hover   .leftright[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  background-color: #55554e;\n}\n.close-container[_ngcontent-%COMP%]:hover   .rightleft[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  background-color: #55554e;\n}\n.close-container[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 500px) {\n  .close-container[_ngcontent-%COMP%] {\n    margin-left: -20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGJsb2ctaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7K0RBQUE7QUFxRUE7OytEQUFBO0FDbkVBO0VBQ0ksd0VBQUE7RUFDQSxpQkFBQTtBQUtKO0FBRkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUtKO0FBRkE7RUFDSSxpQkFBQTtBQUtKO0FBRkE7RUFDSSwwQkFBQTtBQUtKO0FBRkE7RUFDSSxpQkFBQTtBQUtKO0FBRkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBS0o7QUFGQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRHNCWTtFQ3JCWixrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFLSjtBQUZBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJEV1k7RUNWWixrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFLSjtBQUZBO0VBQ0ksV0R2Q1U7RUN3Q1YsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBS0o7QUFGQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUZBO0VBQ0kseUJBQUE7RUFDQSx5QkRWVTtBQ2VkO0FBRkE7RUFDSSx3QkFBQTtFQUNBLHlCRGZVO0FDb0JkO0FBRkE7RUFDSSxVQUFBO0FBS0o7QUFGQTtFQUNJO0lBQ0ksa0JBQUE7RUFLTjtBQUNGIiwiZmlsZSI6ImJsb2ctaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBDb2xvclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRjb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cclxuJGNvbG9yLWxvYWRlci1hOiAjZmY0YjVjO1xyXG4kY29sb3ItbG9hZGVyLWI6ICNhNGI3ODc7XHJcbiRjb2xvci1sb2FkZXItYzogI2ZmYmI5MTtcclxuJGNvbG9yLWxvYWRlci1kOiAjNjZiZmJmO1xyXG5cclxuJGNvbG9yLW1lbnU6ICNlMTEwNjQ7XHJcbiRjb2xvci1tZW51LWhvdmVyOiAjY2NkMTQ0O1xyXG4kY29sb3ItbWVudS1iYWNrZ3JvdW5kOiAjZTZlOWVjO1xyXG4kY29sb3ItbGluazogI2UxMTA2NDtcclxuJGNvbG9yLWxpbmstaG92ZXI6ICNjY2QxNDQ7XHJcbiRjb2xvci1ib2R5OiAjMjcyODI5O1xyXG5cclxuXHJcbiRjb2xvci1ibGFjazogIzAwMDtcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZmxvcmFsLXdoaXRlOiAjZmZmYWYwO1xyXG4kY29sb3Itd2hpdGUtbGlnaHQtbGl0dGxlOiAjZTZlOWVjO1xyXG4kY29sb3ItYmxhY2stZGFyay1saXR0bGU6ICMyMjI4MzE7XHJcbiRjb2xvci1ibGFjay1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRjb2xvci1ncmF5LWRhcmstbGl0dGxlOiAjNWQ1YzYxO1xyXG4kY29sb3ItZ3JheS1saWdodDogIzM3OTY4MztcclxuJGNvbG9yLW1hcm9vbi1kYXJrOiAjOTUwNzQwO1xyXG4kY29sb3ItbWFyb29uLWxpZ2h0OiAjZTExMDY0O1xyXG4kY29sb3ItZ29sZC1saWdodDogI2NjZDE0NDtcclxuJGNvbG9yLWdvbGQtbWVkaXVtOiAjYmRiNzZiO1xyXG4kY29sb3ItYmxhY2stbGlnaHQ6ICM1NTU1NGU7XHJcbiRjb2xvci1icm93bi1saWdodDogI2Q3ZDRiZTtcclxuXHJcbiRjb2xvci1ob21lLW1lbnUtZm9udDogIzk0OTQ5NDtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0xOiAjODAwMDgwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMTogI2Q4NzA5MztcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0yOiAjZGJhMTcwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMjogIzcwZGJkYjtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC0zOiAjZTM1ZTgzO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstMzogI2MwMzhiYztcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC00OiAjMDBlMmZmO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstNDogIzVhOTc3ZTtcclxuJGNvbG9yLWhvbWUtbWVudS1saWdodC01OiAjZmZmZjAwO1xyXG4kY29sb3ItaG9tZS1tZW51LWRhcmstNTogI2U1Njc2NztcclxuXHJcbiRjb2xvci1ob21lLXRleHQtMTogI2M4NWMxZDtcclxuJGNvbG9yLWhvbWUtdGV4dC0yOiAjNTJkMWNiO1xyXG4kY29sb3ItaG9tZS10ZXh0LTM6ICNkMTI2YTQ7XHJcblxyXG4kY29sb3ItZmFjZWJvb2s6ICMzYjU5OTk7XHJcbiRjb2xvci1pbnN0YWdyYW06ICNkNzgxOTE7XHJcbiRjb2xvci10d2l0dGVyOiAjNTVhY2VlO1xyXG4kY29sb3ItZ2l0aHViOiAjNDA3OGMwO1xyXG4kY29sb3Itc3RlYW06ICM1MDliN2Y7XHJcblxyXG4kY29sb3ItZmFjZWJvb2stZGFyazogIzBjMzU4ZDtcclxuJGNvbG9yLWluc3RhZ3JhbS1kYXJrOiAjYjQzYzUzO1xyXG4kY29sb3ItdHdpdHRlci1kYXJrOiAjMjI5NmVkO1xyXG4kY29sb3ItZ2l0aHViLWRhcms6ICMxNDVmYzA7XHJcbiRjb2xvci1zdGVhbS1kYXJrOiAjM2U3ZTY2O1xyXG5cclxuJGNsb3NlLWRlZmF1bHQ6ICM5NTA3NDA7XHJcbiRjbG9zZS1ob3ZlcjogIzU1NTU0ZTtcclxuXHJcbiR0YWJsZS1zcGFjaW5nLXVuaXQ6IDI0cHg7XHJcbiRoYWxmLXRhYmxlLXNwYWNpbmctdW5pdDogJHRhYmxlLXNwYWNpbmctdW5pdCAvIDI7XHJcblxyXG4kdGFibGUtaGlnaGxpZ2h0OiAjRUVFRUVFO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIEZvbnRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZm9udC1nZW5lcmFsOiAnY29tZm9ydGFhJywnUm9ib3RvJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcclxuJGZvbnQtcHJpbWFyeTogJ2NvbWZvcnRhYScsJ0FyaWFsJywnc2Fucy1zZXJpZic7XHJcbiRmb250LXNlY29uZGFyeTogJ1JvYm90bycsJ3NhbnMtc2VyaWYnOyIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiNibG9nLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjMWIyNzM1IDAlLCAjMDkwYTBmIDEwMCUpO1xyXG4gICAgbWluLWhlaWdodDogNzUwcHg7XHJcbn1cclxuXHJcbi5ibG9nLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZlZmU0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLnRpdGxlcyBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJsb2ctY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA3NTBweDtcclxufVxyXG5cclxuLmNsb3NlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuICBcclxuLmxlZnRyaWdodCB7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjbG9zZS1kZWZhdWx0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG59XHJcbiAgXHJcbi5yaWdodGxlZnQge1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xvc2UtZGVmYXVsdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XHJcbn1cclxuICBcclxubGFiZWwge1xyXG4gICAgY29sb3I6ICRjb2xvci1ibGFjaztcclxuICAgIGZvbnQtc2l6ZTogLjZlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIG1hcmdpbjogNjBweCAwIDAgLTIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuICBcclxuLmNsb3NlLWNvbnRhaW5lcjpob3ZlciAubGVmdHJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xvc2UtaG92ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1jb250YWluZXI6aG92ZXIgLnJpZ2h0bGVmdCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xvc2UtaG92ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1jb250YWluZXI6aG92ZXIgbGFiZWwge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuY2xvc2UtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-item',
                templateUrl: './blog-item.component.html',
                styleUrls: ['./blog-item.component.scss']
            }]
    }], function () { return [{ type: _service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "JXfj":
/*!*************************************************!*\
  !*** ./src/app/view/layout/layout.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/animation */ "38kq");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "Y2Ng");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LayoutComponent {
    constructor() {
    }
    ngOnInit() {
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 5, vars: 1, consts: [["outlet", "outlet"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            src_app_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
            // animation triggers go here
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss'],
                animations: [
                    src_app_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
                    // animation triggers go here
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PDSm":
/*!******************************************************!*\
  !*** ./src/app/web/fascinate/fascinate.component.ts ***!
  \******************************************************/
/*! exports provided: FascinateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FascinateComponent", function() { return FascinateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FascinateComponent {
}
FascinateComponent.ɵfac = function FascinateComponent_Factory(t) { return new (t || FascinateComponent)(); };
FascinateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FascinateComponent, selectors: [["app-fascinate"]], decls: 502, vars: 0, consts: [["id", "fascinate", 1, "fascinate"], [1, "timeline", "container", "timeline-container"], ["id", "section-plans", 1, "section-plans"], [1, "row"], [1, "col-lg-4"], [1, "card"], [1, "card-data", "card-front", "card-set-front-1"], [1, "card-title"], [1, "fa", "fa-video-camera"], [1, "card-heading"], [1, "card-data", "card-back", "card-set-back-1"], [1, "card-title-sub"], [1, "card-heading-sub"], [1, "card-detail"], [1, "card-data", "card-front", "card-set-front-2"], [1, "fa", "fa-television"], [1, "card-data", "card-back", "card-set-back-2"], [1, "card-data", "card-front", "card-set-front-3"], [1, "fa", "fa-bolt"], [1, "card-data", "card-back", "card-set-back-3"], [1, "fa", "fa-futbol-o"], [1, "fa", "fa-firefox"], [1, "fa", "fa-street-view"], [1, "fa", "fa-star"], [1, "fa", "fa-user-secret"], [1, "fa", "fa-gamepad"], [1, "fa", "fa-fire"], [1, "fa", "fa-music"], [1, "fa", "fa-road"], [1, "fa", "fa-cutlery"], [1, "fa", "fa-heart"]], template: function FascinateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LOTR: The Return of the King");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Avengers Infinity War");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Interstellar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Gladiator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Catch Me If You Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sherlock Holmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Now You See Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TTS: Breaking Dawn - Part 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Immortals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "The Lion King");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Active TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Active TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "The Mandalorian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "The Witcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "The Umbrella Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Money Heist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Lucifer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Lupin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "A Discovery of Witches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "The Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Wanda Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "The Outpost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Inactive TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Inactive TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Game of Thrones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "The Vampire Diaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Grimm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sherlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "The Ranch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Da Vinci's Demons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sense8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Deception");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "The Originals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Spartacus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sports Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Sports Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "FC Barcelona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Chennai Super King");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Arsenal FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "OG Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Los Angeles Lakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Chennaiyin FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Manchester City FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Paris Saint-Germain FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Juventus FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Sydney Thunder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sports Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sports Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Spain Football Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Indian Cricket Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Argentina Football Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Germany Football Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Australia Cricket Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Indian Hockey Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Germany Hockey Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Sports Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Sports Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Lionel Messi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "MS Dhoni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Roger Federer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Michael Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Carolina Marin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Carles Puyol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Xavier Hern\u00E1ndez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Ravindra Jadeja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Kevin De Bruyne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Steve Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "The Lord of the Rings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "The Avengers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "The Twilight Saga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Star Wars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Fast & Furious");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Jurassic Park");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Ocean's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Despicable Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Ice Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Pirates of the Caribbean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Indian Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Indian Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Yeh Jawaani Hai Deewani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "3 Idiots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Bigil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "PK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Lucifer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Andhadhun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Kaithi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Premam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Rab Ne Bana Di Jodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Bangalore Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Actors / Actresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Actors / Actresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Chris Hemsworth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Vijay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Robert Downey Jr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Dwayne Johnson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Ranbir Kapoor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Mila Kunis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Emily Blunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Tom Holland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Alia Bhatt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Tovino Thomas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Video Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Video Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Dota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Need For Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Grand Theft Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Counter Strike");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Tomb Raider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Fifa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Call Of Duty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Assassin's Creed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Prince of Persia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Tekken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "UNO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Badminton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Football");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Cricket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Chess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Carrom Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "A. R. Rahman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Hans Zimmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Imagine Dragons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Alan Walker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Ivan Torrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Pritam Chakraborty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Alan Silvestri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "David Guetta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Justin Timberlake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Marshmello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Places");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Places");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Kanyakumari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Chennai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Kodagu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Wayanadu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Chikkamagaluru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Mangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Alappuzha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Mysuru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Nilgiris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "ITC: Madras Pavilion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Aloft: Dot Yum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Zaitoon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Coal Barbecues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "Tovo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Dindigul Thalappakatti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Taco Bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Fruit Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Savoury Sea Shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Junior Kuppanna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Biryani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Afghani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Taco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Steak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Sizzler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "Grill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Seashell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Macaroni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Shawarma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Prawn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#fascinate[_ngcontent-%COMP%] {\n  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);\n}\n\n#section-plans[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  perspective: 150rem;\n  -webkit-perspective: 150rem;\n  -moz-perspective: 150rem;\n  position: relative;\n  height: 40rem;\n  background-color: transparent !important;\n}\n\n.card-data[_ngcontent-%COMP%] {\n  height: 38rem;\n  transition: all 0.8s ease;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n}\n\n.card-set-front-1[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #f403d1, #64b5f6);\n}\n\n.card-set-front-2[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #f321d7, #ffec61);\n}\n\n.card-set-front-3[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #24ff72, #9a4eff);\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n}\n\n.card-title[_ngcontent-%COMP%] {\n  height: 20rem;\n  padding: 4rem 2rem 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-title[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.card-heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  color: #fff;\n  width: 75%;\n  padding-top: 25px;\n}\n\n.card-title-sub[_ngcontent-%COMP%] {\n  padding: 2rem 2rem 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-title-sub[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-bottom: 15px;\n}\n\n.card-heading-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  color: #fff;\n  width: 75%;\n}\n\n.card-detail[_ngcontent-%COMP%] {\n  padding: 0 2rem 2rem;\n}\n\n.card-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 auto;\n  padding-inline-start: 0 !important;\n}\n\n.card-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0.5rem;\n}\n\n.card-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #eee;\n}\n\n.card-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg);\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%] {\n  transform: rotateY(0);\n}\n\n.card-set-back-1[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #64b5f6, #f403d1);\n}\n\n.card-set-back-2[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #ffec61, #f321d7);\n}\n\n.card-set-back-3[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #9a4eff, #24ff72);\n}\n\n.card-summary[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  text-align: center;\n}\n\n.card-summary-box[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  margin-bottom: 8rem;\n}\n\n.card-summary-data[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXNjaW5hdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLHFEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxREFBQTtBQUNGOztBQUVBO0VBQ0UscURBQUE7QUFDRjs7QUFFQTtFQUVJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFHQSxhQUFBO0VBSUEsc0JBQUE7RUFHQSx1QkFBQTtFQUdBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFHQSxhQUFBO0VBSUEsc0JBQUE7RUFHQSx1QkFBQTtFQUdBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUVFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxREFBQTtBQUNGOztBQUVBO0VBQ0UscURBQUE7QUFDRjs7QUFFQTtFQUNFLHFEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoiZmFzY2luYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zhc2NpbmF0ZSB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjMWIyNzM1IDAlLCAjMDkwYTBmIDEwMCUpO1xyXG59XHJcblxyXG4jc2VjdGlvbi1wbGFucyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBlcnNwZWN0aXZlOiAxNTByZW07XHJcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTUwcmVtO1xyXG4gIC1tb3otcGVyc3BlY3RpdmU6IDE1MHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA0MHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1kYXRhIHtcclxuICBoZWlnaHQ6IDM4cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEuNXJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm94LXNoYWRvdzogMCAxLjVyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4uY2FyZC1zZXQtZnJvbnQtMSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2Y0MDNkMSwgIzY0YjVmNik7XHJcbn1cclxuXHJcbi5jYXJkLXNldC1mcm9udC0yIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZjMyMWQ3LCAjZmZlYzYxKTtcclxufVxyXG5cclxuLmNhcmQtc2V0LWZyb250LTMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMyNGZmNzIsICM5YTRlZmYpO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuY2FyZC1mcm9udCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIGhlaWdodDogMjByZW07XHJcbiAgcGFkZGluZzogNHJlbSAycmVtIDJyZW07XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUgLmZhIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlLXN1YiB7XHJcbiAgcGFkZGluZzogMnJlbSAycmVtIDJyZW07XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUtc3ViIC5mYSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkaW5nLXN1YiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4gIFxyXG4uY2FyZC1kZXRhaWwge1xyXG4gIHBhZGRpbmc6IDAgMnJlbSAycmVtO1xyXG59XHJcblxyXG4uY2FyZC1kZXRhaWwgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtZGV0YWlsIHVsIGxpIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1kZXRhaWwgdWwgbGk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2sge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkLWJhY2sge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxufVxyXG5cclxuLmNhcmQtc2V0LWJhY2stMSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzY0YjVmNiwgI2Y0MDNkMSk7XHJcbn1cclxuXHJcbi5jYXJkLXNldC1iYWNrLTIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmVjNjEsICNmMzIxZDcpO1xyXG59XHJcblxyXG4uY2FyZC1zZXQtYmFjay0zIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjOWE0ZWZmLCAjMjRmZjcyKTtcclxufVxyXG5cclxuLmNhcmQtc3VtbWFyeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1zdW1tYXJ5LWJveCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XHJcbn1cclxuXHJcbi5jYXJkLXN1bW1hcnktZGF0YSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FascinateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fascinate',
                templateUrl: './fascinate.component.html',
                styleUrls: ['./fascinate.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 2, vars: 0, template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signup works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/ui/loading-spinner/loading-spinner.component */ "GU/y");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Jenkin';
        this.isLoading = false;
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]: {
                    this.isLoading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]: {
                    this.isLoading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["style", "text-align: center;", 4, "ngIf"], [2, "text-align", "center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "T5Vz":
/*!******************************************!*\
  !*** ./src/app/blog/model/blog.model.ts ***!
  \******************************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
class Blog {
    constructor(id, title, subtitle, content, category, date) {
        this.id = id,
            this.title = title,
            this.subtitle = subtitle,
            this.content = content,
            this.category = category,
            this.date = date;
    }
}


/***/ }),

/***/ "U4+L":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ "9ilz");
/* harmony import */ var _homeblog_homeblog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeblog/homeblog.component */ "BYWQ");
/* harmony import */ var _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-content/blog-content.component */ "ZCni");
/* harmony import */ var _blog_content_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-content/blog-item/blog-item.component */ "Gs0i");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_homeblog_homeblog_component__WEBPACK_IMPORTED_MODULE_3__["HomeblogComponent"],
        _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_4__["BlogContentComponent"],
        _blog_content_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_5__["BlogItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _homeblog_homeblog_component__WEBPACK_IMPORTED_MODULE_3__["HomeblogComponent"],
                    _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_4__["BlogContentComponent"],
                    _blog_content_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_5__["BlogItemComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Y2Ng":
/*!*************************************************!*\
  !*** ./src/app/view/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sideText);
} }
class HeaderComponent {
    constructor(renderer, router) {
        this.renderer = renderer;
        this.router = router;
        this.mobileNavEnable = false;
        this.sideNav = true;
        this.sideText = '';
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]: {
                    this.mobileNavEnable = false;
                    this.renderer.removeClass(document.body, 'mobile-nav-active');
                    break;
                }
                default: {
                    break;
                }
            }
            this.sideMenuToggle(event);
        });
    }
    onMobileToggle() {
        if (this.mobileNavEnable) {
            this.renderer.removeClass(document.body, 'mobile-nav-active');
            this.mobileNavEnable = false;
        }
        else {
            this.renderer.addClass(document.body, 'mobile-nav-active');
            this.mobileNavEnable = true;
        }
    }
    sideMenuToggle(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && (event.url === '/web/home' || event.url === '/')) {
            this.sideText = '';
        }
        else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && event.url === '/web/persona') {
            this.sideText = 'Persona';
        }
        else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && event.url === '/web/itinerary') {
            this.sideText = 'Itinerary';
        }
        else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && event.url === '/web/eminent') {
            this.sideText = 'Eminent';
        }
        else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && event.url === '/web/fascinate') {
            this.sideText = 'Fascinate';
        }
        else {
            this.sideText = 'Gazette';
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && (event.url === '/web/home' || event.url === '/')) {
            this.sideNav = true;
        }
        else {
            this.sideNav = false;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 33, vars: 4, consts: [["type", "button", 1, "mobile-nav-toggle", "d-lg-none", 3, "click"], [1, "menu-title"], [3, "ngClass"], ["routerLinkActive", "active"], ["routerLink", "/web/home"], [1, "fa", "fa-home"], ["routerLink", "/web/persona"], [1, "fa", "fa-user-secret"], ["routerLink", "/web/itinerary"], [1, "fa", "fa-snowflake-o"], ["routerLink", "/web/eminent"], [1, "fa", "fa-star"], ["routerLink", "/gazette/blog"], [1, "fa", "fa-server"], ["class", "right-side-content", 4, "ngIf"], [1, "right-side-content"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_0_listener() { return ctx.onMobileToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M\u00E9nu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Incipi\u00E9nc\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "P\u00E9rson\u00E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Itin\u00E9r\u00E0ry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Emin\u00E9nt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "G\u00E0z\u00E9tt\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HeaderComponent_div_32_Template, 3, 1, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mobileNavEnable ? "fa fa-times" : "fa fa-bars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mobileNavEnable ? "header d-flex flex-column justify-content-center mob-enable" : "header d-flex flex-column justify-content-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sideNav ? "nav-menu nav-dis" : "nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sideNav);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "YYYi":
/*!*******************************************!*\
  !*** ./src/app/web/web-routing.module.ts ***!
  \*******************************************/
/*! exports provided: WebRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRoutingModule", function() { return WebRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "6OIh");
/* harmony import */ var _persona_persona_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persona/persona.component */ "AgZI");
/* harmony import */ var _eminent_eminent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eminent/eminent.component */ "1d/W");
/* harmony import */ var _itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itinerary/itinerary.component */ "G7zu");
/* harmony import */ var _fascinate_fascinate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fascinate/fascinate.component */ "PDSm");









const routes = [
    { path: '', redirectTo: '/web/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { animation: 'homePage' } },
    { path: 'persona', component: _persona_persona_component__WEBPACK_IMPORTED_MODULE_3__["PersonaComponent"], data: { animation: 'personaPage' } },
    { path: 'eminent', component: _eminent_eminent_component__WEBPACK_IMPORTED_MODULE_4__["EminentComponent"], data: { animation: 'eminentPage' } },
    { path: 'itinerary', component: _itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_5__["ItineraryComponent"], data: { animation: 'itineraryPage' } },
    { path: 'fascinate', component: _fascinate_fascinate_component__WEBPACK_IMPORTED_MODULE_6__["FascinateComponent"], data: { animation: 'fascinatePage' } }
];
class WebRoutingModule {
}
WebRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebRoutingModule });
WebRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WebRoutingModule_Factory(t) { return new (t || WebRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _view_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.module */ "B4v+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _auth_password_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/password/password.component */ "w4vM");
/* harmony import */ var _auth_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/page-not-found/page-not-found.component */ "nVru");
/* harmony import */ var _shared_ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/ui/loading-spinner/loading-spinner.component */ "GU/y");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _view_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
        _auth_password_password_component__WEBPACK_IMPORTED_MODULE_8__["PasswordComponent"],
        _auth_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
        _shared_ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _view_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                    _auth_password_password_component__WEBPACK_IMPORTED_MODULE_8__["PasswordComponent"],
                    _auth_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                    _shared_ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _view_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZCni":
/*!*************************************************************!*\
  !*** ./src/app/blog/blog-content/blog-content.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogContentComponent", function() { return BlogContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/blog.service */ "hRo8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function BlogContentComponent_h6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing ", ctx_r0.blogs.length, " blogs");
} }
const _c0 = function (a1) { return ["/gazette/item", a1]; };
function BlogContentComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, blog_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r6.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r6.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r6.date);
} }
function BlogContentComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogContentComponent_div_10_div_1_Template, 16, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.showblogs);
} }
function BlogContentComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No results containing your search text '", ctx_r2.searchText, "'");
} }
function BlogContentComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogContentComponent_li_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogContentComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogContentComponent_li_19_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BlogContentComponent {
    constructor(blogService) {
        this.blogService = blogService;
        this.allblogs = [];
        this.blogs = [];
        this.showblogs = [];
        this.totalPages = 0;
        this.currentPage = 1;
        this.searchText = '';
        this.enableTotalCount = true;
        this.allblogs = this.blogService.getBlogs();
        this.blogs = this.allblogs;
        this.showblogs = this.blogs.slice(0, 6);
        this.totalPages = Math.trunc(this.blogs.length / 6) + 1;
        this.enableItem(window.screen.width);
    }
    onResize() {
        this.enableItem(window.screen.width);
    }
    nextPage() {
        this.currentPage = this.currentPage + 1;
        const page = (this.currentPage - 1) * 6;
        this.showblogs = this.blogs.slice(page, page + 6);
    }
    previousPage() {
        this.currentPage = this.currentPage - 1;
        const page = (this.currentPage - 1) * 6;
        this.showblogs = this.blogs.slice(page, page + 6);
    }
    searchBlog(event) {
        this.blogs = this.allblogs.filter(s => s.subtitle.toLocaleLowerCase().includes(event.toLowerCase()));
        this.currentPage = 1;
        this.showblogs = this.blogs.slice(0, 6);
        this.totalPages = Math.trunc(this.blogs.length / 6) === 1 ? 1 : Math.trunc(this.blogs.length / 6) + 1;
    }
    enableItem(width) {
        if (width > 768) {
            this.enableTotalCount = true;
        }
        else {
            this.enableTotalCount = false;
        }
    }
}
BlogContentComponent.ɵfac = function BlogContentComponent_Factory(t) { return new (t || BlogContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
BlogContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogContentComponent, selectors: [["app-blog-content"]], hostBindings: function BlogContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BlogContentComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 20, vars: 7, consts: [["id", "blog-content", 1, "blog-content"], [1, "container", "mb-5"], [1, "row"], [1, "col-md-12"], [1, "flex-row", "justify-content-between", "align-items-center", "filters"], [4, "ngIf"], [1, "left-sort"], [1, "searchbar"], ["type", "text", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], [1, "search"], ["class", "row mt-1", 4, "ngIf"], [1, "d-flex", "justify-content-end", "text-right", "mt-2"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [1, "page-item"], [1, "page-link"], [1, "row", "mt-1"], ["class", "col-md-4 blog-data", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-md-4", "blog-data", 3, "routerLink"], [1, "p-card", "p-2", "rounded", "px-3"], [1, "d-flex", "align-items-center", "credits"], ["src", "assets/image/blog-img.png", "width", "16px"], [1, "text-black-50", "ml-2"], [1, "mt-2"], [1, "badge", "badge-danger", "py-1", "mb-2"], [1, "d-block", "mb-5"], [1, "d-flex", "justify-content-between", "stats"], [1, "fa", "fa-calendar-o"], [1, "ml-2"], [1, "noresult"], ["aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], ["aria-label", "Next", 1, "page-link", 3, "click"]], template: function BlogContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogContentComponent_h6_5_Template, 2, 1, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogContentComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchText = $event; })("ngModelChange", function BlogContentComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchBlog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogContentComponent_div_10_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BlogContentComponent_div_11_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BlogContentComponent_li_15_Template, 4, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BlogContentComponent_li_19_Template, 4, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableTotalCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showblogs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showblogs.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage < ctx.totalPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".filter[_ngcontent-%COMP%] {\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.profiles[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: -6px;\n}\n\n.col-md-4[_ngcontent-%COMP%] {\n  margin-top: 26px;\n}\n\n.blog-data[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none !important;\n}\n\n.mt-1[_ngcontent-%COMP%] {\n  min-height: 520px;\n}\n\n.p-card[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #f3f1e0, #f1e7f0);\n}\n\n#blog-content[_ngcontent-%COMP%] {\n  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);\n  padding: 30px;\n}\n\n.noresult[_ngcontent-%COMP%] {\n  color: #f3f1e0;\n  padding-top: 30px;\n}\n\nh6[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #87cefa;\n}\n\n.searchbar[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 300px;\n  height: 100px;\n}\n\n.searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  background: crimson;\n  border-radius: 50%;\n  transition: all 1s;\n  z-index: 4;\n  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);\n}\n\n.searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  margin: auto;\n  top: 12px;\n  right: 0;\n  bottom: 0;\n  left: 12px;\n  width: 9px;\n  height: 2px;\n  background: white;\n  transform: rotate(45deg);\n  transition: all 0.5s;\n}\n\n.searchbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  margin: auto;\n  top: -5px;\n  right: 0;\n  bottom: 0;\n  left: -5px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 2px solid white;\n  transition: all 0.5s;\n}\n\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Inconsolata\", monospace;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 50px;\n  outline: none;\n  border: none;\n  background: crimson;\n  color: white;\n  text-shadow: 0 0 10px crimson;\n  padding: 0 80px 0 20px;\n  border-radius: 30px;\n  box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);\n  transition: all 1s;\n  opacity: 0;\n  z-index: 5;\n  font-weight: bolder;\n  letter-spacing: 0.1em;\n}\n\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  width: 300px;\n  opacity: 1;\n  cursor: text;\n}\n\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .search[_ngcontent-%COMP%] {\n  right: -250px;\n  background: #151515;\n  z-index: 6;\n}\n\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .search[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  width: 25px;\n}\n\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .search[_ngcontent-%COMP%]::after {\n  top: 0;\n  left: 0;\n  width: 25px;\n  height: 2px;\n  border: none;\n  background: white;\n  border-radius: 0%;\n  transform: rotate(-45deg);\n}\n\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: white;\n  opacity: 0.5;\n  font-weight: bolder;\n}\n\n@media (max-width: 400px) {\n  .left-sort[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UscURBQUE7QUFDRjs7QUFFQTtFQUNJLHdFQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0FBRUo7O0FBQUk7RUFDRSxlQUFBO0FBRU47O0FBQUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBRU47O0FBQUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBRU47O0FBQ0U7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0VBQUE7RUFHQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUdJO0VBQ0UsZUFBQTtBQUROOztBQUdJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRE47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRE47O0FBRU07RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFBUjs7QUFFTTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQVI7O0FBR0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRE47O0FBTUE7RUFDRTtJQUNFLGlCQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJibG9nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4XHJcbn1cclxuXHJcbi5wcm9maWxlcyBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNnB4XHJcbn1cclxuXHJcbi5jb2wtbWQtNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG59XHJcblxyXG4uYmxvZy1kYXRhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMSB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MjBweDtcclxufVxyXG5cclxuLnAtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YzZjFlMCwgI2YxZTdmMCk7XHJcbn1cclxuXHJcbiNibG9nLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAjMWIyNzM1IDAlLCAjMDkwYTBmIDEwMCUpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLm5vcmVzdWx0IHtcclxuICBjb2xvcjogI2YzZjFlMDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuaDYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzg3Y2VmYTtcclxufVxyXG5cclxuLnNlYXJjaGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgLnNlYXJjaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMjVweCAwIGNyaW1zb247XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHRvcDogMTJweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMTJweDtcclxuICAgICAgd2lkdGg6IDlweDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB0b3A6IC01cHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBjcmltc29uO1xyXG4gICAgcGFkZGluZzogMCA4MHB4IDAgMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjVweCAwIGNyaW1zb24sXHJcbiAgICAgICAgICAgICAgICAwIDIwcHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgIH1cclxuICAgICY6Zm9jdXMgfiAuc2VhcmNoIHtcclxuICAgICAgcmlnaHQ6IC0yNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzE1MTUxNTtcclxuICAgICAgei1pbmRleDogNjtcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgfVxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAubGVmdC1zb3J0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-content',
                templateUrl: './blog-content.component.html',
                styleUrls: ['./blog-content.component.scss']
            }]
    }], function () { return [{ type: _service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


/***/ }),

/***/ "aMKx":
/*!*************************************************!*\
  !*** ./src/app/view/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");



class FooterComponent {
    constructor() {
        this.domainName = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].domainName;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 27, vars: 1, consts: [[1, "footer"], [1, "container"], [1, "social-links"], ["href", "#", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "#", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#", 1, "github"], [1, "fa", "fa-github"], ["href", "#", 1, "steam"], [1, "fa", "fa-steam"], [1, "copyright"], [1, "credits"], [3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brandon Johnson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A9 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MyResume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ". All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Designed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Jenkin Anto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.domainName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hRo8":
/*!**********************************************!*\
  !*** ./src/app/blog/service/blog.service.ts ***!
  \**********************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_blog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/blog.model */ "T5Vz");



class BlogService {
    constructor() {
        this.blogs = [
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](1, 'Install Windows 10', 'Installing Windows 10', `<p>Before start installing operating system Windows 10 take the necessary backup file which you needed. If you are not formatting the entire computer then you can take backup on non-windows installation drive.</p>
      <p>1. First, go to <strong>command prompt(cmd)</strong> and type <code>dxdiag</code> and press enter. A window will popup with a detailed information of your system. In <strong>dxdiag</strong> you will get information of current operating system with 16/32/64 bit version.</p>
      <img src="assets/blog/dxdiag.jpg" alt="dxdiag" width="895" height="571" class="aligncenter size-full wp-image-469" />
      <p>Example: dxdiag screen</p>
      <p>2. Next step, purchase a new <strong>Windows 10</strong> DVD or you can download the latest version of Window and based on your 16/32/64 bit operating systems.</p>
      <p>3. If you are downloading Windows from <strong>torrent</strong> make it as bootable USB for installing.</p>
      <p>4. Restart your computer and press <code>F11</code> to go to your <strong>BIOS</strong> setting (it may change based on your computer manufacturing). Under boot tab, if you find boot mode change the boot mode to <strong>Legacy</strong> and you can also change boot priority on this screen. Exit the BIOS setting by applying save changes and your system will reboot.</p>
      <img src="assets/blog/boot-mode.jpg" alt="bootmode" width="861" height="437" class="aligncenter size-full wp-image-472" />
      <p>Example: BIOS Setting</p>
      <p>5. Press <code>F2</code> when your system starting, then you will be navigated to <strong>boot options menu</strong>. Select the method or option which has windows installation bootable file.</p>
      <img src="assets/blog/boot-option.jpg" alt="boot option" width="1120" height="504" class="aligncenter size-full wp-image-473" />
      <h6>Example: Boot option menu</h6>
      <p>6. Select the language and time preference you need and press <strong>next</strong> button.</p>
      <img src="assets/blog/start1.jpg" alt="start1" width="1029" height="575" class="aligncenter size-full wp-image-476" />
      <p>Example: Language and Time preference</p>
      <p>7. Confirm your <strong>windows installation</strong> or you can cancel your installation process one final time.</p>
      <img src="assets/blog/start2.jpg" alt="start2" width="847" height="473" class="aligncenter size-full wp-image-477" />
      <p>Example: Installing Windows 10</p>
      <p>8. Select the custom install option to <strong>install your windows</strong> so that you can change partition and other settings of your computer while installing.</p>
      <img src="assets/blog/start3.jpg" alt="start3" width="771" height="575" class="aligncenter size-full wp-image-478" />
      <p>Example: Custom installation windows</p>
      <p>9. Choose the installation drive in your system. You need to format the old installation drive and select the new drive which you want to <strong>install windows</strong> and press next. You can also change the <strong>partition</strong> your hard disk space if you do that your entire system needs to be formatted.</p>
      <img src="assets/blog/start4.jpg" alt="start4" width="937" height="587" class="aligncenter size-full wp-image-479" />
      <p>Example: Windows installation drive</p>
      <p>10. Windows installation process begins and once it got completed all steps, your system will reboot.</p>
      <img src="assets/blog/start5.jpg" alt="start5" width="1049" height="675" class="aligncenter size-full wp-image-480" />
      <h6>Example: Windows installation process</h6>
      <p>11. Once your system got rebooted, select the express setting to <strong>complete your windows installation</strong>.</p>
      <img src="assets/blog/start6.jpg" alt="start6" width="719" height="551" class="aligncenter size-full wp-image-481" />
      <p>Example: Express setting install</p>
      <p>12. Your <strong>Windows 10</strong> system will be ready in 10 to 15 minutes, after filling your basic computer details.</p>
      <img src="assets/blog/windows-10.jpg" alt="windows 10" width="1366" height="768" class="aligncenter size-full wp-image-482" />
      <p>Example: Windows 10 is ready for use</p>`, 'Installation', '22nd June, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](2, 'HTML Notes', 'HTML Important Notes', `<h2>What is HTML ?</h2>
      <p><strong>Hyper Text Markup Language</strong> is widely knows as <strong>HTML</strong> to create web pages. Markup Language helps the web browser to display text,image..etc on a page. Tags are surrounded by <strong>angle brackets</strong> to describe text content inside the tag is known as HTML element. It allows the developer to display the document on the browser with an elegant and pleasant look.</p>
      <br />
      <img class="aligncenter size-full wp-image-495" src="../../../assets/blog/HTML-1.jpg" alt="HTML" width="842" height="114" />
      <p>Example: HTML Element</p>
      <br />
      <h2>HTML Page Structure</h2>
      <p><code>&lt;!DOCTYPE&gt;</code> tag is used to understand the <strong>version of the HTML</strong> in the document to the web browser. For HTML 5 the declaration is <code>&lt;!DOCTYPE html&gt;</code></p>
      <br />
      <p><code>&lt;html&gt;</code> tag encloses the complete <strong>HTML</strong> document. It represents header and body of your document's.</p>
      <br />
      <p><code>&lt;head&gt;</code> tag represents the <strong>header of the document's section</strong>, which won't display on the page.
      Example: <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code>,..etc.</p>
      <br />
      <p><code>&lt;body&gt;</code> tag represents the <strong>body of the document's section</strong>, which will display on the page.
      Example: <code>&lt;h1&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,..etc.</p>
      <br />
      <img class="aligncenter size-full wp-image-502" src="../../../assets/blog/HTMLPage.jpg" alt="HTMLPage" width="1182" height="934" />
      <p>Example: Page Structure</p>
      <br />
      <h2>HTML Basic Tags</h2>
      <p><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code> tags define <strong>heading</strong> of your web pages. Based on the size of the heading tag there are <strong>six levels</strong> which can be used on web pages.</p>
      <br />
      <p><code>&lt;p&gt;</code> tag gives a perfect structure to your text inside the <strong>paragraph</strong>.</p>
      <br />
      <p><code>&lt;div&gt;</code> tag defines a section or division of documents and format them with CSS.</p>
      <br />
      <p><code>&lt;span&gt;</code> tag are similar to <strong>&lt;div&gt;</strong> tag but they define a group a group of <strong>inline elements</strong> in a document.</p>
      <br />
      <img src="assets/blog/basic-tag.jpg" alt="basic tag" width="815" height="463" class="aligncenter size-full wp-image-537" />
      <p>Example: Basic Tags Code</p>
      <br />
      <img src="assets/blog/basic-tag2.jpg" alt="Basic tag 2" style="border:2px  solid grey" width="803" height="345" class="aligncenter size-full wp-image-539" />
      <p>Example: Basic Tags Result</p>
      <br />
      <h2>HTML Text Tags</h2>
      <p><code>&lt;strong&gt;</code> tag will display the text <strong>bold</strong></p>
      <br />
      <p><code>&lt;i&gt;</code> tag will display the text <i>italics</i></p>
      <br />
      <p><code>&lt;u&gt;</code> tag will display the text <u>underline</u></p>
      <br />
      <p><code>&lt;strike&gt;</code> tag will display the <strike>text strikethrough</strike></p>
      <br />
      <p><code>&lt;sup&gt;</code> tag will display the text in <sup>superscript</sup></p>
      <br />
      <p><code>&lt;sub&gt;</code> tag will display the text in <sub>subscript</sub></p>
      <br />
      <p><code>&lt;small&gt;</code> tag will display the text in <small>small</small></p>
      <br />
      <p><code>&lt;mark&gt;</code> tag will display the text in <mark>mark field</mark></p>
      <br />
      <p><code>&lt;q&gt;</code> tag will display the text in <q>quotes</q></p>
      <br />
      <p><code>&lt;a&gt;</code> tag is known as anchor tag because the text links to hyperlinks(links to other pages).</p>
      <br />
      <h2>HTML Empty Tags</h2>
      <p>Empty Tags are the HTML code which stands alone and no need to <strong>open</strong> or <strong>close</strong> the tags.</p>
      <br />
      <p><code>&lt;br /&gt;</code> tag is used to <strong>break the lines</strong> and anything following it starts from the next line.</p>
      <br />
      <p><code>&lt;hr /&gt;</code> tag is used to break up the section with the <strong>horizontal line</strong>.</p>
      <br />
      <h2>HTML Entities</h2>
      <p>HTML entities will helps to display the <strong>special character</strong> on the web page.</p>
      <br />
      <p><code>&amp;nbsp;</code> represents <strong>Non- breaking space</strong> (  )</p>
      <br />
      <p><code>&amp;lt;</code> represents less than symbol <strong>( &lt; )</strong></p>
      <br />
      <p><code>&amp;gt;</code> represents less than symbol <strong>( &gt; )</strong></p>
      <br />
      <p><code>&amp;amp;</code> represents less than symbol <strong>( &amp; )</strong></p>
      <br />
      <p><code>&amp;cent;</code> represents less than symbol <strong>( ¢ )</strong></p>
      <br />
      <p><code>&amp;pound;</code> represents less than symbol <strong>( £ )</strong></p>
      <br />
      <p><code>&amp;euro;</code> represents less than symbol <strong>( € )</strong></p>
      <br />
      <p><code>&amp;copy;</code> represents less than symbol <strong>( © )</strong></p>
      <br />
      <p><code>&amp;reg;</code> represents less than symbol <strong>( ® )</strong></p>
      <br />
      <h2>HTML Attributes</h2>
      <p>Attributes modify or add a tag element in HTML. Attributes are always specified in the <strong>start tag</strong> and comes with value like <strong>name="value"</strong></p>
      <br />
      <img src="assets/blog/attr1.jpg" alt="attribute" width="819" height="459" class="aligncenter size-full wp-image-544" />
      <p>Example: HTML Attributes</p>
      <br />
      <p><strong>id Attributes</strong> - used to identify the <strong>unique</strong> HTML tag on the HTML page.</p>
      <br />
      <p><strong>title Attributes</strong> - suggests title to the tag. When cursor comes over the respective element, the title will be displayed as a <strong>tooltip</strong>.</p>
      <br />
      <p><strong>class Attributes</strong> - used to associate HTML tag with a style sheet and specify the <strong>class</strong> of a tag.</p>
      <br />
      <p><strong>style Attributes</strong> - used to specify with in a tag.</p>
      <br />
      <p><strong>href Attributes</strong> - used to <strong>link address</strong> to &lt;a&gt; tag.</p>
      <br />
      <p><strong>lang Attributes</strong> - used to specify the <strong>language</strong> of your HTML document.</p>
      <br />
      <p><strong>target Attributes</strong> - used to specify opening document action on the &lt;a&gt; tag.</p>
      <br />
      <p><i>_blank</i> - Opens the linked document in a <strong>new tab</strong></p>
      <br />
      <p><i>_self</i> - Opens the linked document in the <strong>same page</strong></p>
      <br />
      <p><i>_parent</i> - Opens the linked document in the <strong>parent tab</strong></p>
      <br />
      <h2>HTML Marquees</h2>
      <strong>Marquees</strong> make the <strong>text scrolling</strong> either horizontally and vertically on your web page. Marquee attribute adds other special effects to the <strong>text</strong>, instead of using JavaScript and CSS.
      <code>width</code> &amp; <code>height</code> specifies the marquee <strong>width and height</strong>.
      <code>hspace</code> &amp; <code>vspace</code> specifies the marquee <strong>horizontal and vertical space</strong>.
      <code>direction</code> specifies the marquee <strong>direction up, down, left and right</strong>.
      <code>behavior</code> specifies the marquee <strong>behavior like scroll, slide and alternate</strong>.
      <code>scrolldelay</code> specifies the <strong>delay of text from the jump</strong> like 10, 20, etc.
      <code>scrollamount</code> specifies the <strong>speed of the marquee texts</strong> like 10, 20, etc.
      <img class="aligncenter size-full wp-image-699" src="../../../assets/blog/marquee.png" alt="marquee" width="929" height="72" />
      Example: Marquee
      <h2>HTML Frames</h2>
      Frames use to load different section of HTML document in a <strong>single web page</strong>. A collection of the frame makes its as <strong>frameset</strong> which is similar to organized table. Frames are not encouraged to use since it has plenty drawbacks with resolution screen on the smaller device.
      <img class="aligncenter size-full wp-image-701" src="../../../assets/blog/Frames.png" alt="frames" width="895" height="212" />
      Example: Frames
      <h2>HTML Computer Code</h2>
      Computer Code displays the varying of <strong>letter size</strong> and <strong>space inside</strong>.
      <code>&lt;kbd&gt;</code> element specifies the <strong>keyboard input</strong>.
      <code>&lt;code&gt;</code> element specifies the <strong>programming code</strong>.
      <code>&lt;samp&gt;</code> element specifies the <strong>output of the programming code</strong>.
      <h2>HTML Media</h2>
      Web pages support several <strong>multimedia</strong> like the picture, video, music, animation, etc. Multimedia element tag represents the media file type on your web pages.
      <code>&lt;img&gt;</code> element specifies the image with the attributes <code>src</code>(Source of the image) and <code>alt</code>(Alternate text for image).
      <img class="aligncenter size-full wp-image-706" src="../../../assets/blog/Image.png" alt="HTML" width="861" height="40" />
      Example: Image Element
      <code>&lt;video&gt;</code> element specifies the <strong>video with control attribute</strong> with the source file.
      <img class="aligncenter size-full wp-image-707" src="../../../assets/blog/Video.png" alt="video" width="914" height="123" />
      Example: Video Element
      <code>&lt;audio&gt;</code> element specifies the <strong>audio with control attribute</strong> with the source file.
      <img class="aligncenter size-full wp-image-708" src="../../../assets/blog/Audio.png" alt="audio html" width="842" height="111" />
      Example: Audio Element
      <code>&lt;canvas&gt;</code> element specifies the <strong>graphic container</strong>.
      <img class="aligncenter size-full wp-image-709" src="../../../assets/blog/Canvas.png" alt="canvas html" width="877" height="81" />
      Example: Canvas Element
      <h2>HTML Event</h2>
      <strong>Events trigger</strong> the action on the web pages which applies to all elements. HTML supports all <strong>window event, mouse event and keyboard event</strong> functions. These events get triggered when an action took place on the web pages. There are numerous events like onclick, onmousemove, onkeypress, onscroll, onfocus, onload, ononline, etc..
      <h2>HTML Table</h2>
      A table is defined by the <strong>rows</strong> and <strong>columns</strong> for the view.
      <code>&lt;table&gt;</code> defines a <strong>table</strong>.
      <code>&lt;tr&gt;</code> specifies the <strong>table row</strong>.
      <code>&lt;th&gt;</code> specifies the <strong>table heading</strong>.
      <code>&lt;td&gt;</code> specifies the <strong>table data</strong>.
      <code>&lt;caption&gt;</code> specifies the <strong>table caption</strong>.
      <img class="aligncenter size-full wp-image-733" src="../../../assets/blog/html-table.png" alt="html table" width="889" height="424" />
      Example: Table`, 'Coding', '30th June, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](3, 'CSS Notes', 'CSS Important Notes', `<h2>What is CSS ?</h2>
      <strong>Cascading Style Sheets</strong> is referred to as shortly CSS. It is a simple design language to simplify the style of the web pages. You can control your website <strong>design</strong> and <strong>layout</strong> with the variety of effects. It also supports different screen sizes and devices for a powerful <strong>web presentation</strong>. It will reduce your use of HTML element attributes for style changes like changing color of text, font style, increasing text size...etc, hence it make the website pages to load faster. <strong>External stylesheet file</strong> helps to save your work and apply the global changes to the HTML element on your website.
      &nbsp;
      <h2>CSS Syntax</h2>
      <strong>Syntax</strong> consists of two important blocks of rule-set. They are selector and declaration block. <strong>Selector block</strong> points the style you want to apply on the HTML Element. <strong>Declaration block</strong> consists of CSS property name and value which are separated by a colon.
      <img class="aligncenter size-full wp-image-584" src="../../../assets/blog/css-syntax.jpg" alt="css syntax" width="897" height="191" />
      Example: Syntax
      &nbsp;
      <h2>CSS Selectors</h2>
      CSS selector helps to select the HTML elements based on their element <strong>name</strong>, <strong>id</strong>, <strong>class</strong> and <strong>more</strong>. If you want to apply any specific style to HTML element we can use selectors.
      &nbsp;
      <strong>Element Selector</strong> selects the HTML Element based on the element name. It applys style to the selected element in the document
      <img class="aligncenter size-full wp-image-587" src="../../../assets/blog/element-selector.jpg" alt="element selector" width="800" height="86" />
      Example: Element Selector
      &nbsp;
      <strong>Id Selector</strong> selects specific id attribute of an HTML element. To select a specific id of an element write with ( <strong>#</strong> ), followed by id of the element
      <img class="aligncenter size-full wp-image-589" src="../../../assets/blog/id-selector.jpg" alt="id selector" width="813" height="84" />
      Example: Id Selector
      &nbsp;
      <strong>Class Selector</strong> selects specific class attribute of an HTML element. To select a specific class of an element write with ( <strong>.</strong> ), followed by class of the element
      <img class="aligncenter size-full wp-image-588" src="../../../assets/blog/class-selector.jpg" alt="class selector" width="812" height="83" />
      Example: Class Selector
      &nbsp;
      <strong>Group Selector</strong> minimize the code of same property of the HTML element. Select the group of elements and separate the selectors with ( <strong>,</strong> )
      <img class="aligncenter size-full wp-image-590" src="../../../assets/blog/group-selector.jpg" alt="group selector" width="810" height="83" />
      Example: Group Selector
      &nbsp;
      <h2>How to add CSS to your website ?</h2>
      There are three ways to associate style sheet to change the look of the website.
      &nbsp;
      <strong>External Style Sheet</strong> is linking external style file with <code>.CSS</code> extension to any HTML page using <code>&lt;link&gt;</code> element. The <code>&lt;link&gt;</code> element must be inside the head section. By using external style sheet you can define the style to entire webiste.
      <img class="aligncenter size-full wp-image-598" src="../../../assets/blog/external-style-css.jpg" alt="external style css" width="825" height="85" />
      Example: External Style Sheet
      &nbsp;
      <strong>Internal Style Sheet</strong> is defining the <code>&lt;style&gt;</code> element inside the HTML page for a single page.
      <img class="aligncenter size-full wp-image-599" src="../../../assets/blog/internal-style-css.jpg" alt="internal style css" width="807" height="173" />
      Example: Internal Style Sheet
      &nbsp;
      <strong>Inline Styles</strong> are used to apply a unique style for a single element.
      <img class="aligncenter size-full wp-image-600" src="../../../assets/blog/inline-style-css.jpg" alt="inline style css" width="807" height="61" />
      Example: Inline Style
      &nbsp;
      <h2>CSS Box Model</h2>
      Each and every HTML element is wrapped inside a <strong>box model</strong> for designing. It consists of content, padding, border and margin.
      <img class="aligncenter size-full wp-image-603" src="../../../assets/blog/Box-Model.jpg" alt="CSS box model" width="925" height="440" />
      Example: CSS Box Model
      &nbsp;
      <strong>Content</strong>
      &nbsp;
      <code>&lt;width&gt;</code> and <code>&lt;height&gt;</code> properties set width and height of the element.
      &nbsp;
      <code>&lt;min-width&gt;</code> and <code>&lt;min-height&gt;</code> properties set minimum width and minimum height of the element.
      &nbsp;
      <code>&lt;max-width&gt;</code> and <code>&lt;max-height&gt;</code> properties set maximum width and maximum height of the element.
      <img class="aligncenter size-full wp-image-611" src="../../../assets/blog/content.jpg" alt="content" width="805" height="101" />
      Example: Content properties
      &nbsp;
      <strong>Padding</strong>
      &nbsp;
      <code>&lt;padding&gt;</code> properties generate space around content and can be specified for each side of an element.
      <img class="aligncenter size-full wp-image-612" src="../../../assets/blog/padding.jpg" alt="padding" width="809" height="100" />
      Example: Padding properties
      &nbsp;
      <strong>Border</strong>
      &nbsp;
      <code>&lt;border&gt;</code> properties allow you to specify the border of element and can be specified for each side of an element.
      &nbsp;
      <code>&lt;border-style&gt;</code> properties specify the border style of an element.
      &nbsp;
      <code>&lt;border-width&gt;</code> properties specify the border width of an element.
      &nbsp;
      <code>&lt;border-color&gt;</code> properties specify the border color of an element.
      &nbsp;
      <code>&lt;border-radius&gt;</code> properties make round borders to an element.
      <img class="aligncenter size-full wp-image-613" src="../../../assets/blog/border.jpg" alt="border" width="810" height="143" />
      Example: Border properties
      &nbsp;
      <strong>Margin</strong>
      &nbsp;
      <code>&lt;margin&gt;</code> properties generate space around border and can be specified for each side of an element.
      <img class="aligncenter size-full wp-image-614" src="../../../assets/blog/margin.jpg" alt="margin" width="810" height="99" />
      Example: Margin properties
      &nbsp;
      <h2>Important CSS Rules</h2>
      <strong>CSS Measurements</strong> values are defined as <code>%</code> (percentage), <code>cm</code> (centimeter), <code>in</code> (inch), <code>px</code> (pixel) and <code>pt</code> (point)
      &nbsp;
      <strong>CSS Colors</strong> are specified as keywords (<code>black</code>, <code>red</code>,..), hex code (<code>#FF0000</code>, <code>#000000</code>,..) and RGB (<code>rgb(0,0,0)</code>, <code>rgb(0,0,255)</code>,..)
      &nbsp;
      <strong>CSS Float</strong> specifies the element to placed on the left or right side of its container.
      &nbsp;
      <strong>CSS Over Ride</strong> rule will always be applied by ignoring other rule of an element in the document( <code>!important</code> ).
      <img class="aligncenter size-full wp-image-617" src="../../../assets/blog/css.jpg" alt="css rule" width="811" height="122" />
      Example: CSS Rule
      &nbsp;
      <h2>CSS Position</h2>
      <p><strong>Position</strong> property additionally specifies the method of <strong>positioning of the element</strong>. Top, Bottom, Left, Right position will work only after setting the position property of the element. In detail there are four different position property.</p>
      <p><code>static</code> certainly specifies the position of the element, which follows <strong>normal flow</strong> of the page. Top, Bottom, Left, Right properties won't affect static position property of the element.</p>
      <p><code>relative</code> certainly specifies the position of the element, which <strong>changes its position from the normal position</strong> through Top, Bottom, Left, Right properties and the other elements will not fit into any space left by the element.</p>
      <p><code>fixed</code> certainly specifies the position of the element, which <strong>remains in the same place even you scroll the page</strong>. Top, Bottom, Left, Right properties will change the position of the element.</p>
      <p><code>absolute</code> certainly specifies the position of the element, which <strong>changes along with the page scrolling</strong>. Top, Bottom, Left, Right properties will change the position of the element.</p>
      <img src="assets/blog/CSS-position.png" alt="css" width="817" height="175" class="aligncenter size-full wp-image-716" />
      <p>For Example: Position Property</p>
      <h2>CSS Overflow</h2>
      <p><strong>Overflow</strong> property specifies the content overflow from the element box. While using <strong>block element</strong> the overflow property will work only when you specify the height of the element. To avoid overflow only on top/bottom of the element, you can use <strong>overflow-y</strong> and for the left/right of the element box, you can use <strong>overflow-x</strong>.</p>
      <p><code>auto</code> property value provides the <strong>scrolling option</strong> whenever the content overflow.</p>
      <p><code>visible</code> property value makes the content <strong>overflow out of the element box</strong>.</p>
      <p><code>hidden</code> property value clips the content overflow and <strong>no scrolling option will be available</strong>.</p>
      <p><code>scroll</code> property value clips the content overflow with <strong>scrolling options</strong>.</p>
      <img src="assets/blog/CSS-overflow.png" alt="css overflow" width="890" height="166" class="aligncenter size-full wp-image-718" />
      <p>For Example: Overflow Property</p>
      <p><code>z-index</code> property specifies the <strong>overlapping of the element</strong> with other element based on the stack order. <strong>Higher stack order element</strong> will show in front and lower stack order element will be in the back of the overlapping.</p>
      <img src="assets/blog/CSS-index.png" alt="css index" width="880" height="173" class="aligncenter size-full wp-image-720" />
      <p>For Example: Z-Index Property</p>
      <h2>CSS Pseudo-Class</h2>
      <p>A Pseudo-Class specifies the <strong>state of the element</strong>. A selector and a pseudo-class separated with colon used to specifies the state. Pseudo-Class are active, checked, disabled, focus, link, hover, required, visited, etc..</p>
      <img src="assets/blog/CSS-pseudo.png" alt="css pseudo" width="951" height="496" class="aligncenter size-full wp-image-722" />
      <p>For Example: Pseudo-Class</p>
      <h2>CSS Transform</h2>
      <p>Transform property allows the element for <strong>2D</strong> or <strong>3D transformation</strong>. The element can be rotated, scaled, moved, skewed, etc..</p>
      <p><code>transform-origin</code> property shortly specifies the <strong>position changes of the transform element</strong>.</p>
      <p><code>transform-style</code> property shortly specifies the <strong>style of the transform element</strong> flat or preserve-3d.</p>
      <p><code>transition-property</code> property shortly specifies the <strong>transition effects</strong> of the element.</p>
      <p><code>transition-delay</code> property shortly specifies the <strong>transition effects delay</strong> of the element.</p>
      <p><code>transition-duration</code> property shortly specifies the <strong>transition effects duration</strong> of the element.</p>
      <img src="assets/blog/css-transform.png" alt="css transform" width="851" height="201" class="aligncenter size-full wp-image-726" />
      <p>For Example: CSS Transform</p>
      <h2>CSS Animation</h2>
      <p>Animation property gives the <strong>animative effect</strong> to your web pages without javascript and flash.</p>
      <p><code>@keyframes</code> rule has the <strong>set of animation code</strong> which will gradually change from the current style to the new style at times.</p>
      <p><code>animation-name</code> specifies the <strong>name for the keyframes animation</strong>.</p>
      <p><code>animation-delay</code> specifies the <strong>delay to start the animation</strong>.</p>
      <p><code>animation-duration</code> specifies the <strong>duration of the animation cycle</strong>.</p>
      <p><code>animation-direction</code> specifies the <strong>direction of the animation cycle</strong>.</p>
      <p><code>animation-play-state</code> specifies the <strong>animation state running or paused</strong>.</p>
      <p><code>animation-iteration-count</code> specifies the <strong>number of times animation to display</strong>.</p>
      <p><code>animation-timing-function</code> specifies the <strong>animation curve speed</strong>.</p>
      <img src="assets/blog/css-animation.png" alt="css animation" width="960" height="320" class="aligncenter size-full wp-image-729" />
      <p>For Example: CSS Animation</p>`, 'Coding', '7th July, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](4, 'Javascript Notes', 'Javascript Important Notes', `<h2>What is JavaScript ?</h2>
      JavaScript is a <strong>client-side scripting language</strong> of the web. It is a lightweight, dynamic and loosely-type programming language that <strong>executes on the user's browser</strong>. JavaScript not only interacts with the HTML elements, in order to make an <strong>interactive website interface</strong> but also do various activities like popup messages, events handling, validation,..etc..with HTML elements. Due to client-side execution, the <strong>web pages speed</strong> will also depend on it hence if you have less javascript code will decrease the server load time.
      <h2>JavaScript Data Types</h2>
      Variable can <strong>hold data</strong> value at any point of time since they are dynamic and loosely-type. It includes primitive and non-primitive data types.
      <h4>Primitive Data Type</h4>
      String is the textual contents which are enclosed in single or double quotation marks. Furthermore, you can insert a special character in between the string, you can use backslash sign( / ).
      <img class="aligncenter size-full wp-image-747" src="../../../assets/blog/JavaScript-String-1.png" alt="javascript" width="875" height="494" />
      For Example: String Method
      Number correspondingly represents the <strong>integer, float, decimal and exponential</strong> value.
      <img class="aligncenter size-full wp-image-748" src="../../../assets/blog/JavaScript-Number.png" alt="javascript number" width="888" height="265" />
      For Example: Number Method
      Boolean have only two values true and false. If a variable is undefined or null then the value is false. Furthermore, you can use boolean for the <strong>conditional statements</strong> like if..else, while, do..while and switch.
      <h4>Non-Primitive Data Type</h4>
      Date work with <strong>date and time</strong> including days, months, years, hours, minutes, seconds and milliseconds. It can be created by specifying date or time in the date constructor.
      <img class="aligncenter size-full wp-image-754" src="../../../assets/blog/date.png" alt="date javascript" width="927" height="67" />
      For Example: Date
      object is an <strong>standalone entity</strong> with no class. It holds multiple values in terms of the methods and properties. An object can be passed from one function to another function by <strong>reference</strong>.
      <img class="aligncenter size-full wp-image-755" src="../../../assets/blog/object.png" alt="object javascript" width="858" height="279" />
      For Example: Object
      Array is a type of variable that <strong>stores multiple values</strong> using a specific syntax. Different data types can be stored inside a single array with base index starting from zero.
      <img class="aligncenter size-full wp-image-757" src="../../../assets/blog/array.png" alt="array javascript" width="856" height="150" />
      For Example: Array
      <h2>JavaScript Functions</h2>
      Function allows you to <strong>define a set of codes</strong> and that can be executed using function name with ( ) operator. You can also <strong>add one or more parameter</strong> values while executing the function.
      <img class="aligncenter size-full wp-image-759" src="../../../assets/blog/function.png" alt="function javascript" width="874" height="258" />
      For Example: Function
      <h2>JavaScript Errors</h2>
      Error handling mechanism uses to find the <strong>run time error</strong> on the Java Script and it does not provide compile time error.
      <img class="aligncenter size-full wp-image-760" src="../../../assets/blog/error.png" alt="error javascript" width="855" height="198" />
      For Example: Error Handling
      <h2>JavaScript Strict Mode</h2>
      Strict mode makes java script to write more easier and secure. It catches the <strong>previously accepted bad syntax error</strong> which are not not caught on the execution. Define <strong>"use strict";</strong> code in the beginning of your function for the strict mode. It identifies undefined variables, duplicate property of object, duplicate parameter of function, evaluation function and more.
      <img class="aligncenter size-full wp-image-762" src="../../../assets/blog/strict.png" alt="strict java script" width="850" height="233" />
      For Example: Strict Mode
      <h2>JavaScript Condition</h2>
      Conditional statements are used to <strong>control the flow of the program</strong>.
      <img class="aligncenter size-full wp-image-764" src="../../../assets/blog/condition.png" alt="conditional java script" width="855" height="589" />
      For Example: Conditional Statements
      <h2>JavaScript Message</h2>
      JavaScript has several in built functions for <strong>displaying the popup messages</strong> for different purpose.
      <img class="aligncenter size-full wp-image-766" src="../../../assets/blog/message.png" alt="message javascript" width="875" height="393" />
      For Example: Message`, 'Coding', '11th July, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](5, 'Angular JS Notes', 'Angular JS Important Notes', `<h2>What is Angular JS ?</h2>
      AngularJS is a powerful JavaScript framework. It is an <strong>open source web application framework</strong> and also has the capability to create the single page web application projects. Developers write Angular JS as client side language to build high-performance web application through <strong>MVC architecture</strong>.
      <h2>Angular JS Features</h2>
      <i>Data Binding</i> - Automatic synchronization of <strong>data between the model (Back-End) and view (FrontEnd)</strong>. Therefore, if any change happens in the model, it will be reflected on the view and vice versa.
      <i>Controller</i> - JavaScript constructor function is used to bound with HTML documents. It also manages the scope for our template and holds business logic.
      <i>Services</i> - It <strong>organizes and shares code across</strong> your application. Services are
      <strong>Lazily Instantiated</strong> - A service get <strong>instantiates when an application component depends on the service</strong>.
      <strong>Singleton</strong> - A service get <strong>instantiates only once in the application</strong>.
      <i>Scope</i> - It is the <strong>binding part between the controller and the view</strong>. A Scope is an object that refers to model and also passes the property.
      <i>Templates</i> - Template contains the <strong>information from the controller and model to render the view</strong>.
      <i>Filters</i> - It <strong>formats the data and selects an item from an array</strong> for the users to view.
      <i>Directives</i> - It <strong>adds specific behavior to DOM elements</strong> such as attribute, class, element name,..etc.
      <i>Routing</i> - It renders the view by <strong>defining the routing rules</strong>.
      <i>Deep Linking</i> - It allows the application to <strong>restore the same state from the restored URL</strong>.
      <i>Dependency Injection</i> - Angular is built in with dependency injection to <strong>resolve the dependencies</strong>. So that it allows the program design to follow dependency inversion principle.
      <h2>Angular JS Directives</h2>
      Angular directives manipulate the javascript function behaviors to HTML DOM elements. Angular directive starts with the prefix <strong>ng</strong> or <strong>data-ng</strong>. Before the page gets the render to display there are four functions takes place in angular directives otherwise we can say it as <strong>Angular Directive Life Cycle</strong>.
      <i>compile</i> function allows the <strong>directive to manipulate the DOM</strong> before starting compiling.
      <i>controller</i> function allows the <strong>directive communication</strong>.
      <i>pre-link</i> function allows the <strong><code>$scope</code> to manipulate</strong> before the post-link process begins.
      <i>post-link</i> function <strong>manipulates DOM to the directive</strong>.
      Example: <code>ng-init</code>, <code>ng-model</code>, <code>ng-app</code>, <code>ng-bind</code>
      <h2>Angular JS Data Binding</h2>
      Data binding is the synchronization data between the model and view. There are two types of binding.
      <h4>Two-Way Binding</h4>
      Whenever the data in the model changes, it will immediately reflect on the view and vice-versa. Any input data will automatically update to the view. The <code>ng-model</code> directive provides the <strong>two-way binding between the model and view</strong>. To bind the data to HTML we are using the <strong>angular expression</strong> which is similar to javascript expressions surrounded with double braces - <strong>{{</strong> <code>expression</code> <strong>}}</strong>. Instead of using double braces, you can also use expression inside a directive <code>ng-bind="expression"</code> which will bind with the inner HTML of the element.
      <img class="aligncenter size-full wp-image-667" src="../../../assets/blog/Angular-Bind.png" alt="Angular two way binding" width="983" height="269" />
      Example: Two-Way Binding
      <h4>One-Way Binding</h4>
      <strong>Binding data from the model to view</strong> is one-way data binding. It allows the view to update once from the value set by the controller and the displayed data won't change until the page is reloaded. It can be invoked by <strong>{{</strong> <code>::expression</code> <strong>}}</strong> or using directive <code>ng-bind="::expression"</code>.
      <img class="aligncenter size-full wp-image-669" src="../../../assets/blog/one-way.png" alt="angular one way binding" width="899" height="270" />
      Example: One-Way Binding
      <h2>Angular JS Modules &amp; Controllers</h2>
      A module is the <strong>main method of your application</strong> in angular. It is a collection of the controllers, services, directives and filters, etc..It will <strong>configure the injector</strong> of your application for retrieving object instance defined by the providers. A module can also depend on the another module through dependencies.
      <img class="aligncenter size-full wp-image-672" src="../../../assets/blog/module.png" alt="angular modules" width="858" height="88" />
      Example: Angular Module
      A controller is a javascript function to <strong>build a model(data)</strong> for the view to display. A module can have more than one controller and you can <strong>invoke multiple controllers</strong> in a <strong>single view</strong>.
      <img class="aligncenter size-full wp-image-673" src="../../../assets/blog/controller.png" alt="Angular Controller" width="862" height="89" />
      Example: Angular Controller
      <code>ng-app</code> directive <strong>initializes an angular js</strong> application.
      <code>ng-controller</code> directive <strong>defines the application controller</strong> of the javascript object constructor.
      <img class="aligncenter size-full wp-image-675" src="../../../assets/blog/ngapp.png" alt="angular modules" width="860" height="230" />
      Example: ng-app directive
      Instead of using <code>ng-app</code> directive, you can also use <code>angular.bootstrap</code> to initializes an angular js application for the <strong>bootstrap framework</strong>.
      <img class="aligncenter size-full wp-image-677" src="../../../assets/blog/angular-bootstrap.png" alt="angular bootstrap" width="875" height="172" />
      Example: angular.bootstrap
      <h2>Angular JS Scopes</h2>
      <code>$scope</code> is an angular js built-in object. It is the <strong>binding part between view and controller</strong>. It is the first argument to the controller during constructor defining. The scope holds object properties and methods.
      <code>$rootscope</code> is the <strong>parent of all $scope</strong>. An angular application can have only one $rootscope, which is available to all controllers to access its properties and methods.
      <code>$watch</code> function <strong>observes the change in a variable on the $scope</strong>.
      <code>$destroy</code> function <strong>removes the current value on the $scope</strong>.
      <code>$digest</code> function <strong>will run and always ask for the changes on $watch</strong>. $digest triggers the digest cycle and watching for the changes in the model, then the corresponding function executes.
      <code>$apply</code> function to <strong>make sure the changes takes affected</strong> and for the third party changes.
      <code>$location</code> services <strong>route the URL or path</strong> of your web pages.
      <img class="aligncenter size-full wp-image-685" src="../../../assets/blog/location.png" alt="angular location" width="884" height="246" />
      Example: Angular $location
      <code>$http</code> services make a <strong>request to the server and get responses</strong> back from the server.
      <code>$filter</code> services <strong>format the data</strong> for the users.
      <img class="aligncenter size-full wp-image-686" src="../../../assets/blog/filter.png" alt="angular filter" width="849" height="81" />
      Example: Angular $filter
      <code>$interval</code> services <strong>execute for each tick of the interval</strong>.
      <img class="aligncenter size-full wp-image-687" src="../../../assets/blog/interval.png" alt="angular interval" width="864" height="149" />
      Example: Angular $interval
      <code>$sce</code> services mark the <strong>safe of the context</strong>(Strict Contextual Escaping).
      <code>$window</code> services <strong>call browser window objects</strong>.
      <code>$timeout</code> services call another javascript function after the given time.
      <img class="aligncenter size-full wp-image-688" src="../../../assets/blog/timeout.png" alt="angular timeout" width="843" height="124" />
      Example: Angular $timeout
      <h2>Angular JS Filters</h2>
      Filters allow <strong>changing the format of the data to display</strong> without changing original format. Pipe | sign represents the expression of the filter.
      <strong>{{</strong><code>expression | filterName:parameter</code><strong>}}</strong>
      Number Filter - <strong>{{</strong><code>amount | number:2</code><strong>}}</strong>
      Currency Filter - <strong>{{</strong><code>amount | currency:'Rs.'</code><strong>}}</strong>
      Date Filter - <strong>{{</strong><code>birthday | date:'longDate'</code><strong>}}</strong>
      Case Filter - <strong>{{</strong><code>name | lowercase</code><strong>}}</strong>
      Order Filter - <strong>(</strong><code>ng-repeat="name in names | orderBy:SortOrder</code><strong>)</strong>
      Search Filter - <strong>{{</strong><code>myArr | filter:searchCriteria</code><strong>}}</strong>
      <h2>Angular JS Events</h2>
      Events listen to <strong>custom behavior</strong> of the HTML elements
      <code>ng-blur</code> directive will trigger when an <strong>input element loses focus</strong>.
      <code>ng-change</code> directive will trigger when an <strong>input value changes</strong>.
      <code>ng-click</code> directive will trigger when an <strong>element is being clicked</strong>.
      <code>ng-keypress</code> directive will trigger when a <strong>keypress event occurs in the input field</strong>.
      <code>ng-mouseover</code> directive will trigger when a <strong>mouse move over the element</strong>.
      <h2>Angular JS Validations</h2>
      Angular provides the <strong>client side form and input data validation</strong>.
      <code>ng-required</code> directive will make the <strong>input field mandatory</strong>.
      <code>ng-minlength</code> directive will make the <strong>minimum length of the character in the input field</strong>.
      <code>ng-maxlength</code> directive will make the <strong>maximum length of the character in the input field</strong>.
      Angular also provides the <strong>state of input data</strong> and form based on the user interaction.
      <code>$pristine</code> state the <strong>field has not been modified yet</strong>.
      <code>$dirty</code> state the <strong>field has been modified yet</strong>.
      <code>$valid</code> state the <strong>field content is valid</strong>.
      <code>$invalid</code> state the <strong>field content is not valid</strong>.
      <code>$touched</code> state the <strong>field has been touched yet</strong>.
      <code>$untouched</code> state the <strong>field has not been touched yet</strong>.
      <h2>Angular JS Depedency</h2>
      <h4>Routing</h4>
      Routing helps your application to transform a <strong>Single Page Application</strong>. <code>ngRoute</code> dependency routes your application to navigate different pages with out reloading the pages.
      <h4>Animation</h4>
      Animation is the transformation of the HTML element. To use <strong>animation effect</strong> in your application, you need to add <code>ngAnimate</code> dependency. ngAnimate will add or remove CSS class which appears as animative effective. Directives like ng-show, ng-hide, ng-class, ng-view, ng-include, ng-repeat, ng-if, ng-switch can uses animative effect.
      <img class="aligncenter size-full wp-image-696" src="../../../assets/blog/animation.png" alt="angular animation" width="890" height="503" />
      Example: Angular Animation
      <h2>Some Important Angular JS Directive</h2>
      <code>ng-show</code> directive shows the HTML element whenever the condition satisfies.
      <code>ng-hide</code> directive hides the HTML element whenever the condition satisfies.
      <code>ng-include</code> directive includes any HTML file inside the page and also executes all code inside the included file.
      <code>ng-repeat</code> directive repeats a set of HTML elements from the collection of array.
      <code>ng-switch</code> directive show/hide HTML element depending on the condition.
      <code>ng-if</code> directive removes the HTML element when an expression evaluates to false and adds element when the evaluation is true.
      <code>ng-class</code> directive adds the HTML class to the HTML element.`, 'Coding', '24th July, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](6, 'SQL Notes', 'SQL Important Notes', `<h2>What is SQL ?</h2>
      SQL is the <strong>Structural Query Language for storing, manipulating and retrieving data</strong> on the relational database system. At the same time users can create store procedure, view and functions in a database. Furthermore, it also provides permission for <strong>accessing the tables, procedures and view</strong>. In reality, SQL commands interact with <strong>relational database</strong> for accessing or manipulating data and they are classified into three types.
      <strong>Data Definition Language</strong> - CREATE, ALTER, DROP
      <strong>Data Manipulation Language</strong> - SELECT, INSERT, UPDATE, DELETE
      <strong>Date Control Language</strong> - GRANT, REVOKE
      <h2>SQL Constraint</h2>
      Constraints are the <strong>set of rules</strong> which enforce the columns on the table. In fact constraint make the data accurate and reliable in the database.
      <code>NOT NULL</code> Constraint ensures the column <strong>value does not have NULL value</strong>.
      <code>DEFAULT</code> Constraint provides a <strong>default value to the column</strong>.
      <code>UNIQUE</code> Constraint ensures the <strong>value are unique on the column</strong>.
      <code>CHECK</code> Constraint ensures the <strong>value in the column satisfy the specific condition</strong>.
      <code>PRIMARY KEY</code> <strong>unique identity value in each row of the table</strong>.
      <code>FOREIGN KEY</code> <strong>unique identity value in each row of the another table</strong> in the same database table.
      <img class="aligncenter size-full wp-image-792" src="../../../assets/blog/sql-cons.png" alt="sql constraint" width="853" height="235" />
      For Example : Constraints
      <h2>SQL Database</h2>
      A database is a collection of data that supports <strong>storage and manipulation of the data</strong>. It also helps to control the data flow inside it.
      <img class="aligncenter size-full wp-image-793" src="../../../assets/blog/sql-database.png" alt="sql database" width="814" height="150" />
      For Example : Database
      <h2>SQL Table</h2>
      A Table is a collection of data which are held in a <strong>structural format</strong> within a database. In general it consist of <strong>rows and columns</strong>.
      <img class="aligncenter size-full wp-image-795" src="../../../assets/blog/sql-table.png" alt="sql table" width="873" height="410" />
      For Example : Table
      <h2>SQL Query</h2>
      <code>SELECT</code> data from the table.
      <code>INSERT INTO</code> data into the table.
      <code>UPDATE</code> data in the table.
      <code>DELETE</code> data in the table.
      <code>AND</code> displays the records which satisfies both the condition.
      <code>OR</code> displays the records which satisfies any one of the condition.
      <code>GROUP BY</code> displays the records with set of group.
      <code>ORDER BY</code> displays the records in order.
      <code>TOP</code> displays the top records.
      <code>LIKE</code> displays the records with specific search pattern.
      <code>BETWEEN</code> displays the records between the given range.
      <code>IN</code> used to select records with the matching value.
      <code>ALIAS</code> used to rename table name or column heading temporarily.
      <img class="aligncenter size-full wp-image-798" src="../../../assets/blog/sql-query.png" alt="sql query" width="859" height="404" />
      For Example : Query
      <h2>SQL Joins</h2>
      <p>Joins are useful to <strong>combine rows from one or more tables</strong> in a database. It works on the basic of the common field between the table. Based on the <strong>relationship between the table</strong>, joins are classified in to.</p>
      <p><code>INNER JOIN</code> returns rows when there is a match in both tables.</p>
      <p><code>LEFT JOIN</code> returns all rows from the left table and matched records from right table.</p>
      <p><code>RIGHT JOIN</code> returns all rows from the right table and matched records from left table.</p>
      <p><code>FULL JOIN</code> returns all rows from both table matched and unmatched records.</p>
      <p><code>OUTER JOIN</code> returns rows which are not matched on the both tables.</p>
      <img src="assets/blog/sql-join.png" alt="sql join" width="833" height="126" class="aligncenter size-full wp-image-803" />
      <p>For Example: Inner Join</p>
      <h2>SQL Functions</h2>
      <p>Generally there are several in built SQL functions which performs various processing of the data.</p>
      <p><code>COUNT</code> returns no of the rows count from table.</p>
      <p><code>MAX</code> returns the maximum column value from the table.</p>
      <p><code>MIN</code> returns the minimum column value from the table.</p>
      <p><code>SUM</code> allows to sum the values of table.</p>
      <p><code>AVG</code> returns the average value from the numeric field.</p>
      <p><code>CONCAT</code> allows to join two strings.</p>
      <p><code>FIRST</code> returns first column value from the table.</p>
      <p><code>MID</code> returns the specific character from the string field.</p>
      <p><code>LAST</code> returns last column value from the table.</p>
      <p><code>LEN</code> returns the length of the string field.</p>
      <p><code>FORMAT</code> changes the format of displayed data.</p>
      <p><code>LIMIT</code> returns the limited no of rows from the table.</p>
      <p><code>UCASE</code> converts the string field to uppercase.</p>
      <p><code>LCASE</code> converts the string field to lowercase.</p>
      <p><code>ROUND</code> returns the round value of the numeric field.</p>
      <img src="assets/blog/sql-function.png" alt="sql function" width="866" height="317" class="aligncenter size-full wp-image-805" />
      <p>For Example: Functions</p>
      <h2>SQL Sub Queries</h2>
      <p>A sub query is a query within another SQL query and embedded on where clause. It can have only one column in the select clause.</p>
      <img src="assets/blog/sql-subquery.png" alt="sql subquery" width="844" height="255" class="aligncenter size-full wp-image-807" />
      <p>For Example: Sub Query</p>
      <h2>SQL Service Broker</h2>
      <p>Service Broker is <strong>asynchronous task</strong> in which independent components work together. It enforces the developers to write reliable application since there asynchronous information through exchanged message.</p>
      <img src="assets/blog/sql-service-broker.png" alt="sql service broker" width="851" height="96" class="aligncenter size-full wp-image-808" />
      <p>For Example: Service Broker</p>
      <h2>SQL Temporary Table</h2>
      <p>Temporary table helps you to <strong>store and process intermediate result</strong> by updating the temporary table. Most importantly the temporary table gets automatically deleted when the client session terminates.</p>
      <img src="assets/blog/sql-temp-table.png" alt="sql temporary table" width="850" height="262" class="aligncenter size-full wp-image-810" />
      <p>For Example: Temporary Table</p>
      <h2>SQL Stored Procedure</h2>
      <p>Stored Procedure is a set of logical group of SQL statements which are assigned to perform certain task. It is used to <strong>increase the performance of the database</strong>.</p>
      <img src="assets/blog/sql-store-procedure.png" alt="sql store procedure" width="850" height="166" class="aligncenter size-full wp-image-812" />
      <p>For Example: Stored Procedure</p>
      <h2>SQL View</h2>
      <p>A view is a composition of a <strong>table structured from with predefined query<strong>. It contains all row and column of the table. It is created by combination of one or more table.</p>
      <img src="assets/blog/sql-view.png" alt="sql view" width="858" height="106" class="aligncenter size-full wp-image-814" />
      <p>For Example: View</p>`, 'Coding', '3rd August, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](7, 'Host Wordpress', 'Host Wordpress In Local', `<h2>What is WAMP ?</h2>
      <p>WAMP is a software stack consisting of Apache web server, PHP and MySQL package for Windows computers. Basically, you need WAMP to host your own local server and install <strong>WordPress</strong> on your <strong>Windows</strong>. It is totally free and very easy to use. <strong>WAMP</strong> refers</p>
      <br/>
      <p><strong>Windows</strong> – It is just to specify that the application is compatible with Windows operating systems.</p>
      <br/>
      <p><strong>Apache web server</strong> – It is the software that is used to host your website on your system. It will help to host the static web content and HTML files.</p>
      <br/>
      <p><strong>MySQL</strong> – It is a database that is used to store your dynamic web content of the website from same source code and more.</p>
      <br/>
      <p><strong>PHP</strong> – It is an essential and popular companion to host anything more than static web pages of the website.</p>
      <br/>
      <h2>Installing WAMP on your system</h2>
      <br/>
      <p>First, thing you need to go to <a href="http://www.wampserver.com/en/" target="_blank">WAMP</a> website and download the latest version software. Once you have downloaded the software, run the installation setup and follow on-screen instructions. After completing WAMP installation, next step is to download the latest version of <a href="https://wordpress.org/" target="_blank">Wordpress</a></p>
      <br/>
      <p>1. Copy the downloaded <strong>WordPress.zip</strong> to the installed location WAMP under www.</p>
      <br/>
      <p>2. Extract the WordPress.zip and copy the file inside the <strong>wordpress folder</strong> and paste into a new folder with any name as your wish(so that name would be your localhost path for hosting your website in system)</p>
      <br/>
      <img class="aligncenter size-full wp-image-229" src="../../../assets/blog/WAMP-Install-Path.jpg" alt="WordPress Install" style="border:2px  solid grey" width="969" height="411" />
      <p>Example: Here, I extract WordPress.zip and rename into 'jenkin' under the installed WAMP path (C:\wamp\www)</p>
      <br/>
      <p>3. Start <strong>WAMP</strong> and click WAMP icon in the taskbar, wait till the icon color changes to green(All Service Running).</p>
      <br/>
      <p>4. Left Click the WAMP icon and select <strong>phpMyAdmin</strong> so that it will redirect to web browser link http://localhost/phpmyadmin/</p>
      <br/>
      <img class="aligncenter size-full wp-image-237" src="../../../assets/blog/WAMP-Php.jpg" alt="WAMP Php" style="border:2px  solid grey" width="949" height="673" />
      <p>Example: http://localhost/phpmyadmin/</p>
      <br/>
      <p>5. Create UserName and Password for your <strong>phpMyAdmin</strong>(Default- UserName=root, Password=root ).</p>
      <br/>
      <p>6. Create a Database with your own name.</p>
      <br/>
      <img class="aligncenter size-full wp-image-238" src="../../../assets/blog/Create-Database.jpg" alt="Create Database" style="border:2px  solid grey" width="823" height="373" />
      <p>Example: Create a Database in phpMyAdmin</p>
      <br/>
      <p>7. Open http://localhost/(folder name given inside wamp/www) in the browser and click on create a configuration file.</p>
      <br/>
      <p>8. Fill the configuration details.</p>
      <br/>
      <ul>
         <li>Database name : Database name you have created (<code>jenkin</code>)</li>
         <li>Username : phpMyAdmin Username, default(<code>root</code>)</li>
         <li>Password : phpMyAdmin Password</li>
         <li>Database host : Keep it default (<code>localhost</code>)</li>
         <li>Database prefix : Keep it default (<code>wp_</code>)</li>
      </ul>
      <br/>
      <img src="assets/blog/Create-WordPress.jpg" alt="Create WordPress" width="905" height="531" class="aligncenter size-full wp-image-242" />
      <p>Example: Configuring database for your website</p>
      <br/>
      <p>9. Install <strong>WordPress</strong> with details</p>
      <br/>
      <img src="assets/blog/Install-WordPress.jpg" alt="Install WordPress" width="831" height="611" style="border:2px  solid grey" class="aligncenter size-full wp-image-243" />
      <p>Example: Install WordPress</p>
      <br/>
      <p>10. Successfully, <strong>WordPres</strong>s has been installed on your local system. Thank you, and enjoy!</p>
      <br/>`, 'Installation', '10th August, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](8, 'A Bootable USB', 'How To Create A Bootable USB', `Making a bootable USB drive is a quick and easiest way to install a new Operating System to your Computer or Laptop. In bonus, you can revert USB drive back to a storage device after installation by formatting USB drive. There are multiple methods to make a <strong>bootable USB drive</strong>, but I prefer two methods which are as following.
      &nbsp;
      <h2>Windows USB/DVD Download Tool</h2>
      Windows USB/DVD Download Tool is a genuine software from Microsoft's to make <strong>bootable USB drive</strong>. First download the software <a href="http://wudt.codeplex.com/" target="_blank">Windows USB/DVD Download Tool</a> and install on your computer.
      <img class="aligncenter size-full wp-image-431" src="../../../assets/blog/USB-drive.jpg" alt="Bootable USB drive" width="961" height="573" />
      Example: Windows USB/DVD Download Tool
      &nbsp;
      Open windows USB/DVD tool from programs and select the Windows installation file. This tool loads only ISO file if you don't have one, make an <strong>ISO file</strong> from the installation file. Insert the USB drive into your computer and select it as a device for copying the installation file.
      <img class="aligncenter size-full wp-image-434" src="../../../assets/blog/drive-tool.jpg" alt="drive tool" width="955" height="595" />
      Example: Bootable USB drive processing
      &nbsp;
      <h2>Diskpart using Command Prompt(CMD)</h2>
      Diskpart method is the simplest way to create a <strong>bootable USB drive</strong>. There is no need of software or ISO file for making this bootable USB drive, just the installation file needed and follow the below steps.
      &nbsp;
      1. Insert you USB drive into your computer and open <strong>Command Prompt</strong> as administrator.
      &nbsp;
      2. Type <code>diskpart</code> and press Enter on Command Prompt to enter <strong>DISKPART</strong>.
      &nbsp;
      3. Next type <code>list disk</code> and press Enter to view <strong>active disks</strong> on the computer where <em>Disk 0</em> is for hard drive don't touch it.
      <img class="aligncenter size-full wp-image-440" style="border: 2px solid grey;" src="../../../assets/blog/bootable-drive-cmd.jpg" alt="bootable cmd" width="1111" height="495" />
      Example: <strong>list disk</strong> in cmd
      &nbsp;
      4. Select the disk which you want to make a bootable drive. For the above screenshot, I need to select disk 2, so I have typed <code>select disk 2</code> and press Enter to determine my disk 2.
      &nbsp;
      5. Type <code>clean</code> and press Enter to <strong>delete all data</strong> on your USB drive.
      &nbsp;
      6. Type <code>create partition primary</code> and press Enter to create a partition. After that, choose the partition by typing <code>select partition 1</code> and press Enter. To activate your partition, type <code>active</code> and press Enter.
      &nbsp;
      7. Type <code>format fs=ntfs quick</code> and press Enter to change current partition format to <strong>NTFS</strong>.
      &nbsp;
      8. Type <code>assign</code> and press Enter to set the driver letter to display on windows explorer and type <code>exit</code> to quit <strong>DISKPART</strong>.
      <img class="aligncenter size-full wp-image-443" src="../../../assets/blog/bootable-drive-diskpart.jpg" alt="diskpart" width="1111" height="693" />
      Example: DISKPART
      &nbsp;
      9. Copy the windows installation file to your USB drive.
      <img class="aligncenter size-full wp-image-447" src="../../../assets/blog/bootable-disk.jpg" alt="bootable disk" width="945" height="293" />
      Example: Bootable Disk is ready after copying the installation file(USB icon changes on explorer)
      &nbsp;
      10. Your <strong>bootable USB</strong> is ready for installing the operating system.
      &nbsp;`, 'Installation', '12th August, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](9, 'Open Systems', 'Open Systems Interconnection Model', `<h2>OSI model</h2>
      OSI model stands for <strong>Open Systems Interconnection Model</strong>. It is a logical and conceptual layout for the <strong>network communication</strong>. OSI model is divided into <strong>seven layers</strong> and these layers are responsible for the communication. In order to have continuous data transmission each of these layers must synchronize with each other. Each layer contains <strong>one or more protocol to complete key functions</strong> for the data transmission.
      <img class="aligncenter size-full wp-image-884" src="../../../assets/blog/osi-systems.png" alt="osi layer systems" width="675" height="565" />
      OSI Model
      <h2>Application Layer</h2>
      In Application layer users directly interact with the layer through application like browser, etc. It is the basic layer that allows you to <strong>access the network services</strong>.
      <h4>HTTP</h4>
      <strong>Hyper Text Transfer Protocol</strong> is an application level protocol that helps the browser to communicate with the server. Http clients like <strong>web browser communicate with the server</strong> via http request and get back the response message to the client. In other words for accessing website World Wide Web(www) http is being used.
      <h4>FTP</h4>
      <strong>File Transfer Protocol</strong> allows you to <strong>transfer file between two computers</strong> through internet. In detail internet protocol plays major role in transferring the file. It uses TCP/IP protocol to transfer the file from the client. You can use <strong>client side programming</strong> to transfer the file to remote serving computer.
      <h4>DHCP</h4>
      <strong>Dynamic Host Configuration Protocol</strong> allows the host computer to get an IP address from the pool of the addresses automatically. Whenever the system starts it has been <strong>assigning IP address automatically</strong>. In order to use internet service, DHCP helps your system to connect internet with the minimum system requirement.
      <h4>DNS</h4>
      <strong>Domain Name Server</strong> automatically convert the name type on the <strong>browser address bar to an IP address</strong>. It is a central part of the internet, providing a way to matches the website name to IP address. You can also <strong>open your website with the IP address</strong> with out the name of the website.
      <h4>IMAP4</h4>
      <strong>Internet Mail Access Protocol</strong> is one of an efficient way to <strong>accessing the email from the mail server</strong>. For accessing these mail from the server we can use IMAP4 client. At the same time all users can able to access these mailbox from the different network from anywhere through it.
      <h4>POP3</h4>
      <strong>Post Office Protocol</strong> is the most advance way of sending and receiving the mail. It also allows the user to <strong>download the message to your local computer</strong> and read them even when you are not connected to internet. Due to high rate of success and easy to use among the mail servers it has been hugely encouraged for mail service. In POP3 service the user computer retrieves mail from the mail server since it has no end to end connection.
      <h4>SIP</h4>
      <strong>Session Initiation Protocol</strong> is a core protocol for <strong>creating or managing session</strong> through the internet. It works based on the <strong>network internet protocol</strong>. Application like voice and video calls through internet, as well as instant messaging through network internet protocol
      <h4>SMTP</h4>
      <strong>Simple Mail Transfer Protocol</strong> is an independent protocol for sending transmission through the reliable data stream channel. Using SMTP, you can <strong>transfer mail across any network</strong> through encapsulated TCP/IP frame. You can also manage SMTP service through IIS and for <strong>transferring multimedia file</strong> through email we can extend service called Extended <strong>Simple Mail Transfer Protocol</strong>(ESMTP).
      <h4>SSH</h4>
      <strong>Secure Shell</strong> protects the network administrator to control the web and remote server from the hackers. Due to strong authentication it is one of the best solution for <strong>transferring and tunneling data securely</strong> for TCP/IP applications.
      <h4>SSL</h4>
      In fact, <strong>Secure Sockets Layer</strong> is a protocol responsible for keeping a lot of your online data secure. Therefore it helps for establishing an <strong>encrypted link</strong> between the web server and client application.
      <h2>Presentation Layer</h2>
      <strong>Presentation Layer</strong> is responsible for formatting data since it converts the data to packets from the <strong>application format to network format and vice-versa</strong>. These format changes make the rest of the OSI layer can understand. Additionally data encryption/decryption also done in this layer.
      <h2>Session Layer</h2>
      <strong>Session Layer</strong> is responsible for <strong>initiating, maintaining and terminating the sessions</strong> across the network. Additionally it ensures that the authorized users can participate in the session.
      <h2>Transport Layer</h2>
      <strong>Transport Layer</strong> converts the received packets from the network layer into small segments. Furthermore it also ensures the segments are ready <strong>transmission with guaranteed error free and no loss of data</strong> while delivery.
      <h4>FireWall</h4>
      <strong>Firewall</strong> is a hardware-based network security system for <strong>monitoring and controlling network traffic</strong> incoming and outgoing with specified set of rules. Moreover, it is the barrier between the networks for <strong>accessing secured and trusted site</strong> across the network or internet.
      <h2>Network Layer</h2>
      The main function of <strong>Network Layer</strong> is to forward the data to the correct sender. In the first place they are responsible for <strong>assigning addresses to the devices</strong>. In addition it helps to determine the routes for sending data efficiently over the network.
      <strong>Routers</strong> is a gateway device which <strong>connects two or more networks</strong> and keep traffic under the control.
      <strong>Internet Protocol</strong> is a unique of <strong>addressing your device</strong> in a network.
      <h2>Data Link Layer</h2>
      <strong>Data Link Layer</strong> hides all details about underlying hardware and represents itself to upper layer for the communication from the physical layer. Most importantly it <strong>converts the data streams in to signals bit by bit</strong>.
      <strong>Bridges</strong> are important to <strong>connect two separate ethernet networks</strong> in to one network.
      <strong>Wireless Application Protocol</strong> is a standard technique for accessing information through <strong>mobile wireless network</strong>.
      <h2>Physical Layer</h2>
      <strong>Physical Layer</strong> is the only layer that actually deals the physical connectivity between the station. It is the important layer for <strong>sending and receiving the data</strong> through the network.
      <strong>Hub</strong> is a common connection point for <strong>connecting the LAN</strong> segments in the network.
      <strong>Modem</strong> is a device that <strong>transmit digital data</strong> over the communication lines.
      <strong>Ethernet</strong> is a common connection port for <strong>connecting computers into Local Area Network(LAN)</strong>.`, 'Networking', '15th August, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](10, 'Search Engine Optimization', 'Search Engine Optimization', `<h2>What is Search Engine Optimization(SEO) ?</h2>
      <p>Search Engine Optimization is abbreviated as <strong>SEO</strong> since it's little long to say. SEO is an effective process of optimizing your website to make it as user-friendly. The key factor of search engine optimization is to improve your website visibility in search engine results. SEO helps the <strong>search engines</strong> to understand each and every page of your website by Googlebot or Spider and deliver search results to users.</p>
      <br />
      <img src="assets/blog/pen-idea-bulb-paper.jpg" alt="Search Engine Optimization" width="1280" height="856" class="aligncenter size-full wp-image-413" />
      <br />
      <h2>Why does website need Search Engine Optimization(SEO) ?</h2>
      <p>Search Engine is one of the most important sources for driving traffic to your website. Even though there are several other sources to increase website traffic through social media, referral, ad words..etc, if search engines fail to find your website then you miss out most of the internet users. Search Queries are the <strong>keywords</strong> that user types into the search engine. These keywords provide the <strong>targeted traffic</strong> to your site which helps marketing or business success.</p>
      <br />
      <h2>How does Google Search Engine works ?</h2>
      <p>Search Engines help the users to search for the specific keywords. In return, you will get a list of documents on search window that matches with your keywords. To display the result, <strong>searches engine</strong> perform several activities as follows.</p>
      <br />
      <p><strong>Sitemap</strong></p>
      <br />
      <p>A Sitemap is a file which contains the list of your website pages link in an organized way to detect by Googlebot. It provides the valuable information to <strong>Googlebot</strong> for improving the crawling of your website.</p>
      <br />
      <p><strong>Googlebot</strong></p>
      <br />
      <p>Googlebot is a software designed to collect information from the web by Google. It is also called as a Spider or Crawling Bot. Googlebot visits the each and every website link to add their <strong>crawl list</strong> with the help of bot algorithm and sitemap. It helps to add website page them to crawl list page.</p>
      <br />
      <p><strong>Crawling</strong></p>
      <br />
      <p>Crawling is an automated process for fetching the web pages information from a website with the help of Googlebot or Spider. A great content with good keywords will help for the easy <strong>crawling</strong> and <strong>indexing</strong>.</p>
      <br />
      <p><strong>Indexing</strong></p>
      <br />
      <p>Crawlers will scout each and every page of the website to create the index for all the fetched pages and keep them in the database. One of the main processes for <strong>indexing</strong> the page is to identify the keyword, which will help search engines to find.</p>
      <br />
      <p><strong>Ranking</strong></p>
      <br />
      <p>When a user searches on the Google Search Engine, the input request will compare the given words to the indexed pages in the database. Based on the quality of content on the page, quality linking to website and the good optimization will help search engine to display the result on ranking order for the <strong>relevant keywords</strong>.</p>
      <br />
      <h2>Search Engine Optimization(SEO) Techniques</h2>
      <p><strong>White Hat SEO</strong></p>
      <br />
      <p>White Hat SEO techniques are used to improve the <strong>search engine ranking</strong> by the honest way. It follows search engine guidelines, so it is a slow process of increasing site ranking.</p>
      <br />
      <ul>
         <li>Writing high-quality content.</li>
         <li>Focusing on keywords.</li>
         <li>Adding links to the social network.</li>
         <li>Using Google-Ad words.</li>
         <li>Removing dead links and proper link redirecting.</li>
      </ul>
      <br />
      <p><strong>Black Hat SEO</strong></p>
      <br />
      <p>Black Hat SEO techniques are used to exploits weakness on the search engine to improve ranking. It doesn't follow search engine guidelines and it <strong>improves site ranking fast</strong> with short lasting growth.</p>
      <br />
      <ul>
         <li>Redirecting web surfers to unrelated link.</li>
         <li>Using hidden or invisible HTML code like 'no frame'.</li>
         <li>Cloaking(Showing one version of the page to visitors and another version to read by Googlebot).</li>
         <li>Keyword Stuffing(repeating keyword unnecessarily to increase count).</li>
         <li>Metatag Stuffing(Using meta keywords that are unrelated to content of the page).</li>
      </ul>
      <br />
      <p><strong>Grey Hat SEO</strong></p>
      <br />
      <p>Grey Hat SEO techniques are the combination of using both <strong>White Hat</strong> and <strong>Black Hat</strong> SEO techniques.</p>
      <br />
      <h2>Important Factors of Search Engine Optimization(SEO)</h2>
      <p>Some of the important factors of SEO, you need to know before starting to do it.</p>
      <br />
      <p><strong>Keywords</strong></p>
      <br />
      <p>A Keyword is a single word that matches with users search phrases on the search engine. You can find the suitable keywords for your website from <strong>Google Keyword Tool</strong>. A keyword is a root word that can be used as singular, plural, verb form in the website is known as Keyword Stemming. Using keywords in the page URL, title tag, alt tag, heading tag, meta tag improves SEO. Keywords usage on the page should not exceed <strong>2.5%</strong>.</p>
      <br />
      <p><strong>Meta Data</strong></p>
      <br />
      </p>Meta Element represents meta data information to the search engine for crawling and indexing. Meta Elements are meta keyword tag and meta description tag. <strong>Meta Keyword tag</strong> should not exceed more than 200 characters and Meta Description tag should not exceed more than 150 characters.</p>
      <br />
      <p><strong>Content</strong></p>
      <br />
      <p>An organized and distributed content on the web pages will attract the visitors. Do not use complex language and a sentence should not exceed 20 words. A <strong>unique</strong> and <strong>high-quality</strong> content will increase the site traffic and improve your page rank.</p>
      <br />
      <p><strong>Link Building</strong></p>
      <br />
      <p>Link Building is a process of obtaining external links from other website or directory. Linking with <strong>higher ranked website</strong> will drive traffic to your website.</p>
      <br />
      <p><strong>Design & Layout</strong></p>
      <br />
      <p>An eye-catching website design and layout give a good impression among the visitors. <strong>HTML elements</strong> should not be more than text content. Do not use flash, animated gifs, unnecessary javascript which affects SEO.</p>
      <br />
      <p><strong>Mobile Optimization</strong></p>
      <br />
      </p>Nowadays most of the people's are accessing the website through <strong>smartphones</strong>. Hence the website needs to adapt <strong>mobile environment</strong> also with responsive design or maintaining separate URL for mobile view.</p>
      <br />`, 'Website', '22nd August, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](11, 'SEO - Optimize Your Website', 'SEO - Optimize Your Website', `<h2>Beginner's Guide Way To Use Search Engine Optimization (SEO)</h2>
      <p>Learn how to optimize your website for search engine to get a higher <strong>page rank</strong>, before that learn - What is Search Engine Optimization(SEO) ?</p>
      <br />
      <h2>Keyword Research</h2>
      <p>Keyword Research is one of the most important and critical component for <strong>Search Engine Optimization(SEO)</strong>. Focusing on the right keyword provides a great opportunity to build your site for SEO. If you fail to select the right keyword for your site then it will affect all your search engine optimization. There are a number of ways to find the keyword. The easiest way are Google <strong>Keyword Planner</strong> and <strong>Competitor Keyword Analysis</strong>, but the difficulty is selecting the right keyword for your website.</p>
      <br />
      <p><strong>Google Keyword Planner</strong></p>
      <br />
      <p>Google Keyword Planner is a <strong>free AdWord tool</strong> provide by Google for advertising your website. It can be also used for Keyword research to build your website. First, sign in with your google AdWord account and navigate to <a href="https://adwords.google.co.in/KeywordPlanner" target="_blank">Keyword Planner</a>page. You can find the keyword list with ad group ideas based on your search.</p>
      <br />
      <p>Go to Keyword Planner page and navigate to select 'Find <strong>new keywords</strong> and get search volume data'. Select the type of keyword search you want.</p>
      <br />
      <img class="aligncenter size-full wp-image-374" src="../../../assets/blog/KeywordPlanner.jpg"style="border:2px  solid grey" alt="KeywordPlanner" width="1045" height="651" />
      <p>Example: Keyword Planner page</p>
      <br />
      <p>You will get a <strong>list of keyword</strong> based on your type of search</p>
      <br />
      <img class="aligncenter size-full wp-image-375" src="../../../assets/blog/seo.jpg" alt="SEO" style="border:2px  solid grey" width="1077" height="541" />
      <h6>Example: Keyword List</h6>
      <p><strong>Competitor Keyword Analysis</strong></p>
      <br />
      <p>If you got stuck or confused to find the right keyword for your website through Keyword Planner. Then the next step is to go with Competitor Keyword Analysis. Find out the related website to your nature of work or business and go into the website. Simply press <code>Ctrl + U</code> or right click on the page to view the page source of their website. In the view source page, you can find the <strong>competitor keyword</strong> from their <strong>Meta Keyword tag</strong>. It would help you to get some idea about keyword selection of your website.</p>
      <br />
      <img class="aligncenter size-full wp-image-376" src="../../../assets/blog/Competitor.jpg" alt="Competitor" width="880" height="240" />
      <p>Example: Stealing Competitor Keywords</p>
      <br />
      <h2>On-Page Optimization</h2>
      <p>On-Page Optimization refers to all action which is taken directly with on the website. These measures help to improve your <strong>google search engine</strong> ranking positions. It also increases overall readability of the website.</p>
      <br />
      <p><strong>Meta Implementation</strong></p>
      <br />
      <p>Meta tag helps your website to identify by the <strong>search engine</strong>. This information won't appear on the page itself and only visible on the search engine. The meta tags are</p>
      <br />
      <p><span style="text-decoration: underline;"><em>Meta Keywords</em></span> are the collection of keywords which are relevant to your page.</p>
      <br />
      <p><span style="text-decoration: underline;"><em>Meta Titles</em></span> displays title information on the search engine it can be differ from page title.</p>
      <br />
      <p><em><span style="text-decoration: underline;">Meta Descriptions</span></em> explains search engine and searchers about your page in a short description.</p>
      <br />
      <p><em><span style="text-decoration: underline;">Meta Robots</span></em> tells the search engines whether to show your page on the search result or not.</p>
      <br />
      <img src="assets/blog/Meta.jpg" alt="Meta" style="border:2px  solid grey" width="999" height="641" class="aligncenter size-full wp-image-393" />
      <h6>Example: Search Engine</h6>
      <p><strong>Unique Content</strong></p>
      <br />
      <p>Content is one of the important factors that affect your SEO growth. It is like a king to your website, if you have unique content with high quality it will increase your <strong>website growth</strong>. The search engine will always look for fresh, unique content of the site, mixing with your keywords helps to improve your page rank. <strong>Copied content</strong> or <strong>Plagiarized content</strong> bring your website ranking down easily.</p>
      <br />
      <p><strong>Keyword Density</strong></p>
      <br />
      <p>Placing your keyword on the page is very important for SEO. Keeping the keywords on the <strong>first paragraph</strong> is the best and showing keyword in bold letters helps users and search engine identify. Using too many times of keywords in the page will also be penalized for spamming. So the usage of keyword in a page should not exceed <strong>2%</strong>.</p>
      <br />
      <p><strong>Internal Link Building</strong></p>
      <br />
      <p>Internal Links are commonly used on the page to navigate through the website. <strong>Anchor texts</strong> are also the part of internal link building. It provides the good architecture your website. By Providing relevant link between pages with keyword focused helps improve your site ranking.</p>
      <br />
      <img src="assets/blog/anchor.jpg" style="border:2px  solid grey" alt="anchor" width="860" height="105" class="aligncenter size-full wp-image-397" />
      <h6>Example: Anchor Text</h6>
      <p><strong>Page Title and URL</strong></p>
      <br />
      </p>Title tag is the first section of your page on the tag. Page Title is displayed on the title bar of your browser window. It is most important to have a keyword in your title and heading tag for SEO. The <strong>title tag</strong> should not exceed more than <strong>60 characters</strong> or <strong>9 words</strong>. Also, make sure your website page has a unique page title. Keyword on URL with short length will also make an impact on the search engine optimization.</p>
      <br />
      <p><strong>Optimized Image</strong></p>
      <br />
      <p>Having optimized image on your website improve your site performance. Importantly using the keyword in the alt tag of image will helps your <strong>focused keyword</strong> ranking on the search engine.</p>
      <br />
      <p><strong>Page Load Time</strong></p>
      <br />
      <p>Page Load Time has also become one of the most important for page ranking. Website page with fast load time will give better user experience and <strong>search engine ranking</strong>. Reducing the CSS on the page and hosting under good server will reduce your load time</p>
      <br />
      <img src="assets/blog/Sitespeed.jpg" alt="Speed" width="1103" height="431" class="aligncenter size-full wp-image-394" />
      <h6>Example: Site Speed</h6>
      <p><strong>Responsive (Mobile) Design</strong></p>
      <br />
      <p>Responsive website design gives the approach the respond to user's environment screen size or platform. These <strong>responsive design</strong> can support any devices like phone, tablet, phablets, game console, etc..</p>
      <br />
      <h2>Off-Page Optimization</h2>
      <p>Off-Page Optimization refers to the activity which is taken place outside your website page. It helps you to know, how much your website knew to others on the internet. A good <strong>Off-Page Optimization</strong> helps you to improve your Google Page Ranking.</p>
      <br />
      <p><strong>Link Building</strong></p>
      <br />
      <p>Link Building is a process of obtaining links from the external website to improve <strong>link popularity</strong>. A link from higher website is worth more 100 times more than a link from the lower websites. Some important ways of doing link building are Directory Submission, Guest Blogging, Article Submission, Link Exchange and Forum Posting.</p>
      <br />
      <p><strong>Social Media</strong></p>
      <br />
      <p>Social Media sharing through Facebook, Twitter, Instagram, Pinterest, Youtube promotion, etc. which helps to drive traffic towards your website. Gaining mentions from <strong>social media</strong> will boost your website page ranking.</p>
      <br />
      <img src="assets/blog/Social.jpg" alt="Social" width="1005" height="815" class="aligncenter size-full wp-image-395" />
      <h6>Example: Social Sharing</h6>
      <p><strong>Social Bookmarking</strong></p>
      <br />
      <p>Social Bookmarking is one of the powerful ways to promote your website. Popular <strong>bookmarking sites</strong> are reddit.com, stumbleupon.com, digg.com, delicious.com, etc. By promoting your content from the website to the bookmarking sites helps to increase your website traffic.</p>
      <br />
      <h2>Important Tools for SEO</h2>
      <p>Some important tools which help you to do better <strong>SEO</strong> are</p>
      <br />
      <ul>
         <li>Google Search Console</li>
         <li>Google Analytics</li>
      </ul>`, 'Website', '28th August, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](12, 'Google Analytics', 'Google Analytics', `<h2>How to use Google Analytics to know your site traffic ?</h2>
      <p><strong>Google Analytics</strong> is used to analyse your website traffic and provide the website statistical service. It will track the visitor's activity and duration of time sending in your website. It also provides additional information on your website visitors with Geographical analyses. In order to use it, first sign up Google Analytics with your google account.</p>
      <br />
      <p><strong>Dashboard</strong></p>
      <br />
      <p>In Dashboard you can the <strong>collection of reports and metrics</strong> that gives an overview of your website. You can customize the dashboard based upon your requirement metrics.</p>
      <br />
      <img src="assets/blog/Google-Analytics2.jpg" alt="Analytics" style="border:2px  solid grey" width="1321" height="561" class="aligncenter size-full wp-image-326" />
      <p>Example: Dashboard</p>
      <br />
      <p><strong>Real Time</strong></p>
      <br />
      <p>Real Time report helps you to analyse the <strong>live activity</strong> as it happens on your website. It continuously gets updated without missing a single second action on the site for past 30 minutes. It provides valuable information like the number of people's presently accessing your website. You can also track the people's interaction with pages and display the geographical location of users.</p>
      <br />
      <p><strong>Audience</strong></p>
      <br />
      <p>Audience report provides an in-depth knowledge of <strong>behavior and traffic of your website</strong>. It helps you to find out the number of users visits your site with the page. The key element of audience report is to find out the unique and returning visitor of the website. You can also get users accessing information like location, browser and network.</p>
      <br />
      <img src="assets/blog/Audience.jpg" alt="audience" width="1319" height="549" style="border:2px  solid grey" class="aligncenter size-full wp-image-334" />
      <h6>Example: Audience</h6>
      <p><strong>Acquisition</strong></p>
      <br />
      <p>Acquisition reports tell you, visitors origin source from organic search, paid search, direct, referral and social network. A key feature in the acquisition report is <strong>Bounce Rate</strong>, which helps to identify your website visitors who visit your landing page and then leave the site.</p>
      <br />
      <p><strong>Behavior</strong></p>
      <br />
      <p>Behavior Flow helps you to find the flow of your <strong>website traffic and tracing</strong> the page visited by the user in a flow diagram. Behavior report helps you to find the most popular page on your website(Landing page) and exit page. You can analyse the loading time of your webpage which will help your website speed performance.</p>
      <br />
      <p><strong>Conversions</strong></p>
      <br />
      <p>You need to create the goals in <strong>Google Analytics</strong> before using conversions report. Goals are used to measure how well your site performs to reach the target you set for business purpose. Destination URL, duration of visitors, page visit, event and more can be your goal for the website.</p>
      <br />`, 'Website', '4th September, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](13, 'Analytics For Website', 'Google Analytics For Your Website', `<h2>What is Google Analytics ?</h2>
      <p><strong>Google Analytics</strong> is a powerful tool that can provide the detailed statistical information of website visitor's, who visit your website with the custom date range. Google Analytic provides valuable insights, like</p>
      <br />
      <ul>
         <li>how many people are coming to your website ?</li>
         <li>how people's are discovering you website ?</li>
         <li>how long people are staying on your website ?</li>
         <li>how many pages viewed by the visitors ?</li>
         <li>how was social promotion driving traffic to your website ?</li>
      </ul>
      <h2>Setup Google Analytics for your Website</h2>
      <p>1. First step, go to <a href="http://www.google.co.in/analytics/" target="_blank">Google Analytic</a> and log in with your <strong>gmail account</strong>.</p>
      <br />
      <img src="assets/blog/Google-Anal.jpg" alt="Google Analytics" width="841" height="541"style="border:2px  solid grey" class="aligncenter size-full wp-image-269" />
      <p>Example: Google Analytic</p>
      <br />
      <p>2. Sign Up, <strong>Google Analytic</strong> account with your logged Gmail account.</p>
      <br />
      <img src="assets/blog/Google-Analytics.jpg" alt="Analytics" width="1267" height="457" style="border:2px  solid grey" class="aligncenter size-full wp-image-270" />
      <p>Example: Google Analtyics Sign Up page</p>
      <br />
      <p>3. Fill the signup details, in the bottom of the page you can see <strong>Get Tracking Id</strong>, click to get your tracking code.</p>
      <br />
      <p>4. After successful signup, you will redirect to tracking code page.</p>
      <br />
      <img src="assets/blog/Google-Tracking.jpg" alt="Tracking" width="1143" height="451" style="border:2px  solid grey" class="aligncenter size-full wp-image-271" />
      <p>Example: Tracking Code page</p>
      <br />
      <p>5. Copy the <strong>analytics tracking code</strong> and paste it into your header or footer page of your website.</p>
      <br />
      <img src="assets/blog/Google-WordPress.jpg" alt="WordPress" width="911" height="375" style="border:2px  solid grey" class="aligncenter size-full wp-image-272" />
      <p>Example: WordPress user's go to Appearance > Editor > Search for footer.php, paste tracking code java script in it</p>
      <br />
      <p>6. Successfully. integrated your website with G<strong>oogle Analytics</strong>. Enjoy!</p>
      <br />`, 'Website', '10th September, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](14, 'Search Console', 'Search Console For SEO', `<h2>How to use Google Search Console(Webmaster Tool) for SEO ?</h2>
      <p><strong>Google Search Console</strong> is one of the most useful and essential tool for strong SEO. It provides the information of your keyword ranking and website traffic based on content, keywords. It helps to identify the potential problem and improve your site preference. In order to use it, you need to link the website to Google Search Console.</p>
      <br />
      <p><strong>Structured Data</strong></p>
      <br />
      <p>Structured Data is a text based organization of the data in your website page. It will show your <strong>website structural information</strong>, that how Google was able to found each type structural data on your website page. You will also get notified if any errors are being found in the page that prevents the data to being displayed on the google search.</p>
      <br />
      <img class="aligncenter size-full wp-image-289" src="../../../assets/blog/Structured-Data.jpg" style="border:2px  solid grey" alt="Structured Data" width="1287" height="465" />
      <p>Example: Structured Data</p>
      <br />
      <p><strong>Rich Cards</strong></p>
      <br />
      <p>Rich Cards are designed to provide a better <strong>visual experience</strong> for google search user. It helps you to identify rich card snippets error on your website while displaying on Google Search.</p>
      <br />
      <strong>HTML Improvements</strong>
      <br />
      <p>HTML Improvements helps you find the <strong>potential problem</strong> in your website page like missing and duplicating title, meta description..etc.</p>
      <br />
      <p><strong>Search Analytics</strong></p>
      <br />
      <p>Search Analytics helps to track your website search traffic changes over time and list out the search queries to show your website. Metrics like clicks, impressions, CTR and positions of your website can be analyzed to show your site appearance in Google Search results.</p>
      <br />
      <img class="aligncenter size-full wp-image-292" src="../../../assets/blog/Search.jpg" style="border:2px  solid grey" alt="Search" width="1117" height="203" />
      <h6>Example: Search Analytics</h6>
      <p><strong>Links to your Site</strong></p>
      <br />
      <p>Links to your site report displays the list of the site links pointing to your website during <strong>google crawling</strong> and <strong>indexing process</strong>.</p>
      <br />
      <p><strong>Internal Links</strong></p>
      <br />
      <p>Internal Links helps you find the list of links that points to your internal page of the website.<p>
      <br />
      <p><strong>International Targeting</strong></p>
      <br />
      <p><em><span style="text-decoration: underline;">Language Section</span></em> - helps you to configure multi-language pages of the website and ensure the website presence based on language code used <em>hreflang</em> tags.</p>
      <br />
      <p><em><span style="text-decoration: underline;">Country Section</span></em> - helps you to target specific country instead of targeting global.</p>
      <br />
      <p><strong>Index Status</strong></p>
      <br />
      <p>In order to improve your website ranking in the google search make sure your site is <strong>Google Index</strong>. It also gives you an idea, how many URLs of your website added and blocked to Google's index.</p>
      <br />
      <p><strong>Content Keywords</strong></p>
      <br />
      <p>Content Keywords gives you list of keywords on your website, founded on Google indexing. Google identifies these relevant <strong>keywords</strong> are most important to your website.</p>
      <br />
      <p><strong>Crawl Errors</strong></p>
      <br />
      <p>Crawl Errors report providing the list error found on the website that stops the <strong>Googlebot</strong> from accessing your entire site.</p>
      <br />
      <p><strong>Crawl Stats</strong></p>
      <br />
      <p>Crawl Stats graph provides the detail information of <strong>Googlebot's activity</strong> on your website. It also provides the crawl rate per day on your website, increasing the size of your site increase your crawl rate.</p>
      <br />
      <p><strong>Sitemaps</strong></p>
      <br />
      <p>A Sitemap is an XML file where you can find the list of URLs from your website. Sitemap will provide <strong>metadata information</strong> from your web pages to Googlebot for crawling the site.</p>
      <br />
      <p><strong>Security Issues</strong></p>
      <br />
      <p>You can find <strong>Security Issues</strong> that may affect your website, including website hacks, malware and spam.</p>
      <br />`, 'Website', '14th September, 2017'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](15, 'SCSS Notes', 'SCSS Important Notes', `<h2>What is SCSS ?</h2>
      <p><strong>SCSS</strong> stands for Sassy CSS. SCSS is a CSS preprocessor that gives you to access lot of features which are not available in normal CSS.</p>
      <br />
      <h2>Variables</h2>
      <p>$ sign is needed to added when you create a vairable name and set them like a normal CSS property.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>$color-red: #4c7396;</p>
        <p>.row {</p>
        <p>&nbsp;color: $color-red;</p>
        <p>}</p>
      </blockquote></div>
      </div>
      <h2>Nesting</h2>
      <p>Nesting allows you to write cleaner and concise css code.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>.row {</p>
        <p>&nbsp;color: $color-red;</p>
        <p>&nbsp;.col {</p>
        <p>&nbsp;&nbsp;&nbsp;border: 1px solid black;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
      </blockquote></div>
      </div>
      <h2>Inheritance</h2>
      <p>Inheritance allows you to inherit the properties of another class.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>.header {</p>
        <p>&nbsp;color: $color-red;</p>
        <p>}</p>
        <p>.sub-header {</p>
          <p>&nbsp;@extend .header;</p>
          <p>&nbsp;font-size: 10px;</p>
        <p>}</p>
      </blockquote></div>
      </div>
      <h2>Operators</h2>
      <p>SCSS offers you different kind of operators in your css.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>@mixin top-margin($margin) {</p>
        <p>&nbsp;margin-top: 20px + $margin;</p>
        <p>}</p>
        <p>.container {</p>
          <p>&nbsp;@include top-margin(100px - 80px);</p>
        <p>}</p>
      </blockquote></div>
      </div>
      <h2>Loops</h2>
      <p>SCSS offers you loops in our css.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>@for $x from 1 through 20 {</p>
        <p>&nbsp;.font-size-#{$x} {</p>
        <p>&nbsp;&nbsp;font-size: 0px + $x;</p>
        <p>&nbsp;}</p>
        <p>}</p>
      </blockquote></div>
      </div>
      <h2>Conditions</h2>
      <p>SCSS offers you to use if/else statements.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>p {</p>
        <p>&nbsp;@if $bg == red {</p>
        <p>&nbsp;&nbsp; color: black;</p>
        <p>&nbsp;}&nbsp;@else if $bg == green {</p>
        <p>&nbsp;&nbsp; color: yellow;</p>
        <p>&nbsp;}&nbsp;@else {</p>
        <p>&nbsp;&nbsp; color: blue;</p>
        <p>}</p>
      </blockquote></div>
      </div>`, 'Coding', '25th December, 2020'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](16, 'List VS Tuple', 'Difference between List and Tuple', `<div class="container">
        <div class="table">
          <div class="table-header">
            <div class="header-item">List</div>
            <div class="header-item">Tuple</div>
          </div>
          <div class="table-content">
            <div class="table-row">
              <div class="table-data">It is dynamic</div>
              <div class="table-data">It is static</div>
            </div>
            <div class="table-row">
              <div class="table-data">List are mutable, it can be converted into another data type and can store any data element in it</div>
              <div class="table-data">It cannot be changed or replaced since it is immutable.</div>
            </div>
            <div class="table-row">
              <div class="table-data">It is defined under square brackets[]</div>
              <div class="table-data">It is defined under parenthesis()</div>
            </div>
            <div class="table-row">
              <div class="table-data">It is slow</div>
              <div class="table-data">It is fast</div>
            </div>
            <div class="table-row">
              <div class="table-data">It has several built-in methods</div>
              <div class="table-data">It does not have several built-in methods</div>
            </div>
            <div class="table-row">
              <div class="table-data">It consume high memory</div>
              <div class="table-data">It consume less memory</div>
            </div>
          </div>
        </div>
      </div>`, 'Coding', '28th December, 2020'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](17, 'Cached Data', 'How cached data work ?', `<p>Cached data to be stored on system for re-access, there needs to be memory. Web page or App contains images, videos, and even text take some time to load. When this data is cached, we can reopen the app or revisit the page then it won’t take anywhere near as much time. The cache is very high up on the hierarchy of computer memory.</p>
      <br />
      <h2>CPU</h2>
      <p>CPU</p>
      <ul>
         <li>Extremely Fast</li>
         <li>Extremely Expensive</li>
         <li>Tiny Capacity</li>
      </ul>
      <br />
      <h2>CPU Cache</h2>
      <p>L1, L2, L3</p>
      <ul>
         <li>Very Fast</li>
         <li>Expensive</li>
         <li>Small Capacity</li>
      </ul>
      <br />
      <h2>Physical Memory</h2>
      <p>Random Access Memory(RAM)</p>
      <ul>
         <li>Faster</li>
         <li>Reasonable Price</li>
         <li>Average Capacity</li>
      </ul>
      <br />
      <h2>Solid State Memory</h2>
      <p>SSD, Flash Drives</p>
      <ul>
         <li>Average Speed</li>
         <li>Reasonable Price</li>
         <li>Average Capacity</li>
      </ul>
      <br />
      <h2>Virtual Memory</h2>
      <p>File-based, Hard Drives</p>
      <ul>
         <li>Slow</li>
         <li>Inexpensive</li>
         <li>Large Capacity</li>
      </ul>`, 'Website', '8th January, 2021'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](18, 'Private VS Public IP Address', 'Difference between IP Address', `<div class="container">
        <div class="table">
          <div class="table-header">
            <div class="header-item">Private IP Address</div>
            <div class="header-item">Public IP Address</div>
          </div>
          <div class="table-content">
            <div class="table-row">
              <div class="table-data">Private IP Address communicate within the network and scope is local.</div>
              <div class="table-data">Public IP Address communicate outside the network and scope is global.</div>
            </div>
            <div class="table-row">
              <div class="table-data">It works only in LAN and used to load network operating system..</div>
              <div class="table-data">It is controlled by ISP and used to get internet service.</div>
            </div>
            <div class="table-row">
              <div class="table-data">Private IP can be known by entering "ipconfig" on command prompt.</div>
              <div class="table-data">Public IP can be known by searching "what is my ip" on google.</div>
            </div>
            <div class="table-row">
              <div class="table-data">Range: 10.0.0.0 – 10.255.255.255, 172.16.0.0 – 172.31.255.255, 192.168.0.0 – 192.168.255.255</div>
              <div class="table-data">Besides private IP addresses, rest are public.</div>
            </div>
          </div>
        </div>
      </div>`, 'Networking', '15th January, 2021'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](19, 'SQL Tips', 'SQL Important Tips', `<h2>Bitmask Logic</h2>
      <p>Bitmask Logic are used in complex logic.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>DECLARE</p>
        <p>&nbsp;@ReqElementBitmask int = 3</p>
        <p>DECLARE</p>
        <p>&nbsp;@Element1Required [int] = @ReqElementBitmask & 1,</p>
        <p>&nbsp;@Element2Required [int] = @ReqElementBitmask & 2</p>
        <p>select @Element1Required as Data1,@Element2Required as Data2 </p>
      </blockquote></div>
      </div>
      <h2>Column Finder</h2>
      <p>Column Finder is used to find column any where the database in table or view.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>select * from INFORMATION_SCHEMA.COLUMNS</p>
        <p>where COLUMN_NAME like '%invoice%'</p>
      </blockquote></div>
      </div>
      <h2>StoreProcedure Object Finder</h2>
      <p>StoreProcedure Object Finder is used to find object in the store procedure.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>SELECT Name FROM sys.procedures</p>
        <p>WHERE OBJECT_DEFINITION(OBJECT_ID) LIKE '%invoice%'</p>
      </blockquote></div>
      </div>
      <h2>SQL Help Text</h2>
      <p>SQL Help Text is used to view object or store procedure.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>EXEC sp_helptext N'sp_data_retrieve';</p>
      </blockquote></div>
      </div>
      <h2>Owner/Schema Name</h2>
      <p>Always prefix object names (i.e. table name, stored procedure name, etc.) with its owner/schema name so it would easier to organize. SQL Server will not search for the table outside of its owner/schema if the owner/schema name is provided</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>job.joblog;</p>
      </blockquote></div>
      </div>
      <h2>Column Selection/h2>
      <p>Do not use the *  operator in your SELECT statements. Instead, use column names. Providing column names avoids this search-and-replace, and enhances performance.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>select id, name from job.joblog;</p>
      </blockquote></div>
      </div>
      <h2>NOT EXISTS</h2>
      <p>Do not use NOT IN when comparing with nullable columns. Use NOT EXISTS instead. Using NOT EXISTS will not do the comparison with nulls.</p>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>select id, name from job.joblog jl</p>
        <p>where not exists (select *</p>
        <p>from job.scedule s where jl.id = s.id)</p>
      </blockquote></div>
      </div>
      <h2>SET NOCOUNT ON</h2>
      <p>Using SET NOCOUNT ON will improve performance because it will not count the number of rows affected.</p>
      </div>
      <h2>Stored Procedure Names</h2>
      <p>Do not begin your stored procedure’s name with sp_. Providing a name withoutSP_  to a stored procedure avoids this unnecessary check in the system/master database in SQL Server.</p>
      </div>
      <h2>Avoid Using GROUP BY, ORDER BY, and DISTINCT</h2>
      <p>When using GROUP BY, ORDER BY, or DISTINCT, SQL Server engine creates a work table and puts the data on the work table. After that, it organizes this data in work table as requested by the query, and then it returns the final result.</p>
      </div>`, 'Coding', '22nd January, 2021'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](20, 'Angular Command', 'Angular Important Command', `<h5>Install specific version angular globally</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>npm install -g @angular/cli@11.1</p>
      </blockquote></div>
      </div>
      <h5>Install latest version angular globally</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>npm install -g @angular/cli@latest</p>
      </blockquote></div>
      </div>
      <h5>Uninstall latest version angular globally</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>npm uninstall -g angular-cli @angular/cli</p>
      </blockquote></div>
      </div>
      <h5>Update angular version in the project</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>ng update @angular/cli @angular/core</p>
      </blockquote></div>
      </div>
      <h5>Install package to the angular project</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>npm install --save bootstrap@3</p>
      </blockquote></div>
      </div>
      <h5>Generate component</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>n g c &lt;component-name&gt;</p>
      </blockquote></div>
      </div>
      <h5>Generate component with out spec file</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>n g c &lt;component-name&gt; --skipTests=true</p>
      </blockquote></div>
      </div>
      <h5>Generate component with flat file without folder</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>n g m &lt;model-name&gt; --flat=true</p>
      </blockquote></div>
      </div>
      <h5>Run angular locally</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>ng serve</p>
      </blockquote></div>
      </div>
      <h5>Change port to run on local</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>ng serve --port 4401</p>
      </blockquote></div>
      </div>
      <h5>Build angular</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>ng build</p>
      </blockquote></div>
      </div>
      <h5>Build angular for production</h5>
      <div class="row">
      <div class="col-lg-12 blog-code"> <blockquote class="blockquote blockquote-custom bg-white p-4 shadow rounded">
        <p>ng build --prod</p>
      </blockquote></div>
      </div>`, 'Coding', '25th January, 2021'),
            new _model_blog_model__WEBPACK_IMPORTED_MODULE_1__["Blog"](21, 'Cache VS Cookie', 'Difference between Cache and Cookie', `<h5>Both Cache and Cookies were fabricated to increase website performance and to create it additional accessible through storing some data on the client-side machine</h5>
      <div class="container">
        <div class="table">
          <div class="table-header">
            <div class="header-item">Cache</div>
            <div class="header-item">Cookie</div>
          </div>
          <div class="table-content">
            <div class="table-row">
              <div class="table-data">Caches are used to store the website content for the long run purpose or to decrease the loading time.</div>
              <div class="table-data">Cookies are used to store user choices such as browsing session to trace the user preferences.</div>
            </div>
            <div class="table-row">
              <div class="table-data">Caches contents are stored in client(browser) only.</div>
              <div class="table-data">Cookies contents are stored in both server and client(browser).</div>
            </div>
            <div class="table-row">
              <div class="table-data">It consumes large space in terms of capacity.</div>
              <div class="table-data">It consumes less space in terms of capacity.</div>
            </div>
            <div class="table-row">
              <div class="table-data">Cache does not send the response with requests.</div>
              <div class="table-data">Cookie sends the response with requests.</div>
            </div>
            <div class="table-row">
              <div class="table-data">It expires manually.</div>
              <div class="table-data">It expires automatically.</div>
            </div>
            <div class="table-row">
              <div class="table-data">Types of cache are: Browser cache and proxy cache.</div>
              <div class="table-data">Types of cookie are: Transient and persistent cookie.</div>
            </div>
            <div class="table-row">
              <div class="table-data">Cache store the contents like html pages, images, Javascript, CSS etc.</div>
              <div class="table-data">Cookie store the contents like browsing sessions and temporary tracking data.</div>
            </div>
          </div>
        </div>
      </div>`, 'Website', '31th January, 2021'),
        ];
    }
    getBlogs() {
        return this.blogs.sort((a, b) => b.id - a.id);
    }
    getBlog(id) {
        return this.getBlogs().filter(a => a.id == id);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "nVru":
/*!*****************************************************************!*\
  !*** ./src/app/auth/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    redirectToHome() {
        this.router.navigate(['web']);
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 260, vars: 0, consts: [[1, "main-wrapper"], [1, "container", "adjust"], [1, "row"], [1, "col-sm-12", "col-md-12", "mt-5", "mb-5"], ["width", "100%", "height", "100%", "viewBox", "0 0 636 324", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "OBJECTS"], ["id", "Group"], ["id", "Vector", "d", "M101.3 255.2C101.3 255.2 111.1 272.6 181.8 280.5C252.5 288.4 288.2 314.9 333.1 322.8C378 330.7 433.6 278.5 481.8 286.5C530 294.4 588.2 264.2 592.8 255.2H101.3Z", "fill", "#2F1829"], ["id", "Vector_2", "d", "M611.9 251.7H601.4L140.8 251.8C140.8 251.8 136.1 248.1 128.9 241.8C125.8 239.1 122.2 235.9 118.3 232.3C116.9 231 115.4 229.6 113.9 228.2C100.2 215.3 83.6 198.2 70.1 180.1C55.9 161 45.1 140.6 44.8 122.6C44.8 122.2 44.8 121.8 44.8 121.4C45 104 48.4 85.1 56.9 67.7C61.9 57.5 68.5 47.8 77.3 39C100.1 16.2 137.1 0.300011 194.5 0.800011C261.4 1.30001 330.8 26.3 393.5 60.8C406.6 68 419.4 75.7 431.9 83.6C441.1 89.5 450.1 95.5 458.8 101.6C483.1 118.6 505.6 136.4 525.5 153.8C570.6 193.1 602.3 230.4 611.9 251.7Z", "fill", "url(#paint0_linear)"], ["id", "Vector_3", "opacity", "0.45", "d", "M611.9 251.7H601.4L140.8 251.8C140.8 251.8 136.1 248.1 128.9 241.8C125.8 239.1 122.2 235.9 118.3 232.3C116.9 231 115.4 229.6 113.9 228.2C100.2 215.3 83.6 198.2 70.1 180.1C55.9 161 45.1 140.6 44.8 122.6C50.5 119.6 63.9 113.5 75 116.3C89.5 119.9 92.6 137.2 92.6 137.2C92.6 137.2 103 128.8 113.9 132.8C124.8 136.8 126.5 148.4 126.5 148.4C126.5 148.4 139.4 141.8 150.9 144.6C162.5 147.4 171.8 158.6 159.4 165.9C147.1 173.1 133.3 167.5 132.9 167.4C133.1 167.6 137.9 174.2 129.1 182.2C120.1 190.4 154.6 197.5 154.6 197.5C154.6 197.5 155.9 175.1 179 177.6C202.1 180.1 220.8 192.6 220.8 192.6C220.8 192.6 222 158.3 240.5 152C259 145.7 268.5 165.9 268.5 165.9C268.5 165.9 309.5 139.4 323.4 164.1C337.3 188.8 337.9 193.5 337.9 193.5C337.9 193.5 349.8 128.5 387 131.5C424.2 134.5 431.1 160.3 430.5 162.9C429.9 165.5 441.2 146.2 452.4 156.7C463.6 167.2 470.1 181.8 470.1 181.8L529 174.9C529 174.9 523 163.3 525.4 153.8C570.6 193.1 602.3 230.4 611.9 251.7Z", "fill", "url(#paint1_linear)"], ["id", "Vector_4", "d", "M431.9 83.6H257.8C279.6 83.6 283.9 75.7 296.8 71.4C297.4 71.2 298 71 298.6 70.9C310.7 67.8 320.6 74.7 328.3 74.4C336.4 74.1 345.3 65.5 354.6 62.5C357.7 61.5 361 61.8 364.3 62.6C370.8 64.1 377.6 67.4 384.5 66.1C390.5 65 391 62.5 393.4 60.8C406.6 68 419.5 75.6 431.9 83.6Z", "fill", "url(#paint2_linear)"], ["id", "Vector_5", "d", "M206.5 67.7H56.9C61.8 57.7 68.3 48.1 76.9 39.4C77 39.3 77.2 39.1 77.3 39C80.8 38.3 84.6 37.8 88.7 37.6C112.4 36.6 117.4 54.5 117.4 54.5C117.4 54.5 123.6 46.2 134.8 50.2C146 54.2 142.1 59.1 151 61.8C152.2 62.1 153.4 62.2 154.7 62.1C163.2 61.4 173.9 52.1 183.4 55.5C194.4 59.4 187.3 67.7 206.5 67.7Z", "fill", "url(#paint3_linear)"], ["id", "Vector_6", "d", "M631.8 258.5H75.5C73.6 258.5 72.1 257 72.1 255.1C72.1 253.2 73.6 251.7 75.5 251.7H631.8C633.7 251.7 635.2 253.2 635.2 255.1C635.2 257 633.7 258.5 631.8 258.5Z", "fill", "#2F1829"], ["id", "Vector_7", "opacity", "0.25", "d", "M364.4 62.5C354.5 65 343.3 75.8 336 77.4C326.9 79.4 316.3 74.8 306 72.2C302.9 71.4 300.5 71 298.6 70.8C310.7 67.7 320.6 74.6 328.3 74.3C336.4 74 345.3 65.4 354.6 62.4C357.8 61.4 361 61.7 364.4 62.5Z", "fill", "white"], ["id", "Vector_8", "opacity", "0.25", "d", "M154.7 62.1C145.8 66.8 141.6 56.2 133.9 52.7C125 48.7 118.7 61.2 116.1 59C113.5 56.9 112.3 47.6 102.2 42.8C96.5 40.1 85.4 39.5 77 39.5C77.1 39.4 77.3 39.2 77.4 39.1C80.9 38.4 84.7 37.9 88.8 37.7C112.5 36.7 117.5 54.6 117.5 54.6C117.5 54.6 123.7 46.3 134.9 50.3C146.1 54.3 142.2 59.2 151.1 61.9C152.2 62.1 153.5 62.2 154.7 62.1Z", "fill", "white"], ["id", "Vector_9", "d", "M394.9 40.3C394.9 40.3 457.4 96.1 482.1 88.5C507 80.9 351.2 7.20001 394.9 40.3Z", "fill", "url(#paint4_linear)"], ["id", "Vector_10", "d", "M35 97C35 97 13.7 134.4 50.9 173.8C59.5 182.9 60.5 199.9 43.3 200.8C26.1 201.7 -0.599994 159.8 0.300006 126.1C1.30001 92.4 40.8 77.1 35 97Z", "fill", "url(#paint5_linear)"], ["id", "Vector_11", "d", "M461 295.7C461 295.7 425 303.6 415.8 315.9C411.3 321.9 429.2 321 444.5 314.4C460.5 307.5 473.6 294.9 461 295.7Z", "fill", "#2F1829"], ["id", "Vector_12", "d", "M200.2 293.4C200.2 293.4 214.2 293.1 226.5 297.9C238.8 302.7 241.5 317.4 229.2 319.2C217 321 189.1 304.7 190.7 298.1C191.9 293.1 200.2 293.4 200.2 293.4Z", "fill", "#2F1829"], ["id", "Vector_13", "d", "M136.3 213.7L128.4 241.1C125.3 238.4 121.7 235.2 117.8 231.6L116.1 228.4C116.1 228.4 119.1 193.2 109.2 179.1C118.7 185.7 123.3 212.4 123.3 212.4L121.8 214.4H123.3C123.3 214.4 125.7 218.9 126.6 225.5C132.7 193.9 126.8 178.6 126.6 178.1C126.8 178.4 131.6 184.2 134.4 193.8C137.3 203.6 136.2 209.7 136.2 209.7L133.8 213.6H136.3V213.7Z", "fill", "black"], ["id", "Group_2"], ["id", "Group_3"], ["id", "Vector_14", "d", "M376.1 240.6C376.1 240.6 378.7 238.3 380.6 235.8C380.9 235.4 381.3 234.9 381.5 234.5L382.7 235.9L382.3 233.7C382.3 233.7 390.4 230.9 393.3 223.1C391.5 231.6 388.1 238 384.1 240.9C382.3 242.2 380.5 242.8 378.6 242.7C372.3 242.5 376.1 240.6 376.1 240.6Z", "fill", "#F3475C"], ["id", "Group_4", "opacity", "0.25"], ["id", "Vector_15", "opacity", "0.25", "d", "M393.3 223.1C392.6 225.3 391.8 227.5 390.8 229.6C389.8 231.7 388.7 233.7 387.4 235.6C386.1 237.5 384.5 239.3 382.6 240.6C380.7 242 378.3 242.7 376 242.6C375.9 242.6 375.8 242.5 375.8 242.4C375.8 242.3 375.9 242.2 376 242.2C378.3 242.4 380.5 241.7 382.4 240.4C384.3 239.1 385.9 237.4 387.2 235.5C388.6 233.6 389.7 231.6 390.7 229.5C391.7 227.5 392.5 225.3 393.3 223.1Z", "fill", "white"], ["id", "Vector_16", "opacity", "0.25", "d", "M376.1 240.6C376.1 240.6 378.7 238.3 380.6 235.8C381.4 238.2 383.1 240 384.1 240.9C382.3 242.2 380.5 242.8 378.6 242.7C372.3 242.5 376.1 240.6 376.1 240.6Z", "fill", "black"], ["id", "Vector_17", "d", "M313.5 225.2C313.5 225.2 294.9 207.7 297.9 184.4C299.8 195.2 307.7 208.1 307.7 208.1L306.7 211L310.2 210.3C310.2 210.3 314.6 183.7 304.7 170.8C318.1 184.6 317.9 205.1 317.9 205.1L315.4 208.9L317.9 210C317.9 210 315 220 323.7 216.1C332.4 212.3 337.9 179.2 330 170.8C339.4 178.9 337.9 206.8 337.9 207.7C337.9 208.6 333.8 212.4 333.8 212.4L336.9 214.7C336.9 214.7 335 233.6 313.5 225.2Z", "fill", "black"], ["id", "Vector_18", "d", "M398.8 250C398.8 250 392.3 243.9 393.4 235.8C394.1 239.6 396.8 244 396.8 244L396.5 245L397.7 244.8C397.7 244.8 399.2 235.5 395.8 231.1C400.4 235.9 400.4 243 400.4 243L399.5 244.3L400.4 244.7C400.4 244.7 399.4 248.2 402.4 246.8C405.4 245.5 407.3 234 404.6 231.1C407.9 233.9 407.3 243.6 407.3 243.9C407.3 244.2 405.9 245.5 405.9 245.5L407 246.3C406.9 246.4 406.3 253 398.8 250Z", "fill", "black"], ["id", "Group_5"], ["id", "Vector_19", "d", "M374 241.1L368.7 241.5C372.5 238.1 371.9 234.8 371.4 233.3C371.2 232.8 371 232.4 371 232.4L373.5 232L372.1 230.1C372.1 230.1 376.6 224.9 378.3 211.1C383.6 220.4 381.5 228.8 378.7 234.3C376.6 238.6 374 241.1 374 241.1Z", "fill", "#FFCA51"], ["id", "Group_6", "opacity", "0.25"], ["id", "Vector_20", "opacity", "0.25", "d", "M378.3 211.1C378.9 213.7 379.2 216.3 379.3 218.9C379.4 221.5 379.4 224.2 379 226.8C378.6 229.4 378 232 377 234.4C376 236.8 374.5 239.1 372.7 241.1C372.6 241.2 372.5 241.2 372.4 241.1C372.3 241 372.3 240.9 372.4 240.8C374.2 238.9 375.6 236.7 376.7 234.3C377.7 231.9 378.4 229.3 378.8 226.8C379.2 224.2 379.3 221.6 379.2 219C379.1 216.3 378.9 213.7 378.3 211.1Z", "fill", "white"], ["id", "Vector_21", "opacity", "0.25", "d", "M374 241.1L368.7 241.5C372.5 238.1 371.9 234.8 371.4 233.3C374.2 235 377 234.8 378.7 234.3C376.6 238.6 374 241.1 374 241.1Z", "fill", "black"], ["id", "Vector_22", "d", "M408.3 251.1H323L336.7 240C336.7 240 354.9 230.6 362.5 232.6C370.1 234.5 368.9 240.9 368.9 240.9C368.9 240.9 369.4 240.4 370.1 239.8C371.8 238.5 375 236.7 378.2 238.6C382.8 241.4 382.1 245 382.1 245.2C382.2 245.1 385 242.4 387.3 243.2C389.6 244.1 390.5 246.6 390.5 246.6C390.5 246.6 393.5 242.5 396 244C398.5 245.5 400 248.6 400 248.6C400 248.6 404 244.6 408.3 251.1Z", "fill", "#982245"], ["id", "Vector_23", "opacity", "0.25", "d", "M391.9 251.1H323.1L336.8 240C336.8 240 355 230.6 362.6 232.6C370.2 234.5 369 240.9 369 240.9C369 240.9 369.5 240.4 370.2 239.8C370.4 241.2 370.4 242.6 370.2 244C370.2 244 374.1 242.5 376.6 244.6C379.1 246.7 378.4 248.6 378.4 248.6C378.4 248.6 381.8 246.6 385.7 248.6C386.8 249.3 389.3 250.2 391.9 251.1Z", "fill", "black"], ["id", "Group_7"], ["id", "Vector_24", "d", "M237.3 191.1V97.5H201.8V97.8L159 166.6L140.3 196.7L142.4 218.4H201.8V251H237.3V218.4H253V191H237.3V191.1ZM201.8 191.1H174.2L199.6 147.4L201.8 143.8V191.1Z", "fill", "url(#paint6_linear)"], ["id", "Vector_26", "d", "M487.5 191.1V97.5H452V97.8L390.5 196.7L392.6 218.4H452V251H487.5V218.4H503.1V191H487.5V191.1ZM452 191.1H424.4L449.8 147.4L452 143.8V191.1V191.1Z", "fill", "url(#paint8_linear)"], ["id", "Vector_27", "opacity", "0.25", "d", "M230.7 97.5C225.9 103.6 209.6 101.4 206 101.8C201.8 102.2 172.9 153.1 169 159.6C166.4 163.8 161.9 165.8 159.1 166.7L201.9 97.9V97.6H230.7V97.5Z", "fill", "white"], ["id", "Vector_28", "opacity", "0.25", "d", "M487.5 97.5V168.3C478.4 160.7 483.4 104.9 482 103.1C480.5 101.1 461.5 102.4 458 101.3C455.7 100.6 453.8 98.6 452.8 97.4H487.5V97.5Z", "fill", "white"], ["id", "Vector_29", "opacity", "0.25", "d", "M329.1 232.4C300.5 233.7 303.8 192.4 303.8 192.4C304 202.9 305.4 210.6 308.1 215.6C311 220.9 315.6 223.6 321.8 223.6C327.8 223.6 332.3 221 335.2 215.8C338.1 210.6 339.6 202.5 339.6 191.5V153.5C339.6 142.5 338.2 134.2 335.3 128.8C332.4 123.3 327.8 120.6 321.6 120.6C321.6 120.6 339.3 118.4 346.6 144.7C353.8 171 357.8 231.1 329.1 232.4Z", "fill", "black"], ["id", "zero"], ["id", "Vector_25", "d", "M361.2 110.3C351.9 99 338.7 93.3 321.6 93.3C304.6 93.3 291.4 98.9 282.1 110.2C272.8 121.5 268.1 137.4 268.1 158.2V186.3C268.1 206.9 272.8 222.9 282.1 234.2C291.5 245.5 304.7 251.2 321.8 251.2C338.7 251.2 351.9 245.6 361.2 234.3C370.5 223 375.2 207.1 375.2 186.3V158.3C375.2 137.6 370.5 121.6 361.2 110.3ZM303.8 151.3C304 141 305.5 133.4 308.3 128.3C311.1 123.2 315.5 120.7 321.6 120.7C327.9 120.7 332.4 123.4 335.3 128.9C338.2 134.4 339.6 142.6 339.6 153.6V191.6C339.5 202.6 338.1 210.7 335.2 215.9C332.3 221.1 327.8 223.7 321.8 223.7C315.5 223.7 311 221 308.1 215.7C305.4 210.7 303.9 202.9 303.8 192.5C303.8 191.9 303.8 191.2 303.8 190.6V151.3V151.3Z", "fill", "url(#paint7_linear)"], ["id", "Vector_30", "d", "M291.5 110.1C291.5 110.1 279.6 101.5 278.3 88.1C286.9 90.5 291.5 101 291.5 101C291.5 101 289.3 91.4 291.5 84.9C297.8 94.1 296.1 101.6 291.5 110.1Z", "fill", "url(#paint9_linear)"], ["id", "Group_8"], ["id", "Group_9"], ["id", "Vector_31", "d", "M569.9 241.4V244.7C569.3 244.6 567.9 244.7 566.7 244.9C565.9 245 565.2 245 564.8 245.1L564.5 242.3L565.8 242.1L569.9 241.4Z", "fill", "url(#paint10_linear)"], ["id", "handboy"], ["id", "Vector_32", "d", "M529.1 188C529.1 188 529.2 188.3 528.8 188.7C528.5 189 528 189.3 527.1 189.7C521.7 191.8 510.6 186.7 504.5 183.3C498.5 179.9 481.3 182.7 469.7 181.1C458.1 179.5 453.2 173.3 442.8 170.7C432.4 168.1 393.6 179.3 391.4 170.6C389.2 161.9 432.8 77.2 436.6 83.1C440.3 89 453.2 89.4 462.3 94.1C471.4 98.8 479.1 122.1 489.2 124.4C490.6 124.7 491.9 125.2 493.2 125.9C501.2 130.2 507 140.9 507.2 149.7C507.4 159.9 521.4 168.1 526.5 173.6C531.5 179.2 529.1 188 529.1 188Z", "fill", "url(#paint11_linear)"], ["id", "Vector_33", "opacity", "0.25", "d", "M529.1 188C529.1 188 529.2 188.3 528.8 188.7C530.6 177.5 520.3 172.2 510.8 164.4C501.1 156.3 505.2 150.2 503.2 141.9C502 137 497 130.5 493.2 126C501.2 130.3 507 141 507.2 149.8C507.4 160 521.4 168.2 526.5 173.7C531.5 179.2 529.1 188 529.1 188Z", "fill", "white"], ["id", "Vector_34", "d", "M528.9 186.5L526.3 188.9C525.9 189.2 526.1 189.8 526.5 190L528.7 190.7L533.7 196.2C533.9 196.4 534.3 196.5 534.5 196.2L535.3 195.4C535.5 195.2 535.6 194.8 535.3 194.6L530.3 189.1L529.8 186.9C529.8 186.3 529.2 186.1 528.9 186.5Z", "fill", "#2F1829"], ["id", "Vector_35", "d", "M548.7 190C548 190.9 547.2 192 546.3 193.1C546 193.5 545.6 193.9 545.3 194.3C543.9 196 542.7 197.4 542.3 197.5C541.3 197.7 535.7 194.5 534.9 194.5C534.1 194.5 532.2 195.9 531.7 195.7C531.2 195.6 528.5 193.1 528.6 192.4C528.7 191.8 531.1 189.6 532.3 189.3C532.6 189.2 533.4 189.3 534.3 189.5H534.4C536.7 190 540.1 191.1 540.6 190.8C540.9 190.7 541.4 189.8 542 188.7C542.2 188.3 542.4 187.9 542.6 187.5C542.9 187 543.1 186.5 543.4 186C543.6 185.5 543.8 185.1 544 184.8C544.5 185.6 545.3 186.6 546.2 187.5C547.2 188.8 548.2 189.8 548.7 190Z", "fill", "url(#paint12_linear)"], ["id", "Vector_36", "d", "M571.4 196.6C571.4 198.4 571.4 200.2 571.3 201.6C570.9 207.3 570.4 211.9 568.5 212C566.6 212.1 566.2 196.7 566.3 195.8C566.3 195.6 566.3 195.2 566.4 194.7C566.5 193 566.5 190 566.5 188.7C566.5 188.4 566.5 188.2 566.5 188.1L566.9 187.9L571.1 185.2C571.1 185.2 571.3 188.8 571.5 193C571.5 193.6 571.5 194.1 571.5 194.7C571.4 195.3 571.4 195.9 571.4 196.6Z", "fill", "url(#paint13_linear)"], ["id", "Vector_37", "opacity", "0.25", "d", "M571.4 196.6C570.4 197.4 568.8 198.5 567.2 198.6C564.6 198.7 568.4 193.2 569.3 193.1C569.6 193.1 570.4 193 571.3 193C571.3 193.6 571.3 194.1 571.3 194.7C571.4 195.3 571.4 195.9 571.4 196.6Z", "fill", "black"], ["id", "Vector_38", "d", "M571.4 194.7C570.3 195.1 568.9 195.3 567 194.9C566.7 194.8 566.5 194.8 566.3 194.6C564.7 193.7 565.3 191 566.4 188.6C566.5 188.3 566.7 188 566.8 187.8L571 185.1C571 185.1 571.3 189.8 571.4 194.7Z", "fill", "#2F1829"], ["id", "Vector_39", "d", "M562.5 164.2C562.4 164.8 562.2 165.5 561.7 166.2C561.2 167.1 560.4 168 559.7 168.6C559.1 169 558.6 169.3 558.2 169.3C556.9 169.1 555.2 166.9 555.1 166.5C555.1 166.1 556.5 165.9 556.4 164.7C556.2 163.5 555.4 163.3 554.9 163.5C554.3 163.7 553.6 165 553.6 166.2C553.2 166.1 552.5 164.7 551.1 163.8C550.7 163.6 550.3 163.4 549.8 163.3C549.2 163.2 548.5 163.2 547.7 163.5C547.3 159.1 550 157.2 552 158C552 158 551.3 156.5 550.2 156.2C552.7 156.6 553.3 158.7 553.3 158.7C553.3 158.7 554 155.8 557.1 155.4C560.2 155 560.8 159.1 560.8 159.1C560.8 159.1 561.5 157.1 561.2 155.9C561.8 157.5 561.1 160.2 561.1 160.2C561.1 160.2 562.6 160.6 563 162.6C561.7 161.6 561.7 161.7 561.7 161.7C561.7 161.7 562.6 162.3 562.5 164.2Z", "fill", "#2F172B"], ["id", "Vector_40", "d", "M559.7 168.5C559.5 169.2 559.2 169.8 559.1 170.1C558.8 170.7 555.6 173.4 553.3 170.3C551.4 167.7 551.1 164.7 551.1 163.8C552.5 164.6 553.2 166.1 553.6 166.2C553.6 165 554.3 163.8 554.9 163.5C555.5 163.3 556.2 163.5 556.4 164.7C556.6 165.9 555.1 166.1 555.1 166.5C555.1 166.9 556.8 169.1 558.2 169.3C558.6 169.2 559.1 169 559.7 168.5Z", "fill", "url(#paint14_linear)"], ["id", "Vector_41", "d", "M561.3 155.6C561.2 155.4 561.2 155.3 561.1 155.2C561.2 155.3 561.2 155.5 561.3 155.6Z", "fill", "#2F172B"], ["id", "Vector_42", "d", "M572.4 184.6C572.1 185.2 571.7 185.7 571.4 186.2C571.3 186.3 571.2 186.5 571.1 186.6C570.1 187.8 569.2 188.5 569.2 188.5C569.2 188.5 569.2 188.5 569.2 188.6C569.2 188.7 569.2 188.8 569.3 189C569.4 189.4 569.5 190.1 569.6 191C569.6 191.1 569.6 191.3 569.7 191.4C569.8 191.8 569.8 192.2 569.8 192.6C569.8 192.8 569.9 193.1 569.9 193.3C569.9 193.4 569.9 193.6 569.9 193.7C570 194.4 570 195 570 195.7C570 195.8 570 196 570 196.1C570 196.9 569.9 197.6 569.8 198.1C569.8 198.3 569.7 198.4 569.7 198.5C569.6 198.7 569.6 198.8 569.5 198.9C569.4 199 569.2 199.1 569 199.2C567.5 199.9 563.7 199.9 559.8 199.7C556.5 199.5 553.2 199.2 551.5 198.9C551 198.8 550.6 198.7 550.3 198.5C550.1 198.4 549.9 198.2 549.8 198.1C549.7 198 549.6 197.9 549.6 197.8C549.3 197.3 549.2 196.8 549.2 196.1C549.2 196 549.2 195.8 549.2 195.7C549.3 195.1 549.4 194.5 549.5 193.8V193.7C549.5 193.6 549.6 193.4 549.6 193.3C549.8 192.6 550 192 550.1 191.3C550.1 191.2 550.1 191.1 550.2 191V190.9C550.4 190.1 550.5 189.4 550.5 188.9C550.5 188.7 550.5 188.6 550.6 188.5C550.7 187.2 550.6 186.8 550.6 186.8C550.6 186.8 550.3 187.6 549.8 188.5C549.7 188.6 549.6 188.8 549.6 188.9C549.3 189.4 548.9 189.9 548.7 189.9C548.7 189.9 548.6 189.9 548.5 189.9C548.2 189.8 547.8 189.4 547.3 188.9C547.2 188.8 547 188.6 546.9 188.5C546.6 188.2 546.3 187.9 546 187.5C545.7 187.2 545.4 186.8 545.1 186.5C545 186.4 544.9 186.2 544.8 186.1C544.4 185.6 544.1 185.2 543.8 184.8C543.6 184.5 543.5 184.3 543.4 184.1C543.3 184 543.3 183.9 543.3 183.8V183.7C543.4 183.4 543.6 182.6 543.9 181.7C544 181.6 544 181.4 544.1 181.3C544.3 180.7 544.6 180 545 179.3C545.1 179.2 545.1 179 545.2 178.9C545.5 178.3 545.9 177.6 546.2 176.9C546.3 176.8 546.4 176.6 546.4 176.5C546.8 175.8 547.2 175.1 547.6 174.5C547.7 174.4 547.8 174.2 547.9 174.1C548.5 173.3 549 172.6 549.6 172.1C549.8 171.9 549.9 171.8 550.1 171.7C550.2 171.6 550.3 171.6 550.4 171.5C551.2 171 552 170.6 552.8 170.3C555.5 169.3 557.8 169.4 557.8 169.4C559.1 169.4 560.4 169.7 561.7 170.2C562.6 170.6 563.5 171.1 564.4 171.7C564.6 171.8 564.8 172 565 172.1C565.7 172.7 566.4 173.3 567 174.1C567.1 174.2 567.2 174.4 567.4 174.5C567.9 175.1 568.4 175.8 568.8 176.5C568.9 176.6 569 176.8 569.1 176.9C569.5 177.5 569.8 178.2 570.2 178.9C570.3 179 570.3 179.2 570.4 179.3C570.7 179.9 571 180.6 571.3 181.3C571.4 181.4 571.4 181.6 571.5 181.7C571.7 182.3 572 183 572.2 183.7C572.2 183.8 572.3 184 572.3 184.1C572.4 184.3 572.4 184.5 572.4 184.6Z", "fill", "#FFCA51"], ["id", "Group_10"], ["id", "Vector_43", "opacity", "0.25", "d", "M565.2 172.2H549.9C550.1 172 550.2 171.9 550.4 171.8H564.6C564.8 171.9 565 172 565.2 172.2Z", "fill", "white"], ["id", "Vector_44", "opacity", "0.25", "d", "M567.6 174.6H548C548.1 174.5 548.2 174.3 548.3 174.2H567.3C567.3 174.3 567.4 174.4 567.6 174.6Z", "fill", "white"], ["id", "Vector_45", "opacity", "0.25", "d", "M569.2 177H546.4C546.5 176.9 546.6 176.7 546.6 176.6H569C569.1 176.7 569.1 176.8 569.2 177Z", "fill", "white"], ["id", "Vector_46", "opacity", "0.25", "d", "M570.5 179.4H545.2C545.3 179.3 545.3 179.1 545.4 179H570.3C570.4 179.1 570.4 179.2 570.5 179.4Z", "fill", "white"], ["id", "Vector_47", "opacity", "0.25", "d", "M571.5 181.8H544.2C544.3 181.7 544.3 181.5 544.4 181.4H571.4C571.4 181.5 571.5 181.7 571.5 181.8Z", "fill", "white"], ["id", "Vector_48", "opacity", "0.25", "d", "M572.3 184.2H543.6C543.5 184.1 543.5 184 543.5 183.9V183.8H572.2C572.2 183.9 572.3 184 572.3 184.2Z", "fill", "white"], ["id", "Vector_49", "opacity", "0.25", "d", "M571.4 186.2C571.3 186.3 571.2 186.5 571.1 186.6H545.4C545.3 186.5 545.2 186.3 545.1 186.2H571.4Z", "fill", "white"], ["id", "Vector_50", "opacity", "0.25", "d", "M547.1 188.6H550C549.9 188.7 549.8 188.9 549.8 189H547.5C547.4 188.9 547.3 188.7 547.1 188.6Z", "fill", "white"], ["id", "Vector_51", "opacity", "0.25", "d", "M569.3 189H550.7C550.7 188.8 550.7 188.7 550.8 188.6H569.3C569.3 188.7 569.3 188.8 569.3 189Z", "fill", "white"], ["id", "Vector_52", "opacity", "0.25", "d", "M569.7 191.4H550.3C550.3 191.3 550.3 191.2 550.4 191.1V191H569.7C569.7 191.1 569.7 191.3 569.7 191.4Z", "fill", "white"], ["id", "Vector_53", "opacity", "0.25", "d", "M570 193.8H549.7C549.7 193.7 549.8 193.5 549.8 193.4H570C569.9 193.6 570 193.7 570 193.8Z", "fill", "white"], ["id", "Vector_54", "opacity", "0.25", "d", "M570.1 195.8C570.1 195.9 570.1 196.1 570.1 196.2H549.3C549.3 196.1 549.3 195.9 549.3 195.8H570.1Z", "fill", "white"], ["id", "Vector_55", "opacity", "0.25", "d", "M569.9 198.2C569.9 198.4 569.8 198.5 569.8 198.6H550.5C550.3 198.5 550.1 198.3 550 198.2H569.9Z", "fill", "white"], ["id", "Vector_56", "d", "M570.3 238.7C569.4 239.3 563.3 239.9 563.3 239.9L563.1 238.8L562 232.1L559.3 216.4L556.6 236.1L555.8 241.9C555.8 241.9 548.3 242.3 548.3 240.5C548.3 240.3 548.3 239.5 548.4 238.2C548.6 230.2 549.5 203.9 549.7 198C550 198.6 550.7 199 551.7 199.1C551.8 199.1 551.9 199.1 552 199.1C555.8 199.7 566.5 200.6 569.1 199.4C569.2 200.4 569.3 201.9 569.4 203.8C569.8 211.4 570.1 225.2 570.3 232.9C570.3 236.4 570.3 238.7 570.3 238.7Z", "fill", "#2F1829"], ["id", "Vector_57", "opacity", "0.25", "d", "M562 232.1L559.3 216.4C559.3 216.4 560 210.1 560.3 209.3C560.6 208.6 562.5 209.1 563.3 208.6C563.7 209.6 561 211 560.8 214.3C560.7 216.6 561.5 226.7 562 232.1Z", "fill", "black"], ["id", "Vector_58", "opacity", "0.25", "d", "M551.1 201.4C551.1 201.4 550.9 205 553.8 206.7", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Group_11", "opacity", "0.25"], ["id", "Group_12", "opacity", "0.25"], ["id", "Vector_59", "opacity", "0.25", "d", "M551.8 206.2L551.7 206.9", "stroke", "white", "stroke-width", "0.4635", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_60", "opacity", "0.25", "d", "M551.7 208.2L550.3 238", "stroke", "white", "stroke-width", "0.4635", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "1.39 1.39"], ["id", "Vector_61", "opacity", "0.25", "d", "M550.2 238.7V239.4", "stroke", "white", "stroke-width", "0.4635", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_62", "opacity", "0.25", "d", "M562 209.6L564.7 237.9", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "1.39 1.39"], ["id", "Vector_63", "opacity", "0.25", "d", "M564.3 201.9C564.3 201.9 564 205.4 564.3 206C564.6 206.7 565.9 207.2 566.2 207.4C566.5 207.5 567.7 206.4 567.8 205.7C567.9 205 567.9 202 567.9 202C567.9 202 565.7 201.6 564.3 201.9Z", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_64", "opacity", "0.25", "d", "M570.3 238.7C569.4 239.3 563.3 239.9 563.3 239.9L563.1 238.8C564.9 237.8 568.4 235.6 570.2 232.9C570.3 236.4 570.3 238.7 570.3 238.7Z", "fill", "black"], ["id", "Vector_65", "d", "M570.7 241.3L569.9 241.4L564.5 242.2L564.1 242.3C563.3 242.4 562.6 241.9 562.4 241.1V241C562.3 240.2 562.8 239.5 563.6 239.3L570.2 238.3C571 238.2 571.7 238.7 571.9 239.5V239.6C572 240.4 571.5 241.2 570.7 241.3Z", "fill", "#4C3146"], ["id", "Vector_66", "opacity", "0.25", "d", "M556.7 236L555.9 241.8C555.9 241.8 548.4 242.2 548.4 240.4C548.4 240.2 548.4 239.4 548.5 238.1C550.2 238 554.3 237.5 556.7 236Z", "fill", "black"], ["id", "Vector_67", "d", "M556.5 242.2V242.3C556.4 243.1 555.7 243.7 554.9 243.6L549.2 243.1L548.3 243C547.5 242.9 546.9 242.2 547 241.4V241.3C547.1 240.5 547.8 239.9 548.6 240L555.2 240.6C556 240.7 556.6 241.4 556.5 242.2Z", "fill", "#4C3146"], ["id", "Vector_68", "opacity", "0.25", "d", "M569.4 203.8C560.2 205 554 200.8 551.9 199.1C555.7 199.7 566.4 200.6 569 199.4C569.2 200.4 569.3 201.9 569.4 203.8Z", "fill", "black"], ["id", "Vector_69", "opacity", "0.25", "d", "M550.4 191.1C551.1 187.8 550.8 186.9 550.8 186.9C550.8 186.9 549.6 189.9 548.9 190C548.6 190 547.4 188.9 546.2 187.6C547.2 187.3 548.7 186.8 549.5 185.9C550.7 184.5 550.6 178.5 551.1 178.5C551.6 178.5 552.7 189.6 549.6 193.9C549.9 193 550.2 192 550.4 191.1Z", "fill", "black"], ["id", "Vector_70", "opacity", "0.25", "d", "M572.4 184.6C571 187.2 569.2 188.5 569.2 188.5C569.2 188.5 567.6 179.9 567.1 179.1C566.7 178.4 567.3 177.8 568.2 180.7C568.9 183 570.7 184.7 572.3 184.3C572.4 184.3 572.4 184.4 572.4 184.6Z", "fill", "black"], ["id", "Vector_71", "opacity", "0.25", "d", "M569.5 199.1C569.4 199.2 569.2 199.3 569 199.4C567.5 200.1 563.7 200.1 559.8 199.9C562.4 199.6 568.7 198.2 569.8 192.7C570.1 195.2 570.3 198.2 569.5 199.1Z", "fill", "black"], ["id", "Vector_72", "opacity", "0.25", "d", "M562 170.2C561.7 170.6 561.1 170.8 560.1 170.6C558.2 170.2 555.7 171 554.5 170.8C553.8 170.7 553.4 170.5 553.1 170.3C555.8 169.3 558.1 169.4 558.1 169.4C559.4 169.4 560.7 169.7 562 170.2Z", "fill", "black"], ["id", "Vector_73", "d", "M548.7 190C548 190.9 547.2 192 546.3 193.1C544.4 192 542.9 190 542 188.8C542.8 187.4 543.6 185.7 544 184.9C544.5 185.7 545.3 186.7 546.2 187.6C547.2 188.8 548.2 189.8 548.7 190Z", "fill", "#2F1829"], ["id", "Vector_74", "opacity", "0.25", "d", "M548.7 190C548 190.9 547.2 192 546.3 193.1C546 193.5 545.6 193.9 545.3 194.3C545.4 190.8 544.2 187.7 543.5 186.1C543.7 185.6 543.9 185.2 544.1 184.9C544.6 185.7 545.4 186.7 546.3 187.6C547.2 188.8 548.2 189.8 548.7 190Z", "fill", "black"], ["id", "Vector_75", "opacity", "0.25", "d", "M542.7 187.6C542.7 188.6 541.7 190.1 541.5 190.5C541.2 191 541.4 193.3 541.1 193C540.8 192.7 540.7 191.6 540.3 191.2C539.9 190.9 535.3 189.7 534.5 189.5C536.8 190 540.2 191.1 540.7 190.8C541 190.7 541.5 189.8 542.1 188.7C542.3 188.5 542.5 188.1 542.7 187.6Z", "fill", "white"], ["id", "Vector_76", "opacity", "0.25", "d", "M561.7 166.2C561.2 167.1 560.4 168 559.7 168.6C559.1 169 558.6 169.3 558.2 169.3C556.9 169.1 555.2 166.9 555.1 166.5C555.1 166.1 556.5 165.9 556.4 164.7C556.2 163.5 555.4 163.3 554.9 163.5C554.3 163.7 553.6 165 553.6 166.2C553.2 166.1 552.5 164.7 551.1 163.8C550.7 163.6 550.3 163.4 549.8 163.3C550.5 163.2 551.4 163.2 551.9 163.4C553.1 163.9 553.2 164.4 553.2 164.4C553.2 164.4 553.4 162.6 555.4 162.2C557.1 161.9 558.4 166.5 561.7 166.2Z", "fill", "black"], ["id", "Vector_77", "d", "M555.9 251.1H542.8C542.8 251.1 542.7 250.7 542.7 250.2C542.7 249.5 542.9 248.6 544 248.2C544.4 248 544.8 247.9 545.2 247.7C546.8 246.9 548.6 245.9 548.9 245.3C548.9 245.3 549 245.3 549.2 245.4C549.5 245.5 550.1 245.8 550.8 246C551.1 246.1 551.4 246.1 551.7 246.1C552.4 246.1 553.9 245.7 554.8 245.6C555.2 245.5 555.5 245.5 555.6 245.7C555.8 246 556 248.7 556.1 250.2C555.8 250.7 555.9 251.1 555.9 251.1Z", "fill", "#1F3247"], ["id", "Vector_78", "d", "M554.9 243.6C554.8 244.2 554.7 244.9 554.5 245.5C553.8 245.6 552.9 245.8 552.2 245.9C551.9 245.9 551.7 246 551.5 246C550.7 246 549.6 245.5 549.1 245.3C549.1 244.6 549.2 243.7 549.2 243L551.5 243.2L554.9 243.6Z", "fill", "url(#paint15_linear)"], ["id", "Vector_79", "d", "M571.6 251.1H563.7C563.7 251.1 563.6 250.7 563.6 250.2C563.6 249.8 563.7 249.4 563.9 248.9C564.5 247.6 564.2 245.6 564.4 245.2C564.4 245.2 564.5 245.2 564.8 245.2C565.9 245.1 569 244.8 569.9 244.8C570 244.8 570 244.8 570.1 244.8C570.6 245 571.2 248.4 571.5 250.2C571.6 250.6 571.6 250.9 571.6 251.1Z", "fill", "#1F3247"], ["id", "Vector_80", "opacity", "0.25", "d", "M555.8 250.1C555.8 250.7 555.9 251 555.9 251H542.8C542.8 251 542.7 250.6 542.7 250.1H555.8Z", "fill", "black"], ["id", "Vector_81", "opacity", "0.25", "d", "M571.6 251.1H563.7C563.7 251.1 563.6 250.7 563.6 250.2H571.5C571.6 250.6 571.6 250.9 571.6 251.1Z", "fill", "black"], ["id", "Vector_82", "d", "M550.6 245.9C549.4 246.7 547.1 248.1 546.3 248.1C545.7 248.1 545.3 247.8 545 247.6C546.6 246.8 548.4 245.8 548.7 245.2C548.7 245.2 548.8 245.2 549 245.3C549.4 245.5 550 245.7 550.6 245.9Z", "fill", "#122230"], ["id", "Vector_83", "opacity", "0.25", "d", "M554.9 243.6C554.8 244.2 554.7 244.9 554.5 245.5C553.8 245.6 552.9 245.8 552.2 245.9L551.4 243.2L554.9 243.6Z", "fill", "black"], ["id", "Vector_84", "opacity", "0.25", "d", "M569.9 241.4V244.7C569.3 244.6 567.9 244.7 566.7 244.9L565.8 242.1L569.9 241.4Z", "fill", "black"], ["id", "Group_13"], ["id", "Group_14"], ["id", "Vector_85", "d", "M98.3 163.3C98.3 163.3 98.2 164.3 98.1 165.5C97.9 167.1 97.5 169.2 96.8 170.2C96.8 170.2 96.8 170.3 96.7 170.3C95.6 171.7 93.6 171.4 92.6 169.6C93.2 168.8 93.5 167.9 93.1 167.5C92.3 166.7 92.5 164.4 93.7 164.7C94.9 165 95.1 168.2 95.5 168.1C95.8 168.2 97.6 165.3 98.3 163.3Z", "fill", "url(#paint16_linear)"], ["id", "Vector_86", "d", "M98.7 161.9C98.7 162.2 98.6 162.7 98.4 163.3C98.3 163.6 98.1 164 98 164.3C97.2 166.1 95.9 168.1 95.6 168.2C95.2 168.3 95 165 93.8 164.8C92.6 164.5 92.4 166.8 93.2 167.6C93.6 168 93.3 168.9 92.7 169.7C92 170.5 91 171.1 89.9 170.4C87.9 169.2 87.5 161.4 87.5 160.8C87.5 160.8 87.5 160.3 87.6 159.6C87.8 158.6 88.5 157.4 90.2 156.6C93.2 155.3 98.7 155.6 98.7 161.9Z", "fill", "#2F1829"], ["id", "Vector_87", "d", "M114.4 194.3C114.4 194.4 114.4 194.5 114.3 194.5C114.2 194.9 114.1 195.1 114 195.1C113.9 195.1 113.3 195.1 112.4 195C111.2 194.8 109.4 194.6 107.8 194.3C105.8 193.9 104 193.5 103.4 193.2C102.9 192.9 102.1 191.9 101.3 190.7C101.1 190.4 100.9 190.1 100.7 189.7C99.7 188.1 98.9 186.5 98.7 186.1C98.7 186 98.6 186 98.6 186C98.6 186 98.6 186 98.6 186.1C98.6 186.5 98.4 188.1 97.9 189.7C97.8 190 97.7 190.4 97.5 190.7C97.4 191 97.2 191.3 97 191.5C96.5 192.3 96.6 193.3 96.9 194.3C96.9 194.4 97 194.5 97 194.7C97.1 194.9 97.2 195.1 97.3 195.3C97.5 195.7 97.6 196 97.8 196.3C98.3 197.3 98.7 198.2 98.6 198.7C98.6 198.8 98.5 198.8 98.4 198.9C98.3 199 98.3 199 98.2 199.1C97.9 199.3 97.3 199.6 96.6 199.9C92.7 201.5 83.9 203.4 80.1 199.9C80 199.8 80 199.8 79.9 199.7C79.7 199.4 79.6 199.2 79.6 198.9C79.6 198.5 79.8 198.2 80.1 197.7C80.5 197 81.2 196.3 81.7 195.2C81.9 194.9 82 194.6 82.1 194.2C82.3 193.7 82.5 193.1 82.5 192.4C82.6 191.8 82.6 191.1 82.7 190.5C82.7 190.2 82.8 189.8 82.8 189.5C82.9 188.2 82.9 187 82.9 185.9C82.9 185.6 82.9 185.2 82.9 184.9C82.9 183.6 82.8 182.4 82.8 181.3C82.8 181 82.8 180.6 82.8 180.3C82.8 179 82.8 177.8 82.9 176.7C82.9 176.4 83 176 83 175.7C83.3 174.2 83.9 173 85 172.1L85.1 172C85.5 171.7 85.9 171.4 86.2 171.1C86.6 170.8 87 170.6 87.3 170.3C89.7 168.9 90.9 169.1 90.9 169.1C90.9 169.1 91.6 169.1 92.7 169.3C93.8 169.5 95.1 169.8 96.5 170.3C96.7 170.4 96.8 170.4 97 170.5C97.4 170.7 97.7 170.8 98.1 171C98.3 171.1 98.6 171.3 98.8 171.4C99.1 171.6 99.4 171.8 99.6 172C100.3 172.5 100.8 173.1 101.3 173.8C101.6 174.3 102 175 102.3 175.6C102.5 175.9 102.6 176.2 102.8 176.6C103.3 177.8 103.9 179 104.4 180.2C104.5 180.5 104.7 180.9 104.8 181.2C105.3 182.5 105.8 183.8 106.1 184.8C106.2 185.1 106.3 185.5 106.4 185.8C106.8 186.9 107 187.6 107.1 187.9C107.2 188.3 108.1 188.7 109.2 189.1C109.6 189.2 109.9 189.3 110.3 189.4C111.1 189.6 111.8 189.8 112.5 190C113 190.1 113.5 190.3 113.9 190.4C114.3 190.5 114.5 190.6 114.6 190.7C114.6 190.7 114.6 190.8 114.7 190.9C114.7 191.8 114.6 193.3 114.4 194.3Z", "fill", "#F5B539"], ["id", "Group_15", "opacity", "0.25"], ["id", "Group_16", "opacity", "0.25"], ["id", "Vector_88", "opacity", "0.25", "d", "M98.1 171.4C98.4 171.6 98.7 171.7 99 171.9H85.7C85.9 171.7 86.2 171.5 86.4 171.4H98.1ZM98.1 171.2H86.2C85.8 171.5 85.5 171.7 85.1 172.1L85 172.2H99.7C99.2 171.8 98.7 171.5 98.1 171.2Z", "fill", "white"], ["id", "Group_17", "opacity", "0.25"], ["id", "Vector_89", "opacity", "0.25", "d", "M102.1 176.1C102.2 176.3 102.3 176.4 102.4 176.6H83.1C83.1 176.4 83.2 176.2 83.2 176.1H102.1ZM102.3 175.8H83C82.9 176.1 82.9 176.4 82.9 176.8H102.8C102.6 176.5 102.4 176.1 102.3 175.8Z", "fill", "white"], ["id", "Group_18", "opacity", "0.25"], ["id", "Vector_90", "opacity", "0.25", "d", "M104.2 180.7C104.3 180.9 104.3 181 104.4 181.2H83.1C83.1 181 83.1 180.9 83.1 180.7H104.2ZM104.3 180.5H82.8C82.8 180.8 82.8 181.1 82.8 181.5H104.7C104.6 181.1 104.4 180.8 104.3 180.5Z", "fill", "white"], ["id", "Group_19", "opacity", "0.25"], ["id", "Vector_91", "opacity", "0.25", "d", "M105.9 185.3L106 185.7L106.1 185.9H83.3C83.3 185.7 83.3 185.6 83.3 185.4H105.9V185.3ZM106 185.1H83C83 185.4 83 185.7 83 186.1H106.4C106.3 185.8 106.1 185.4 106 185.1Z", "fill", "white"], ["id", "Group_20", "opacity", "0.25"], ["id", "Vector_92", "opacity", "0.25", "d", "M97.6 189.9C97.5 190.1 97.5 190.3 97.4 190.4H83.1C83.1 190.2 83.1 190.1 83.1 189.9H97.6ZM97.9 189.7H82.9C82.9 190 82.9 190.3 82.8 190.7H97.5C97.7 190.4 97.8 190 97.9 189.7Z", "fill", "white"], ["id", "Group_21", "opacity", "0.25"], ["id", "Vector_93", "opacity", "0.25", "d", "M110.2 189.9C110.8 190.1 111.4 190.2 111.9 190.4L112.1 190.5H101.5C101.4 190.3 101.3 190.2 101.2 190H110.2V189.9ZM110.2 189.7H100.7C100.9 190 101.1 190.4 101.3 190.7H113.7C113.3 190.6 112.9 190.4 112.3 190.3C111.8 190.1 111 189.9 110.2 189.7Z", "fill", "white"], ["id", "Group_22", "opacity", "0.25"], ["id", "Vector_94", "opacity", "0.25", "d", "M96.9 194.6C96.9 194.6 96.9 194.7 97 194.7V194.8C97 194.9 97.1 195 97.1 195.1H82.2C82.3 194.9 82.4 194.8 82.4 194.6H96.9V194.6ZM97 194.3H82.2C82.1 194.7 81.9 195 81.8 195.3H97.4C97.3 195.1 97.2 194.9 97.1 194.7C97.1 194.6 97.1 194.5 97 194.3Z", "fill", "white"], ["id", "Group_23", "opacity", "0.25"], ["id", "Vector_95", "opacity", "0.25", "d", "M114.1 194.6C114 194.9 113.9 195 113.9 195C113.9 195 113.9 195 113.8 195C113.6 195 113.1 195 112.4 194.9C111.8 194.8 111.2 194.7 110.5 194.6H114.1V194.6ZM114.4 194.3H107.8C109.4 194.6 111.2 194.9 112.4 195C113.1 195.1 113.6 195.1 113.8 195.1C113.9 195.1 113.9 195.1 114 195.1C114.1 195.1 114.2 194.8 114.3 194.5C114.4 194.5 114.4 194.4 114.4 194.3Z", "fill", "white"], ["id", "Group_24", "opacity", "0.25"], ["id", "Vector_96", "opacity", "0.25", "d", "M97.8 199.2C97.5 199.4 97.1 199.5 96.7 199.7H80.4L80.3 199.6L80.1 199.8L80.2 199.6C80.1 199.5 80 199.4 80 199.2H97.8ZM98.5 199H79.7C79.7 199.3 79.8 199.5 80 199.8C80.1 199.9 80.1 199.9 80.2 200H96.7C97.4 199.7 97.9 199.4 98.3 199.2C98.4 199.1 98.4 199 98.5 199Z", "fill", "white"], ["id", "Vector_97", "d", "M99.9 242.3C99.8 242.5 99.8 242.7 99.7 242.8C98.6 244.7 95.6 244.9 94.5 244.5C94.4 244.5 94.2 244.4 94.2 244.3C93.5 243.7 93 238.9 89.4 211.7C89.4 211.8 89.4 211.8 89.4 211.9C89.3 215.8 88.5 222.6 87.7 228.9C86.8 235.9 85.8 242.2 85.6 243.2C85.6 243.5 85.4 243.8 85.2 244.1C84.2 245.2 81.7 245.5 80.2 243.7C80.1 243.6 80 243.4 79.9 243.2C80.5 238.2 80.8 222.8 79.8 213.6C79.4 210.2 79.4 207.2 79.5 204.8C79.6 202.3 79.9 200.5 80.1 199.5C83.9 203.3 93.1 201.3 97 199.6C97.6 199.3 98 199.1 98.3 198.9C99.3 203.5 98.9 216.4 99.9 242.3Z", "fill", "#2F1829"], ["id", "Vector_98", "opacity", "0.25", "d", "M97.1 170.7C90.7 170.9 88.9 180.8 88.9 180.8L87.4 170.4C89.8 169 91 169.2 91 169.2C91 169.2 94.1 169.4 97.1 170.7Z", "fill", "black"], ["id", "Vector_99", "d", "M107.2 251C107.2 251 96.3 251 94.5 251C94.4 250.6 94.4 250.1 94.4 249.5C94.4 249.3 94.4 249.1 94.4 248.8C94.4 247.3 94.4 245.5 94.5 244.6C94.8 244.7 95.2 244.8 95.7 244.7C96.7 244.7 97.9 244.4 98.8 243.8C99.1 243.6 99.4 243.2 99.6 242.9C100.4 244.6 102 245.7 103.5 246.5C104.8 247.2 106.1 247.7 106.6 248.1C107.1 248.5 107.3 249 107.3 249.5C107.5 250.2 107.2 251 107.2 251Z", "fill", "#1F3247"], ["id", "Vector_100", "d", "M85.3 249.5C85.3 250.5 85.2 251 85.2 251H77.9C78 250.5 78.1 250 78.2 249.5C78.8 247 79.7 244.8 80.1 243.9C80.6 244.5 81.2 244.8 81.8 245C82.5 245.2 83.2 245.2 83.9 245C84.4 244.8 84.9 244.6 85.2 244.2C85.4 246.3 85.3 248.2 85.3 249.5Z", "fill", "#1F3247"], ["id", "Vector_101", "opacity", "0.25", "d", "M98.7 198.7C98.7 198.8 98.5 199 98.3 199.1C96 200.7 84.4 204.1 80.1 199.7C79.5 199.1 79.8 198.5 80.3 197.8C80.9 198.3 82 198.8 84 199.2C87.9 199.8 94.7 198.8 98 196.4C98.4 197.4 98.8 198.2 98.7 198.7Z", "fill", "black"], ["id", "girllight"], ["id", "Vector_102", "d", "M121.8 188C121.8 188 119.4 179.3 124.5 173.8C129.6 168.3 143.5 160.1 143.8 149.9C144.1 139.7 151.7 126.9 161.8 124.5C171.9 122.2 179.6 98.8 188.7 94.2C197.8 89.5 210.7 89.1 214.4 83.2C218.1 77.3 261.7 162 259.6 170.7C257.4 179.4 218.6 168.2 208.2 170.8C197.8 173.4 192.9 179.6 181.3 181.2C169.7 182.8 152.5 180 146.5 183.4C140.5 186.8 129.4 191.8 123.9 189.8C121.6 188.8 121.8 188 121.8 188Z", "fill", "url(#paint17_linear)"], ["id", "Vector_103", "d", "M123.9 189.6L121.4 187.1C121 186.7 120.4 186.9 120.3 187.4L119.7 189.6L114.4 194.9C114.2 195.1 114.2 195.5 114.4 195.7L115.2 196.5C115.4 196.7 115.8 196.7 116 196.5L121.3 191.2L123.5 190.6C124.1 190.6 124.3 190 123.9 189.6Z", "fill", "#2F1829"], ["id", "Vector_104", "d", "M121.2 192.6C121.1 193.4 118.2 195.9 117.3 195.7C117.2 195.7 117 195.6 116.9 195.5C116.3 195.2 115.6 194.6 114.4 194.5C114.6 193.5 114.7 191.7 114.6 191.1C114.8 191 115 190.9 115.2 190.8C116.2 190.4 117.5 189.8 118 189.9C118.9 190.2 121.4 191.8 121.2 192.6Z", "fill", "url(#paint18_linear)"], ["id", "Vector_105", "opacity", "0.25", "d", "M114.4 194.6C114.3 195 114.2 195.2 114.1 195.2C114 195.2 113.4 195.2 112.5 195.1C113.1 192.8 112.7 191.1 112.5 190.3C113.6 190.6 114.4 190.8 114.5 191C114.5 191 114.5 191.1 114.6 191.2C114.7 191.8 114.6 193.6 114.4 194.6Z", "fill", "black"], ["id", "Vector_106", "opacity", "0.25", "d", "M97.2 194.7C95.7 193.3 96.4 192.1 97.2 189.3C98 186.4 96.4 185.2 96.1 182C95.8 178.8 96.2 177 98.1 174.9C95.7 181.1 98.7 186 98.7 186C98.7 186 98.6 189.4 97.1 191.6C96.5 192.4 96.7 193.6 97.2 194.7Z", "fill", "black"], ["id", "Vector_107", "opacity", "0.25", "d", "M97.9 164.4C97.1 166.2 95.8 168.2 95.5 168.3C95.1 168.4 94.9 165.1 93.7 164.9C92.5 164.6 92.3 166.9 93.1 167.7C93.5 168.1 93.2 169 92.6 169.8C91.9 170.6 90.9 171.2 89.8 170.5C87.8 169.3 87.4 161.5 87.4 160.9C87.4 160.9 87.4 160.4 87.5 159.7C88.5 159.6 90.8 159.8 91.3 161.8C91.8 163.8 91.8 164.7 91.8 165.1C91.9 164.5 92.4 162.8 94.3 163.2C95.4 163.3 96.7 164.1 97.9 164.4Z", "fill", "black"], ["id", "hairgirl"], ["id", "Vector_108", "d", "M89.6 161.6C89.6 161.6 88.8 159.9 86.1 160.4C83.5 160.9 82.3 164.3 83.5 169.8C83.5 164.9 84.2 163.8 84.2 163.8C84.2 163.8 83.1 166.8 84.5 173.5C85.9 180.2 86.8 186.7 83.2 189.5C90.3 185.5 90.8 180.7 90.3 174.9C90 169.1 91.3 164 89.6 161.6Z", "fill", "#2F1829"], ["id", "Vector_109", "opacity", "0.25", "d", "M93.9 167.5C93.8 167.9 95.2 169.8 96.7 170.2C96.7 170.2 96.7 170.3 96.6 170.3C96.6 170.4 96.5 170.4 96.5 170.5C95.1 170 93.7 169.6 92.7 169.5C93.2 168.8 93.4 168 93 167.6C92.2 166.8 92.4 164.5 93.6 164.8C94.8 165.1 95 168.3 95.4 168.2C95.7 168.1 97.5 165.3 98.2 163.3C98.2 163.3 98.1 164.3 98 165.5C97.6 166.2 96.7 167.7 96 168.3C95.1 169.1 94.7 168.1 94.5 167.5C94.4 167 94 167 93.9 167.5Z", "fill", "black"], ["id", "Vector_110", "opacity", "0.25", "d", "M81.5 204.9C81.5 204.9 81.3 208.6 81.8 209.6C82.3 210.6 83.7 211.3 83.7 211.3C83.7 211.3 85.5 210.5 86 209.4C86.5 207.2 86.4 204.5 86.4 204.5C86.4 204.5 82.8 203.7 81.5 204.9Z", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10"], ["id", "Vector_111", "opacity", "0.25", "d", "M97.2 201.9C97.2 201.9 97.4 205 94.7 206.5", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_112", "opacity", "0.25", "d", "M96.5 204.6L98.7 241.6", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_113", "opacity", "0.25", "d", "M89.3 212C89.2 215.9 88.4 222.7 87.6 229.1C87.5 221.7 86.4 212.6 86.8 211.1C87.9 212.1 89.3 212 89.3 212Z", "fill", "black"], ["id", "Vector_114", "opacity", "0.25", "d", "M87.4 213L84.3 243.2", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_115", "opacity", "0.25", "d", "M96.9 199.9C95.1 201.7 89.5 206.1 79.4 205.1C79.5 202.6 79.8 200.8 80 199.8C83.8 203.6 93.1 201.5 96.9 199.9Z", "fill", "black"], ["id", "Vector_116", "opacity", "0.25", "d", "M78.3 249.5H85.3C85.3 250.5 85.2 251 85.2 251H77.9C78 250.5 78.1 250 78.3 249.5Z", "fill", "black"], ["id", "Vector_117", "opacity", "0.25", "d", "M107.2 251C107.2 251 96.3 251 94.5 251C94.4 250.6 94.4 250.1 94.4 249.5H107.4C107.5 250.2 107.2 251 107.2 251Z", "fill", "black"], ["id", "Vector_118", "opacity", "0.25", "d", "M103.6 246.4C101.3 247.5 99.7 245.2 98.9 243.7C99.2 243.5 99.5 243.1 99.7 242.8C100.5 244.5 102.1 245.6 103.6 246.4Z", "fill", "white"], ["id", "Vector_119", "opacity", "0.25", "d", "M83.9 245C83.7 248.4 82.5 248.5 81.9 248.1C81.3 247.8 81.7 245.6 81.9 244.9C82.5 245.2 83.2 245.2 83.9 245Z", "fill", "black"], ["id", "Vector_120", "opacity", "0.25", "d", "M94.4 248.8C94.4 247.3 94.4 245.5 94.5 244.6C94.8 244.7 95.2 244.8 95.7 244.7C95.9 245.8 96 248.3 94.4 248.8Z", "fill", "black"], ["id", "Vector_121", "opacity", "0.25", "d", "M114.4 194.6C114.6 193.6 114.7 191.8 114.6 191.2C114.8 191.1 115 191 115.2 190.9C115.8 191.8 116.9 193.5 117 195.5C116.3 195.2 115.7 194.6 114.4 194.6Z", "fill", "black"], ["id", "Vector_122", "opacity", "0.25", "d", "M109.1 189.4C107.1 189.6 105.7 191.7 105.6 191.3C105.4 190.8 106.5 189.8 106.4 189.1C106.3 188.4 103.2 180.5 101.5 176.6C100.5 174.2 99.5 172.6 98.9 171.6C99.2 171.8 99.5 172 99.7 172.2C100.4 172.7 100.9 173.3 101.4 174C101.7 174.5 102.1 175.2 102.4 175.8C102.6 176.1 102.7 176.4 102.9 176.8C103.4 178 104 179.2 104.5 180.4C104.6 180.7 104.8 181.1 104.9 181.4C105.4 182.7 105.9 184 106.2 185C106.3 185.3 106.4 185.7 106.5 186C106.9 187.1 107.1 187.8 107.2 188.1C107.2 188.6 108 189 109.1 189.4Z", "fill", "white"], ["id", "Vector_123", "d", "M592.4 253C591.7 252.5 570.9 196.3 594.9 164.3C591.6 186.9 593.4 205.4 593.4 205.4L590.3 208.5L593.8 209.5C593.8 209.5 596.1 240.9 597.3 244.5C594.7 221 601.1 207.3 601.1 207.3C601.1 207.3 600 224 602.1 230.1L600.4 232.3L602.1 232C602.1 232 600.9 242.1 602.1 245.1C602.1 245.1 615.5 205.1 609.2 187.5C617.5 200.3 615.1 221.8 615.1 221.8L613 222.6L614.3 223.6C614.3 223.6 610.8 246.5 602.9 252.9", "fill", "#2F1829"], ["id", "Group_25"], ["id", "Vector_124", "d", "M452.1 246.4C452.1 246.4 433.5 244.7 426.1 249.9C429.6 244.9 443.7 242.6 443.7 242.6L444.7 243.4V242.6C444.7 242.6 447.1 241.4 450.6 240.9C433.7 237.6 425.6 240.8 425.6 240.8C425.6 240.8 428.7 238.2 433.9 236.7C439.1 235.2 442.3 235.8 442.3 235.8L444.4 237.1V235.7L462.4 241", "fill", "black"], ["id", "Vector_125", "d", "M523.5 247.4C523.5 247.4 521.5 234.8 531.8 226.1C531.7 236.3 528.9 245 523.5 247.4Z", "stroke", "#1F3247", "stroke-width", "0.9271", "stroke-miterlimit", "10"], ["id", "Group_26"], ["id", "Vector_126", "d", "M454.5 239.1L452.5 244C451.1 239.1 448 238.1 446.4 238C445.8 237.9 445.5 238 445.5 238L446.2 235.6L443.9 236C443.9 236 441.3 229.7 429.6 222C440.3 221.4 446.9 227 450.6 232C453.4 235.7 454.5 239.1 454.5 239.1Z", "fill", "#FFCA51"], ["id", "Group_27", "opacity", "0.25"], ["id", "Vector_127", "opacity", "0.25", "d", "M429.6 222C432.1 222.6 434.6 223.5 437 224.6C439.4 225.7 441.7 226.9 443.9 228.3C446.1 229.8 448.1 231.5 449.9 233.5C451.6 235.5 453 237.8 454 240.3C454 240.4 454 240.6 453.9 240.6C453.8 240.6 453.6 240.6 453.6 240.5C452.7 238.1 451.4 235.8 449.7 233.8C448 231.8 446 230.1 443.9 228.6C441.7 227.1 439.4 225.9 437 224.8C434.6 223.6 432.1 222.6 429.6 222Z", "fill", "white"], ["id", "Vector_128", "opacity", "0.25", "d", "M454.5 239.1L452.5 244C451.1 239.1 448 238.1 446.4 238C449.2 236.3 450.2 233.6 450.6 231.9C453.4 235.7 454.5 239.1 454.5 239.1Z", "fill", "black"], ["id", "Group_28"], ["id", "Vector_129", "d", "M531.8 215.8C512.6 231.6 507.7 239.4 507.7 239.4L504.3 237.9C504.3 237.9 504.3 238 504.3 238.2C504.3 239.1 504.4 241.5 504.3 242.4C504.2 243.1 497.4 246.8 493.5 248.8C491.9 249.6 490.9 250.2 490.9 250.2L487.7 247L488 246.4L489.7 243.2C489.7 243.2 494.1 236.9 501.6 230.3C508.9 223.7 519.4 216.9 531.8 215.8Z", "fill", "#FFADAE"], ["id", "Group_29", "opacity", "0.25"], ["id", "Vector_130", "opacity", "0.25", "d", "M489.6 248.9C492.2 245.1 495.1 241.5 498.1 238.1C501.1 234.7 504.4 231.4 507.8 228.4C511.3 225.4 515 222.7 519 220.4C523 218.2 527.3 216.5 531.8 215.7C527.3 216.5 523 218.2 519 220.5C515 222.8 511.4 225.5 507.9 228.5C504.5 231.5 501.3 234.8 498.3 238.2C495.3 241.6 492.5 245.2 489.9 249C489.8 249.1 489.7 249.1 489.6 249.1C489.5 249.2 489.5 249 489.6 248.9Z", "fill", "white"], ["id", "Vector_131", "opacity", "0.25", "d", "M504.3 242.3C504.2 243 497.4 246.7 493.5 248.7C491.4 247.9 489.4 247 488 246.2L489.7 243C489.7 243 494.1 236.7 501.6 230.1C502 232.4 502.9 235.7 504.4 238.1C504.3 239 504.4 241.5 504.3 242.3Z", "fill", "black"], ["id", "Group_30"], ["id", "Vector_132", "d", "M519.7 205.4C506 216.8 499.7 226.4 497.1 231.2C495.9 233.4 495.5 234.7 495.5 234.7L492.5 233.6L493.7 236.3L489.3 245.1L487.4 249V233.6C488 232.5 488.8 231 489.8 229.3C491.7 226.1 494.4 222.2 497.9 218.4C499.5 216.7 501.2 215 503 213.4C507.8 209.6 513.3 206.5 519.7 205.4Z", "fill", "#F3475C"], ["id", "Group_31", "opacity", "0.25"], ["id", "Vector_133", "opacity", "0.25", "d", "M487.3 239.8C488.7 236 490.6 232.4 492.7 228.9C494.8 225.4 497.3 222.2 500 219.2C502.7 216.2 505.8 213.5 509.1 211.1L511.6 209.4L514.3 207.9C514.7 207.7 515.2 207.4 515.6 207.2L517 206.6L519.8 205.4L517 206.6L515.6 207.2C515.2 207.4 514.7 207.7 514.3 207.9L511.7 209.4L509.2 211.1C505.9 213.5 502.9 216.2 500.2 219.2C497.5 222.2 495.1 225.5 493.1 229C491 232.5 489.2 236.1 487.9 239.9C487.9 240 487.7 240.1 487.6 240C487.3 240.1 487.3 239.9 487.3 239.8Z", "fill", "white"], ["id", "Vector_134", "opacity", "0.25", "d", "M495.6 234.8L492.6 233.7L493.8 236.4L489.4 245.2L487.5 245.5V233.7C488.1 232.6 488.9 231.1 489.9 229.4C491.3 230.5 493.7 231.8 497.1 231.3C496 233.5 495.6 234.8 495.6 234.8Z", "fill", "black"], ["id", "Vector_135", "d", "M537.2 251.1H487.5V244.1C487.5 244.1 488.2 242.4 490.2 241.4C490.8 241.1 491.6 240.8 492.4 240.7C496.1 240.2 497.4 243.3 497.4 243.3C497.4 243.3 498.3 240.6 502 240.3C505.6 240 507.8 245.6 507.9 246C507.9 245.7 507.6 242.6 510.4 242.4C513.3 242.2 513.3 246 513.3 246C513.3 246 515.6 243.5 518.6 243.6C521.6 243.8 522.2 246.7 522.2 246.7C522.2 246.7 523.9 244.2 527.5 245.1C531.2 245.9 531.7 251.1 537.2 251.1Z", "fill", "#982245"], ["id", "Vector_136", "opacity", "0.25", "d", "M521.7 251.1H487.6V244.1C487.6 244.1 488.3 242.4 490.3 241.4C491.8 241.5 494.4 242 495.5 244C497.1 246.9 497.2 249.6 497.2 249.6C497.2 249.6 500.5 244.8 503.2 245.6C505.9 246.4 507.3 249.6 507.3 249.6C507.3 249.6 510.1 246.6 512.5 247.6C513.6 248.2 517.8 249.7 521.7 251.1Z", "fill", "black"], ["id", "Vector_137", "d", "M423.7 253C423.5 252.9 417.7 237.1 424.4 228.1C423.5 234.5 424 239.7 424 239.7L423.1 240.6L424.1 240.9C424.1 240.9 424.8 249.7 425.1 250.8C424.4 244.2 426.2 240.3 426.2 240.3C426.2 240.3 425.9 245 426.5 246.7L426 247.3L426.5 247.2C426.5 247.2 426.2 250 426.5 250.9C426.5 250.9 430.3 239.7 428.5 234.7C430.8 238.3 430.2 244.3 430.2 244.3L429.6 244.5L430 244.8C430 244.8 429 251.2 426.8 253", "fill", "#2F1829"], ["id", "Group_32"], ["id", "Vector_138", "d", "M197 247.9C197 247.9 167.7 228.2 150.6 230C161 224.9 186.5 233.9 186.5 233.9L187.5 236.2L188.2 234.9C188.2 234.9 193.3 235 199.5 237.5C174.5 216.5 158.1 214.5 158.1 214.5C158.1 214.5 165.6 213.1 175.6 215.3C185.6 217.5 190.4 221.5 190.4 221.5L192.7 225.5L193.9 223.3L218.9 248.5", "fill", "black"], ["id", "Vector_139", "d", "M174.2 250.2C174.2 250.2 161.8 247.6 154.1 238.3C167.3 239.7 173 244.4 174.2 250.2Z", "stroke", "#1F3247", "stroke-width", "0.9271", "stroke-miterlimit", "10"], ["id", "Group_33"], ["id", "Vector_140", "d", "M215.5 194.6C214.4 219.4 217 228.3 217 228.3L213.6 229.9C213.6 229.9 213.7 230 213.8 230.1C214.5 230.7 216.3 232.3 216.9 232.9C217.4 233.4 215.6 241 214.5 245.2C214.1 246.9 213.8 248.1 213.8 248.1L209.3 248.3L209.1 247.6L207.8 244.2C207.8 244.2 206 236.7 206.1 226.8C206.1 216.9 208.1 204.5 215.5 194.6Z", "fill", "#FFADAE"], ["id", "Group_34", "opacity", "0.25"], ["id", "Vector_141", "opacity", "0.25", "d", "M212 248.1C210.9 243.6 210.2 239.1 209.6 234.6C209.1 230 208.8 225.5 208.9 220.9C209 216.3 209.4 211.7 210.4 207.3C211.4 202.8 213 198.5 215.5 194.6C213.1 198.5 211.5 202.8 210.5 207.3C209.5 211.8 209.1 216.3 209.1 220.9C209 225.5 209.4 230 209.9 234.6C210.5 239.1 211.3 243.6 212.4 248.1C212.4 248.2 212.4 248.4 212.2 248.4C212.2 248.3 212 248.3 212 248.1Z", "fill", "white"], ["id", "Vector_142", "opacity", "0.25", "d", "M216.9 232.8C217.4 233.3 215.6 240.9 214.5 245.1C212.5 246.2 210.5 247 209 247.6L207.7 244.2C207.7 244.2 205.9 236.7 206 226.8C208 228 211 229.5 213.8 230C214.4 230.6 216.3 232.2 216.9 232.8Z", "fill", "black"], ["id", "Group_35"], ["id", "Vector_143", "d", "M233 211.6C226.9 222.3 225.1 230 224.6 233.7C224.4 235.4 224.4 236.3 224.4 236.3H222.2L223.6 237.8L222.9 244.6L222.6 247.6L218.9 237.7C219 236.8 219.2 235.7 219.4 234.3C219.9 231.8 220.7 228.6 222 225.3C222.6 223.8 223.3 222.3 224.1 220.9C226.3 217.2 229.1 213.9 233 211.6Z", "fill", "#F3475C"], ["id", "Group_36", "opacity", "0.25"], ["id", "Vector_144", "opacity", "0.25", "d", "M220.2 241.7C220.2 238.9 220.5 236.1 221.1 233.3C221.6 230.5 222.4 227.9 223.5 225.3C224.5 222.7 225.9 220.2 227.4 217.9L228.6 216.2L230 214.6C230.2 214.3 230.5 214.1 230.7 213.8L231.5 213.1L233 211.7L231.5 213.2L230.8 213.9C230.6 214.2 230.3 214.4 230.1 214.7L228.8 216.3L227.6 218C226.1 220.3 224.7 222.8 223.8 225.4C222.8 228 222.1 230.7 221.5 233.4C221 236.1 220.7 238.9 220.7 241.7C220.7 241.8 220.6 241.9 220.5 241.9C220.3 241.9 220.2 241.8 220.2 241.7Z", "fill", "white"], ["id", "Vector_145", "opacity", "0.25", "d", "M224.4 236.4H222.2L223.6 237.9L222.9 244.7L221.7 245.3L218.9 237.7C219 236.8 219.2 235.7 219.4 234.3C220.5 234.7 222.4 235 224.5 233.8C224.4 235.5 224.4 236.4 224.4 236.4Z", "fill", "black"], ["id", "Vector_146", "d", "M254 251H241.6L187.6 251.1H171.6C171.6 251.1 172.9 246.8 179.2 244.8C185.5 242.8 187.3 246.9 187.3 246.9C187.3 246.9 187 238.7 194.4 235.9C201.8 233.1 205.1 242.5 205.1 242.5C205.1 242.5 206.6 237.9 214.5 237.5C222.4 237.1 221.6 243.3 221.6 243.3C221.6 243.3 226.1 238.3 234.2 239.4C242.3 240.5 243.1 247 243.1 247C243.1 247 250.2 244.8 254 251Z", "fill", "#982245"], ["id", "Vector_147", "opacity", "0.25", "d", "M241.6 251L187.6 251.1C190.4 248.6 195 245.4 199.8 245.3C207.7 245.2 209 248.1 209 248.1C209 248.1 213.9 242.9 217.7 243.8C221.6 244.7 221.7 248.8 221.7 248.8C221.7 248.8 234.1 245.9 241.6 251Z", "fill", "black"], ["id", "Vector_148", "d", "M262.9 254.5C262.9 254.5 253.9 238.6 256.6 223.2C259.2 235.3 265.7 243.3 265.7 243.3L263.1 245.4H265.7L271.3 256.1L263.7 254.5V255.2L262.9 254.5Z", "fill", "#2F1829"], ["id", "paint0_linear", "x1", "327.54", "y1", "250.471", "x2", "330.184", "y2", "46.9149", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#E8D197"], ["offset", "1", "stop-color", "#FEF5DA"], ["id", "paint1_linear", "x1", "326.925", "y1", "147.902", "x2", "330.395", "y2", "242.079", "gradientUnits", "userSpaceOnUse"], ["offset", "1", "stop-opacity", "0"], ["id", "paint2_linear", "x1", "344.3", "y1", "64.1527", "x2", "344.961", "y2", "87.284", "gradientUnits", "userSpaceOnUse"], ["stop-color", "white"], ["offset", "1", "stop-color", "white", "stop-opacity", "0"], ["id", "paint3_linear", "x1", "130.102", "y1", "26.1247", "x2", "132.084", "y2", "77.0139", "gradientUnits", "userSpaceOnUse"], ["id", "paint4_linear", "x1", "455.752", "y1", "229.215", "x2", "433.942", "y2", "41.3544", "gradientUnits", "userSpaceOnUse"], ["id", "paint5_linear", "x1", "60.0761", "y1", "430.474", "x2", "23.3198", "y2", "113.867", "gradientUnits", "userSpaceOnUse"], ["id", "paint6_linear", "x1", "197.311", "y1", "242.736", "x2", "195.989", "y2", "148.447", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#2F1829"], ["offset", "1", "stop-color", "#3B223C"], ["id", "paint7_linear", "x1", "322.636", "y1", "240.979", "x2", "321.314", "y2", "146.691", "gradientUnits", "userSpaceOnUse"], ["id", "paint8_linear", "x1", "447.456", "y1", "239.229", "x2", "446.134", "y2", "144.941", "gradientUnits", "userSpaceOnUse"], ["id", "paint9_linear", "x1", "281.068", "y1", "73.4007", "x2", "292.303", "y2", "109.089", "gradientUnits", "userSpaceOnUse"], ["id", "paint10_linear", "x1", "567.282", "y1", "246.761", "x2", "567.144", "y2", "239.051", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FECBA6"], ["offset", "1", "stop-color", "#D17878"], ["id", "paint11_linear", "x1", "575.336", "y1", "236.543", "x2", "417.383", "y2", "126.175", "gradientUnits", "userSpaceOnUse"], ["id", "paint12_linear", "x1", "529.726", "y1", "200.324", "x2", "554.29", "y2", "176.972", "gradientUnits", "userSpaceOnUse"], ["id", "paint13_linear", "x1", "568.688", "y1", "209.407", "x2", "569.018", "y2", "182.751", "gradientUnits", "userSpaceOnUse"], ["id", "paint14_linear", "x1", "552.343", "y1", "166.843", "x2", "558.043", "y2", "168.082", "gradientUnits", "userSpaceOnUse"], ["id", "paint15_linear", "x1", "550.457", "y1", "250.958", "x2", "552.881", "y2", "239.337", "gradientUnits", "userSpaceOnUse"], ["id", "paint16_linear", "x1", "95.6885", "y1", "163.838", "x2", "93.7609", "y2", "174.468", "gradientUnits", "userSpaceOnUse"], ["id", "paint17_linear", "x1", "75.5473", "y1", "236.543", "x2", "233.501", "y2", "126.174", "gradientUnits", "userSpaceOnUse"], ["id", "paint18_linear", "x1", "124.267", "y1", "190.961", "x2", "113.114", "y2", "194.142", "gradientUnits", "userSpaceOnUse"], [1, "container"], [1, "button", "float-right", 3, "click"], [1, "shift"], [1, "mask"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "g", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "g", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "g", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "g", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "g", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "g", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "g", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "g", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "g", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "g", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "g", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "g", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "g", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "g", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "g", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "g", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "g", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "g", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "g", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "g", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "g", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "g", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "g", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "linearGradient", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "stop", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "stop", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "linearGradient", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "stop", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "linearGradient", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "stop", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "linearGradient", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "stop", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "linearGradient", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "stop", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "stop", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "linearGradient", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "stop", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "stop", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "linearGradient", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "stop", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "linearGradient", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "stop", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "linearGradient", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "stop", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "linearGradient", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "stop", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "linearGradient", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "stop", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "linearGradient", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "stop", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "linearGradient", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "stop", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "linearGradient", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "stop", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "linearGradient", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "stop", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "linearGradient", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "stop", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "linearGradient", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "stop", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "linearGradient", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "stop", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "linearGradient", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "stop", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "button", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_254_listener() { return ctx.redirectToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " CONTINUE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "div", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-wrapper[_ngcontent-%COMP%] {\n  background-color: #141019;\n  background: radial-gradient(at 50% -20%, #908392, #0d060e) fixed;\n}\n\n.adjust[_ngcontent-%COMP%] {\n  padding-bottom: 25%;\n}\n\n#handboy[_ngcontent-%COMP%] {\n  animation: swing ease-in-out 1.3s infinite alternate;\n  transform-origin: 98% 98%;\n  transform-box: fill-box;\n}\n\n#girllight[_ngcontent-%COMP%] {\n  animation: swing ease-in-out 1.3s infinite alternate;\n  transform-origin: 0% 97%;\n  transform-box: fill-box;\n}\n\n#hairgirl[_ngcontent-%COMP%] {\n  animation: swinghair ease-in-out 1.3s infinite alternate;\n  transform-origin: 60% 0%;\n  transform-box: fill-box;\n}\n\n#zero[_ngcontent-%COMP%] {\n  transform-origin: bottom;\n  transform-box: fill-box;\n}\n\n@keyframes swing {\n  0% {\n    transform: rotate(10deg);\n  }\n  100% {\n    transform: rotate(-10deg);\n  }\n}\n\n@keyframes swinghair {\n  0% {\n    transform: rotate(6deg);\n  }\n  100% {\n    transform: rotate(-6deg);\n  }\n}\n\n@keyframes zero {\n  20%, 40%, 60%, 80%, 100% {\n    -webkit-transform-origin: top center;\n  }\n  20% {\n    -webkit-transform: rotate(15deg);\n  }\n  40% {\n    -webkit-transform: rotate(-10deg);\n  }\n  60% {\n    -webkit-transform: rotate(5deg);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n  }\n}\n\n#zero[_ngcontent-%COMP%] {\n  animation: zero;\n  animation-duration: 10s;\n  animation-iteration-count: infinite;\n}\n\n.row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  animation: zero;\n  animation-duration: 10s;\n  animation-iteration-count: infinite;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: 2px solid #2e2e2e;\n  cursor: pointer;\n  letter-spacing: 0.2125rem;\n  overflow: hidden;\n  padding: 10px 20px;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  transition: background 5s cubic-bezier(0.19, 1, 0.22, 1), border 1s cubic-bezier(0.19, 1, 0.22, 1), color 0.6s cubic-bezier(0.19, 1, 0.22, 1);\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #969696;\n  font-family: \"Varela Round\";\n  text-decoration: none;\n}\n\n.button[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.5);\n  height: 100px;\n  position: absolute;\n  transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);\n  transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 200px;\n}\n\n.button[_ngcontent-%COMP%]   .shift[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  border-color: #fff;\n  box-shadow: 0 0 5px rgba(255, 245, 245, 0.8);\n  transition: background 0s;\n}\n\n.button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.button[_ngcontent-%COMP%]:hover   .mask[_ngcontent-%COMP%] {\n  background-color: #fff;\n  transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);\n}\n\n.button[_ngcontent-%COMP%]:hover   .shift[_ngcontent-%COMP%] {\n  transform: translateX(5px);\n}\n\n.button[_ngcontent-%COMP%]:active {\n  background-color: #fff;\n}\n\n.button[_ngcontent-%COMP%]:active   a[_ngcontent-%COMP%] {\n  color: #202020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0VBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvREFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9EQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0RBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUFLLHdCQUFBO0VBRVA7RUFERTtJQUFPLHlCQUFBO0VBSVQ7QUFDRjs7QUFGQTtFQUNJO0lBQUssdUJBQUE7RUFLUDtFQUpFO0lBQU8sd0JBQUE7RUFPVDtBQUNGOztBQUxBO0VBQ0k7SUFBMkIsb0NBQUE7RUFRN0I7RUFQRTtJQUFNLGdDQUFBO0VBVVI7RUFURTtJQUFNLGlDQUFBO0VBWVI7RUFYRTtJQUFNLCtCQUFBO0VBY1I7RUFiRTtJQUFNLGdDQUFBO0VBZ0JSO0VBZkU7SUFBTywrQkFBQTtFQWtCVDtBQUNGOztBQWhCQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FBa0JKOztBQWZBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUFrQko7O0FBZkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2SUFDQTtFQUdBLHlCQUFBO1VBQUEsaUJBQUE7QUFlSjs7QUFaQTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBZUo7O0FBWkE7RUFDSSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxtREFBQTtFQUNBLFlBQUE7QUFlSjs7QUFaQTtFQUNJLHFCQUFBO0VBQ0EsbURBQUE7QUFlSjs7QUFaQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0FBZUo7O0FBWkE7RUFDSSxXQUFBO0FBZUo7O0FBWkE7RUFDSSxzQkFBQTtFQUNBLGdFQUFBO0FBZUo7O0FBWkE7RUFDSSwwQkFBQTtBQWVKOztBQVpBO0VBQ0ksc0JBQUE7QUFlSjs7QUFaQTtFQUNJLGNBQUE7QUFlSiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTQxMDE5O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAtMjAlLCAjOTA4MzkyLCAjMGQwNjBlKSBmaXhlZDtcclxufVxyXG5cclxuLmFkanVzdCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG59XHJcblxyXG4jaGFuZGJveSB7XHJcbiAgICBhbmltYXRpb246IHN3aW5nIGVhc2UtaW4tb3V0IDEuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogOTglIDk4JTtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94OyAgIFxyXG59XHJcblxyXG4jZ2lybGxpZ2h0IHtcclxuICAgIGFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgMS4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA5NyU7XHJcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxufVxyXG5cclxuI2hhaXJnaXJsIHtcclxuICAgIGFuaW1hdGlvbjogc3dpbmdoYWlyIGVhc2UtaW4tb3V0IDEuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbn1cclxuXHJcbiN6ZXJvIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46Ym90dG9tO1xyXG4gICAgdHJhbnNmb3JtLWJveDpmaWxsLWJveDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzd2luZyB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzd2luZ2hhaXIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHplcm8ge1xyXG4gICAgMjAlLCA0MCUsIDYwJSwgODAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyOyB9IFxyXG4gICAgMjAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7IH0gXHJcbiAgICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7IH0gXHJcbiAgICA2MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpOyB9IFxyXG4gICAgODAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7IH0gXHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSBcclxufVxyXG5cclxuI3plcm8ge1xyXG4gICAgYW5pbWF0aW9uOiB6ZXJvO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLnJvdyBzdmcge1xyXG4gICAgYW5pbWF0aW9uOiB6ZXJvO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmUyZTJlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjEyNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogXHJcbiAgICBiYWNrZ3JvdW5kIDVzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKSxcclxuICAgIGJvcmRlciAxcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSksXHJcbiAgICBjb2xvciAwLjZzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiAgICBcclxuLmJ1dHRvbiBhIHtcclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuICAgIFxyXG4uYnV0dG9uIC5tYXNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTIwJSwgLTUwcHgsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxLjFzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4gICAgXHJcbi5idXR0b24gLnNoaWZ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAxLjFzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxufVxyXG4gICAgXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcclxufVxyXG4gICAgXHJcbi5idXR0b246aG92ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4gICAgXHJcbi5idXR0b246aG92ZXIgLm1hc2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTIwJSwgLTEwMHB4LCAwKSByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XHJcbn1cclxuICAgIFxyXG4uYnV0dG9uOmhvdmVyIC5zaGlmdCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG4gICAgXHJcbi5idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuICAgIFxyXG4uYnV0dG9uOmFjdGl2ZSBhIHtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/layout/layout.component */ "JXfj");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_password_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/password/password.component */ "w4vM");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _auth_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/page-not-found/page-not-found.component */ "nVru");









const routes = [
    { path: '', redirectTo: '/web/home', pathMatch: 'full' },
    { path: 'web', component: _view_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./web/web.module */ "wGiJ")).then(a => a.WebModule) },
    { path: 'private', component: _view_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./private/private.module */ "5+t2")).then(a => a.PrivateModule) },
    { path: 'gazette', component: _view_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(a => a.BlogModule) },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'password', component: _auth_password_password_component__WEBPACK_IMPORTED_MODULE_4__["PasswordComponent"] },
    { path: '**', component: _auth_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled',
                    })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "w4vM":
/*!*****************************************************!*\
  !*** ./src/app/auth/password/password.component.ts ***!
  \*****************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
PasswordComponent.ɵfac = function PasswordComponent_Factory(t) { return new (t || PasswordComponent)(); };
PasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordComponent, selectors: [["app-password"]], decls: 2, vars: 0, template: function PasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-password',
                templateUrl: './password.component.html',
                styleUrls: ['./password.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wGiJ":
/*!***********************************!*\
  !*** ./src/app/web/web.module.ts ***!
  \***********************************/
/*! exports provided: WebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebModule", function() { return WebModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _web_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-routing.module */ "YYYi");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "6OIh");
/* harmony import */ var _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persona/persona.component */ "AgZI");
/* harmony import */ var _eminent_eminent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eminent/eminent.component */ "1d/W");
/* harmony import */ var _itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itinerary/itinerary.component */ "G7zu");
/* harmony import */ var _fascinate_fascinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fascinate/fascinate.component */ "PDSm");










class WebModule {
}
WebModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebModule });
WebModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WebModule_Factory(t) { return new (t || WebModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _web_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__["PersonaComponent"],
        _eminent_eminent_component__WEBPACK_IMPORTED_MODULE_6__["EminentComponent"],
        _itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_7__["ItineraryComponent"],
        _fascinate_fascinate_component__WEBPACK_IMPORTED_MODULE_8__["FascinateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _web_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__["PersonaComponent"],
                    _eminent_eminent_component__WEBPACK_IMPORTED_MODULE_6__["EminentComponent"],
                    _itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_7__["ItineraryComponent"],
                    _fascinate_fascinate_component__WEBPACK_IMPORTED_MODULE_8__["FascinateComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _web_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map