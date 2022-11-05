require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI,

});

const openai = new OpenAIApi(configuration);


process.argv.shift()  // skip node.exe
process.argv.shift()  // skip name of js file
const arg = process.argv.join(" ");
if(arg.length == 0) {
    console.log("Please enter a valid question!")
    return;
}

async function AI(input) {
    try {
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: input,
        temperature: 0.6,
        max_tokens:1500
      });
    
    console.log(completion.data.choices[0].text)

    }catch(error) {
        console.log(error.status)
        console.log("Please Enter Valid Input")
    }
}

AI(arg);

