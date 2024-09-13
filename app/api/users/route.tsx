import type { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../controllers/userController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // GET
    if (req.method === 'GET') {

        const users = await getUsers();
        res.setHeader('Cache-Control', 'public, max-age=60');
        res.status(200).json(users);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }

}
