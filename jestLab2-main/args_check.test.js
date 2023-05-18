const some = require('./args_check');

const mockFun = jest.fn(x => "Vladyslav", y => "Balan");

test('Mock test', () => {
    some.someAction("Vladyslav", "Balan", mockFun);
    expect(mockFun.mock.calls[0][0]).toEqual("Vladyslav");
    expect(mockFun.mock.calls[0][1]).toEqual("Balan");
});
test('Mock test FAILED', () => {
    some.someAction("Vladyslav", "Balan", mockFun);
    expect(mockFun.mock.calls[0][0]).not.toEqual("Roma");
    expect(mockFun.mock.calls[0][1]).not.toEqual("Bash");
});

test('test callbacks', () => {
    expect(some.someAction("Vladyslav", "Balan", some.calc)).toEqual("Vladyslav Balan");
});