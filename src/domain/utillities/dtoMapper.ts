const dtoMapper = (object: any, objectDTO: any): any => {

    const dtoKeys = Object.keys(objectDTO);

    dtoKeys.forEach((dtoKey: string) => {
        objectDTO[dtoKey] = object[dtoKey]
        if (JSON.stringify(dtoKey) === JSON.stringify("geodata")) // if dto key is geodata then parse JSON.
            objectDTO[dtoKey] = JSON.parse(object[dtoKey])
    });

    return objectDTO;
}

export default dtoMapper;