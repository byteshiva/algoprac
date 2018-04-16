/*
 * using dynamic programming method 
 *
 */

function fibonnaci(n) {
	var fibo = [0, 1];

	if (n <= 2) return 1;

	for (var i = 2; i<=n; i++) {
		fibo[i] = fibo[i-1] + fibo[i-2];
	}
	return fibo[n];
}
console.time('test start');
console.log(fibonnaci(12));
console.time('test end');
console.time('test start');
console.log(fibonnaci(1112));
console.time('test end ');

/*
 * O(2n) complexity 
 * worst case with recurssive method
 */


function fibonnaci_recurr(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonnaci_recurr(n-1) + fibonnaci_recurr(n-2);
	}
}

console.log(fibonnaci_recurr(12));
// Worst case with recurrsive method
console.log(fibonnaci_recurr(82));

