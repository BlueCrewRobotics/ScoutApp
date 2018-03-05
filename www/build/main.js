webpackJsonp([11],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddMatchPage = /** @class */ (function () {
    function AddMatchPage(navCtrl, navParams, viewCtrl, http, alertCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.noTeams = [];
    }
    AddMatchPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddMatchPage.prototype.save = function () {
        var _this = this;
        if (isNaN(this.teamOne) == true) {
            this.numberNotNumberError = true;
        }
        else if (isNaN(this.teamTwo) == true) {
            this.numberNotNumberError = true;
        }
        else if (isNaN(this.teamThree) == true) {
            this.numberNotNumberError = true;
        }
        if (isNaN(this.scaleTime) == true) {
            this.zeroTimeError = true;
        }
        else if (isNaN(this.switchTime) == true) {
            this.zeroTimeError = true;
        }
        if (parseInt(this.scaleTime) + parseInt(this.switchTime) > 150) {
            this.longTimeError = true;
        }
        this.storage.get("teams").then(function (val) {
            var teams = JSON.parse(val);
            var numbers = [];
            for (var i = 0, len = teams.length; i < len; i++) {
                numbers.push(teams[i]['teamNumber']);
            }
            if (numbers.indexOf(_this.teamOne) > -1) {
            }
            else {
                _this.noTeamError = true;
                _this.noTeams.push(_this.teamOne);
            }
            if (numbers.indexOf(_this.teamTwo) > -1) {
            }
            else {
                _this.noTeamError = true;
                _this.noTeams.push(_this.teamTwo);
            }
            if (numbers.indexOf(_this.teamThree) > -1) {
            }
            else {
                _this.noTeamError = true;
                _this.noTeams.push(_this.teamThree);
            }
            if (_this.numberNotNumberError == true) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Team Error!',
                    subTitle: 'Please enter only team numbers in the team fields!',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.numberNotNumberError = false;
            }
            else if (_this.noTeamError == true) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'No Team(s) Found!',
                    subTitle: 'No team(s) have been found with the following numbers: ' + _this.noTeams.join(", ") + '!',
                    buttons: ['OK']
                });
                alert_2.present();
                _this.noTeamError = false;
                _this.noTeams = [];
            }
            else if (_this.zeroTimeError == true) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Time Error!',
                    subTitle: 'Please enter the amount of time that a team controlled their switch/scale!',
                    buttons: ['OK']
                });
                alert_3.present();
                _this.zeroTimeError = false;
            }
            else if (_this.longTimeError == true) {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Time Error!',
                    subTitle: 'Please enter an amount of time less than or equal to 150 seconds!',
                    buttons: ['OK']
                });
                alert_4.present();
                _this.longTimeError = false;
            }
            else {
                for (var i = 0, len = teams.length; i < len; i++) {
                    if (_this.win == true) {
                        if (teams[i]['teamNumber'] == _this.teamOne) {
                            teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
                        }
                        if (teams[i]['teamNumber'] == _this.teamTwo) {
                            teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
                        }
                        if (teams[i]['teamNumber'] == _this.teamThree) {
                            teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
                        }
                    }
                    else {
                        if (teams[i]['teamNumber'] == _this.teamOne) {
                            teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
                        }
                        if (teams[i]['teamNumber'] == _this.teamTwo) {
                            teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
                        }
                        if (teams[i]['teamNumber'] == _this.teamThree) {
                            teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
                        }
                    }
                    if (teams[i]['teamNumber'] == _this.teamOne) {
                        if (_this.force == true) {
                            teams[i]['forces'] = (parseInt(teams[i]['forces']) + 1).toString();
                        }
                        if (_this.boost == true) {
                            teams[i]['boosts'] = (parseInt(teams[i]['boosts']) + 1).toString();
                        }
                        if (_this.levitate == true) {
                            teams[i]['levitates'] = (parseInt(teams[i]['levitates']) + 1).toString();
                        }
                        if (_this.scaleTime) {
                            teams[i]['timeScale'] = (parseInt(teams[i]['timeScale']) + parseInt(_this.scaleTime)).toString();
                        }
                        if (_this.switchTime) {
                            teams[i]['timeSwitch'] = (parseInt(teams[i]['timeSwitch']) + parseInt(_this.switchTime)).toString();
                        }
                    }
                    if (teams[i]['teamNumber'] == _this.teamTwo) {
                        if (_this.force == true) {
                            teams[i]['forces'] = (parseInt(teams[i]['forces']) + 1).toString();
                        }
                        if (_this.boost == true) {
                            teams[i]['boosts'] = (parseInt(teams[i]['boosts']) + 1).toString();
                        }
                        if (_this.levitate == true) {
                            teams[i]['levitates'] = (parseInt(teams[i]['levitates']) + 1).toString();
                        }
                        if (_this.scaleTime) {
                            teams[i]['timeScale'] = (parseInt(teams[i]['timeScale']) + parseInt(_this.scaleTime)).toString();
                        }
                        if (_this.switchTime) {
                            teams[i]['timeSwitch'] = (parseInt(teams[i]['timeSwitch']) + parseInt(_this.switchTime)).toString();
                        }
                    }
                    if (teams[i]['teamNumber'] == _this.teamThree) {
                        if (_this.force == true) {
                            teams[i]['forces'] = (parseInt(teams[i]['forces']) + 1).toString();
                        }
                        if (_this.boost == true) {
                            teams[i]['boosts'] = (parseInt(teams[i]['boosts']) + 1).toString();
                        }
                        if (_this.levitate == true) {
                            teams[i]['levitates'] = (parseInt(teams[i]['levitates']) + 1).toString();
                        }
                        if (_this.scaleTime) {
                            teams[i]['timeScale'] = (parseInt(teams[i]['timeScale']) + parseInt(_this.scaleTime)).toString();
                        }
                        if (_this.switchTime) {
                            teams[i]['timeSwitch'] = (parseInt(teams[i]['timeSwitch']) + parseInt(_this.switchTime)).toString();
                        }
                    }
                }
                teams = JSON.stringify(teams);
                _this.storage.set("teams", teams);
                _this.viewCtrl.dismiss();
            }
        });
    };
    AddMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-match',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/add-match/add-match.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Match</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-style">\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n\n      <ion-item-group>\n          <ion-item-divider color="dark">Team Numbers</ion-item-divider>\n        <ion-item>\n          <ion-label fixed>Team One:</ion-label>\n          <ion-input type="tel" [(ngModel)]="teamOne" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Team Two:</ion-label>\n          <ion-input type="tel" [(ngModel)]="teamTwo" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Team Three:</ion-label>\n          <ion-input type="tel" [(ngModel)]="teamThree" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="dark">Stats</ion-item-divider>\n        <ion-item>\n          <ion-label>Winning Alliance</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="win" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n      </ion-item-group>\n    \n      <ion-item-group>\n        <ion-item-divider color="dark">Power Ups</ion-item-divider>\n        <ion-item>\n          <ion-label>Force</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="force" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Boost</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="boost" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Levitate</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="levitate" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="dark">Control Time</ion-item-divider>\n        <ion-item>\n          <ion-label fixed>Scale:</ion-label>\n          <ion-input type="tel" [(ngModel)]="scaleTime" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Switch:</ion-label>\n          <ion-input type="tel" [(ngModel)]="switchTime" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n      </ion-item-group>\n      \n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/add-match/add-match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AddMatchPage);
    return AddMatchPage;
}());

//# sourceMappingURL=add-match.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTeamPage = /** @class */ (function () {
    function AddTeamPage(navCtrl, navParams, viewCtrl, http, alertCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.teams = [];
    }
    AddTeamPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddTeamPage.prototype.selectDriveTrain = function () {
    };
    AddTeamPage.prototype.save = function () {
        var _this = this;
        if (this.name) {
        }
        else {
            this.nameError = true;
        }
        if (this.number) {
        }
        else {
            this.numberError = true;
        }
        if (isNaN(this.number) == true) {
            this.numberNotNumberError = true;
        }
        if (this.groundCubes == true) {
            this.gc = "Yes";
        }
        else {
            this.gc = "No";
        }
        if (this.returnCubes == true) {
            this.rc = "Yes";
        }
        else {
            this.rc = "No";
        }
        if (this.stackCubes == true) {
            this.sc = "Yes";
        }
        else {
            this.sc = "No";
        }
        if (this.switch == true) {
            this.sw = "Yes";
        }
        else {
            this.sw = "No";
        }
        if (this.scale == true) {
            this.sl = "Yes";
        }
        else {
            this.sl = "No";
        }
        if (this.climb == true) {
            this.cl = "Yes";
        }
        else {
            this.cl = "No";
        }
        if (this.driveTrainType == "" || this.driveTrainType == null) {
            this.driveTrainError = true;
        }
        if (this.liftOthers == true) {
            this.lo = "Yes";
        }
        else {
            this.lo = "No";
        }
        if (this.nameError == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Team Name!',
                subTitle: 'You must enter a team name!',
                buttons: ['OK']
            });
            alert_1.present();
            this.nameError = false;
        }
        else if (this.numberError == true) {
            var alert_2 = this.alertCtrl.create({
                title: 'Team Number!',
                subTitle: 'You must enter a team number!',
                buttons: ['OK']
            });
            alert_2.present();
            this.numberError = false;
        }
        else if (this.numberNotNumberError == true) {
            var alert_3 = this.alertCtrl.create({
                title: 'Team Number!',
                subTitle: 'Please enter a valid number!',
                buttons: ['OK']
            });
            alert_3.present();
            this.numberNotNumberError = false;
        }
        else if (this.driveTrainError == true) {
            var alert_4 = this.alertCtrl.create({
                title: 'Drive Train!',
                subTitle: 'Please select a drive train! If you do not know what type it is, select \'Unknown\'.',
                buttons: ['OK']
            });
            alert_4.present();
            this.driveTrainError = false;
        }
        else {
            this.team = {
                "teamName": this.name,
                "teamNumber": this.number,
                "comments": this.comments,
                "groundCubes": this.gc,
                "returnCubes": this.rc,
                "stackCubes": this.sc,
                "switch": this.sw,
                "scale": this.sl,
                "climb": this.cl,
                "driveTrainType": this.driveTrainType,
                "liftOthers": this.lo,
                "wins": "0",
                "losses": "0",
                "forces": "0",
                "boosts": "0",
                "levitates": "0",
                "timeScale": "0",
                "timeSwitch": "0"
            };
            this.storage.get("teams").then(function (val) {
                if (val == "" || val == null) {
                    var data = "[" + JSON.stringify(_this.team) + "]";
                    _this.storage.set("teams", data);
                }
                else {
                    var existing = val.replace("]", ", ");
                    var newData = existing + JSON.stringify(_this.team) + "]";
                    _this.storage.set("teams", newData);
                }
            });
            this.viewCtrl.dismiss();
        }
    };
    AddTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-team',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/add-team/add-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Team</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n\n      <ion-item-group>\n        <ion-item-divider color="dark">General Information</ion-item-divider>\n        <ion-item>\n          <ion-label fixed>Name:</ion-label>\n          <ion-input type="text" [(ngModel)]="name" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Number:</ion-label>\n          <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Comments:</ion-label>\n          <ion-textarea type="tel" [(ngModel)]="comments" [ngModelOptions]="{standalone:true}"></ion-textarea>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="dark">Cubes</ion-item-divider>\n        <ion-item>\n          <ion-label>Collects Ground Cubes</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="groundCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Collects Cubes from Exchange</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="returnCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Collects Cubes from Stacks</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="stackCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="dark">Robot</ion-item-divider>\n        <ion-item>\n          <ion-label>Drive Train Type</ion-label>\n          <ion-select [(ngModel)]="driveTrainType"  [ngModelOptions]="{standalone:true}">\n            <ion-option value="Kit of Parts">Kit of Parts</ion-option>\n            <ion-option value="Mecanum">Mecanum</ion-option>\n            <ion-option value="Omni">Omni</ion-option>\n            <ion-option value="Treads">Treads</ion-option>\n            <ion-option value="West Coast">West Coast</ion-option>\n            <ion-option value="Swerve">Swerve</ion-option>\n            <ion-option value="Hybrid">Hybrid</ion-option>\n            <ion-option value="Butterfly">Butterfly</ion-option>\n            <ion-option value="Kiwi">Kiwi</ion-option>\n            <ion-option value="Custom">Custom</ion-option>\n            <ion-option value="Unknown">Unknown</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Switch</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="switch" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Scale</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="scale" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Climb</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="climb" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Lift Other Robots</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="liftOthers" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n      </ion-item-group>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/add-team/add-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AddTeamPage);
    return AddTeamPage;
}());

//# sourceMappingURL=add-team.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditTeamPage = /** @class */ (function () {
    function EditTeamPage(navCtrl, navParams, viewCtrl, http, alertCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
    }
    EditTeamPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EditTeamPage.prototype.save = function () {
        var _this = this;
        if (this.name) {
        }
        else {
            this.nameError = true;
        }
        if (this.number) {
        }
        else {
            this.numberError = true;
        }
        if (isNaN(this.number) == true) {
            this.numberNotNumberError = true;
        }
        if (this.groundCubes == true) {
            this.gc = "Yes";
        }
        else {
            this.gc = "No";
        }
        if (this.returnCubes == true) {
            this.rc = "Yes";
        }
        else {
            this.rc = "No";
        }
        if (this.stackCubes == true) {
            this.sc = "Yes";
        }
        else {
            this.sc = "No";
        }
        if (this.switch == true) {
            this.sw = "Yes";
        }
        else {
            this.sw = "No";
        }
        if (this.scale == true) {
            this.sl = "Yes";
        }
        else {
            this.sl = "No";
        }
        if (this.climb == true) {
            this.cl = "Yes";
        }
        else {
            this.cl = "No";
        }
        if (this.liftOthers == true) {
            this.lo = "Yes";
        }
        else {
            this.lo = "No";
        }
        if (this.nameError == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Team Name!',
                subTitle: 'You must enter a team name!',
                buttons: ['OK']
            });
            alert_1.present();
            this.nameError = false;
        }
        else if (this.numberError == true) {
            var alert_2 = this.alertCtrl.create({
                title: 'Team Number!',
                subTitle: 'You must enter a team number!',
                buttons: ['OK']
            });
            alert_2.present();
            this.numberError = false;
        }
        else if (this.numberNotNumberError == true) {
            var alert_3 = this.alertCtrl.create({
                title: 'Team Number!',
                subTitle: 'Please enter a valid number!',
                buttons: ['OK']
            });
            alert_3.present();
            this.numberNotNumberError = false;
        }
        else {
            this.team = {
                "teamName": this.name,
                "teamNumber": this.number,
                "comments": this.comments,
                "groundCubes": this.gc,
                "returnCubes": this.rc,
                "stackCubes": this.sc,
                "switch": this.sw,
                "scale": this.sl,
                "climb": this.cl,
                "wins": this.wins,
                "losses": this.losses,
                "forces": this.forces,
                "boosts": this.boosts,
                "levitates": this.levitates,
                "timeScale": this.timeScale,
                "timeSwitch": this.timeSwitch,
                "driveTrainType": this.driveTrainType,
                "liftOthers": this.lo
            };
            this.storage.get("teams").then(function (val) {
                var teams = JSON.parse(val);
                for (var i = 0, len = teams.length; i < len; i++) {
                    if (teams[i]['teamNumber'] == _this.number) {
                        teams[i] = _this.team;
                    }
                }
                teams = JSON.stringify(teams);
                _this.storage.set("teams", teams);
            });
            this.viewCtrl.dismiss();
        }
    };
    EditTeamPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('teamName');
        this.number = this.navParams.get('teamNumber');
        this.comments = this.navParams.get('comments');
        this.wins = this.navParams.get('wins');
        this.losses = this.navParams.get('losses');
        this.forces = this.navParams.get('forces');
        this.boosts = this.navParams.get('boosts');
        this.levitates = this.navParams.get('levitates');
        this.timeScale = this.navParams.get('timeScale');
        this.timeSwitch = this.navParams.get('timeSwitch');
        if (this.navParams.get('groundCubes') == "Yes") {
            this.groundCubes = true;
        }
        else {
            this.groundCubes = false;
        }
        if (this.navParams.get('returnCubes') == "Yes") {
            this.returnCubes = true;
        }
        else {
            this.returnCubes = false;
        }
        if (this.navParams.get('stackCubes') == "Yes") {
            this.stackCubes = true;
        }
        else {
            this.stackCubes = false;
        }
        if (this.navParams.get('switch') == "Yes") {
            this.switch = true;
        }
        else {
            this.switch = false;
        }
        if (this.navParams.get('scale') == "Yes") {
            this.scale = true;
        }
        else {
            this.scale = false;
        }
        if (this.navParams.get('climb') == "Yes") {
            this.climb = true;
        }
        else {
            this.climb = false;
        }
        if (this.navParams.get('liftOthers') == "Yes") {
            this.liftOthers = true;
        }
        else {
            this.liftOthers = false;
        }
        if (this.navParams.get('driveTrainType')) {
            this.driveTrainType = this.navParams.get('driveTrainType');
        }
    };
    EditTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-team',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/edit-team/edit-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{name}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="editTeamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="editTeamForm">\n      <ion-item-group>\n        <ion-item-divider color="dark">General Information</ion-item-divider>\n        <ion-item>\n          <ion-label stacked>Team Number:</ion-label>\n          <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Comments:</ion-label>\n          <ion-textarea type="tel" [(ngModel)]="comments" [ngModelOptions]="{standalone:true}"></ion-textarea>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="dark">Cubes</ion-item-divider>\n        <ion-item>\n          <ion-label>Ground Cubes</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="groundCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Exchange Cubes</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="returnCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Stack Cubes</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="stackCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="dark">Robot</ion-item-divider>\n        <ion-item>\n          <ion-label>Drive Train Type</ion-label>\n          <ion-select [(ngModel)]="driveTrainType"  [ngModelOptions]="{standalone:true}">\n            <ion-option value="Kit of Parts">Kit of Parts</ion-option>\n            <ion-option value="Mecanum">Mecanum</ion-option>\n            <ion-option value="Omni">Omni</ion-option>\n            <ion-option value="Treads">Treads</ion-option>\n            <ion-option value="West Coast">West Coast</ion-option>\n            <ion-option value="Swerve">Swerve</ion-option>\n            <ion-option value="Hybrid">Hybrid</ion-option>\n            <ion-option value="Butterfly">Butterfly</ion-option>\n            <ion-option value="Kiwi">Kiwi</ion-option>\n            <ion-option value="Custom">Custom</ion-option>\n            <ion-option value="Unknown">Unknown</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Switch</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="switch" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Scale</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="scale" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Climb</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="climb" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Lift Other Robots</ion-label>\n          <ion-toggle checked="false" [(ngModel)]="liftOthers" [ngModelOptions]="{standalone:true}"></ion-toggle>\n        </ion-item>\n      </ion-item-group>\n      \n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/edit-team/edit-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EditTeamPage);
    return EditTeamPage;
}());

//# sourceMappingURL=edit-team.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreditsPage = /** @class */ (function () {
    function CreditsPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    CreditsPage.prototype.launchSite = function (site) {
        if (site == "matt") {
            this.iab.create('http://matthewgallant.me');
        }
        else if (site == "jacob") {
            this.iab.create('https://github.com/jakeydoodle123');
        }
    };
    CreditsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-credits',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/credits/credits.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Credits</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padded>\n  <ion-card>\n    <ion-card-content>\n        <ion-list>\n          <ion-item>\n            Developed by:\n          </ion-item>\n          <button ion-item (click)="launchSite(\'matt\')">\n            Matthew Gallant\n          </button>\n          <button ion-item (click)="launchSite(\'jacob\')">\n            Jacob Mealey\n          </button>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/credits/credits.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], CreditsPage);
    return CreditsPage;
}());

//# sourceMappingURL=credits.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_data_team_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_team_add_team__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_match_add_match__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__initial_tutorial_initial_tutorial__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, teamsProvider, alertCtrl, loadingCtrl, modalCtrl, actionSheetCtrl, storage, http, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamsProvider = teamsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.http = http;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.teams = [];
        this.connection = 0;
        this.key = 0;
        this.general = 0;
        this.success = 0;
    }
    HomePage.prototype.addTeam = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Add Team',
                    icon: "people",
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_team_add_team__["a" /* AddTeamPage */]);
                        modal.onDidDismiss(function (data) {
                            _this.loadData();
                        });
                        modal.present();
                    }
                }, {
                    text: 'Add Match',
                    icon: "flag",
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__add_match_add_match__["a" /* AddMatchPage */]);
                        modal.onDidDismiss(function (data) {
                            _this.loadData();
                        });
                        modal.present();
                    }
                }, {
                    text: 'Cancel',
                    icon: "close",
                    role: 'cancel',
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.itemSelected = function (item) {
        var _this = this;
        console.log(item);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__team_data_team_data__["a" /* TeamDataPage */], item);
        modal.onDidDismiss(function (data) {
            _this.loadData();
        });
        modal.present();
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Download',
            message: 'Are you sure you want to download the current teams? It will erase all saved teams that you have not uploaded.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        refresher.complete();
                    }
                },
                {
                    text: 'Download',
                    handler: function () {
                        _this.teamsProvider.getTeams().subscribe(function (data) {
                            _this.teams = data;
                            _this.storage.set("teams", JSON.stringify(data));
                            refresher.complete();
                            var toast = _this.toastCtrl.create({
                                message: 'New Teams Have Been Downloaded.',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        }, function (error) {
                            _this.connection = _this.connection + 1;
                            _this.connectionError();
                        });
                        setTimeout(function () {
                            refresher.complete();
                        }, 2000);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        this.storage.get("teams").then(function (val) {
            _this.teams = JSON.parse(val);
        });
    };
    HomePage.prototype.loadDataFromServer = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Download Teams',
            message: 'Would you like to download the current index of teams now?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Download',
                    handler: function () {
                        _this.teamsProvider.getTeams().subscribe(function (data) {
                            _this.teams = data;
                            _this.storage.set("teams", JSON.stringify(data));
                            var toast = _this.toastCtrl.create({
                                message: 'New Teams Have Been Downloaded.',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        }, function (error) {
                            _this.connection = _this.connection + 1;
                            _this.connectionError();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.connectionError = function () {
        if (this.connection == 1) {
            var toast = this.toastCtrl.create({
                message: 'No Internet Connection. Please Connect to the Internet and Try Again.',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    HomePage.prototype.keyError = function () {
        if (this.key == 1) {
            var toast = this.toastCtrl.create({
                message: 'You Do Not Have a Valid Security Key. Please Change It in the Settings Tab to a Valid Key.',
                duration: 6000,
                position: 'top'
            });
            toast.present();
        }
    };
    HomePage.prototype.generalError = function () {
        if (this.general == 1) {
            var toast = this.toastCtrl.create({
                message: 'An Error Has Occured. Please Try Again Later.',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    HomePage.prototype.uploadSuccess = function () {
        if (this.success == 1) {
            var toast = this.toastCtrl.create({
                message: 'Your Teams Have Been Uploaded.',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    HomePage.prototype.uploadData = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Upload',
            message: 'Are you sure you want to upload your teams?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Upload',
                    handler: function () {
                        _this.storage.get('securityKey').then(function (sec) {
                            var loader = _this.loadingCtrl.create({
                                content: 'Uploading Teams...'
                            });
                            loader.present();
                            for (var i = 0, len = _this.teams.length; i < len; i++) {
                                var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
                                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                                var options = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                var params = 'securityKey=' + sec + '&name=' + _this.teams[i]['teamName'] + '&number=' + _this.teams[i]['teamNumber'] + '&comments=' + _this.teams[i]['comments'] + '&groundCubes=' + _this.teams[i]['groundCubes'] + '&returnCubes=' + _this.teams[i]['returnCubes'] + '&stackCubes=' + _this.teams[i]['stackCubes'] + '&switch=' + _this.teams[i]['switch'] + '&scale=' + _this.teams[i]['scale'] + '&climb=' + _this.teams[i]['climb'] + '&wins=' + _this.teams[i]['wins'] + '&losses=' + _this.teams[i]['losses'] + '&boosts=' + _this.teams[i]['boosts'] + '&forces=' + _this.teams[i]['forces'] + '&levitates=' + _this.teams[i]['levitates'] + '&timeScale=' + _this.teams[i]['timeScale'] + '&timeSwitch=' + _this.teams[i]['timeSwitch'] + '&driveTrainType=' + _this.teams[i]['driveTrainType'] + '&liftOthers=' + _this.teams[i]['liftOthers'];
                                _this.http.post("https://scout.bluecrew6153.org/api/team.php", params, options)
                                    .subscribe(function (data) {
                                    if (data["_body"] == "Failure") {
                                        _this.general = _this.general + 1;
                                        _this.generalError();
                                    }
                                    else if (data["_body"] == "SecurityError") {
                                        _this.key = _this.key + 1;
                                        _this.keyError();
                                    }
                                    else {
                                        _this.success = _this.success + 1;
                                        _this.uploadSuccess();
                                    }
                                }, function (error) {
                                    _this.connection = _this.connection + 1;
                                    _this.connectionError();
                                });
                            }
                            loader.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
        this.general = 0;
        this.key = 0;
        this.success = 0;
        this.connection = 0;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe('functionCall:tabSelected', function (eventData) {
            _this.loadDataFromServer();
        });
        this.storage.get('securityKey').then(function (val) {
            if (val == null || val == "") {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__signin_signin__["a" /* SigninPage */]);
                modal.onDidDismiss(function (data) {
                    var tutorial = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__initial_tutorial_initial_tutorial__["a" /* InitialTutorialPage */]);
                    tutorial.onDidDismiss(function (data) {
                        _this.loadDataFromServer();
                    });
                    tutorial.present();
                });
                modal.present();
            }
            else {
                _this.loadData();
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Blue Crew Scout</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addTeam()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="uploadData()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <button ion-item *ngFor="let item of teams" (click)="itemSelected(item)">\n        {{item.teamName}}\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_data_team_data__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PredictionsPage = /** @class */ (function () {
    function PredictionsPage(navCtrl, navParams, viewCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.calculatedTeams = [];
        // Define algorithm variables
        this.groundCubes = 1.2;
        this.exchangeCubes = 1.0;
        this.stackCubes = 1.4;
        this.driveTrain = 1.5;
        this.switch = 1.5;
        this.scale = 1.8;
        this.climb = 1.4;
        this.liftOthers = 1.5;
        this.wins = 2.0;
        this.losses = -1.5;
        this.forces = 1.3;
        this.boosts = 1.4;
        this.levitates = 1.5;
        this.timeScale = 2.0;
        this.timeSwitch = 1.8;
    }
    PredictionsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PredictionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("teams").then(function (val) {
            _this.teams = JSON.parse(val);
            for (var i = 0, len = _this.teams.length; i < len; i++) {
                var team = _this.teams[i];
                if (team['groundCubes'] == "Yes") {
                    var groundCubes = _this.groundCubes;
                }
                else {
                    var groundCubes = 0;
                }
                if (team['returnCubes'] == "Yes") {
                    var exchangeCubes = _this.exchangeCubes;
                }
                else {
                    var exchangeCubes = 0;
                }
                if (team['stackCubes'] == "Yes") {
                    var stackCubes = _this.stackCubes;
                }
                else {
                    var stackCubes = 0;
                }
                if (team['driveTrainType'] == "Mecanum") {
                    var driveTrain = 0;
                }
                else {
                    var driveTrain = _this.driveTrain;
                }
                if (team['scale'] == "Yes") {
                    var scale = _this.scale;
                }
                else {
                    var scale = 0;
                }
                if (team['climb'] == "Yes") {
                    var climb = _this.climb;
                }
                else {
                    var climb = 0;
                }
                if (team['liftOthers'] == "Yes") {
                    var liftOthers = _this.liftOthers;
                }
                else {
                    var liftOthers = 0;
                }
                if (team['switch'] == "Yes") {
                    var switchs = _this.switch;
                }
                else {
                    var switchs = 0;
                }
                var wins = parseInt(team['wins']) * _this.wins;
                var losses = parseInt(team['losses']) * _this.losses;
                var forces = parseInt(team['forces']) * _this.forces;
                var boosts = parseInt(team['boosts']) * _this.boosts;
                var levitates = parseInt(team['levitates']) * _this.levitates;
                var timeScale = parseInt(team['timeScale']) * _this.timeScale;
                var timeSwitch = parseInt(team['timeSwitch']) * _this.timeSwitch;
                var finalScore = groundCubes + exchangeCubes + stackCubes + driveTrain +
                    scale + climb + liftOthers + switchs + wins + losses + forces +
                    boosts + levitates + timeScale + timeSwitch;
                var thisTeam = {
                    "score": (finalScore / 100).toFixed(4),
                    "teamName": team['teamName']
                };
                _this.calculatedTeams.push(thisTeam);
            }
            _this.calculatedTeams.sort(function (a, b) { return a.score - b.score; });
            _this.calculatedTeams.reverse();
        });
    };
    PredictionsPage.prototype.itemSelected = function (item) {
        var _this = this;
        this.storage.get("teams").then(function (val) {
            var currentTeam = [];
            _this.teams = JSON.parse(val);
            for (var i = 0, len = _this.teams.length; i < len; i++) {
                if (_this.teams[i]['teamName'] == item['teamName']) {
                    currentTeam.push(_this.teams[i]);
                }
            }
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__team_data_team_data__["a" /* TeamDataPage */], currentTeam[0]);
            modal.present();
        });
    };
    PredictionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-predictions',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/predictions/predictions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Predictions Beta</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        Close\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let team of calculatedTeams" (click)="itemSelected(team)">\n      {{team.teamName}}: {{team.score}}&#37;\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/predictions/predictions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PredictionsPage);
    return PredictionsPage;
}());

//# sourceMappingURL=predictions.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionsTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__predictions_predictions__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PredictionsTabPage = /** @class */ (function () {
    function PredictionsTabPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    PredictionsTabPage.prototype.getPredictions = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__predictions_predictions__["a" /* PredictionsPage */]);
        modal.present();
    };
    PredictionsTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-predictions-tab',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/predictions-tab/predictions-tab.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Predictions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      Predictions Allows You to Get an Estimate of Which Teams May be Good Alliance Partners. Predictions is in Beta and Should not be Solely Used. Use Predictions With Your Own Discretion.\n    </ion-card-content>\n    <ion-item>\n      <button ion-button block icon-left large (click)="getPredictions()">\n        <ion-icon name="podium"></ion-icon>\n        Get Predictions\n      </button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/predictions-tab/predictions-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PredictionsTabPage);
    return PredictionsTabPage;
}());

//# sourceMappingURL=predictions-tab.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initial_tutorial_initial_tutorial__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, alertCtrl, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
    }
    SettingsPage.prototype.save = function () {
        this.storage.set('securityKey', this.securityKey);
    };
    SettingsPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    SettingsPage.prototype.reset = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Reset',
            message: 'Are you sure you want to reset the app? It will erase all saved teams that you have not uploaded.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Reset',
                    handler: function () {
                        _this.storage.clear();
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                        modal.onDidDismiss(function (data) {
                            var tutorial = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__initial_tutorial_initial_tutorial__["a" /* InitialTutorialPage */]);
                            tutorial.present();
                            tutorial.onDidDismiss(function (data) {
                                _this.events.publish('functionCall:tabSelected');
                                _this.navCtrl.parent.select(0);
                            });
                        });
                        modal.present();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('securityKey').then(function (val) {
            _this.securityKey = val;
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Settings</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="save()">\n          Save\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-label>Team Key:</ion-label>\n        <ion-input type="text" [(ngModel)]="securityKey" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <button ion-item (click)="reset()">\n        Reset Scout\n      </button>\n      <button ion-item (click)="about()">\n        About Scout\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-match/add-match.module": [
		289,
		10
	],
	"../pages/add-team/add-team.module": [
		290,
		9
	],
	"../pages/credits/credits.module": [
		292,
		8
	],
	"../pages/edit-team/edit-team.module": [
		291,
		7
	],
	"../pages/home/home.module": [
		293,
		6
	],
	"../pages/initial-tutorial/initial-tutorial.module": [
		294,
		5
	],
	"../pages/predictions-tab/predictions-tab.module": [
		296,
		4
	],
	"../pages/predictions/predictions.module": [
		295,
		3
	],
	"../pages/settings/settings.module": [
		297,
		2
	],
	"../pages/signin/signin.module": [
		298,
		1
	],
	"../pages/team-data/team-data.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamsProvider = /** @class */ (function () {
    function TeamsProvider(http) {
        this.http = http;
        this.url = 'https://scout.bluecrew6153.org/api/teams.json' + '?hash_id=' + Math.random();
    }
    TeamsProvider.prototype.getTeams = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    TeamsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TeamsProvider);
    return TeamsProvider;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credits_credits__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.credits = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__credits_credits__["a" /* CreditsPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padded>\n    <ion-card>\n        <img src="assets/imgs/crew.png"/>\n        <ion-card-content>\n            <ion-list>\n              <ion-item>\n                Blue Crew Scout\n              </ion-item>\n              <ion-item>\n                Version 1.0\n              </ion-item>\n              <ion-item>\n                2018 FIRST Power Up\n              </ion-item>\n              <ion-item>\n                &copy; 2018 Blue Crew Robotics\n              </ion-item>\n              <button ion-item (click)="credits()">\n                Show Credits\n              </button>\n            </ion-list>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__predictions_tab_predictions_tab__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.homeTab = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.settingsTab = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
        this.predictionsTab = __WEBPACK_IMPORTED_MODULE_3__predictions_tab_predictions_tab__["a" /* PredictionsTabPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homeTab" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="predictionsTab" tabTitle="Predictions" tabIcon="analytics"></ion-tab>\n  <ion-tab [root]="settingsTab" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_team_data_team_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_team_add_team__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_team_edit_team__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_add_match_add_match__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_initial_tutorial_initial_tutorial__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_credits_credits__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_predictions_tab_predictions_tab__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_predictions_predictions__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_teams_teams__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_team_data_team_data__["a" /* TeamDataPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_team_add_team__["a" /* AddTeamPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_team_edit_team__["a" /* EditTeamPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_match_add_match__["a" /* AddMatchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_initial_tutorial_initial_tutorial__["a" /* InitialTutorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_credits_credits__["a" /* CreditsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_predictions_tab_predictions_tab__["a" /* PredictionsTabPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_predictions_predictions__["a" /* PredictionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-match/add-match.module#AddMatchPageModule', name: 'AddMatchPage', segment: 'add-match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-team/add-team.module#AddTeamPageModule', name: 'AddTeamPage', segment: 'add-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-team/edit-team.module#EditTeamPageModule', name: 'EditTeamPage', segment: 'edit-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credits/credits.module#CreditsPageModule', name: 'CreditsPage', segment: 'credits', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initial-tutorial/initial-tutorial.module#InitialTutorialPageModule', name: 'InitialTutorialPage', segment: 'initial-tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions-tab/predictions-tab.module#PredictionsTabPageModule', name: 'PredictionsTabPage', segment: 'predictions-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-data/team-data.module#TeamDataPageModule', name: 'TeamDataPage', segment: 'team-data', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_team_data_team_data__["a" /* TeamDataPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_team_add_team__["a" /* AddTeamPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_team_edit_team__["a" /* EditTeamPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_match_add_match__["a" /* AddMatchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_initial_tutorial_initial_tutorial__["a" /* InitialTutorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_credits_credits__["a" /* CreditsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_predictions_tab_predictions_tab__["a" /* PredictionsTabPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_predictions_predictions__["a" /* PredictionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_teams_teams__["a" /* TeamsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_team_edit_team__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamDataPage = /** @class */ (function () {
    function TeamDataPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    TeamDataPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    TeamDataPage.prototype.editTeam = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__edit_team_edit_team__["a" /* EditTeamPage */], this.team);
        modal.onDidDismiss(function (data) {
            _this.viewCtrl.dismiss();
        });
        modal.present();
    };
    TeamDataPage.prototype.setMyStyles = function () {
        var styles = {
            'background-color': this.groundCubes == "Yes" ? 'red' : 'green',
        };
        return styles;
    };
    TeamDataPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('teamName');
        this.number = this.navParams.get('teamNumber');
        this.comments = this.navParams.get('comments');
        this.groundCubes = this.navParams.get('groundCubes');
        this.returnCubes = this.navParams.get('returnCubes');
        this.stackCubes = this.navParams.get('stackCubes');
        this.switch = this.navParams.get('switch');
        this.scale = this.navParams.get('scale');
        this.climb = this.navParams.get('climb');
        this.wins = this.navParams.get('wins');
        this.losses = this.navParams.get('losses');
        if (this.wins == 0 && this.losses == 0) {
            this.winLossRatio = "No Matches Played yet";
        }
        else {
            //this.winLossRatio = this.wins/this.losses;
            this.winLossRatio = 3 / 1;
        }
        this.forces = this.navParams.get('forces');
        this.boosts = this.navParams.get('boosts');
        this.levitates = this.navParams.get('levitates');
        this.timeScale = this.navParams.get('timeScale');
        this.timeSwitch = this.navParams.get('timeSwitch');
        this.driveTrainType = this.navParams.get('driveTrainType');
        this.liftOthers = this.navParams.get('liftOthers');
        this.team = {
            "teamName": this.name,
            "teamNumber": this.number,
            "comments": this.comments,
            "groundCubes": this.groundCubes,
            "returnCubes": this.returnCubes,
            "stackCubes": this.stackCubes,
            "switch": this.switch,
            "scale": this.scale,
            "climb": this.climb,
            "wins": this.wins,
            "losses": this.losses,
            "forces": this.forces,
            "boosts": this.boosts,
            "levitates": this.levitates,
            "timeScale": this.timeScale,
            "timeSwitch": this.timeSwitch,
            "driveTrainType": this.driveTrainType,
            "liftOthers": this.liftOthers
        };
    };
    TeamDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-data',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/team-data/team-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}} {{number}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="editTeam()">\n          Edit\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <ion-item-group>\n      <ion-item-divider color="dark">General Information</ion-item-divider>\n      <ion-item color="primary">\n        Name: {{name}}\n      </ion-item>\n      <ion-item color="primary">\n        Number: {{number}}\n      </ion-item>\n      <ion-item color="primary">\n        Comments: {{comments}}\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="dark">Cubes</ion-item-divider>\n      <ion-item [color]="groundCubes == \'Yes\' ? \'success\' : \'danger\'">\n        Ground Cubes: {{groundCubes}}\n      </ion-item>\n      <ion-item [color]="returnCubes == \'Yes\' ? \'success\' : \'danger\'">\n        Exchange Cubes: {{returnCubes}}\n      </ion-item>\n      <ion-item [color]="stackCubes == \'Yes\' ? \'success\' : \'danger\'">\n        Stack Cubes: {{stackCubes}}\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="dark">Robot</ion-item-divider>\n      <ion-item [color]="driveTrainType == \'Mecanum\' ? \'danger\' : \'success\'">\n        Drive Train: {{driveTrainType}}\n      </ion-item>\n      <ion-item [color]="switch == \'Yes\' ? \'success\' : \'danger\'">\n        Switch: {{switch}}\n      </ion-item>\n      <ion-item [color]="scale == \'Yes\' ? \'success\' : \'danger\'">\n        Scale: {{scale}}\n      </ion-item>\n      <ion-item [color]="climb == \'Yes\' ? \'success\' : \'danger\'">\n        Climb: {{climb}}\n      </ion-item>\n      <ion-item [color]="liftOthers == \'Yes\' ? \'success\' : \'danger\'">\n        Lift Other Robots: {{liftOthers}}\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="dark">Stats</ion-item-divider>\n      <ion-item [color]= white>\n        Wins: {{wins}}\n      </ion-item>\n      <ion-item [color]= white>  \n        Losses: {{losses}}\n      </ion-item>\n      <ion-item [color]="winLossRatio >= 1 ? \'success\' : \'danger\'">\n	      Win to Loss Ratio: {{winLossRatio}}\n      </ion-item>\n      <ion-item [color]="forces < 3 ? \'danger\' : \'success\'">\n        Forces Used: {{forces}}\n      </ion-item>\n      <ion-item [color]="boosts < 3 ? \'danger\' : \'success\'">\n        Boosts Used: {{boosts}}\n      </ion-item>\n      <ion-item [color]="levitates < 3 ? \'danger\' : \'success\'">\n        Levitates Used: {{levitates}}\n      </ion-item>\n      <ion-item [color]="timeScale < 200 ? \'danger\' : \'success\'">\n        Scale Ownership: {{timeScale}} Seconds\n      </ion-item>\n      <ion-item [color]="timeSwitch < 200 ? \'danger\' : \'success\'">\n        Switch Ownership: {{timeSwitch}} Seconds\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/team-data/team-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], TeamDataPage);
    return TeamDataPage;
}());

//# sourceMappingURL=team-data.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialTutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitialTutorialPage = /** @class */ (function () {
    function InitialTutorialPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.slides = [
            {
                title: "Welcome to Scout!",
                description: "<b>Scout</b> allows you to easily scout FRC teams, add live match scoring, and more! Gone are the days of paper scouting!",
                image: "assets/imgs/crew.png",
            },
            {
                title: "How do I use Scout?",
                description: "Simply add teams and match data by tapping the plus in the righthand corner. When you have an internet connection, tap the cloud icon to upload your data for the whole team to see.",
                image: "assets/imgs/cloud.png",
            }
        ];
    }
    InitialTutorialPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    InitialTutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-initial-tutorial',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/initial-tutorial/initial-tutorial.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  class="tutorial-page">\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="close()">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/crew.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Scout?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="close()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/initial-tutorial/initial-tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], InitialTutorialPage);
    return InitialTutorialPage;
}());

//# sourceMappingURL=initial-tutorial.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, http, alertCtrl, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
    }
    SigninPage.prototype.signIn = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var params = 'securityKey=' + this.teamKey;
        this.http.post("https://scout.bluecrew6153.org/api/auth.php", params, options)
            .subscribe(function (data) {
            if (data["_body"] == "Valid") {
                _this.storage.set('securityKey', _this.teamKey);
                _this.viewCtrl.dismiss();
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Team Key Error!',
                    subTitle: 'Your team key is not valid. Please use a valid team key.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Connection Error!',
                subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to sign in for the first time.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/jacobmealey/Documents/ScoutApp/src/pages/signin/signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="signIn()">\n          Sign In\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padded>\n    <ion-card>\n      <img src="assets/imgs/crew.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          Blue Crew Scout\n          </ion-card-title>\n        <p>\n          Welcome to Blue Crew Scout! Please sign in below with the team key.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-item>\n      <ion-label color="dark">Team Key: </ion-label>\n      <ion-input type="text" [(ngModel)]="teamKey" [ngModelOptions]="{standalone:true}"></ion-input>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/Documents/ScoutApp/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map