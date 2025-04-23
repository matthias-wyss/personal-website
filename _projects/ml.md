---
layout: default
title: "📈 Multi-Horizon Volatility Forecasting using ODEs and Cross-Stitch Networks"
rank: 12
year: 2024
description: >
  We developed a hybrid neural architecture for predicting multi-horizon volatility in high-frequency trading using the FI-2020 dataset. The architecture combines ODE networks and Cross-Stitch networks to model complex temporal dynamics in financial data. Our ODE-based Cross-Stitch model outperformed the Temporal Fusion Transformer, a state-of-the-art baseline.
repo: https://github.com/CS-433/ml-project-2-armageddon
report: ../projects/ml/ML_Project_Report.pdf
team: ["Matthias Wyss", "William Jallot", "Thierry Sokhn"]
location: "EPFL – Master in Data Science, Year 1 (2024)"
tools: [Python, TensorFlow, Keras]
techniques: [Time Series Forecasting, ODE Networks, Cross-Stitch Networks, TFT, Financial Modeling]
---

# 📈 Multi-Horizon Volatility Forecasting using ODEs and Cross-Stitch Networks

**📍 EPFL – Master in Data Science, Year 1 (2024)**  
**👥 Team:** Matthias Wyss, William Jallot, Thierry Sokhn  
**🔗 Code Repository:** [GitHub](https://github.com/CS-433/ml-project-2-armageddon)  
**📄 Final Report:** [Report](../../projects/ml/ML_Project_Report.pdf)

---

We developed a **hybrid neural architecture** for predicting multi-horizon volatility in high-frequency trading using the **FI-2020 dataset**. The architecture combines **ODE networks** and **Cross-Stitch networks** to model complex temporal dynamics in financial data.

We implemented and compared two key models:

- **ODE + Cross-Stitch Network** – Leverages continuous-time modeling and multi-source learning.  
- **Temporal Fusion Transformer (TFT)** – A state-of-the-art forecasting model handling long-range dependencies.

Evaluated using **Mean Relative Absolute Error (MRAE)**, our ODE-based Cross-Stitch model **outperformed TFT**, demonstrating its effectiveness in capturing the volatility patterns of high-frequency trading data.

---

**🛠 Tools & Libraries:**  
- Python  
- TensorFlow  
- Keras

**🧠 Techniques:**  
- Time Series Forecasting  
- ODE Networks  
- Cross-Stitch Networks  
- Temporal Fusion Transformer (TFT)  
- Financial Modeling
