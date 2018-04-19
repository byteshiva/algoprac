function addOne(x) {
	var m = 1;
	
	while( x & m) {
		x = x ^ m;
		m <<= 1;
	}

	x = x ^ m;
	return x;
}

function main() {
	console.log("addOne ..",addOne(13));
}

main();
