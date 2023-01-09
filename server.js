const express = require('express')
const dotenv = require('dotenv').config()
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()