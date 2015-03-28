// Generated by Creer, git hash 85ea1f696c6b9066cad480281f599d9c78f16d32
// This is a simple class to represent the Checker object in the game. You can extend it by adding utility functions here in this file.

var Class = require("../utilities/class");
var GameObject = require("./gameObject");

/// @class Checker: A checker on the game board.
var Checker = Class(GameObject, {
	/// initializes a Checker with basic logic as provided by the Creer code generator
	// @param <object> data: initialization data
	init: function(data) {
		GameObject.init.call(this, data);

		this.owner = (data.owner === undefined ? null : data.owner);
		this.y = parseInt(data.y === undefined ? 0 : data.y);
		this.x = parseInt(data.x === undefined ? 0 : data.x);
		this.kinged = (data.kinged === undefined ? false : data.kinged);
	},


	/// Moves the checker from its current location to the given (x, y).
	// @param <int> x: The x coordinate to move to.
	// @param <int> y: The y coordinate to move to.
	move: function(x, y) {
		return this._client.sendCommand(this, "move", {
			x: x,
			y: y,
		});
	},
});

module.exports = Checker;
