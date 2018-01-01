webpackJsonp([7],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchPage; });
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
                _this.http.post("http://bluecrew6153.org/scout/addMatch.php", params, options)
                    .subscribe(function (data) {
                    if (data["_body"] == "Failure") {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: 'An error has occured while trying to add the team.',
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                    else if (data["_body"] == "SecurityError") {
                        var alert_3 = _this.alertCtrl.create({
                            title: 'Security Key Error!',
                            subTitle: 'You do not have a valid security key. Please change your security key in the settings tab to a valid one.',
                            buttons: ['OK']
                        });
                        alert_3.present();
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
    AddMatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-match',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/add-match/add-match.html"*/'<!--\n  Generated template for the AddMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Match</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winOne" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winTwo" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Winning Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="winThree" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseOne" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseTwo" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Losing Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="loseThree" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/add-match/add-match.html"*/,
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

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeamPage; });
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
            var alert = this.alertCtrl.create({
                title: 'Team Name!',
                subTitle: 'You must enter a team name!',
                buttons: ['OK']
            });
            alert.present();
            this.nameError = false;
        }
        else if (this.numberError == true) {
            var alert = this.alertCtrl.create({
                title: 'Team Number!',
                subTitle: 'You must enter a team number!',
                buttons: ['OK']
            });
            alert.present();
            this.numberError = false;
        }
        else if (this.numberNotNumberError == true) {
            var alert = this.alertCtrl.create({
                title: 'Team Number!',
                subTitle: 'Please enter a valid number!',
                buttons: ['OK']
            });
            alert.present();
            this.numberNotNumberError = false;
        }
        else {
            var loader = this.loadingCtrl.create({
                content: "Adding Team..",
                duration: 3000
            });
            loader.present();
            this.team = {
                "teamName": this.name,
                "teamNumber": this.number,
                "dropGears": this.dg,
                "collectGears": this.cg,
                "climbRope": this.cr,
                "highBoiler": this.hb,
                "lowBoiler": this.lb,
                "collectFuel": this.cf,
                "wins": "0",
                "losses": "0"
            };
            this.storage.get("teams").then(function (val) {
                var old = val[0];
                var newTeam = JSON.stringify(_this.team);
                var combined = [];
                combined.push(newTeam);
                combined.push(old);
                _this.storage.set("teams", combined);
            });
            this.viewCtrl.dismiss();
            loader.dismiss();
            // this.storage.get('securityKey').then((val) => {
            //   var headers = new Headers();
            //   headers.append('Content-Type', 'application/x-www-form-urlencoded' );
            //   let options = new RequestOptions({ headers: headers });
            //   var params = 'securityKey=' + val + '&name=' + this.name + '&number=' + this.number + '&dropGears=' + this.dg + '&collectGears=' + this.cg + '&climbRope=' + this.cr + '&highBoiler=' + this.hb + '&lowBoiler=' + this.lb + '&collectFuel=' + this.cf;    
            //   this.http.post("http://bluecrew6153.org/scout/addTeam.php", params, options)
            //     .subscribe(data => {
            //       loader.dismiss();
            //       if (data["_body"] == "Failure") {
            //         let alert = this.alertCtrl.create({
            //           title: 'Error!',
            //           subTitle: 'An error has occured while trying to add the team.',
            //           buttons: ['OK']
            //         });
            //         alert.present();
            //       } else if (data["_body"] == "SecurityError") {
            //         let alert = this.alertCtrl.create({
            //           title: 'Security Key Error!',
            //           subTitle: 'You do not have a valid security key. Please change your security key in the settings tab to a valid one.',
            //           buttons: ['OK']
            //         });
            //         alert.present();
            //       }
            //       this.viewCtrl.dismiss();
            //      }, error => {
            //       let alert = this.alertCtrl.create({
            //         title: 'Connection Error!',
            //         subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
            //         buttons: ['OK']
            //       });
            //       alert.present();
            //   });
            // });
        }
    };
    AddTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-team',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/add-team/add-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Team</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="teamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="teamForm">\n      <ion-item>\n        <ion-label stacked>Team Name</ion-label>\n        <ion-input type="text" [(ngModel)]="name" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Drops Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="dropGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climbs Rope</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climbRope" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>High Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="highBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Low Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="lowBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collect Fuel</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectFuel" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/add-team/add-team.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _g || Object])
    ], AddTeamPage);
    return AddTeamPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=add-team.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_data_team_data__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_team_add_team__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_match_add_match__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(30);
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
    function HomePage(navCtrl, navParams, teamsProvider, alertCtrl, loadingCtrl, modalCtrl, actionSheetCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamsProvider = teamsProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.teams = [];
    }
    HomePage.prototype.addTeam = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Add Data',
            buttons: [
                {
                    text: 'Add Team',
                    icon: "add",
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_team_add_team__["a" /* AddTeamPage */]);
                        modal.onDidDismiss(function (data) {
                            _this.loadData();
                        });
                        modal.present();
                    }
                }, {
                    text: 'Add Match',
                    icon: "add",
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
        this.teamsProvider.getTeams().subscribe(function (data) {
            _this.teamsProvider.getTeams().subscribe(function (data) {
                _this.storage.set("teams", data);
                _this.storage.get("teams").then(function (val) {
                    _this.teams = val;
                });
            });
        });
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        this.storage.get("teams").then(function (val) {
            _this.teams = val;
        });
        // let loader = this.loadingCtrl.create({
        //   content: "Loading Teams...",
        //   duration: 3000
        // });
        // loader.present();
        // this.teamsProvider.getTeams().subscribe(
        //   (data) => {
        //   this.storage.set("teams", data);
        //   this.storage.get("teams").then((val) => {
        //     this.teams = val;
        //     loader.dismiss();
        //   });
        // })
    };
    HomePage.prototype.uploadData = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading Teams...",
            duration: 3000
        });
        loader.present();
        this.teamsProvider.getTeams().subscribe(function (data) {
            _this.storage.set("teams", data);
            _this.storage.get("teams").then(function (val) {
                _this.teams = val;
                loader.dismiss();
            });
        });
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
            selector: 'page-teams',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addTeam()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="uploadData()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <button ion-item *ngFor="let item of teams" (click)="itemSelected(item)">\n        {{item.teamName}}\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]) === "function" && _h || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_team_edit_team__ = __webpack_require__(106);
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
        this.dropGear = this.navParams.get('dropGears');
        this.collectGear = this.navParams.get('collectGears');
        this.climbRope = this.navParams.get('climbRope');
        this.highBoiler = this.navParams.get('highBoiler');
        this.lowBoiler = this.navParams.get('lowBoiler');
        this.collectFuel = this.navParams.get('collectFuel');
        this.wins = this.navParams.get('wins');
        this.losses = this.navParams.get('losses');
        this.team = {
            "teamName": this.name,
            "teamNumber": this.number,
            "dropGears": this.dropGear,
            "collectGears": this.collectGear,
            "climbRope": this.climbRope,
            "highBoiler": this.highBoiler,
            "lowBoiler": this.lowBoiler,
            "collectFuel": this.collectFuel,
            "wins": this.wins,
            "losses": this.losses
        };
    };
    TeamDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-data',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/team-data/team-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}} {{number}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="editTeam()">\n          Edit\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      Name: {{name}}\n    </ion-item>\n    <ion-item>\n      Number: {{number}}\n    </ion-item>\n    <ion-item>\n      Drops Gear: {{dropGear}}\n    </ion-item>\n    <ion-item>\n      Collects Gear: {{collectGear}}\n    </ion-item>\n    <ion-item>\n      Climbs Rope: {{climbRope}}\n    </ion-item>\n    <ion-item>\n      High Boiler: {{highBoiler}}\n    </ion-item>\n    <ion-item>\n      Low Boiler: {{lowBoiler}}\n    </ion-item>\n    <ion-item>\n      Collects Fuel: {{collectFuel}}\n    </ion-item>\n    <ion-item>\n      Wins: {{wins}}\n    </ion-item>\n    <ion-item>\n      Losses: {{losses}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/team-data/team-data.html"*/,
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

/***/ 106:
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
                _this.http.post("http://bluecrew6153.org/scout/addTeam.php", params, options)
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
            selector: 'page-edit-team',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/edit-team/edit-team.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit {{name}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only type="submit" form="editTeamForm">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <form (ngSubmit)="save()" id="editTeamForm">\n      <ion-item>\n        <ion-label stacked>Team Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="number" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Drops Gears</ion-label>\n        <ion-toggle [(ngModel)]="dropGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collects Gears</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectGears" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Climbs Rope</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="climbRope" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>High Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="highBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Low Boiler</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="lowBoiler" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Collect Fuel</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="collectFuel" [ngModelOptions]="{standalone:true}"></ion-toggle>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/edit-team/edit-team.html"*/,
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
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
        this.http.post("http://bluecrew6153.org/scout/verifyKey.php", params, options)
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
            selector: 'page-signin',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/signin/signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="signIn()">\n          Sign In\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padded>\n    <ion-card>\n      <img src="assets/imgs/crew.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          Blue Crew Scout\n          </ion-card-title>\n        <p>\n          Welcome to Blue Crew Scout! Please sign in below with the team key.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-item>\n      <ion-label>Team Key</ion-label>\n      <ion-input type="text" [(ngModel)]="teamKey" [ngModelOptions]="{standalone:true}"></ion-input>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/signin/signin.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(161);
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
    function SettingsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    SettingsPage.prototype.save = function () {
        this.storage.set('securityKey', this.securityKey);
    };
    SettingsPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('securityKey').then(function (val) {
            _this.securityKey = val;
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scout Settings</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="save()">\n          Save\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-label>Team Key</ion-label>\n        <ion-input type="text" [(ngModel)]="securityKey" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n      <button ion-item (click)="about()">\n          About Scout\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
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
		284,
		6
	],
	"../pages/add-team/add-team.module": [
		285,
		5
	],
	"../pages/edit-team/edit-team.module": [
		287,
		4
	],
	"../pages/home/home.module": [
		286,
		3
	],
	"../pages/settings/settings.module": [
		289,
		2
	],
	"../pages/signin/signin.module": [
		288,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(257);
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-about',template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padded>\n    <ion-card>\n        <img src="assets/imgs/logo.png"/>\n        <ion-card-content>\n            <ion-list>\n              <ion-item>\n                Blue Crew Scout\n              </ion-item>\n              <ion-item>\n                Version 1.0\n              </ion-item>\n              <ion-item>\n                &copy; 2018 Blue Crew Robotics\n              </ion-item>\n              <ion-item>\n                Developed by Matt Gallant\n              </ion-item>\n            </ion-list>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/about/about.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(104);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homeTab" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="settingsTab" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/pages/tabs/tabs.html"*/
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_data_team_data__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_team_add_team__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_team_edit_team__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_match_add_match__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_teams_teams__ = __webpack_require__(160);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-match/add-match.module#AddMatchPageModule', name: 'AddMatchPage', segment: 'add-match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-team/add-team.module#AddTeamPageModule', name: 'AddTeamPage', segment: 'add-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-team/edit-team.module#EditTeamPageModule', name: 'EditTeamPage', segment: 'edit-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-data/team-data.module#TeamDataPageModule', name: 'TeamDataPage', segment: 'team-data', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_teams_teams__["a" /* TeamsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matthewgallant/Desktop/Scout App/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/matthewgallant/Desktop/Scout App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map