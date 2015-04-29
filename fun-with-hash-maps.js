numbers = [11, 12, 5, 4, 5, 11, 5];

// create hashMap object
var hashMap = {};

function createHashMap(arr)
{  
    // iterate over array
    for (var i = 0; i < arr.length; i++) {
        
        // calculate hash key for current array index - same as value here
        var bucket = arr[i];

        // check to see that key is not already in hashMap
        if (!hashMap[bucket]) {
            
            // if not, store it and its value in hashmap
            hashMap[bucket] = [arr[i]];  
            console.log(arr[i] + " added to hashMap[" + bucket + "]");
            
        } else {
            var displayValue = arr[i];
            
            // key is already in hashMap so notify user of duplicate
            console.log("duplicate number " + displayValue + " found in array");
            
            // push value to array in hashMap bucket
            hashMap[bucket].push(arr[i]);
            console.log(arr[i] + " added to hashMap[" + bucket + "]");
        }
    }
    for (var j in hashMap) {
        // print all keys in hashMap (no duplicates)
        console.log(j);    
    }
}

createHashMap(numbers);