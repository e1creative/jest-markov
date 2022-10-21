const { MarkovMachine } = require('./markov.js')



describe('constructor function', function() {
    let mm;

    beforeEach(function() {
        mm = new MarkovMachine("the cat in the hat");
    })

    test('instance should have an attribute called "chains" and "words', function() {
        expect(Object.keys(mm)).toContain('words')
        expect(Object.keys(mm)).toContain('chains')
    })

    test('instance of words should contain all words in the passed arg', function() {
        expect(mm.words).toContain('the')
        expect(mm.words).toContain('cat')
        expect(mm.words).toContain('in')
        expect(mm.words).toContain('hat')
    })

    test('makeChains method', function(){
        expect(mm.makeChains()).toEqual(expect.any(Object))
        expect(Object.keys(mm.makeChains())).toContain('the')
        expect(Object.keys(mm.makeChains())).toContain('cat')
        expect(Object.keys(mm.makeChains())).toContain('in')
        expect(Object.keys(mm.makeChains())).toContain('hat')
    })
})

describe('makeText method', function() {
    let mm;

    beforeEach(function() {
        mm = new MarkovMachine("the cat in the hat");
    })

    test('makeText should return a string', function(){
        expect(mm.makeText()).toEqual(expect.any(String))
    })
})