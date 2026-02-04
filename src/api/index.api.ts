import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

router.get("/hello", (req, res) => {
    res.json({
        message:"hello world"
    });
});
export default router;