"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dtoMapper = (object, objectDTO) => {
    const dtoKeys = Object.keys(objectDTO);
    dtoKeys.forEach((dtoKey) => {
        objectDTO[dtoKey] = object[dtoKey];
    });
    return objectDTO;
};
exports.default = dtoMapper;
//# sourceMappingURL=dtoMapper.js.map