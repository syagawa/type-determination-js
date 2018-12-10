"use strict";
(function(global){
  const determination = function(val){
    // primitive
    if(typeof val === "string"){
      return "string";
    }
    if(typeof val === "number"){
      if(Number.isNaN(val)){
        return "NaN";
      }else{
        return "number";
      }
    }
    if(typeof val === "boolean"){
      return "boolean";
    }
    if(typeof val === "undefined"){
      return "undefined";
    }
    if(typeof val === "symbol"){
      return "symbol";
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

    if(val instanceof Map){
      return "map";
    }

    if(val instanceof Set){
      return "set";
    }

    if(val instanceof WeakMap){
      return "weakmap";
    }

    if(val instanceof WeakSet){
      return "weakset";
    }


    if(val instanceof Object){
      return "object";
    }

  };

  const determinationByClass = function(val){
    let res = Object.prototype.toString.call(val);
    res = res.replace(/\[|\]|object|\s/g, "");
    if(val instanceof Map){
      res = "map";
    }
    if(val instanceof Set){
      res = "weakset";
    }
    if(val instanceof WeakMap){
      return "weakmap";
    }
    if(val instanceof WeakSet){
      return "set";
    }
    if(Number.isNaN(val)){
      res = "NaN";
    }
    return res;
  };


  global.APP = global.APP ? global.APP : {};
  global.APP.determination = determination;
  global.APP.determinationByClass = determinationByClass;

})(window);