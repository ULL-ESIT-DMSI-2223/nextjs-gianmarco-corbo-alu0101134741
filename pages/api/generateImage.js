import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log(req.body);
  const response = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      size: req.body.size,
    });
    const image_url = response.data.data[0].url;
    res.status(200).json({ result: image_url });
}

