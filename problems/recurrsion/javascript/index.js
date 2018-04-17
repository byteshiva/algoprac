// Sum add

function add(x, y) {

	var keep = (x & y) << 1;
	var res = x ^ y;


	if (keep === 0) {
		return res;
	}
	
	// return add 
	return add(keep, res);
}

console.log(add(15, 38));
