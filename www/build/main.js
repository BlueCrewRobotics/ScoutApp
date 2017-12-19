webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTeamPage = (function () {
    function AddTeamPage(navCtrl, navParams, viewCtrl, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AddTeamPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
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
        if (this.dropGears == true) {
            this.dg = "Yes";
        }
        else {
            this.dg = "No";
        }
        if (this.collectGears == true) {
            this.cg = "Yes";
        }
        else {
            this.cg = "No";
        }
        if (this.climbRope == true) {
            this.cr = "Yes";
        }
        else {
            this.cr = "No";
        }
        if (this.highBoiler == true) {
            this.hb = "Yes";
        }
        else {
            this.hb = "No";
        }
        if (this.lowBoiler == true) {
            this.lb = "Yes";
        }
        else {
            this.lb = "No";
        }
        if (this.collectFuel == true) {
            this.cf = "Yes";
        }
        else {
            this.cf = "No";
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
            var loader_1 = this.loadingCtrl.create({
                content: "Adding Team..",
                duration: 3000
            });
            loader_1.present();
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var params = 'name=' + this.name + '&number=' + this.number + '&dropGears=' + this.dg + '&collectGears=' + this.cg + '&climbRope=' + this.cr + '&highBoiler=' + this.hb + '&lowBoiler=' + this.lb + '&collectFuel=' + this.cf;
            this.http.post("http://bluecrew6153.org/scout/addTeam.php", params, options)
                .subscribe(function (data) {
                loader_1.dismiss();
                _this.viewCtrl.dismiss();
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'Connection Error!',
                    subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    AddTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-team',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/add-team/add-team.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Team</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n      <ion-item>\n        <ion-label stacked>Team Name</ion-label>\n        <ion-input type="text" [(ngModel)]="name" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Drops Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="dropGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climbs Rope</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climbRope" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>High Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="highBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Low Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="lowBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collect Fuel</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectFuel" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/add-team/add-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddTeamPage);
    return AddTeamPage;
}());

//# sourceMappingURL=add-team.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditTeamPage = (function () {
    function EditTeamPage(navCtrl, navParams, viewCtrl, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
        if (this.dropGears == true) {
            this.dg = "Yes";
        }
        else {
            this.dg = "No";
        }
        if (this.collectGears == true) {
            this.cg = "Yes";
        }
        else {
            this.cg = "No";
        }
        if (this.climbRope == true) {
            this.cr = "Yes";
        }
        else {
            this.cr = "No";
        }
        if (this.highBoiler == true) {
            this.hb = "Yes";
        }
        else {
            this.hb = "No";
        }
        if (this.lowBoiler == true) {
            this.lb = "Yes";
        }
        else {
            this.lb = "No";
        }
        if (this.collectFuel == true) {
            this.cf = "Yes";
        }
        else {
            this.cf = "No";
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
            var loader_1 = this.loadingCtrl.create({
                content: "Adding Team..",
                duration: 3000
            });
            loader_1.present();
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var params = 'name=' + this.name + '&number=' + this.number + '&dropGears=' + this.dg + '&collectGears=' + this.cg + '&climbRope=' + this.cr + '&highBoiler=' + this.hb + '&lowBoiler=' + this.lb + '&collectFuel=' + this.cf;
            this.http.post("http://bluecrew6153.org/scout/addTeam.php", params, options)
                .subscribe(function (data) {
                console.log(data['_body']);
                loader_1.dismiss();
                _this.viewCtrl.dismiss();
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'Connection Error!',
                    subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    EditTeamPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('teamName');
        this.number = this.navParams.get('teamNumber');
        if (this.navParams.get('dropGears') == "Yes") {
            this.dropGears = true;
        }
        else {
            this.dropGears = false;
        }
        if (this.navParams.get('collectGears') == "Yes") {
            this.collectGears = true;
        }
        else {
            this.collectGears = false;
        }
        if (this.navParams.get('climbRope') == "Yes") {
            this.climbRope = true;
        }
        else {
            this.climbRope = false;
        }
        if (this.navParams.get('highBoiler') == "Yes") {
            this.highBoiler = true;
        }
        else {
            this.highBoiler = false;
        }
        if (this.navParams.get('lowBoiler') == "Yes") {
            this.lowBoiler = true;
        }
        else {
            this.lowBoiler = false;
        }
        if (this.navParams.get('collectFuel') == "Yes") {
            this.collectFuel = true;
        }
        else {
            this.collectFuel = false;
        }
    };
    EditTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-team',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/edit-team/edit-team.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{name}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="editTeamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="editTeamForm">\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Drops Gears</ion-label>\n        <ion-toggle [(ngModel)]="dropGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climbs Rope</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climbRope" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>High Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="highBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Low Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="lowBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collect Fuel</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectFuel" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/edit-team/edit-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditTeamPage);
    return EditTeamPage;
}());

//# sourceMappingURL=edit-team.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatchesPage = (function () {
    function MatchesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchesPage.prototype.addMatch = function () {
        alert("Success");
    };
    MatchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchesPage');
    };
    MatchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matches',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/matches/matches.html"*/`<!--\n  Generated template for the MatchesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Matches</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="addMatch()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/matches/matches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MatchesPage);
    return MatchesPage;
}());

//# sourceMappingURL=matches.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/settings/settings.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_team_edit_team__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamDataPage = (function () {
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
    TeamDataPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('teamName');
        this.number = this.navParams.get('teamNumber');
        this.dropGear = this.navParams.get('dropGears');
        this.collectGear = this.navParams.get('collectGears');
        this.climbRope = this.navParams.get('climbRope');
        this.highBoiler = this.navParams.get('highBoiler');
        this.lowBoiler = this.navParams.get('lowBoiler');
        this.collectFuel = this.navParams.get('collectFuel');
        this.team = {
            "teamName": this.name,
            "teamNumber": this.number,
            "dropGears": this.dropGear,
            "collectGears": this.collectGear,
            "climbRope": this.climbRope,
            "highBoiler": this.highBoiler,
            "lowBoiler": this.lowBoiler,
            "collectFuel": this.collectFuel
        };
    };
    TeamDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-data',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/team-data/team-data.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}} {{number}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="editTeam()">\n          Edit\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      Name: {{name}}\n    </ion-item>\n    <ion-item>\n      Number: {{number}}\n    </ion-item>\n    <ion-item>\n      Drops Gear: {{dropGear}}\n    </ion-item>\n    <ion-item>\n      Collects Gear: {{collectGear}}\n    </ion-item>\n    <ion-item>\n      Climbs Rope: {{climbRope}}\n    </ion-item>\n    <ion-item>\n      High Boiler: {{highBoiler}}\n    </ion-item>\n    <ion-item>\n      Low Boiler: {{lowBoiler}}\n    </ion-item>\n    <ion-item>\n      Collects Fuel: {{collectFuel}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/team-data/team-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], TeamDataPage);
    return TeamDataPage;
}());

//# sourceMappingURL=team-data.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_data_team_data__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_team_add_team__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeamsPage = (function () {
    function TeamsPage(navCtrl, navParams, teamsProvider, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamsProvider = teamsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
    }
    TeamsPage.prototype.addTeam = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_team_add_team__["a" /* AddTeamPage */]);
        modal.onDidDismiss(function (data) {
            _this.loadData();
        });
        modal.present();
    };
    TeamsPage.prototype.itemSelected = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__team_data_team_data__["a" /* TeamDataPage */], item);
        modal.onDidDismiss(function (data) {
            _this.loadData();
        });
        modal.present();
    };
    TeamsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.teamsProvider.getTeams().subscribe(function (data) {
            _this.teams = data;
        });
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    TeamsPage.prototype.loadData = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Loading Teams...",
            duration: 3000
        });
        loader.present();
        this.teamsProvider.getTeams().subscribe(function (data) {
            _this.teams = data;
            loader.dismiss();
        });
    };
    TeamsPage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/teams/teams.html"*/`<!--\n  Generated template for the TeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Teams</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="addTeam()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <button ion-item *ngFor="let item of teams" (click)="itemSelected(item)">\n        {{item.teamName}}\n      </button>\n    </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-team/add-team.module": [
		281,
		5
	],
	"../pages/edit-team/edit-team.module": [
		282,
		4
	],
	"../pages/matches/matches.module": [
		283,
		3
	],
	"../pages/settings/settings.module": [
		284,
		2
	],
	"../pages/team-data/team-data.module": [
		285,
		1
	],
	"../pages/teams/teams.module": [
		286,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(253);
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



var TeamsProvider = (function () {
    function TeamsProvider(http) {
        this.http = http;
        this.url = 'http://bluecrew6153.org/scout/results.json';
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teams_teams__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matches_matches__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__teams_teams__["a" /* TeamsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__matches_matches__["a" /* MatchesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Teams" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Matches" tabIcon="flag"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_teams_teams__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_matches_matches__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_teams_teams__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_matches_matches__["a" /* MatchesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__["a" /* TeamDataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__["a" /* AddTeamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__["a" /* EditTeamPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-team/add-team.module#AddTeamPageModule', name: 'AddTeamPage', segment: 'add-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-team/edit-team.module#EditTeamPageModule', name: 'EditTeamPage', segment: 'edit-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/matches/matches.module#MatchesPageModule', name: 'MatchesPage', segment: 'matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-data/team-data.module#TeamDataPageModule', name: 'TeamDataPage', segment: 'team-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_matches_matches__["a" /* MatchesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__["a" /* TeamDataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__["a" /* AddTeamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__["a" /* EditTeamPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_teams_teams__["a" /* TeamsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/scout/src/pages/about/about.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Users/matthewgallant/Desktop/scout/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map