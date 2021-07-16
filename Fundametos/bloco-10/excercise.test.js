const { uppercase, findUserById, getUserName } = require('./excercise');

describe('Excercise 1', () => {
	it('should have an return of capital letters', (done) => {
		uppercase('teste', (teste) => {
			expect(teste).toBe('TESTE');
			done();
		});
	});
});

describe('Excercise 2-3', () => {
	it('should return name from id', () => {
		expect.assertions(1);
		return getUserName(4)
			.then(data => expect(data)
				.toEqual('Mark'));
	});

	it('should return an erro', () => {
		const expected = {
			error: 'User with 99 not found.'
		}
		expect.assertions(1);
		return getUserName(99)
			.then(data => expect(data)
				.toEqual(expected));
	});
});
