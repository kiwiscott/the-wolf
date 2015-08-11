var model = require("../model");
var lookup = require("../lookup/lookupFactory")
var path = require("path");

module.exports = {
    search: search
};

function search(req, res, next) {
    if ((req.query.v || null) != null) {
        lookup.validate(req.params.lookup_id, req.query.v,(req.query.c || null))
            .then(function (data) {
                return res.status(200).send(data);
            }, function (err) {
                res.status(401).send(model.error(401, 'An error has occured'));
            });
    }
    else if ((req.query.q || null) != null) {
        lookup.query(req.params.lookup_id, req.query.q, (req.query.c || null))
            .then(function (data) {
                return res.status(200).send(data);
            }, function (err) {
                res.status(401).send(model.error(401, 'An error has occured'));
            });
    }
    else {
        res.status(401).send(model.error(401, 'Invalid request'));
    }
}