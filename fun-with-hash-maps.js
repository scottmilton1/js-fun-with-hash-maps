numbers = [11, 12, 5, 4, 5, 11, 5];

// create hashMap object literal
var hashMap = {};

function createHashMap(arr)
{  
    // iterate over array
    for (var i = 0; i < arr.length; i++) {
        
        // calculate hash key for current array index - same as value in this simple implementation
        var bucket = arr[i];

        // check to see that key is not already in hashMap
        if (!hashMap[bucket]) {
            
            // if not, store it and its value in hashmap
            hashMap[bucket] = [arr[i]];  
            
        } else {
            // otherwise, key is already in hashMap so notify user of duplicate
            var displayValue = arr[i];     

            console.log("Duplicate number " + displayValue + " found in array");
            
            // push value to array in hashMap bucket
            hashMap[bucket].push(arr[i]);
        }
    }
}


// TEST CASES:

// test 1: make sure total number of values is the same
function testTotalCount(arr, hm) { 
    var count = 0;
    var displayMessage = "testTotalCount: ";
    
    for (var j in hm) {
        // count all keys in hashMap
        count += Object.keys(hm[j]).length; 
    }
        
    if (count === arr.length) {
        displayMessage += "PASS";
    } else {
       displayMessage += "FAIL";
    }
    console.log(displayMessage);
}


// test 2: make sure all values in array are in hashMap
function testAllValues(arr, hm) { 
    var displayMessage = "testAllValues: ";

    // check that each element in array is also in hashMap
    outer:
    for (var i = 0; i < arr.length; i++) {
        for (var j in hm) {
            var val = hm[j]; 
            if (val[0] === arr[i]) {
                // remove the matched value from hashMap
                // in more permanent version, would deep
                // copy entire hashMap to preserve it
                val.shift();
                break outer;
            }
        }
        // if any array value not found in hashMap, test fails
        console.log(displayMessage += "FAIL");
        return;
    }
    // if all values found, test passes
    console.log(displayMessage += "PASS");
}


// create hash map
createHashMap(numbers);

// run tests
console.log("RUNNING TESTS:");
testTotalCount(numbers, hashMap);
testAllValues(numbers, hashMap);
