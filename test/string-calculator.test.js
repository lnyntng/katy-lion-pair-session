import StringCalculator from '../src/string-calculator';
import {
    expect
} from 'chai';

const calculator = new StringCalculator();

describe('String Calculator', () => {
	describe('add', () => {
		describe('empty string as param', () => {
			it('should return 0', () => {
				var result = calculator.add('');
				expect(result).to.equal(0);
			});
		});
		describe('1 number string as param', () => {
			it('should return the same number', () => {
				var result = calculator.add('1');
				expect(result).to.equal(1);
			});
		});
		describe('two numbers string as param', () => {
			it('should return the addition of the numbers', () => {
				var result = calculator.add('1,2');
				expect(result).to.equal(3);
			});
		});
		describe('many numbers string as param', () => {
			it('should return the addition of the numbers', () => {
				var result = calculator.add('1,2,1,1,1,1,1');
				expect(result).to.equal(8);
			});
		});
		describe('numbers string separated by new space as param', () => {
			it('should return the addition of the numbers', () => {
				var result = calculator.add('1\n2,3');
				expect(result).to.equal(6);
			});
		});
	});
});