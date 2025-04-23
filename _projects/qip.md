---
layout: default
title: "🧠 Trace Estimation via Quantum Circuits"
rank: 9
year: 2023
description: >
  In this project, we explore how quantum circuits can be used to estimate the trace of large unitary matrices. We designed and implemented a quantum protocol to compute the real and imaginary parts of the normalized trace of an unknown unitary operator. The project utilizes Qiskit and IBM quantum simulators to validate the approach.
report: ../projects/qip/Projet_Report_QIP.pdf
team: ["Matthias Wyss", "Sofia Taouhid"]
location: "EPFL – Bachelor in Communication Systems, Year 3 (2023)"
tools: [Python, Qiskit, NumPy, Matplotlib]
techniques: [Quantum computing, Bell states, Trace estimation, Confidence intervals, Random unitary generation]
---

# 🧠 Trace Estimation via Quantum Circuits

**📍 EPFL – Bachelor in Communication Systems, Year 3 (2023)**  
**👥 Team:** Matthias Wyss, Sofia Taouhid  
**🔗 Final Report:** [Report](../../projects/qip/Projet_Report_QIP.pdf)

---

In this project, we explore how **quantum circuits** can be used to estimate the **trace of large unitary matrices**—a task that becomes computationally expensive on classical systems as the number of qubits increases. 

After studying the theoretical foundation (Bell states, controlled operations, trace estimation circuits), we designed and implemented a **quantum protocol** that computes the real and imaginary parts of the normalized trace of an unknown unitary operator \( U \).

We implemented the trace estimation circuit using **Qiskit**, generating random unitaries and validating our approach on **IBM quantum simulators**. We further analyzed how the **number of shots** and **confidence interval** parameters influence estimation accuracy. Finally, we applied the circuit to a “mystery gate” to estimate an unknown angle \( \theta \) and validated our predictions with theoretical values.

---

**🛠 Tools & Libraries:**  
- Python  
- Qiskit  
- NumPy  
- Matplotlib

**🧠 Techniques:**  
- Quantum Computing  
- Bell States  
- Trace Estimation  
- Confidence Intervals  
- Random Unitary Generation
