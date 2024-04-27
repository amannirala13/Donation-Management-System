import { CampaignMongoModel } from "../DBModels.js";

export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await CampaignMongoModel.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};