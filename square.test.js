const { square, cube } = require('./square')

describe('square function', function() {
    test('square should square a number', function() {
        const res = square(3)
        expect(res).toEqual(9)
    })
    
    test('square should square negative numbers', function() {
        const num = square(-9)
        expect(num).toEqual(81)
    })
})

describe('cube function', function() {
    test('it should cube a positive number', function() {
        const num = cube(3)
        expect(num).toEqual(27)
        const num2 = cube(2)
        expect(num2).toEqual(8)
    })
})

describe('test matchers', function() {
    test('compare toBe and toEqual', function(){
        const nums = [3,4,5]
        const copy = [...nums]
        const nums2 = nums
        // to equal is value based
        expect(copy).toEqual(nums)
        // to be is reference based, so this will fail
        expect(nums2).toBe(nums)
    })

    test('playing with toContain matcher', function() {
        const colors = ['red', 'orange']
        expect(colors).toContain('red')
    })

    test('playing with any', function() {
        const ranNum = Math.random() * 6;
        expect(ranNum).toEqual(expect.any(Number))
    })
})