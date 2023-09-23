import { OpenAI } from "langchain/llms/openai";
import 'dotenv/config';
//  console.log(process.env.OPENAI_API_KEY);
const llm = new OpenAI({
    openAIApiKey: process.env.NEW_API_KEY,
    temperature: 0.9,
});
async function main() {
    const result = await llm.predict(`What would be a good company name for a company that makes colorful socks?`);
    // Handle the result...
    console.log(result);
}
main();
