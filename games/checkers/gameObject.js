// Generated by Creer at 10:51PM on August 19, 2015 UTC, git hash: '44abe78df9634b90415f2d1791a923bdc6e4f5c6'
// This is a simple class to represent the GameObject object in the game. You can extend it by adding utility functions here in this file.

var Class = require("../../utilities/class");
var client = require("../../client");
var BaseGameObject = require("../../baseGameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * GameObject - An object in the game. The most basic class that all game classes should inherit from automatically.
 * @class
 */
var GameObject = Class(BaseGameObject, {
    /// initializes a GameObject with basic logic as provided by the Creer code generator
    init: function() {
        BaseGameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * String representing the top level Class that this game object is an instance of. Used for reflection to create new instances on clients, but exposed for convenience should AIs want this data.
         *
         * @name GameObject#gameObjectName
         * @type string
         */
        this.gameObjectName = "";

        /**
         * A unique id for each instance of a GameObject or a sub class. Used for client and server communication. Should never change value after being set.
         *
         * @name GameObject#id
         * @type string
         */
        this.id = "";

        /**
         * Any strings logged will be stored here when this game object logs the strings. Intended for debugging.
         *
         * @name GameObject#logs
         * @type Array.<string>
         */
        this.logs = [];

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * adds a message to this game object's log. Intended for debugging purposes.
     *
     * @param {string} message - A string to add to this GameObject's log. Intended for debugging.
     */
    log: function(message) {
        return client.runOnServer(this, "log", {
            message: message,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = GameObject;
