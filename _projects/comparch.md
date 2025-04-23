---
layout: default
title: "🎮 A Game of Life in Assembly – Cellular Automaton on the Nios II Processor"
rank: 7
year: 2022
description: >
  Implemented Conway’s Game of Life in MIPS-like assembly on a multicycle Nios II processor, running on the Gecko4Education board. Focused on low-level assembly to achieve efficient hardware-compatible code.
repo: https://github.com/matthias-wyss/Game-of-Life
team: ["Matthias Wyss", "Lucas Simonnet"]
location: "EPFL – Bachelor in Communication Systems, Year 2 (2022)"
tools: [Assembly (Nios II), nios2sim simulator, Gecko4Education board]
techniques: [Hardware simulation, Memory-mapped I/O, Low-level debugging, State machine design, Stack-based subroutine calling]
---

# 🎮 A Game of Life in Assembly – Cellular Automaton on the Nios II Processor

**📍 EPFL – Bachelor in Communication Systems, Year 2 (2022)**  
**👥 Team:** Matthias Wyss, Lucas Simonnet  
**🔗 Code Repository:** [GitHub Repository](https://github.com/matthias-wyss/Game-of-Life)

---

In this project, we implemented a fully functional version of **Conway’s Game of Life** in **MIPS-like assembly** on a multicycle **Nios II processor**, running on the **Gecko4Education board**. The project involved writing the entire game logic, including cell state transitions, user controls (pause, speed adjustment, seed selection), and dynamic state updates, in low-level assembly—without relying on any OS or runtime support.

Key tasks included:
- Translating high-level algorithmic logic into efficient assembly code compatible with the Nios II processor.
- Managing memory-mapped I/O to interact with the **LED matrix**, **7-segment display**, and **push buttons** for user interaction.
- Ensuring proper **stack usage** and **subroutine structure** to maintain compatibility with the simulator's grading and execution system.

The project focused heavily on **low-level debugging**, **hardware simulation**, and **state machine design**, giving us hands-on experience with embedded systems and processor-level execution flow.

---

**🛠 Tools & Libraries:**  
- Assembly (Nios II)  
- nios2sim Simulator  
- Gecko4Education Board

**🧠 Techniques:**  
- Hardware Simulation  
- Memory-Mapped I/O  
- Low-Level Debugging  
- State Machine Design  
- Stack-Based Subroutine Calling
