"use strict";

var Plant = {
	height: 0,
	increaseHeight: function(growth){
		this.height = this.height + growth;
	},
	decreaseHeight: function(growth){
		this.height = this.height - growth;
	}
}

var Tree = Object.create(Plant);
Tree.branches = 0;
Tree.grow = function(amount){
	this.height = this.height + amount;
}
Tree.trim = function(amount){
	this.height = this.height - amount;
	this.branches = this.branches - 1;
}



var PearTree = Object.create(Tree);
var OakTree = Object.create(Tree);


for (var i = 1; i < 31; i++) {
	PearTree.grow(3);
	OakTree.grow(5);
	if (i % 10 === 0){
		PearTree.trim(15);
		OakTree.trim(20);
	}
	PearTree.branches = Math.floor(PearTree.height/10);
	OakTree.branches = Math.floor(OakTree.height/10);
	console.log("cycle number: ", i, "!")
	console.log("Pear tree is now ", PearTree.height, " tall and has ",PearTree.branches, " branches");
	console.log("Oak tree is now ", OakTree.height, " tall and has ",OakTree.branches, " branches");
}








