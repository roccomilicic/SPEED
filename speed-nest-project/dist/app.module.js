"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const articles_controller_1 = require("./api/articles/articles.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const articles_module_1 = require("./api/articles/articles.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot("mongodb+srv://rocco:mcY9ItydBZONj0Nu@clusterspeed.y8tg4.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSPEED"),
            articles_module_1.ArticleModule,
        ],
        controllers: [
            app_controller_1.AppController,
            articles_controller_1.ArticlesController,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map