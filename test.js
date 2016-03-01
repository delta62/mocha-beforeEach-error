describe('My Test Suite', function() {
    beforeEach(function() {
        throw new Error('oh noes');
    });

    it('should do a thing', function() {
        console.log('success!');
    });
});

describe('some other suite', function() {
    it('should do another thing', function() {
        console.log('success!');
    });
});
