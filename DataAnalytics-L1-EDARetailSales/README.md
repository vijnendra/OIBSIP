# Retail Sales Data EDA

## Objective
Perform a thorough Exploratory Data Analysis (EDA) on a retail sales dataset to uncover patterns, customer demographic trends, and actionable product insights.

## Dataset
- **Source:** Public GitHub Repository (Kaggle dataset origin)
- **Format:** CSV
- **Features:** Transaction ID, Date, Customer ID, Gender, Age, Category, Quantity, Price, Total Amount.

## Tools & Technologies
- **Python:** pandas, numpy
- **Visualization:** matplotlib, seaborn
- **Environment:** Jupyter Notebook

## Key Analysis Steps
1. **Data Cleaning:** Converted dates, handled duplicates.
2. **Descriptive Stats:** Central tendency and dispersion of numerical features.
3. **Time Series:** Monthly and quarterly sales trend analysis.
4. **Demographics:** Sales breakdowns by age groups and gender.
5. **Product Analysis:** Top 10 categories by revenue and volume.
6. **Correlation:** Heatmap to identify feature relationships.

## Key Findings
- **Seasonal Trends:** Specific months show distinct peaks in sales volumes, guiding inventory planning.
- **Demographics:** Spending varies significantly across age groups and gender, with specific segments driving the majority of revenue.
- **Category Performance:** The top-performing category contributes disproportionately to total revenue.

## Business Insights & Conclusion
The analysis produced actionable recommendations:
- Increase marketing spend on the highest-grossing category.
- Launch targeted promotions during historically weak sales months.
- Implement loyalty programs aimed at the highest-spending demographic groups.

## How to Run
```bash
# Clone the repository
# Navigate to this folder
jupyter notebook retail_sales_eda.ipynb
```
