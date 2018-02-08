
import { assert } from 'meteor/practicalmeteor:chai';
import GameOfLife from './gameOfLife.js';

describe('GameOfLife', function(){
    it('Does something', function(){
        var gol = GameOfLife;
        gol.functionName();
        assert.equal(gol.variable, 1);
    });
});