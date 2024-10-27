import { action } from "./_generated/server";
import { v } from "convex/values";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GALADRIEL_API_KEY,
  baseURL: process.env.GALADRIEL_BASE_URL,
});

export const generatePodcastTextAction = action({
  args: { input: v.string() },
  handler: async (_, { input }) => {
    const completionCreateResponse = await openai.chat.completions.create({
        
        messages: [
            { role: 'user', content: 'Your job is to be the speaker for a story or long-form single-speaker podcast about the topic that the user provides. The user may also provide a podcast name and a speaker name. Do not include any metadata or stage directions in the podcast. Start the podcast immediately after this message.'},
            { role: 'user', content: input}
        ],
        model: 'llama3.1:70b',
        max_tokens: 130072 ,
    });
    
    return completionCreateResponse;
  },
});