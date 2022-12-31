import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    const response = await openai.createImage({
        prompt: req.body.prompt,
        n: 1,
        size: "1024x1024",
      });
      image_url = response.data.data[0].url;
    res.status(200).json({ result: completion.data.choices[0].text });
}

