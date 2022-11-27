import { Request, Response } from 'express';

import pool from '../database';

class LogisticaTerrestreController {

    public async list(req: Request, res: Response): Promise<void> {
        const productoTerrestre = await pool.query('SELECT * FROM logisticaterrestre');
        res.json(productoTerrestre);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productoTerrestre = await pool.query('SELECT * FROM logisticaterrestre WHERE id = ?', [id]);
        console.log(productoTerrestre.length);
        if (productoTerrestre.length > 0) {
            return res.json(productoTerrestre[0]);
        }
        res.status(404).json({ text: "No existe el producto en la logistica Terrestre" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO logisticaterrestre set ?', [req.body]);
        res.json({ message: 'Producto Guardado en la logistica Terrestre' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE logisticaterrestre set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El producto fue actualizado en la logistica Terrestre" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM logisticaterrestre WHERE id = ?', [id]);
        res.json({ message: "El producto fue eliminado en la logistica Terrestre" });
    }
}

const logisticaterrestrecontroller = new LogisticaTerrestreController;
export default logisticaterrestrecontroller;