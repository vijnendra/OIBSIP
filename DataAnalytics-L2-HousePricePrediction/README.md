# House Price Prediction

## Objective
Build and evaluate a Linear Regression model that predicts median house prices based on geographic and demographic features.

## Dataset
- **Source:** California Housing Dataset
- **Format:** CSV
- **Features:** longitude, latitude, housing_median_age, total_rooms, total_bedrooms, population, households, median_income, median_house_value, ocean_proximity

## Tools & Technologies
- **Python:** pandas, numpy, scikit-learn
- **Machine Learning:** Linear Regression, One-Hot Encoding
- **Metrics:** MSE, RMSE, R-Squared
- **Visualization:** matplotlib, seaborn

## Key Analysis Steps
1. **Exploratory Data Analysis:** Identified an artificial price cap at $500,000.
2. **Feature Engineering:** Created robust features like `rooms_per_household`.
3. **Data Preparation:** Imputed missing values and one-hot encoded the categorical geographic data.
4. **Model Training:** Performed an 80/20 train-test split and trained a Linear Regression model.
5. **Evaluation:** Analyzed Residuals, Actual vs. Predicted plots, and feature coefficients.

## Key Findings
- **Performance:** The model explains roughly 65% of the variance (R² ~ 0.65).
- **Key Drivers:** `median_income` and coastal proximity (`NEAR OCEAN`, `ISLAND`) are the strongest positive predictors of housing prices.
- **Limitations:** The artificial capping of the target variable in the original dataset slightly degrades linear model performance at the top end of the market.

## How to Run
```bash
jupyter notebook house_price_prediction.ipynb
```
