import { CampaignMongoModel } from "../DBModels.js";

export  const getCampaignById = async (req, res) => {
    try {
      const campaign = await CampaignMongoModel.findById({id : req.params.id});
      if (!campaign) {
        return res.status(404).json({ error: "Campaign not found" });
      }
      res.status(200).json(campaign);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };