// modules
const describeWhenNotArray = require('./lib/describeWhenNotArray');

// spec
describe('toBeArray', () => {
  describe('when invoked', () => {
    describe('when subject is a true Array', () => {
      it('should confirm', () => {
        expect([]).toBeArray();
        expect(new Array()).toBeArray();
      });
    });
    describeWhenNotArray('toBeArray');
  });
});
