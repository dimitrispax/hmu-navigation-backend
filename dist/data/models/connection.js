"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
class Connection {
    constructor(id, starting_point, destination_point, is_edge_disabled_accessible) {
        this.id = id,
            this.starting_point = starting_point;
        this.destination_point = destination_point;
        this.is_edge_disabled_accessible = is_edge_disabled_accessible;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map