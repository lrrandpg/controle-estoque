const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Customer = require("../models/User");
const Middleware = require("../Middleware/Middleware")


function registerUser(req, res)
