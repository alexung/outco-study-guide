//============
//START TIMECOMPLEXITY_1.JS
//============
/**
 *  Homework I
 *
 *  Instructions:
 *   List the Time and Auxiliary Space Complexity of each of the following functions in the space provided
 **/
// space complexity: input + auxiliary space
// auxiliary space complexity: within the confines of the function itself,
// don't include an (n) if it's an argument


/**
 * Problem 1:
 *  Time Complexity: O(1)
 *  Auxiliary Space Complexity: O(1) bc its just 1
 **/

function firstTimesLast(array) { //n array but doesn't count for auxiliary space complxity
  var result = null; // constant auxiliary space

  if (array.length < 2) {
    return result; // doesn't count for anything, still defined above
  } else {
    result = array[0] * array[array.length-1]; // doesn't count for anything, still defined above
    return result; // doesn't count for anything, still defined above
  }
};

/**
 * Problem 2:
 *  Time Complexity: O(n)
 *  Auxiliary Space Complexity: O(n) bc n + 1 + 1 + 1
 **/

function mostFrequentOccurrence(string) { // 1 input into space complexity
  var lowerString = string.toLowerCase(); // linear auxiliary space, O(n) bc toLowerCase has a for loop going through each index of the string
  var letters = {}; // constant auxiliary space
  var mostFrequent = []; // constant auxiliary space

  for(var i = 0; i < lowerString.length; i++) { // n time complexity
    if (letters[lowerString[i]]) { // constant auxiliary space bc worst case has 26 letters.  If it was an infinite amount of numbers it would be O(n)
      letters[lowerString[i]] ++; //  bc the hash could have an infinite amount of key-value pairs
    } else {
      letters[lowerString[i]] = 1;
    }
  }

  for(var key in letters) { // O(1) time complexity bc we have a finite amount of letters and we're looping through them,
                            // even though it's a for loop
    if (!mostFrequent.length) {
      mostFrequent = [key, letters[key]];
    } else {
      if (letters[key] > mostFrequent[1]) {
        mostFrequent = [key, letters[key]];
      }
    }
  }

  return mostFrequent[0];
};

/**
 * Problem 3:
 *  Time Complexity: Quadratic O(n^2)
 *  Auxiliary Space Complexity: Constant O(1) bc the input doesn't count
 **/

function printUnorderedPairs(array) { // n input into space complexity
 for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
};

/**
 * Problem 4:
 * it's basically binary search
 *  Time Complexity: O(logn)
 *  Auxiliary Space Complexity: O(logn) bc n + 1 + 1
 **/

function sortedArraySearch(sortedArray, target) { // n input into space complexity, 1 input into space complexity
  var mid = Math.floor(sortedArray.length / 2); // constant into auxiliary space

  var result = false;

  var hunt = function(start, end) {
    if (start >= end-1 && (sortedArray[start] === target || sortedArray[end] === target)){
      result = true;
      return;
    } else if (start >= end -1) {
      return;
    }

    var mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === target) {
      result = true;
      return;
    } else if (target > sortedArray[mid]) {
      hunt(mid, end);
    } else if (target < sortedArray[mid]) {
      hunt(start, mid);
    }
  }

  hunt(0, sortedArray.length-1);
  return result;
}

/**
 * Problem 5:
 *  Time Complexity: O(n*m)
 *  Auxiliary Space Complexity: O(n*m) bc n + n + 1 + 1
 **/
 // the reason we have O(n*m) is bc there could be a big difference
 // between the two different arrays

function makeCombinedMatrix(arrayOne, arrayTwo) { // n input into space complexity, n input into space complexity
  var result = []; // constant into space complexity
  var row; // constant into space complexity

  for (var i = 0; i < arrayOne.length; i++) {
    row = [];

    for (var j = 0; j < arrayTwo.length; j++) {
      row.push(arrayTwo[j] + arrayOne[i]);
    }

    result.push(row);
  }

  return result;
};

//Questions:
// 1. O(logn) what other examples other than binary search. binary tree search
// 2. How to calculate space complexity of things like O(logn), O(n*m), O(nlogn), etc

//============
//END TIMECOMPLEXITY_1.JS
//============
//============
//============
//START RECURSION_1.JS
//============

/**********************************************************************
  *                          Homework II                               *
  *                                                                    *
  *  Prompt: Given a set S, return the power set P(S), which is        *
  *          a set of all subsets of S.                                *
  *                                                                    *
  *  Input:  A String                                                  *
  *  Output: An Array with the power set of the input string           *
  *                                                                    *
  *  Example: S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']*                                                               *
  *                                                                    *
  *  Note: There should not be any duplicates in the power set         *
  *        ('ab' and 'ba' are considered the same), and it will always *
  *        begin with an empty string ('')                             *
  *                                                                    *
  **********************************************************************/

function combinations(str) {
    var fn = function(active, rest, arr) {
        if (!active && !rest)
            return;
        if (!rest) {
            arr.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), arr);
            fn(active, rest.slice(1), arr);
        }
        return arr;
    }
    return fn("", str, ['']);
}

// console.log(combinations('alex'));

// POWER SET APPROACH 2:
function getCombinations(str) {
  var chars = [];
  for (var j = 0; j <= str.length -1; j++) {
    chars.push(str[j]);
  }
  // var chars = chars.split('');
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      console.log(prefix + chars[i]);
      console.log(f(prefix + chars[i], chars.slice(i + 1)));
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  return result;
}

// POWERSET APPROACH 3: ITERATIVE
function powerset(ary) {
    var ps = [[]];
    for (var i=0; i < ary.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
          console.log("ps[j] " + ps[j]);
          console.log("ary[i] " + ary[i]);
            ps.push(ps[j].concat(ary[i]));
        }
    }
    return ps;
}

var res = powerset([1,2,3,4]);
// console.log(res);
// console.log('get combinations: ' + getCombinations('alex'));

//EXPONENT: ITERATIVE
function customExponent(base, exponent) { // O^n time complexity && O^1 space complexity
  var result = 1;
  if (exponent < 0 || Number.isInteger(base) !== true) {
    return "Not a valid exponent and/or base!";
  }
  for (var i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

// console.log(customExponent(2,2));
// console.log(customExponent(2,4));

//EXPONENT: RECURSIVE
function recursiveExponent(base, exponent) {
  var result;
  if (exponent = 0) {
    return;
  }

  if (exponent < 0 || Number.isInteger(base) !== true) {
    return "Not a valid exponent and/or base!";
  }

  for (var i = 1; i <= exponent; i++) {
    return result *= base * recursiveExponent(base, exponent-1);
    // return base*recursiveExponent(base, exponent-1);
    // return result;
  }
}

// console.log(recursiveExponent(2,2));

console.log(recursiveExponent(2,2));

// -----
// Factorial iterative approach

// function factorial(num) {
//   if (num < 0) {
//     return 'Invalid Argument';
//   } else if (num == 0) {
//     return 1;
//   }
//   var product = num;
//   while (num-- > 2) {
//     product *= num;
//   }
//   return product;
// }

// console.log(factorial(0));

// Factorial recursive approach
// function factorialRecurs(num) {
//   if (num < 0) {
//     return 'Invalid Argument';
//   } else if (num == 0) {
//     return 1;
//   } else {
//     return (num * factorialRecurs(num -1))
//     // if num = 5 initially, this becomes 5 * 4 * 3... all the way until
//     // it hits 0, and then it's just equivalent to 1 and returned there
//   }
// }

// console.log(factorialRecurs(3));

// fibonacci recursive

// function fibonacci(num) {
//   var result;
//   if (Number.isInteger(num) !== true) {
//     return "Please enter in an integer";
//   }
//   if (num === 0) {
//     return 0;
//   }
//   if (num === 1) {
//     return 1;
//   }

//   for (var i = num; i >= num; num++) {
//     result += fibonacci(i);
//   }
//   return result;
// }

// console.log(fibonacci(2));

// function nthFibonacci(n) {
//   var fibonacci = [0, 1]; // instantiate variable(s)

//   function searchFib(i) { // helper method… i = track state
//     if (i > n) { return; } // base case

//     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; // recursive
//     searchFib(i+1); // recursive
//   }

//   searchFib(2);
//   return fibonacci[n];
// }

// console.log(nthFibonacci(5));

//============
//END RECURSION_1.JS
//============
//============
//============
//START SORTING_1.JS
//============
 /**********************************************************************
  *                          Homework III                              *
  *                                                                    *
  *  Problem: Insertion Sort                                           *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using insertion sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/

function insertionSort(arr) {
  // iterate through arr
  for (var i = 0; i < arr.length; i++) {
    //have temp = arr[i]
    var temp = arr[i];
    console.log('temp is ' + temp);
    //loop starts at i - 1
    //loop ends when j >= 0 in value and arr[j] is greater than temp
    //j decrements through each iteration of the loop
    for (var j = i - 1; j >= 0 && (arr[j] > temp); j--) {
      //shift nums to the left
      arr[j+1] = arr[j];
    console.log('inside 2nd for loop ' + arr[j+1]);
    console.log('inside 2nd for loop ' + arr);
    }
    arr[j+1] = temp;
    console.log('outside 2nd for loop ' + arr[j+1]);
    console.log('outside 2nd for loop ' + arr);

  }
  return arr;
}

var testArr = [3,9,2,1,4,5,7];
// console.log(insertionSort(testArr));

// time complexity: O(n^2) worst case/avg case but O(n) for best case
// space complexity: O(1) - auxiliary



  /**********************************************************
   *             Highly Recommended Extra Credit            *
   *                                                        *
   *  Problem: Selection Sort                               *
   *                                                        *
   *  Prompt: Given an unsorted array of numbers,           *
   *          return a sorted array using insertion sort.   *
   *                                                        *
   *  Input: An unsorted array                              *
   *  Output: A sorted array                                *
   *                                                        *
   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
   *                                                        *
   *  What are the time and auxilliary space complexity?    *
   *  What is the best case time complexity?                *
   *                                                        *
   **********************************************************/

function selectionSort(items){

    var len = items.length,
        min;

    for (i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            var temp = items[i];
            items[i] = items[min];
            items[min] = temp;
        }
    }

    return items;
}

var testArr2 = [8,4,2,3,1,7,9,6];

console.log(selectionSort(testArr2));
//============
//END SORTING_1.JS
//============
//============
//============
//START DATASTRUCTURES_1.JS
//============
/**********************************************************************************
  *                                 Homework IV                                    *
  *                                                                                *
  *  Problem: Linked List                                                          *
  *                                                                                *
  *  Prompt: Create a Linked List class/constructor.                               *
  *          Name it LinkedList (js) or Linked_List(rb/py).                        *
  *                                                                                *
  *          Part 1: Create a node class for your LinkedList.                      *
  *                  Your node class will take an integer value and output         *
  *                  and output and object with the following properties:          *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.next: a pointer to the next value (initiall null)        *
  *                                                                                *
  *                  Example: { value: 1, next: null }                             *
  *                                                                                *
  *          Part 2: Create the LinkedList class.                                  *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  head: pointer to the head node                                *
  *                  tail: pointer to the tail node                                *
  *                  length: number of nodes in the linked list                    *
  *                                                                                *
  *                  The LinkedList should also contain the following properties   *
  *                                                                                *
  *                  append: function that adds a node to the tail                 *
  *                                                                                *
  *                  insert: function that takes in two values, one to be inserted *
  *                          and one to search.  It searches the list for the      *
  *                          search value, and if found, adds a new node with the  *
  *                          insert value after the node with the search value.   *
  *                                                                                *
  *                  delete: function that removes a node at a specified location, *
  *                          with a default action of deleting the head            *
  *                                                                                *
  *                  contains: function that checks to see if a value is contained *
  *                            in the list                                         *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A LinkedList instance                                                 *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/

  /**********************************************************************************
    *                                 Homework IV                                    *
    *                                                                                *
    *  Problem: Linked List                                                          *
    *                                                                                *
    *  Prompt: Create a Linked List class/constructor.                               *
    *          Name it LinkedList (js) or Linked_List(rb/py).                        *
    *                                                                                *
    *          Part 1: Create a node class for your LinkedList.                      *
    *                  Your node class will take an integer value and output         *
    *                  and output and object with the following properties:          *
    *                                                                                *
    *                  node.value: input value                                       *
    *                  node.next: a pointer to the next value (initiall null)        *
    *                                                                                *
    *                  Example: { value: 1, next: null }                             *
    *                                                                                *
    *          Part 2: Create the LinkedList class.                                  *
    *                  It should contain the following properties:                   *
    *                                                                                *
    *                  head: pointer to the head node                                *
    *                  tail: pointer to the tail node                                *
    *                  length: number of nodes in the linked list                    *
    *                                                                                *
    *                  The LinkedList should also contain the following properties   *
    *                                                                                *
    *                  append: function that adds a node to the tail                 *
    *                                                                                *
    *                  insert: function that takes in two values, one to be inserted *
    *                          and one to search.  It searches the list for the      *
    *                          search value, and if found, adds a new node with the  *
    *                          insert value after the node with the search value.   *
    *                                                                                *
    *                  delete: function that removes a node at a specified location, *
    *                          with a default action of deleting the head            *
    *                                                                                *
    *                  contains: function that checks to see if a value is contained *
    *                            in the list                                         *
    *                                                                                *
    *  Input:  N/A                                                                   *
    *  Output: A LinkedList instance                                                 *
    *                                                                                *
    *  What are the time and auxilliary space complexities of the various methods?   *
    *                                                                                *
    **********************************************************************************/

  var Node = function(value) {
    this.value = value;
    this.next = null;
  }

  var LinkedList = function() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  LinkedList.prototype.append = function(value) {
    var nodeToAppend = new Node(value),
        current = this.head;
    // in the event that the linkedlist is empty
    if (!current) {
      this.head = nodeToAppend;
      this.len++;

      return nodeToAppend;
    }

    //in the event that the linkedlist is NOT empty traverse to last node
    while (current.next) {
      current = current.next;
    }
    current.next = nodeToAppend;
    this.len++;

    return nodeToAppend;

  }

  LinkedList.prototype.insert = function(valToInsert, valToSearch) {
    var current = this.head;

    //find valToSearch
    while (current.value !== valToSearch && current.next !== null) {
      current = current.next;
    }
    //disconnect other node from it
    temp = current.next;

    //insert valToInsert to the pointer from valToSearch
    current.next = new Node(valToInsert);

    //attach pointer from valToInsert to the node that was initially attached to valToSearch
    valToInsert.next = temp;
    this.len++;

    return current;

  }

  LinkedList.prototype.del = function(location) {
    if (location === 0 && this.head !== null && this.head === this.tail){
      // case when linkedList consists of a single element
      this.head = null;
      this.tail = null;
      this.len--;
      return;
    } else if (location === 0 && this.head !== null && this.head.next !== null){
      // case when linkedList has more than one element, but
      // zeroth element is being removed
      this.head = this.head.next;
      this.len--;
      return;
    }

    var work = this.head;
    var counter = 0;
    while (work !== null){
      if (counter === (location-1) && work.next !== null && work.next === this.tail){
        // case when removing the last element of linkedList
        work.next = work.next.next;
        this.tail = work;
        this.len--;
        return;
      } else if (counter === (location-1) && work.next !== null){
        // case when removing values that are not the head or tail
        work.next = work.next.next;
        this.len--;
        return;
      }
      counter++;
      work = work.next
    }
    console.log('Error: Index ' + "'" + location + "'" + ' falls out of the range of the length of the linkedList');

  }

  LinkedList.prototype.contains = function(valueToSearch) {
    var result = false,
        current = this.head;

    // if list is empty, return false
    if (!current) {
      return false;
    }

    // if head is equal to value to search, return true
    if (current.value === valueToSearch) {
      return true;
    }

    //traverse through list with while loop and check if current.value == nodeToSearch
    while (current.next) {
      current = current.next;
      if (current.value === valueToSearch) {
        return true;
      }
    }

    return false;

  }

//============
//END DATASTRUCTURES_1.JS
//============
//============
//============
//START DATASTRUCTURES_2.JS
//============
/***********************************************************************************
  *                                 Homework V                                     *
  *                                                                                *
  *  Problem: Binary Search Tree                                                   *
  *                                                                                *
  *  Prompt: Create a BinarySearchTree class/constructor.                          *
  *          Name it binarySearchTree (js) or binary_search_tree (rb/py).          *
  *                                                                                *
  *          Part 1: Create a node class for your binarySearchTree.                *
  *                  Your node class will take an integer value and output         *
  *                  an object with the following properties:                      *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.leftChild: a pointer to the left child Node              *
  *                  node.rightChild: a pointer to the right child Node            *
  *                                                                                *
  *                  Example: { value: 1, leftChild: null, rightChild: null }      *
  *                                                                                *
  *          Part 2: Create the BinarySearchTree class.                            *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  root: pointer to the root node                                *
  *                  size: number of nodes in the BinarySearchTree                 *
  *                                                                                *
  *                  The BinarySearchTree will also have the following properties: *
  *                                                                                *
  *                  insert: method that takes takes an input value, and creates a *
  *                          new node with the given input.  The method will then  *
  *                          find the correct place to add the new node. (Remember *
  *                          that nodes with values larger than the parent node go *
  *                          to the right, and smaller values go to the left.)     *
  *                                                                                *
  *                  search: method that will search to see if a node with a       *
  *                          specified value exists.  If present returns true,     *
  *                          else returns false.                                   *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A BinarySearchTree instance                                           *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/


 /**
  *  Extra Credit: Remove
  *
  *  Prompt: Create a remove method on your BinarySearchTree that will remove and
  *          return a given value from the tree and retie the tree so it remains
  *          properly sorted.
  **/


var node = function(value){
  this.value = value,
  this.leftChild = null,
  this.rightChild = null

}


var binarySearchTree = function(){
  this.root = null;
  this.size = 0;
}

//basically, add()
binarySearchTree.prototype.insert(value) {
  //create a new item object, place data in
  var node = {
    value: value,
    leftChild: null
    rightChild: null,
  };

  //used to traverse the structure
  var current;

  //special case: no items in the tree yet
  if (this.root === null) {
    this.root = node;
  } else {
    current = this.root;
    while (true) {
      //if the new value is less than this node's value, go left
      if (value < current.value) {
        //if there's no left, then the new node belongs there
        if (current.left === null) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        // if there's no right, then the new node belongs there
        if (current.right === null) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      //if the new value is equal to the current one, just ignore
      } else {
        break;
      }
    }
  }

}

//basically, contains()
binarySearchTree.prototype.search() {
  var found = false,
  current = this.root;

  // make sure there is a node to search
  while (!found && current) {

    //if the value is less than the current node's, go left
    if (value < current.value) {
      current = current.left;
    // if the  value is greater than the current node's go right
    } else if (value > current.value) {
      current = current.right;
    } else {
      found = true;
    }

  }
  //return true if the node is found, or false if it isn't
  return found;
}

binarySearchTree.prototype.remove(value) {
  var found = false,
  parent = null,
  current = this.root,
  childCount,
  replacement,
  replacementParent;

  while (!found && current) {

    // if value is less than current node's, go left
    if (value < current.value) {
      parent = current;
      current = current.left;
    // if value is greater than current node's, go right
    } else if (value > current.value) {
      parent = current;
      current = current.right
    //values are equal, found it!
    } else {
      //remove the root and replace it with what?
      found = true;
    }
  }

  //only proceed if node was found
  if (found) {

    //figure out how many children
    childCount = (current.leftChild !== null ? true : false) + (current.rightChild !== null ? true : false);

    //special case: the value is at the root
    if (current === this.root) {
      switch(childCount) {

        //no children, just erase the root
        case 0:
          this.root = null;
          break;

        //one child, use one as the root
        case 1:
          this.root = (current.rightRight === null? current.leftChild : current.rightChild);
          break;

        //two children, little work to do
        case 2:

        //new root will be the old root's left child...maybe
        replacement = this.root.leftChild;

        //find the right most leaf node to be the real new root
        while (replacement.rightChild !== null) {
          replacementParent = replacement;
          replacement = replacement.rightChild;
        }

        //it's not the first node on the left
        if (replacementParent !== null) {
          //remove the new root from it's previous position
          replacementParent.rightChild = replacement.leftChild;

          //give the new root all of the old root's children
          replacement.rightChild = this.root.rightChild;
          replacement.leftChild = this.root.leftChild;

        } else {
          //just assign the children
          replacement.rightChild = this.root.rightChild;
        }
        //officially assign new root
        this.root = replacement;

      //no default;


      }
    //non-root values
    } else {

      switch (childCount) {
        //no children, just remove it from parent
        case 0:
          if (current.value < parent.value) {
            parent.leftChild = null;
          } else {
            parent.rightChild = null;
          }
          break;

        //one child, just reassign to parent
        case 1:
          //if the current value is less than its parent's, reset the left pointer
          if (current.value < parent.value) {
            parent.leftChild = (current.leftChild === null ? current.rightChild : current.leftChild);
          } else {
            parent.rightChild = (current.leftChild === null ? current.rightChild : current.leftChild);
          }
          break;

        //two children, a bit more complicated
        case 2:
          //reset pointers for new traversal
          replacement = current.leftChild;
          replacementParent = current;

        //find the right-most node
        while (replacement.rightChild !== null) {
          replacementParent = replacement;
          replacement = replacement.rightChild;
        }

        replacementParent.rightChild = replacement.leftChild;

        //assign children to the replacement
        replacement.rightChild = current.rightChild;
        replacement.leftChild = current.leftChild;

        //place the replacement in the right spot
        if (current.value < parent.value) {
          parent.leftChild = replacement;
        } else {
          parent.rightChild = replacement;
        }
      //no default
      }

    }
  }


};
//============
//END DATASTRUCTURES_2.JS
//============
//============
//============
//START SORTING_2.JS
//============
 /**********************************************************************
  *                          Homework VI                               *
  *                                                                    *
  *  Problem: Quicksort                                                *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using Quicksort sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/


  /**********************************************************************
   *                                                                    *
   *  Problem: Mergesort                                                *
   *                                                                    *
   *  Prompt: Given an unsorted array of numbers,                       *
   *          return a sorted array using Mergesort sort.               *
   *                                                                    *
   *  Input:  An unsorted array                                         *
   *  Output: A sorted array                                            *
   *                                                                    *
   *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
   *                                                                    *
   *  What are the time and auxilliary space complexity?                *
   *                                                                    *
   **********************************************************************/

//tc: O(n^2) in worst cases but mostly O(nlogn)
//asc: O(logn)
//divide and conquer algorithm
var quickSort = function(input, left, right){
  // find pivot to be the center of the array (not 1st item bc this will give us worst performance on already sorted arrays
//start left pointer at position 0 and
  var index;

  if (input.length > 1) {
    //start on very left of input arr
    left = typeof left != "number" ? 0 : left;
    //start at very right of input arr
    right = typeof right != "number" ? input.length -1 : right;

    index = partition(input, left, index - 1);

    // why index -1?
    if (left < index - 1) {
      quickSort(input, left, index - 1);
    }

    if (index < right) {
      quickSort(input, index, right);
    }
  }
  return input;
}
// function partition() relies on swap()
function swap(input, firstIndex, secondIndex) {
  var temp = input[firstIndex];
  input[firstIndex] = input[secondIndex];
  input[secondIndex] = temp;
}

function partition(input, left, right) {
  // will take the index floored at the center of the arr
  var pivot = input[Math.floor((right + left) /2)],
  i = left,
  j = right;

  while (i <= j) {
    while (input[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(input, i, j);
    }
  }

  return i;
}

//-----------------------mergesort below ------

//tc: O(nlogn)
//sc: O(n) bc you make dup arrays
var mergeSort = function(input){
  if (input.length < 2) {
    return arr;
  }

  var middle = parseInt(input.length / 2);
  var left = input.slice(0, middle);
  var right = arr.slice(middle, input.length);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes 1st index from arr and return it
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}
//============
//END SORTING_2.JS
//============
//============
//============
//START DATASTRUCTURES_3.JS
//============
// INSERT SHIT HERE INSERT SHIT HERE INSERT INSERT
// INSERT SHIT HERE INSERT SHIT HERE INSERT INSERT
// INSERT SHIT HERE INSERT SHIT HERE INSERT INSERT
// INSERT SHIT HERE INSERT SHIT HERE INSERT INSERT
// INSERT SHIT HERE INSERT SHIT HERE INSERT INSERT
// INSERT SHIT HERE INSERT SHIT HERE INSERT INSERT
// INSERT SHIT HERE INSERT SHIT HERE INSERT INSERT

//============
//END DATASTRUCTURES_3.JS
//============
//============
//============
//START DATASTRUCTURES_4.JS
//============
 /**********************************************************************************
  *                                 Homework VIII                                  *
  *                                                                                *
  *  Problem: Graph                                                                *
  *                                                                                *
  *  Prompt: Create a Graph class/constructor.                                     *
  *          Name it Graph (js) or graph (rb/py).                                  *
  *                                                                                *
  *          The Graph will have the following properties:                         *
  *                                                                                *
  *          vertices: A hash/dictionary/object to store vertices.                 *
  *                                                                                *
  *          totalVertices: The total vertices in your Graph.                      *
  *                                                                                *
  *          totalEdges: The total edges among all vertices in your Graph.         *
  *                                                                                *
  *          The Graph will also have the following methods:                       *
  *                                                                                *
  *          addVertex: Method that accepts an id (int/str), and creates an object *
  *                     with a "value" of id, and a property called "edges" which  *
  *                     will store the edges of the vertex. If a vertex with the id*
  *                     already exists, then do not create a new vertex.           *
  *                                                                                *
  *          getVertex: Method that takes an id, and outputs the vertex with the   *
  *                     matching id, if it exists.                                 *
  *                                                                                *
  *          removeVertex: Method that takes an id as its input, and removes the   *
  *                        vertex with the matching id.                            *
  *                                                                                *
  *          addEdge: Method that accepts two different id's as its input, and     *
  *                   creates an edge between both vertices.                       *
  *                   (This edge may look like [id1,id2])                          *
  *                                                                                *
  *          removeEdge: Method that accepts two different id's as its input, and  *
  *                      removes the edge between the two vertices if it exists.   *
  *                                                                                *
  *          findNeighbors: Method that accepts an id as its input, and returns    *
  *                         all of the edges of that vertex.                       *
  *                                                                                *
  *          forEachNode: Method that accepts an operation, and performs that      *
  *                       operation on each vertex in the Graph.                   *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A Graph instance                                                      *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/
// can be vertices that don't have any edges. they don't connect
//to anything

//can be used in traveling salesman problem

// (1)

// (4) ------ (2) ------- (3)

//vertexes look like:
// {value: 1,
  //edges: {}
//}

// { value: 2,
//  edges: {3: true, 4: true}
//}

// {value: 3,
// edges: {2: true}
//}

function Vertex(val) {
  this.value = val;
  this.edges = {};
}

function Graph() {
  this.vertices = {};
  this.totalVertices = 0;
  this.totalEdges = 0;
}

Graph.prototype.addVertex = function(id) {
  //if something does exist at this vertice!
  if (this.vertices[id] !== undefined) {
    return "Value already exists";
  } else {
    this.vertices[id] = new Vertex(id);
    this.totalVertices++;
  }
}

Graph.prototype.getVertex = function(id) {
  if (this.vertices[id] === undefined) {
    return "Value not found";
  } else {
    return this.vertices[id];
  }
}

Graph.prototype.removeVertex = function(val) {
  var deleteVertex = this.vertices[val];
  var deleteEdges = deleteVertex.edges;

  for (key in deleteEdges) {
    // would delete an edge for every single key connected to vertex
    this.removeEdge(key, val);
    // removeEdge ALREADY deletes an edge from totalEdges
  }
  delete this.vertices[val];
  this.totalVertices--;

}

Graph.prototype.addEdge = function(val1, val2) {
  var vert1 = this.vertices[val1];
  var vert2 = this.vertices[val2];

  vert1.edges[val2] = true;
  vert2.edges[val1] = true;
  this.totalEdges++;
}

Graph.prototype.removeEdge = function(val1, val2) {
  var vert1 = this.vertices[val1];
  var val2 = this.vertices[val2];

  delete vert1.edges[val2];
  delete vert2.edges[val1];
  this.totalEdges--;
}

Graph.prototype.findNeighbors = function(val) {
  var neighbors = [];

  for (edge in this.vertices[id].edges) {
    neighbors.push(this.vertices[edge]);
  }

  return neighbors;

}

Graph.prototype.forEachNode = function(callback) {
  // assume callback returns something
  var results = [];

  for (val in this.vertices) {
    results.push(callback(val));
  }

  return results;
}


 /**
  *  Extra Credit: forEachEdge
  *
  *  Prompt: Method that accepts an operation, and performs that operation on each
  *          edge in the Graph.
  **/

//============
//END DATASTRUCTURES_4.JS
//============
//============
//============
//START RECURSION_2.JS
//============

//============
//END RECURSION_2.JS
//============
//============
//============
//START DYNAMICPROGRAMMING_1.JS
//============

//============
//END DYNAMICPROGRAMMING_1.JS
//============
//============
//============
//START SORTING_3.JS
//============

//============
//END SORTING_3.JS
//============
//============
//============
//START OTHER
//============
function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}
//============
//END OTHER
//============
