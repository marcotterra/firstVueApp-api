import express from 'express';
import User from '../models/User';
import { parseErrors } from '../utils';

const router = express.Router();

router.get('/u/:user', (req, res) => {
  const u = req.params.user;
  res.json({
    status: `Voce é => ${u}`,
  });
});


export default router;
