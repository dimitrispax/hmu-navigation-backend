import LogLevels from './Levels/levelsEnum';
import ErrorHandler from './errorHandler';
import ErrorLevels from './Levels/levelsEnum';

class HttpErrorHandler extends ErrorHandler {

    constructor() {
        super();
    }


    public handle(errorLevel: ErrorLevels, logBody: any): void {
        if (errorLevel == ErrorLevels.HTTP)
            throw new Error('Method not implemented.');
        else
            if (this.nextHandler != null)
                this.nextHandler.handle(errorLevel, logBody);
    }

}

export default HttpErrorHandler;