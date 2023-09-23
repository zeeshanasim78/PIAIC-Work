import { OpenAI } from "langchain/llms/openai";
import 'dotenv/config';
//  console.log(process.env.OPENAI_API_KEY);
const llm = new OpenAI({
    openAIApiKey: process.env.NEW_API_KEY,
    temperature: 0.9,
});
async function main(prompt) {
    const result = await llm.predict(`${prompt}`);
    // Handle the result...
    console.log(result);
}
const text = `
You should express what you want a model to do by \ 
providing instructions that are as clear and \ 
specific as you can possibly make them. \ 
This will guide the model towards the desired output, \ 
and reduce the chances of receiving irrelevant \ 
or incorrect responses. Don't confuse writing a \ 
clear prompt with writing a short prompt. \ 
In many cases, longer prompts provide more clarity \ 
and context for the model, which can lead to \ 
more detailed and relevant outputs.
`;
const prompt = `
Summarize the text delimited by triple quotation \ 
into a single sentence.
"""${text}"""
`;
main(prompt);
