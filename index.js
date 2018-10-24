"use strict";
(function(global){
  const determination = function(val){
    // primitive
    if(typeof val === "string"){
      return "string";
    }
    if(typeof val === "number"){
      return "number";
    }
    if(typeof val === "boolean"){
      return "boolean";
    }
    if(typeof val === "undefined"){
      return "undefined";
    }
    if(val === null){
      return "null";
    }

    // reference
    if(typeof val === "function"){
      return "function";
    }

    if(val instanceof Array){
      return "array";
    }

    if(val instanceof RegExp){
      return "regexp";
    }

    if(val instanceof Object){
      return "object";
    }

  };

  global.APP = global.APP ? global.APP : {};
  global.APP.determination = determination;

})(window);