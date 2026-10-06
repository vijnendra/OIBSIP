# Data Cleaning Project

## Objective
Demonstrate professional-level data cleaning skills by systematically transforming a deliberately messy dataset (a corrupted version of the Titanic dataset) into a clean, analysis-ready format.

## Dataset
- **Source:** Synthetic messy modification of the Titanic Passenger dataset.
- **Challenges injected:** Duplicates, inconsistent formatting, incorrect data types, extreme outliers, missing values.

## Tools & Technologies
- **Python:** pandas, numpy
- **Environment:** Jupyter Notebook

## Key Analysis Steps
1. **Data Quality Report:** Identified the extent of nulls, duplicates, and type errors.
2. **Deduplication:** Safely identified and removed identical rows.
3. **Type Correction:** Removed currency symbols from numeric fields and corrected data types.
4. **Standardization:** Normalized inconsistent text capitalization in categorical features.
5. **Outlier Handling:** Neutralized impossible physiological values (e.g., negative ages, age > 150).
6. **Missing Value Imputation:** Utilized group-based median imputation for numerical data and mode imputation for categorical data.

## Key Findings
- **Before Cleaning:** The dataset was unusable due to duplicate inflation, type mismatches blocking mathematical operations, and extreme outliers.
- **After Cleaning:** A 100% complete, structurally sound dataset ready for statistical modeling or machine learning.

## How to Run
```bash
jupyter notebook data_cleaning.ipynb
```
