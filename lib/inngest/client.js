import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "typefinance",
name:'TypeFinance',
// to retry if it fails
retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
}),
 });