webpackJsonp([8],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
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
    }
    AddMatchPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddMatchPage.prototype.save = function () {
        var _this = this;
        if (isNaN(this.winOne) == true) {
            this.numberNotNumberError = true;
        }
        else if (isNaN(this.winTwo) == true) {
            this.numberNotNumberError = true;
        }
        else if (isNaN(this.winThree) == true) {
            this.numberNotNumberError = true;
        }
        else if (isNaN(this.loseOne) == true) {
            this.numberNotNumberError = true;
        }
        else if (isNaN(this.loseTwo) == true) {
            this.numberNotNumberError = true;
        }
        else if (isNaN(this.loseThree) == true) {
            this.numberNotNumberError = true;
        }
        if (this.numberNotNumberError == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Team Number!',
                subTitle: 'Please enter all of the team\'s number\'s!',
                buttons: ['OK']
            });
            alert_1.present();
            this.numberNotNumberError = false;
        }
        else {
<<<<<<< HEAD
            this.storage.get("teams").then(function (val) {
                var teams = JSON.parse(val);
                for (var i = 0, len = teams.length; i < len; i++) {
                    if (teams[i]['teamNumber'] == _this.winOne) {
                        teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
=======
            var loader = this.loadingCtrl.create({
                content: "Adding Match...",
                duration: 3000
            });
            loader.present();
            this.storage.get('securityKey').then(function (val) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var params = 'securityKey=' + val + '&teamWinOneNumber=' + _this.winOne + '&teamWinTwoNumber=' + _this.winTwo + '&teamWinThreeNumber=' + _this.winThree + '&teamLoseOneNumber=' + _this.loseOne + '&teamLoseTwoNumber=' + _this.loseTwo + '&teamLoseThreeNumber=' + _this.loseThree;
                _this.http.post("http://scout.bluecrew6153.org/api/match.php", params, options)
                    .subscribe(function (data) {
                    if (data["_body"] == "Failure") {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: 'An error has occured while trying to add the team.',
                            buttons: ['OK']
                        });
                        alert_2.present();
>>>>>>> master
                    }
                    if (teams[i]['teamNumber'] == _this.winTwo) {
                        teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
                    }
                    if (teams[i]['teamNumber'] == _this.winThree) {
                        teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
                    }
                    if (teams[i]['teamNumber'] == _this.loseOne) {
                        teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
                    }
                    if (teams[i]['teamNumber'] == _this.loseTwo) {
                        teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
                    }
                    if (teams[i]['teamNumber'] == _this.loseThree) {
                        teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
                    }
                }
                teams = JSON.stringify(teams);
                _this.storage.set("teams", teams);
            });
            this.viewCtrl.dismiss();
        }
    };
    AddMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-add-match',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/add-match/add-match.html"*/'<!--\n  Generated template for the AddMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Match</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winOne" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winTwo" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winThree" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseOne" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseTwo" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseThree" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/add-match/add-match.html"*/,
=======
            selector: 'page-add-match',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/add-match/add-match.html"*/'<!--\n  Generated template for the AddMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Match</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winOne" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winTwo" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winThree" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseOne" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseTwo" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseThree" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/add-match/add-match.html"*/,
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AddMatchPage);
    return AddMatchPage;
}());

//# sourceMappingURL=add-match.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
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
<<<<<<< HEAD
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
                "wins": "0",
                "losses": "0"
            };
            this.storage.get("teams").then(function (val) {
                var teams = JSON.parse(val);
                for (var i = 0, len = teams.length; i < len; i++) {
                    if (teams[i]['teamNumber'] == _this.number) {
                        teams[i] = _this.team;
=======
            var loader_1 = this.loadingCtrl.create({
                content: "Adding Team..",
                duration: 3000
            });
            loader_1.present();
            this.storage.get('securityKey').then(function (val) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var params = 'securityKey=' + val + '&name=' + _this.name + '&number=' + _this.number + '&dropGears=' + _this.dg + '&collectGears=' + _this.cg + '&climbRope=' + _this.cr + '&highBoiler=' + _this.hb + '&lowBoiler=' + _this.lb + '&collectFuel=' + _this.cf;
                _this.http.post("http://scout.bluecrew6153.org/api/team.php", params, options)
                    .subscribe(function (data) {
                    loader_1.dismiss();
                    if (data["_body"] == "Failure") {
                        var alert_4 = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: 'An error has occured while trying to add the team.',
                            buttons: ['OK']
                        });
                        alert_4.present();
>>>>>>> master
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
    };
    EditTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-edit-team',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/edit-team/edit-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{name}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="editTeamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="editTeamForm">\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Comments</ion-label>\n        <ion-textarea type="tel" [(ngModel)]="comments" [ngModelOptions]="{standalone:true}"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Ground Cubes</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="groundCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Return Cubes</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="returnCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Stack Cubes</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="stackCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Switch</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="switch" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Scale</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="scale" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climb</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climb" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/edit-team/edit-team.html"*/,
=======
            selector: 'page-add-team',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/add-team/add-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Team</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n      <ion-item>\n        <ion-label stacked>Team Name</ion-label>\n        <ion-input type="text" [(ngModel)]="name" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Drops Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="dropGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climbs Rope</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climbRope" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>High Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="highBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Low Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="lowBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collect Fuel</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectFuel" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/add-team/add-team.html"*/,
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EditTeamPage);
    return EditTeamPage;
}());

//# sourceMappingURL=edit-team.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
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
            this.storage.get('securityKey').then(function (val) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var params = 'securityKey=' + val + '&name=' + _this.name + '&number=' + _this.number + '&dropGears=' + _this.dg + '&collectGears=' + _this.cg + '&climbRope=' + _this.cr + '&highBoiler=' + _this.hb + '&lowBoiler=' + _this.lb + '&collectFuel=' + _this.cf;
                _this.http.post("http://scout.bluecrew6153.org/api/team.php", params, options)
                    .subscribe(function (data) {
                    loader_1.dismiss();
                    if (data["_body"] == "Failure") {
                        var alert_4 = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: 'An error has occured while trying to add the team.',
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                    else if (data["_body"] == "SecurityError") {
                        var alert_5 = _this.alertCtrl.create({
                            title: 'Security Key Error!',
                            subTitle: 'You do not have a valid security key. Please change your security key in the settings tab to a valid one.',
                            buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    _this.viewCtrl.dismiss();
                }, function (error) {
                    var alert = _this.alertCtrl.create({
                        title: 'Connection Error!',
                        subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
                        buttons: ['OK']
                    });
                    alert.present();
                });
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
            selector: 'page-edit-team',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/edit-team/edit-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{name}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="editTeamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="editTeamForm">\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Drops Gears</ion-label>\n        <ion-toggle [(ngModel)]="dropGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climbs Rope</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climbRope" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>High Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="highBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Low Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="lowBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collect Fuel</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectFuel" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/edit-team/edit-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EditTeamPage);
    return EditTeamPage;
}());

//# sourceMappingURL=edit-team.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_data_team_data__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_team_add_team__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_match_add_match__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(28);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_data_team_data__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_team_add_team__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_match_add_match__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(30);
>>>>>>> master
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
    function HomePage(navCtrl, navParams, teamsProvider, alertCtrl, loadingCtrl, modalCtrl, actionSheetCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamsProvider = teamsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.http = http;
        this.teams = [];
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
                                var headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
                                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                                var options = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                var params = 'securityKey=' + sec + '&name=' + _this.teams[i]['teamName'] + '&number=' + _this.teams[i]['teamNumber'] + '&comments=' + _this.teams[i]['comments'] + '&groundCubes=' + _this.teams[i]['groundCubes'] + '&returnCubes=' + _this.teams[i]['returnCubes'] + '&stackCubes=' + _this.teams[i]['stackCubes'] + '&switch=' + _this.teams[i]['switch'] + '&scale=' + _this.teams[i]['scale'] + '&climb=' + _this.teams[i]['climb'] + '&wins=' + _this.teams[i]['wins'] + '&losses=' + _this.teams[i]['losses'];
                                _this.http.post("http://scout.bluecrew6153.org/api/team.php", params, options)
                                    .subscribe(function (data) {
                                    if (data["_body"] == "Failure") {
                                        var alert_1 = _this.alertCtrl.create({
                                            title: 'Error!',
                                            subTitle: 'An error has occured while trying to add the team.',
                                            buttons: ['OK']
                                        });
                                        alert_1.present();
                                    }
                                    else if (data["_body"] == "SecurityError") {
                                        var alert_2 = _this.alertCtrl.create({
                                            title: 'Security Key Error!',
                                            subTitle: 'You do not have a valid security key. Please change your security key in the settings tab to a valid one.',
                                            buttons: ['OK']
                                        });
                                        alert_2.present();
                                    }
                                }, function (error) {
                                    var alert = _this.alertCtrl.create({
                                        title: 'Connection Error!',
                                        subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
                                        buttons: ['OK']
                                    });
                                    alert.present();
                                });
                            }
                            loader.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('securityKey').then(function (val) {
            if (val == null || val == "") {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__signin_signin__["a" /* SigninPage */]);
                modal.onDidDismiss(function (data) {
                    _this.loadData();
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
<<<<<<< HEAD
            selector: 'page-teams',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addTeam()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="uploadData()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <button ion-item *ngFor="let item of teams" (click)="itemSelected(item)">\n        {{item.teamName}}\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/home/home.html"*/,
=======
            selector: 'page-teams',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="addTeam()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <button ion-item *ngFor="let item of teams" (click)="itemSelected(item)">\n        {{item.teamName}}\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/home/home.html"*/,
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
>>>>>>> master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_team_edit_team__ = __webpack_require__(104);
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
            "losses": this.losses
        };
    };
    TeamDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-team-data',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/team-data/team-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}} {{number}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="editTeam()">\n          Edit\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      Name: {{name}}\n    </ion-item>\n    <ion-item>\n      Number: {{number}}\n    </ion-item>\n    <ion-item>\n      Comments: {{comments}}\n    </ion-item>\n    <ion-item>\n      Ground Cubes: {{groundCubes}}\n    </ion-item>\n    <ion-item>\n      Return Cubes: {{returnCubes}}\n    </ion-item>\n    <ion-item>\n      Stack Cubes: {{stackCubes}}\n    </ion-item>\n    <ion-item>\n      Switch: {{switch}}\n    </ion-item>\n    <ion-item>\n      Scale: {{scale}}\n    </ion-item>\n    <ion-item>\n      Climb: {{climb}}\n    </ion-item>\n    <ion-item>\n      Wins: {{wins}}\n    </ion-item>\n    <ion-item>\n      Losses: {{losses}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/team-data/team-data.html"*/,
=======
            selector: 'page-team-data',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/team-data/team-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}} {{number}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="editTeam()">\n          Edit\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      Name: {{name}}\n    </ion-item>\n    <ion-item>\n      Number: {{number}}\n    </ion-item>\n    <ion-item>\n      Drops Gear: {{dropGear}}\n    </ion-item>\n    <ion-item>\n      Collects Gear: {{collectGear}}\n    </ion-item>\n    <ion-item>\n      Climbs Rope: {{climbRope}}\n    </ion-item>\n    <ion-item>\n      High Boiler: {{highBoiler}}\n    </ion-item>\n    <ion-item>\n      Low Boiler: {{lowBoiler}}\n    </ion-item>\n    <ion-item>\n      Collects Fuel: {{collectFuel}}\n    </ion-item>\n    <ion-item>\n      Wins: {{wins}}\n    </ion-item>\n    <ion-item>\n      Losses: {{losses}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/team-data/team-data.html"*/,
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], TeamDataPage);
    return TeamDataPage;
}());

//# sourceMappingURL=team-data.js.map

/***/ }),

/***/ 107:
<<<<<<< HEAD
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
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
                "wins": "0",
                "losses": "0"
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
            selector: 'page-add-team',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/add-team/add-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Team</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n      <ion-item>\n        <ion-label stacked>Team Name</ion-label>\n        <ion-input type="text" [(ngModel)]="name" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Comments</ion-label>\n        <ion-textarea type="tel" [(ngModel)]="comments" [ngModelOptions]="{standalone:true}"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Ground Cubes</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="groundCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Cubes from Return</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="returnCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Cubes from Stacks</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="stackCubes" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Switch</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="switch" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Scale</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="scale" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climb</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climb" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/add-team/add-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AddTeamPage);
    return AddTeamPage;
}());

//# sourceMappingURL=add-team.js.map

/***/ }),

/***/ 108:
=======
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






<<<<<<< HEAD
=======
var SigninPage = (function () {
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
        this.http.post("http://scout.bluecrew6153.org/api/auth.php", params, options)
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
                subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/signin/signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="signIn()">\n          Sign In\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padded>\n    <ion-card>\n      <img src="assets/imgs/logo.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          Blue Crew Scout\n          </ion-card-title>\n        <p>\n          Welcome to Blue Crew Scout! Please sign in below with the team key.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-item>\n      <ion-label color="dark">Team Key:</ion-label>\n      <ion-input type="text" [(ngModel)]="teamKey" [ngModelOptions]="{standalone:true}"></ion-input>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



>>>>>>> master

var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
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
<<<<<<< HEAD
            selector: 'page-settings',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Settings</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="save()">\n          Save\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-label>Team Key</ion-label>\n        <ion-input type="text" [(ngModel)]="securityKey" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <button ion-item (click)="reset()">\n        Reset\n      </button>\n      <button ion-item (click)="about()">\n        About Scout\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/settings/settings.html"*/,
=======
            selector: 'page-settings',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Settings</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="save()">\n          Save\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-label>Team Key</ion-label>\n        <ion-input type="text" [(ngModel)]="securityKey" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <button ion-item (click)="about()">\n          About Scout\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/settings/settings.html"*/,
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-match/add-match.module": [
		285,
		7
	],
	"../pages/add-team/add-team.module": [
		289,
		6
	],
	"../pages/edit-team/edit-team.module": [
<<<<<<< HEAD
		286,
		5
	],
	"../pages/home/home.module": [
		288,
		4
	],
	"../pages/initial-tutorial/initial-tutorial.module": [
		287,
=======
		288,
		4
	],
	"../pages/home/home.module": [
		289,
>>>>>>> master
		3
	],
	"../pages/settings/settings.module": [
		291,
		2
	],
	"../pages/signin/signin.module": [
		292,
		1
	],
	"../pages/team-data/team-data.module": [
		290,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(258);
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
        this.url = 'http://scout.bluecrew6153.org/api/teams.json';
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-about',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padded>\n    <ion-card>\n        <img src="assets/imgs/crew.png"/>\n        <ion-card-content>\n            <ion-list>\n              <ion-item>\n                Blue Crew Scout\n              </ion-item>\n              <ion-item>\n                Version 1.0\n              </ion-item>\n              <ion-item>\n                &copy; 2018 Blue Crew Robotics\n              </ion-item>\n              <ion-item>\n                Developed by Matt Gallant\n              </ion-item>\n            </ion-list>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/about/about.html"*/
=======
            selector: 'page-about',template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padded>\n    <ion-card>\n        <img src="assets/imgs/logo.png"/>\n        <ion-card-content>\n            <ion-list>\n              <ion-item>\n                Blue Crew Scout\n              </ion-item>\n              <ion-item>\n                Version 1.0\n              </ion-item>\n              <ion-item>\n                &copy; 2018 Blue Crew Robotics\n              </ion-item>\n              <ion-item>\n                Developed by Matt Gallant\n              </ion-item>\n            </ion-list>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/about/about.html"*/
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(108);
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
    }
    TabsPage = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homeTab" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="settingsTab" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/tabs/tabs.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homeTab" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="settingsTab" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/pages/tabs/tabs.html"*/
>>>>>>> master
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialTutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the InitialTutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InitialTutorialPage = /** @class */ (function () {
    function InitialTutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InitialTutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InitialTutorialPage');
    };
    InitialTutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-initial-tutorial',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/initial-tutorial/initial-tutorial.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content  class="tutorial-page">\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="close()">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/crew.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Scout?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="close()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/initial-tutorial/initial-tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InitialTutorialPage);
    return InitialTutorialPage;
}());

//# sourceMappingURL=initial-tutorial.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_match_add_match__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_initial_tutorial_initial_tutorial__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_teams_teams__ = __webpack_require__(160);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_match_add_match__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_teams_teams__ = __webpack_require__(161);
>>>>>>> master
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
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__["a" /* TeamDataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__["a" /* AddTeamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__["a" /* EditTeamPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_match_add_match__["a" /* AddMatchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_initial_tutorial_initial_tutorial__["a" /* InitialTutorialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-match/add-match.module#AddMatchPageModule', name: 'AddMatchPage', segment: 'add-match', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/edit-team/edit-team.module#EditTeamPageModule', name: 'EditTeamPage', segment: 'edit-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initial-tutorial/initial-tutorial.module#InitialTutorialPageModule', name: 'InitialTutorialPage', segment: 'initial-tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-team/add-team.module#AddTeamPageModule', name: 'AddTeamPage', segment: 'add-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-data/team-data.module#TeamDataPageModule', name: 'TeamDataPage', segment: 'team-data', priority: 'low', defaultHistory: [] },
=======
                        { loadChildren: '../pages/add-team/add-team.module#AddTeamPageModule', name: 'AddTeamPage', segment: 'add-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-team/edit-team.module#EditTeamPageModule', name: 'EditTeamPage', segment: 'edit-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
>>>>>>> master
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__["a" /* TeamDataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__["a" /* AddTeamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__["a" /* EditTeamPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_match_add_match__["a" /* AddMatchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_initial_tutorial_initial_tutorial__["a" /* InitialTutorialPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_teams_teams__["a" /* TeamsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
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
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/app/app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jacobmealey/ScoutApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jacobmealey/ScoutApp/src/app/app.html"*/
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
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
        this.http.post("http://scout.bluecrew6153.org/api/auth.php", params, options)
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
                subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/signin/signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="signIn()">\n          Sign In\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padded>\n    <ion-card>\n      <img src="assets/imgs/crew.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          Blue Crew Scout\n          </ion-card-title>\n        <p>\n          Welcome to Blue Crew Scout! Please sign in below with the team key.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-item>\n      <ion-label>Team Key</ion-label>\n      <ion-input type="text" [(ngModel)]="teamKey" [ngModelOptions]="{standalone:true}"></ion-input>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Documents/GitHub/ScoutApp/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map