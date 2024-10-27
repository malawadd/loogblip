import { action } from "./_generated/server";
import { v } from "convex/values";

// Define the interface for the image generation options
interface GenerateImageOptions {
  modelId: string;
  prompt: string;
  steps?: number;
  width?: number;
  height?: number;
}

interface LivepeerResponse {
  images: {
    nsfw: boolean;
    seed: number;
    url: string;
  }[];
}

// Define the image generation function
const generateImageFromPrompt = async ({
  modelId,
  prompt,
  steps = 6,
  width = 1024,
  height = 1024,
}: GenerateImageOptions): Promise<string | null> => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer 2e3dfc14-83f7-431a-8dc1-6e85e0ac6892`, // Use environment variable for the API key
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model_id: modelId,
      prompt,
      num_inference_steps: steps,
      width,
      height,
      safety_check: false,
    }),
  };

  try {
    const response = await fetch('https://dream-gateway.livepeer.cloud/text-to-image', options);
    const data: LivepeerResponse = await response.json();

    if (data.images && data.images.length > 0) {
      return data.images[0].url;
    }
    return null;
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

// Convex action for generating a thumbnail
export const generateThumbnailAction = action({
  args: { prompt: v.string() },
  handler: async (_, { prompt }) => {
    const imageUrl = await generateImageFromPrompt({
      modelId: 'ByteDance/SDXL-Lightning', 
      prompt,
      steps: 6,
      width: 1024,
      height: 1024,
    });

    if (!imageUrl) {
      throw new Error('Error generating thumbnail');
    }

    // Fetch the image as a buffer
    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.arrayBuffer();
    return buffer;
  },
});
