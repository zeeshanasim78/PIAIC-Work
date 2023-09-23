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
Making a cup of tea is easy! First, you need to get some \ 
water boiling. While that's happening, \ 
grab a cup and put a tea bag in it. Once the water is \ 
hot enough, just pour it over the tea bag. \ 
Let it sit for a bit so the tea can steep. After a \ 
few minutes, take out the tea bag. If you \ 
like, you can add some sugar or milk to taste. \ 
And that's it! You've got yourself a delicious \ 
cup of tea to enjoy.
`;
const prompt = `
You will be provided with text delimited by triple quotes. 
If it contains a sequence of instructions, \ 
re-write those instructions in the following format:

Step 1 - ...
Step 2 - …
…
Step N - …

If the text does not contain a sequence of instructions, \ 
then simply write "No steps provided."

"""${text}"""
`;
main(prompt);
