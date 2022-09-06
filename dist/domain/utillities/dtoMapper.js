"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dtoMapper = (object, objectDTO) => {
    const dtoKeys = Object.keys(objectDTO);
    dtoKeys.forEach((dtoKey) => {
        objectDTO[dtoKey] = object[dtoKey];
        if (JSON.stringify(dtoKey) === JSON.stringify("geodata")) // if dto key is geodata then parse JSON.
            objectDTO[dtoKey] = JSON.parse(object[dtoKey]);
    });
    return objectDTO;
};
exports.default = dtoMapper;
//# sourceMappingURL=dtoMapper.js.map