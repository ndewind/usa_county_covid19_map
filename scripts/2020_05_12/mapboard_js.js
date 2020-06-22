
/* --Functions-- */
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

function logIndx(array,cmp) {
	let output = [];
	for (let k = 0; k < array.length; k++) {
		output[k] = array[k] === cmp;
	}
	return output;
}

function sum(array) {
	let output = 0;
	for (let k = 0; k < array.length; k++) {
		output = output + array[k];
	}
	return output;
}

function unique(array) {
	let uniArray = [];
	for (let k = 0; k < array.length; k++) {
		if (!ismember(uniArray,array[k])){
			uniArray.push(array[k])
		}
	}
	return uniArray;
}

function ismember(array,cmp) {
	for (let k = 0; k < array.length; k++) {
		if (cmp === array[k]) {
			return true;
		}
	}
	return false;
}

function subArrLog(array,logIndx) {
	if (array.length !== logIndx.length) {return -1};
	let subArray = [];
	for (let k = 0; k < array.length; k++) {
		if (logIndx[k]) {
			subArray.push(array[k]);
		}
	}
	return subArray;
}

function str2num(str) {
	let num = [];
	for (k = 0; k < str.length; k++){
		num.push(Number(str[k]))
	}
	return num
}

function max(arr) {
	let maxnum = arr[0];
	for (let k = 1; k < arr.length; k++) {
		if (maxnum < arr[k]){maxnum = arr[k]}
	}
	return maxnum
}

// convert date strings to date objects
function dateStr2Date(strDateArr) {
	let strDatePieces = [];
	let allDate = [];
	for (let kdate = 0; kdate < strDateArr.length; kdate++) {
		strDatePieces = strDateArr[kdate].split("-");
		allDate.push(new Date(Number(strDatePieces[0]),Number(strDatePieces[1])-1,Number(strDatePieces[2])));
	
	}
	return allDate;
}

	
// sort array and add indices to an array
function sortWithIndices(toSort) {
  for (var i = 0; i < toSort.length; i++) {
	toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
	return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
	toSort.sortIndices.push(toSort[j][1]);
	toSort[j] = toSort[j][0];
  }
  return toSort;
}
