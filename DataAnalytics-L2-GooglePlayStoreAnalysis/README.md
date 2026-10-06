# Google Play Store Analysis

## Objective
Perform a comprehensive data analysis of the Google Play Store ecosystem to explore app categories, ratings, pricing trends, and user review sentiments.

## Dataset
- **Source:** Kaggle (Google Play Store Apps & Reviews)
- **Format:** CSV
- **Features:** App, Category, Rating, Reviews, Size, Installs, Type, Price, Content Rating (Apps); Translated_Review, Sentiment, Sentiment_Polarity (Reviews).

## Tools & Technologies
- **Python:** pandas, numpy
- **Visualization:** matplotlib, seaborn, plotly (Interactive)
- **NLP:** TextBlob

## Key Analysis Steps
1. **Data Cleaning:** Processed `Installs` (removed '+', ','), `Price` (removed '$'), and `Size` (standardized to MB).
2. **Category & Market Analysis:** Identified the most saturated categories and free vs. paid distribution.
3. **Pricing & Revenue Proxy:** Estimated categorical revenue based on price and install tiers.
4. **Sentiment Analysis:** Utilized TextBlob to classify user reviews as Positive, Negative, or Neutral and aggregated this by category.
5. **Interactive Visualization:** Built a Plotly scatter plot for exploring App Rating vs. Installs dynamically.

## Key Findings
- **Market Structure:** `FAMILY`, `GAME`, and `TOOLS` are intensely saturated. Over 92% of the ecosystem relies on a Free/Freemium model.
- **User Sentiment:** Certain niche categories (like `HEALTH_AND_FITNESS`) enjoy significantly higher positive sentiment ratios than heavily saturated ones.
- **Install Drivers:** While file size doesn't strictly dictate success, massive apps face a slightly higher barrier to reaching the top install tiers.

## Business Insights & Conclusion
Developers should avoid launching generic paid apps in saturated categories. The optimal strategy is entering high-sentiment, lower-saturation niches utilizing a Freemium monetization model while keeping initial download sizes optimized.

## How to Run
```bash
jupyter notebook google_play_store_analysis.ipynb
```
