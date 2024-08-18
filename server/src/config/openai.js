import OpenAI from "openai";

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAI(configuration)
    }
    static textComplition({prompt}){
        return{
            model: "gpt-3.5-turbo-instruct",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}

const response = await openai.completions.create({
 
});