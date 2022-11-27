import express, { Router } from 'express';

import logisticaTerrestreController from '../controllers/logisticaTerrestreController';

class LogisticaTerrestreRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', logisticaTerrestreController.list);
        this.router.get('/:id', logisticaTerrestreController.getOne);
        this.router.post('/', logisticaTerrestreController.create);
        this.router.put('/:id', logisticaTerrestreController.update);
        this.router.delete('/:id', logisticaTerrestreController.delete);
    }

}

export default new LogisticaTerrestreRoutes().router;