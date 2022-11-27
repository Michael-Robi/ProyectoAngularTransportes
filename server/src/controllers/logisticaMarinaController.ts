import { Request, Response } from 'express';

import pool from '../database';

class LogisticaMarinaController {

    public async list(req: Request, res: Response): Promise<void> {
        const productoMarina = await pool.query('SELECT * FROM logisticamarina');
        res.json(productoMarina);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productoMarina = await pool.query('SELECT * FROM logisticamarina WHERE id = ?', [id]);
        console.log(productoMarina.length);
        if (productoMarina.length > 0) {
            return res.json(productoMarina[0]);
        }
        res.status(404).json({ text: "No existe el producto en la logistica Marina" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO logisticamarina set ?', [req.body]);
        res.json({ message: 'Producto Guardado en la logistica Marina' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE logisticamarina set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El producto fue actualizado en la logistica Marina" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM logisticamarina WHERE id = ?', [id]);
        res.json({ message: "El producto fue eliminado en la logistica Marina" });
    }
}

const logisticamarinacontroller = new LogisticaMarinaController;
export default logisticamarinacontroller;