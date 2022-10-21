/** Command-line tool to generate Markov text. */
const fs = require('fs')
const axios = require('axios')

const { MarkovMachine } = require('./markov')


// errors first: 
if (process.argv[2] !== 'file' && process.argv[2] !== 'url') {
    console.log('ERROR: Please provide an input type. "file" or "url".')
    process.exit(1);
}


// if the "url" arg is passed
if (process.argv[2] === "url") {
    console.log("Url: ", process.argv[3])

    let inputUrl = process.argv[3];

    const substr1 = "http://"
    const substr2 = "https://"
    // error handling
    if (!inputUrl.includes(substr1) && !inputUrl.includes(substr2)) {
        console.log('ERROR: Please provide a properly formed url: "http://example.com" or "https://example.com".')
        process.exit(1);    
    }

    async function writeFromInput(){
        try {
            let resp = await axios.get(inputUrl)
            let mm = new MarkovMachine(resp.data)
            console.log(mm.makeText())
        } catch (e) {
            console.log(e)
            process.exit(1)
        }
    }
    writeFromInput();
}


// if the "file" arg is passed
if (process.argv[2] === "file"){
    let inputPath = process.argv[3];

    fs.readFile(inputPath, 'utf-8', (err,data) => {
        if (err){
            console.log("ERROR: ", err)
            process.kill(1)
        }
        let mm = new MarkovMachine(data)
        let newStr = mm.makeText(50)
        console.log(newStr)
})
}
