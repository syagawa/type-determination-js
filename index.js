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

  const determinationByClass = function(val){
    let res = Object.prototype.toString.call(val);
    res = res.replace(/\[|\]|object|\s/g, "");
    return res;
  };


  global.APP = global.APP ? global.APP : {};
  global.APP.determination = determination;
  global.APP.determinationByClass = determinationByClass;

})(window);