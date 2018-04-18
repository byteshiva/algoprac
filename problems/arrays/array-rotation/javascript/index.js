
console.log("leftRotate started");
function main(){
	function leftRotate(arr, d, n) {
		var i;
		for (i=0; i<d; i++) 
			leftRotateByOne(arr, n);
	}

	function leftRotateByOne(arr, n) {
		var i, temp;
		temp = arr[0];
		for(i =0; i < n-1; i++) 
			arr[i] = arr[i+1];
		arr[i] = temp;
	}

	function printArray(arr, size) {
		var i;
		for(i = 0; i < size; i++)
			console.log(arr[i]);
	}

	var arr = [1, 2, 3, 4, 5, 6, 7];
	leftRotate(arr, 2, 7);
	printArray(arr , 7);
}

main();
