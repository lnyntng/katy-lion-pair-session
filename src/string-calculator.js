class StringCalculator {
	add(numbers){
		if(numbers === ""){
			return 0;
		} else {
			var separators = [',', '\n'];
			separators.join('|');
			var arr = numbers.split(new RegExp(separators.join('|'), 'g'));
			var sum = 0;
			for(var i = 0; i < arr.length; i++){
				sum += parseInt(arr[i]);
			}
			return sum;
		}
	};
}

export default StringCalculator;