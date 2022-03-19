import express from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/users/signin', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid')
  body('password')
    .trim()
    .notEmpty()
    .withMessage('You must supply a password')

](req, res) => {
  res.send('Hi there!')
});

export { router as signinRouter };