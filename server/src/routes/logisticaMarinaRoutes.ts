import express, { Router } from 'express';

import logisticaMarinaController from '../controllers/logisticaMarinaController';

class logisticaMarinaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', logisticaMarinaController.list);
        this.router.get('/:id', logisticaMarinaController.getOne);
        this.router.post('/', logisticaMarinaController.create);
        this.router.put('/:id', logisticaMarinaController.update);
        this.router.delete('/:id', logisticaMarinaController.delete);
    }

}

export default new logisticaMarinaRoutes().router;