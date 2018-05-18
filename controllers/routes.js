const express = require('express');
var router = express.Router();
var allActions = {
	auth:require('./Auth.js'),
};
router.all('/api/:module/:action',(req,res,next) => {
	var module = req.params.module;
	var reqAction = req.params.action;
	var reqModule = allActions[module];
	var controller = new reqModule();
	controller[reqAction](req,res,next);
})
module.exports = router;