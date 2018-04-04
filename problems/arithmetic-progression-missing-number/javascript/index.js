
const {createLogger , format, transports } = require('winston');
const {combine , timestamp, label, prettyPrint} = format;

const logger = createLogger({
    format: combine(
        label({label: 'algo intro'}),
        timestamp(),
        prettyPrint()
    ),
    transports : [new transports.Console()]
});



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
        logger.log({
            level: 'info',
            message: 'left side of array'
        });
        return (arr[mid] + diff);
    }

    
    if (mid > 0 && (arr[mid] - arr[mid-1] != diff)) {
        logger.log({
            level: 'info',
            message: 'right side of array'
        });
        return (arr[mid] + diff);
    }

    if (arr[mid] == arr[0] + mid*diff){
        logger.log({
            level: 'info',
            message: 'Missing element using right side of array'
        });
        return findMissingUsingBinarySearch(arr, mid+1, high, diff);
    }

    return findMissingUsingBinarySearch(arr, low, mid-1, diff);
}


function  findMissing(arr , n) {
    var diff = (arr[n -1] - arr[0])/n;

    logger.log({
        level: 'info',
        message: 'Difff output'
    });
    return findMissingUsingBinarySearch(arr, 0 , n, diff);
}

function execute() {
    var arr = [2, 4, 8, 10, 12, 14];
    // var arr = [2, 4, 6, 10];

    var n = arr.length;
    logger.log(
        'info',
        'First  %d and last %d element', arr[n-1], arr[0]
    );
    logger.log(
        'info',
        'Diff %d element for the given arithemetic series ', (arr[n-1], arr[0])/2
    );

    console.log("Missing element is ", findMissing(arr, n));
}

execute();