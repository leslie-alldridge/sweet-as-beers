const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const auth = require("./auth/auth");
const crypto = require("./auth/crypto");
const users = require("./auth/users");

const server = express();

server.use(cors("*"));

server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.post("/api/auth/login", signIn, auth.issueJwt);
server.post("/api/auth/register", register, auth.issueJwt);

function signIn(req, res, next) {
  users
    .getByName(req.body.username)
    .then(user => {
      return user || invalidCredentials(res);
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        crypto.compare(req.body.password, String(user.hash), (err, match) => {
          return resolve(match);
        });
      });
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res);
    })
    .catch(() => {
      res.status(400);
    });
}

function register(req, res, next) {
  users
    .exists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: "User already exists" });
      }
      users
        .create(req.body.username, req.body.email, req.body.password)
        .then(() => next());
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });
}

function invalidCredentials(res) {
  res.status(400).send({
    errorType: "INVALID_CREDENTIALS"
  });
}

server.use("/api/v1/cart", require("./routes/cart"));

module.exports = server;
