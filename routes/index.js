import express from 'express';
import Cryptr from 'cryptr';

const router = express.Router();

router.get('/hello', (req, res) => res.send('Hello! You reached the routes!'));

router.get('/getcookies', (req, res) => {
  const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
  res.cookie('aSimpleCookie', 'nom nom simple'); // einfaches Cookie
  res.cookie('aSignedCookie', 'nom nom signed', {
    maxAge: 1000 * 60 * 15, // hält 15 Minuten
    httpOnly: true, // Zugriff nur vom Webserver, Browser kann es nicht lesen!
    signed: true, // signiertes Cookie
  });
  res.cookie('cryptoCookie', cryptr.encrypt('nom nom encrypted'));
  res.send('Hello! You just received cookies!');
});

router.get('/sendcookies', (req, res) => {
  const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
  console.log(req.cookies.aSimpleCookie);
  console.log(req.signedCookies.aSignedCookie);
  console.log(cryptr.decrypt(req.cookies.cryptoCookie));
  res.send('Thanks!');
});

export default router;
