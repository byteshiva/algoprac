// @ TODO - add debug statements
// Find the missing number in Arithmetic Progression 
function findMissingUsingBinarySearch(arr , low , high , diff) {
    var INT_MAX = "-- Note: should have atleast two elements";

    // There should be two elements to find the missing 
    if (high <= low)
        return INT_MAX;

    console.log("High , low", high, low);

    var mid = low + Math.floor((high - low)/2);

    console.log("middle number ", mid);

    if (arr[mid+1] - arr[mid] != diff) {
        console.log("left array only");
        return (arr[mid] + diff);
    }

    
    if (mid > 0 && (arr[mid] - arr[mid-1] != diff)) {
        console.log("right array only");
        return (arr[mid] + diff);
    }

    if (arr[mid] == arr[0] + mid*diff){
        console.log("Missing element using recurr");
        return findMissingUsingBinarySearch(arr, mid+1, high, diff);
    }

    return findMissingUsingBinarySearch(arr, low, mid-1, diff);
}


function  findMissing(arr , n) {
    var diff = (arr[n -1] - arr[0])/n;

    console.log("Diff output ", diff);
    return findMissingUsingBinarySearch(arr, 0 , n, diff);
}

function execute() {
    var arr = [2, 4, 8, 10, 12, 14];
    // var arr = [2, 4, 6, 10];

    var n = arr.length;
    console.log(arr[n -1 ], arr[0]);
    console.log((arr[n-1] - arr[0])/n);

    console.log("Missing element is ", findMissing(arr, n));
}

execute();