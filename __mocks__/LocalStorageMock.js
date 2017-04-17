export default global.localStorage = { store: {}, clear() {
  this.store = {};
},

getItem(key) {
  return this.store[key];
},

setItem(key, value) {
  this.store[key] = value.toString();
}

}
