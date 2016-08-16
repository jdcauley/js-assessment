exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for(var i = 0, x = arr.length; i < x; i++){
      sum = (arr[i] + sum);
    }
    return sum;
  },

  remove: function(arr, item) {
    var newArray = [];
    for(var i = 0, x = arr.length; i < x; i++){
      if(arr[i] != item){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  removeWithoutCopy: function(arr, item) {

    var locationArray = [];

    for(var i = 0, x = arr.length; i < x; i++){
      if(arr[i] === item){
        locationArray.push(i);
      }
    }

    locationArray.reverse();

    for(var i = 0, x = locationArray.length; i < x; i++ ){
      arr.splice(locationArray[i], 1);
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {

    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {

    newArr = [];

    for(var i = 0, x = arr.length; i < x; i++){
      if(arr[i] === item){
        newArr.push(arr[i]);
      }
    }

    return newArr.length;

  },

  duplicates: function(arr) {

    var dupes = [];
    arr.sort();
    for(var i = 0, x = arr.length; i < x; i++){

      var firstLoc = arr.indexOf(arr[i]);

      if( (i != firstLoc) && (dupes.indexOf(arr[i]) === -1) ){
        dupes.push(arr[i]);
      }
    }

    return dupes;
  },

  square: function(arr) {
    var newArr = arr.map(function(num){
      return num * num;
    });
    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    var locationArray = [];
    for(var i = 0, x = arr.length; i < x; i++){

      if(arr[i] === target){
        locationArray.push(i);
      }

    }
    return locationArray;

  },

};
