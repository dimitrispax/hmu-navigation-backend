"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POI = void 0;
class POI {
    constructor(id, room_name, sort_key, description, capacity, room_admin_mail, room_type, projector, camera) {
        this.id = id,
            this.room_name = room_name;
        this.sort_key = sort_key;
        this.description = description;
        this.capacity = capacity;
        this.room_admin_mail = room_admin_mail;
        this.room_type = room_type;
        this.projector = projector;
        this.camera = camera;
    }
}
exports.POI = POI;
//# sourceMappingURL=poi.js.map