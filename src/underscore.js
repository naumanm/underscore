var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    var myArr = [];
    if (n === undefined) {
      return array[0];
    }
    for(var i = 0; i < n; i++){
      if (array[i] !== undefined){
        myArr.push(array[i]);
      }
    }
    return myArr;
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var myArr = [];
    if (n > array.length) {
      return array;
    }
      if (n === undefined) {
        return array[array.length-1];
      } else {
        for(var i = array.length-n; i < array.length; i++) {
          myArr.push(array[i]);
        }
        return myArr;
      }
  },

  // Produce a duplicate-free version of the array.
  // uniq: function (array) {
    // testArray = [];
    // dupCheck = 0;
    // array.forEach(function(i) {
    //   array.forEach(function(j) {
    //     if (i === j) {
    //       console.log(i,j);
    //       console.log("duplicate");
    //       dupCheck++;
    //     }
    //   });
    //   if (dupCheck = 1){
    //     testArray.push(i);
    //   }
    // });
    // return testArray;

  uniq :function(array) {
    var dupFreeArray = [];
    array.forEach(function(item){
      if (dupFreeArray.indexOf(item) === -1) {
        dupFreeArray.push(item);
      }
    });
    return dupFreeArray;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {

  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {

  }
};
module.exports = myFunctions;
