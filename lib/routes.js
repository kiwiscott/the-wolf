/// <reference path="../typings/tsd.d.ts"/>

var router = require('express').Router();
var handlers = {
    'admin': require('./handlers/handler.admin'),
    'form': require('./handlers/handler.form'),
    'lookup': require('./handlers/handler.lookup')
};

router.route('/admin/:form_id')
    .get(handlers.admin.getFormById)
    .post(handlers.admin.saveForm);

router.route('/form/:form_id')
    .get(handlers.form.getFormById)
    .post(handlers.form.processForm);

router.route('/lookup/:lookup_id')
    .get(handlers.lookup.search)

module.exports = router;
///////////////////////////////////////////////////////////
