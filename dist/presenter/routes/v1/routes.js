const express = require('express');
const middleware = require('../../../middlewares/middliware');
const controller = require('../../controllers/controllers');
const router = express.Router();
router.get('/allRooms', middleware, controller.getAllRooms);
//# sourceMappingURL=routes.js.map