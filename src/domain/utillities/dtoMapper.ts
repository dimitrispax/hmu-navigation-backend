const dtoMapper = (object: any, objectDTO: any): any => {

    const dtoKeys = Object.keys(objectDTO);

    dtoKeys.forEach((dtoKey: string) => {
        objectDTO[dtoKey] = object[dtoKey]
    });

    return objectDTO;
}

export default dtoMapper;