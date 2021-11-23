const express = require('express');

const apiServer = function () {
  return [
    express.json(),
    express.urlencoded({ extended: true }),
    {
      route: '/contact_api/',
      handle: function (req, res, next) {
        console.log(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            isValid: true,
          })
        );
      },
    },
  ];
};

module.exports = apiServer;
