import dotenv from 'dotenv';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';

dotenv.config();

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

/**
 * Basic LLM call
 */
// const res = await model.call(
//   'What would be a good company name a company that makes colorful socks?',
// );
// console.log(res);

/**
 * Prompt template
 */
// const template = 'What is a good name for a company that makes {product}?';
// const prompt = new PromptTemplate({
//   template: template,
//   inputVariables: ['product'],
// });

// const res = await prompt.format({ product: 'colorful socks' });
// console.log(res);

/**
 * LLMChain
 *
 * Combine prompt template with LLM call
 */
const template = 'What is a good name for a company that makes {product}?';
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'],
});

const chain = new LLMChain({ llm: model, prompt: prompt });

const res = await chain.call({ product: 'colorful socks' });
console.log(res);
