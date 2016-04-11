function mt_roman(args) {
	var keyArray = ['M', 'D', 'C', 'L', 'X', 'V', 'I'], valueArray = [1000, 500, 100, 50, 10, 5, 1];
	var number = args[0], arg1 = args[1], infoLength = 7;
	var sb = [], form, i;
	if (isBoolean(arg1)) {
		form = arg1 ? 0 : 4;
	} else {
		form = arg1;
	}
	for (i = 0; i < infoLength; i += 2) {
		if (2 <= i && valueArray[i - 2] - valueArray[i] <= number) {
			var i1 = i, i2 = i - 2, step;
			for (step = 0; step < form && i1 + 1 < infoLength && valueArray[i2] - valueArray[i1 + 1] <= number; step++) {
				i1++;
			}
			sb.push(keyArray[i1]);
			sb.push(keyArray[i2]);
			number += valueArray[i1];
			number -= valueArray[i2];
		}
		if (1 <= i && valueArray[i - 1] <= number) {
			sb.push(keyArray[i - 1]);
			number -= valueArray[i - 1];
		}
		if (1 <= i && valueArray[i - 1] - valueArray[i] <= number) {
			var i21 = i, i22 = i - 1, step1;
			for (step1 = 0; step1 < form && i21 + 1 < infoLength && valueArray[i22] - valueArray[i21 + 1] <= number; step1++) {
				i21++;
			}
			sb.push(keyArray[i21]);
			sb.push(keyArray[i22]);
			number += valueArray[i21];
			number -= valueArray[i22];
		}
		while (valueArray[i] <= number) {
			sb.push(keyArray[i]);
			number -= valueArray[i];
		}
	}
	return sb.join('');
}
