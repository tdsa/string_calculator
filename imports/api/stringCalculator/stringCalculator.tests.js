
import { assert } from 'meteor/practicalmeteor:chai';
import StringCalculator from './stringCalculator.js';

describe('StringCalculator', function(){
    it('should return 0 with an empty string', function(){
        assert.equal(StringCalculator.add(""), 0);
    });
});