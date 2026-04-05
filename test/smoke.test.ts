import { describe, expect, it } from "vitest";
import { buildStrategyDecision } from "../src/strategies/coreStrategy.js";

describe("polymarket-ai-trading-bot", () => {
  it("builds a trade-ready decision when the placeholder score is high", () => {
    const decision = buildStrategyDecision(
      {
        repo: "polymarket-ai-trading-bot",
        family: "polymarket",
        market: "news-sensitive Polymarket markets",
        signal: "headline sentiment, odds drift, and confidence-weighted triggers",
        dryRun: true,
        orderSize: "25",
        privateKeyPreview: "test",
      },
      { score: 0.8 },
    );

    expect(decision.shouldTrade).toBe(true);
  });
});
