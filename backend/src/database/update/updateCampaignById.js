import { CampaignMongoModel } from "../DBModels.js";

export const updateCampaignById = async (req, res) => {
  try {
    const campaignId = req.params.id;
    const campaign = await CampaignMongoModel.findOne({ id: campaignId });

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Check if the user is the owner of the campaign
    if (campaign.owner !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    const updatedCampaign = await CampaignMongoModel.findOneAndUpdate(
      { id: campaignId },
      req.body,
      { new: true }
    );

    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};