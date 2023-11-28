'use strict';
const express = require ('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
 const PORT = 8080;
 const HOST = '0.0.0.0';
  const app = express();
  app.get('/',(req,res)=> {
    res.send('Heloo World');
  });

  app.listen(PORT,HOST,() => {
    console.log("Runnig on Http://${Host}:${PORT}")
  });
  