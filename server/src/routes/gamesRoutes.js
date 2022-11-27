"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gamesController_1 = __importDefault(require("../controllers/gamesController"));
var GameRoutes = /** @class */ (function () {
    function GameRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    GameRoutes.prototype.config = function () {
        this.router.get('/', gamesController_1.default.list);
        this.router.get('/:id', gamesController_1.default.getOne);
        this.router.post('/', gamesController_1.default.create);
        this.router.put('/:id', gamesController_1.default.update);
        this.router.delete('/:id', gamesController_1.default.delete);
    };
    return GameRoutes;
}());
exports.default = new GameRoutes().router;
