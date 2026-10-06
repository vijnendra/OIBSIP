# Customer Segmentation Analysis

## Objective
Apply K-Means clustering to segment an e-commerce company's customer base based on their purchasing behavior, enabling highly targeted marketing strategies.

## Dataset
- **Source:** UCI Machine Learning Repository (Online Retail)
- **Format:** XLSX
- **Features:** InvoiceNo, StockCode, Description, Quantity, InvoiceDate, UnitPrice, CustomerID, Country

## Tools & Technologies
- **Python:** pandas, scikit-learn
- **Machine Learning:** KMeans, StandardScaler
- **Visualization:** matplotlib, seaborn

## Key Analysis Steps
1. **Data Cleaning:** Removed cancelled orders, missing Customer IDs, and anomalous quantities.
2. **RFM Engineering:** Calculated Recency, Frequency, and Monetary metrics for each customer.
3. **Transformation:** Applied log transformations to handle right-skewed data and standardized using `StandardScaler`.
4. **Clustering:** Used the Elbow Method to determine the optimal number of clusters (K).
5. **Profiling:** Assigned actionable business labels (e.g., 'Champions', 'At-Risk') to each cluster based on their RFM profile.

## Key Findings
Customers naturally clustered into distinct behavioral groups:
- **Champions:** High frequency, high spend, recent purchases.
- **Loyal Customers:** Frequent buyers with average spend.
- **At-Risk:** Previously high-value customers who haven't purchased recently.

## Business Insights & Conclusion
Marketing strategies must be tailored to segments. Champions should receive VIP perks (no discounts needed), while At-Risk customers require aggressive win-back campaigns and discounts.

## How to Run
```bash
jupyter notebook customer_segmentation.ipynb
```
