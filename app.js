//setup express/path and port
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

//set up middleware and body parsers
app.use(express.urlencoded({ extended: true}));
app.use(express.json());