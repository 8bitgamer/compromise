// const addWords = require('./addWords');
const fns = require('../fns');
let data = require('./_data');
let moreData = require('./more-data');
let tags = require('../tagset');
let unpack = require('./unpack');
let addTags = require('./addTags');
let addWords = require('./addWords');
let reIndex = require('./reIndex');

//lazier/faster object-merge
const extend = (main, obj) => {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    main[keys[i]] = obj[keys[i]];
  }
};

//class World
let World = function() {
  this.words = {};
  this.tags = tags;
  this.regex = {};
  this.patterns = {};
  this.conjugations = {};
  this.plurals = {};
  this.firstWords = {};
};

World.prototype.addTags = addTags;
World.prototype.addWords = addWords;

//make a no-reference copy of all the data
World.prototype.clone = function() {
  let w2 = new World();
  ['words', 'firstWords', 'tagset', 'regex', 'patterns', 'conjugations', 'plurals'].forEach((k) => {
    w2[k] = fns.copy(this[k]);
  });
  return w2;
};

//denormalize all the multi-word terms
World.prototype.reindex = function() {
  reIndex(this);
};

//add all the things, in all the places
World.prototype.plugin = function(obj) {
  //untangle compromise-plugin
  obj = unpack(obj);
  //add all-the-things to this world object
  if (obj.tags) {
    this.addTags(obj.tags);
  }
  if (obj.words) {
    this.addWords(obj.words);
  }

};

//export a default world
let w = new World();
w.plugin(data);
moreData.forEach((obj) => {
  extend(w.words, obj);
});
w.reindex();
module.exports = w;
