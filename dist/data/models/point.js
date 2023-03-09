"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(id, latitude, longitude, geometry, floor_id, iconType, is_entrance) {
        this.id = id,
            this.latitude = latitude;
        this.longitude = longitude;
        this.geometry = geometry;
        this.floor_id = floor_id;
        this.iconType = iconType;
        this.is_entrance = is_entrance;
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map