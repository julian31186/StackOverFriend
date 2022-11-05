require("dotenv").config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI,

});

const openai = new OpenAIApi(configuration);

async function AI(input) {
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: input,
        temperature: 0.6,
      });
    
    console.log(completion.data.choices[0].text)
}

AI('who is the president of UB');

