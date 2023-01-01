import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const response = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      size: req.body.size,
    });
    image_url = response.data.data[0].url;
}

