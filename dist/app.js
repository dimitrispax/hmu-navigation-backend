"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const httpErrorHandlerMiddleware_1 = require("./middlewares/httpErrorHandlerMiddleware");
const error404_1 = require("./config/Errors/models/error404");
/* ROUTES */
const rooomRoutes_1 = __importDefault(require("./presenter/routes/v1/rooomRoutes"));
const MRBSRoutes_1 = __importDefault(require("./presenter/routes/v1/MRBSRoutes"));
const doorRoutes_1 = __importDefault(require("./presenter/routes/v1/doorRoutes"));
const buildingRoutes_1 = __importDefault(require("./presenter/routes/v1/buildingRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
/* Allowing CORS */
app.use((0, cors_1.default)({ credentials: true }));
/* Parsing JSON */
app.use(express_1.default.json());
/* ROOM ROUTES */
app.use('/rooms', rooomRoutes_1.default);
/* DOOR ROUTES */
app.use('/doors', doorRoutes_1.default);
/* BUILDING ROUTES */
app.use('/buildings', buildingRoutes_1.default);
/* MRBS ROUTES */
app.use('/mrbs', MRBSRoutes_1.default);
/* ROOT ROUTE */
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ message: 'ROOT' });
}));
/* UNKWOWN PATH HANDLER */
app.use((req, res, next) => { next(new error404_1.Error404(`Route ${req.path} not found.`, null)); });
/* ERROR HANDLER */
app.use(httpErrorHandlerMiddleware_1.httpErrorHandlerMiddleware);
/* SERVER START */
app.listen(port, () => {
    return console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map