/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    // this.words is an array of words
    this.makeChains();

  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO

    // create an instance object to hold our chain
    this.chains = {}

    this.words.forEach((val, i) => {
      // we have the index in i and current val.  we need to add the key to the array and append the val of the next word
      let nextWord = this.words[i+1] ? this.words[i+1] : null;
      this.chains[val] ? this.chains[val].push(nextWord) : this.chains[val] = [nextWord];
    })

    return this.chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO

    // create an array of words that we will turn into a string later
    let str = [];

    // pick random first word
    let currWord = this.words[Math.floor(Math.random() * Object.keys(this.chains).length)];

    let done = false;

    while (!done) {
      // on the first run of this loop, the currWord will be our randomly picked word.  we'll push that into our array.
      // on the next iteration of the loop, the currWord will be set to a newly picked word, based on our chains object
      str.push(currWord)

      // find all words that can come after our currword (from the values in our chains object) 
      // and pick a random word from the list to be our next word
      let nextWord = this.chains[currWord][Math.floor(Math.random() * this.chains[currWord].length)]

      // if we picked null, we’ve reached the end of the chain, so stop
      // also if the current length of str array is at our numWords limit, then stop
      nextWord === null || str.length >= numWords ? done = true : currWord = nextWord;
    }
    // console.log(str.join(' '));
    return str.join(' ');

  }
}

module.exports = { MarkovMachine }