// Sorting numbers using simple swap methods 
//
//
function swap(arr, i) {
	var t;
	t = arr[ (arr[i] - 1) ] ;
	arr[ (arr[i] - 1) ] = arr[i];
	arr[i] = t;
}

function sortit(arr, n) {
	var i, t;
	for (i = 0; i < n; i++) {
		while (i != (arr[i] -1)) {
			t = arr[ (arr[i] - 1) ] ;
			arr[(arr[i] - 1)] = arr[i];
			arr[i] = t;
			//swap(arr[i], arr[arr[i] -1]);
		}
	}
}

function main() {
	var arr = [11, 10, 7, 9, 2, 8, 3, 5, 4, 6, 1, 12];
 	var n = arr.length;

	sortit(arr, n);
	return arr;
}

console.log("Main ");
console.log(main());
