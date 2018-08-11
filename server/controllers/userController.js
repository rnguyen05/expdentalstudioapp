const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const mongoose = require("mongoose");
const passport = require("passport");
const express = require("express");
/*
*
*/

// const isLoggedIn = function(req, res, next) {
//   // if user is authenticated in the session, call the next() to call the next request handler
//   // Passport adds this method to request object. A middleware is allowed to add properties to
//   // request and response objects
//   if (req.isLoggedIn()) return next();
//   // if the user is not authenticated then redirect him to the login page
//   res.redirect("/");
// };

module.exports = {
  //Create new user function on signup
  create: function(req, res) {
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Email exists"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                phoneone: req.body.phoneone,
                phonetwo: req.body.phonetwo,
                addrone: req.body.addrone,
                addrtwo: req.body.addrtwo,
                city: req.body.city,
                addrstate: req.body.addrstate,
                zipcode: req.body.zipcode
              });
              newUser
                .save()
                .then(result => {
                  console.log(result);

                  if (result) {
                    const token = jwt.sign(
                      {
                        result
                      },
                      "ppaoidutslatned",
                      {
                        expiresIn: "2h"
                      }
                    );
                    return res.status(200).json({
                      message: "User created",
                      token: token
                    });
                  }
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  }, //End of create function

  //Find user function on login
  findAll: function(req, res) {
    console.log("User login ", req.body);
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              "ppaoidutslatned",
              {
                expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token
            });
          }
          res.status(401).json({
            message: "Auth failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }, //End of Find user function

  //Find user function on login
  findOne: function(req, res) {
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              "ppaoidutslatned",
              {
                expiresIn: "2h"
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token
            });
          }
          res.status(401).json({
            message: "Auth failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }, //End of FindOne user function

  //User logout function
  logout: function(req, res) {
    console.log("logout req ", req);
    req.logout();
    res.send({ isLoggedIn: false });
  } //End of User logout function
};
