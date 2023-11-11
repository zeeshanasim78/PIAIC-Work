import { OpenAI } from "langchain/llms/openai";
import "dotenv/config";
const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9, // Randomness and Uniqueness .. How to change the 
});
async function main() {
    const result = await llm.predict(
        `What would be a good company name for a IT company that makes system using Generative Artificial ?`
    );
    console.log(result);
}
main();