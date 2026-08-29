# TakeoffCompass: AI Preconstruction Comparison Hub

This workspace hosts **TakeoffCompass**, an interactive, single-page web application built to compare **Togal.AI** and its primary preconstruction quantity takeoff alternatives. The project is designed with a premium dark cyber-tech aesthetic and features an interactive **AI Takeoff Simulator** (rendered in dynamic SVG), a **Workflow Fit Quiz**, an **Estimator ROI Calculator**, and a **Detailed Comparison Matrix**.

---

## 1. Primary Software Alternatives to Togal.AI

Several competing preconstruction platforms leverage artificial intelligence, computer vision, and machine learning to automate the digital quantity takeoff process. Below, the primary alternatives are categorized by their **workflow strengths**:

### Category A: AI-First Takeoff Engines (Speed & Geometry Focus)
*These tools excel at high-speed geometric extraction, room boundary tracing, and automated dimensions.*

*   **Togal.AI (The Benchmark):** Pioneer in deep-learning-based footprint tracing and object detection. Highly automated but does not feature integrated price databases.
*   **Kreo Takeoff:** A cloud-based semantic takeoff engine. Its core strength is its direct binding of auto-measured CAD geometry to a collaborative, Excel-like sheet editor.
*   **Beam AI:** A lightweight, speed-focused takeoff processor designed to parse site, concrete, and finishing plans quickly and export clean CSV/Excel quantities.

### Category B: End-to-End Estimating Suites & Cost Databases (Quantity to Bid-Ready Proposal)
*These tools carry takeoff numbers forward, linking them directly to assemblies, cost data, and client bids.*

*   **RSMeans Data Online (Gordian):** North America's premier construction cost database with over 92,000 unit line items, 970+ City Cost Index (CCI) location factors, and Flash AI Estimating that maps drawing quantities directly to CSI MasterFormat assemblies.
*   **Quotr.ai:** Integrates AI takeoff directly with local material and labor pricing databases. Ideal for estimators who want to go from a 2D drawing straight to a priced, client-ready contract proposal in one interface.
*   **STACK Construction Technologies:** A massive cloud preconstruction platform featuring robust multi-user databases, custom assembly builders, and emerging AI takeoff assistants.

### Category C: Assisted AI & Legacy Estimating Powerhouses
*Industry standards that rely on desktop stability and semi-assisted or user-driven automation.*

*   **On-Screen Takeoff (OST) with Takeoff Boost:** Traditional, robust Windows desktop platform. Its "Takeoff Boost" add-on brings cloud-based AI tracing to enterprise estimators while keeping data secure on local servers.
*   **Bluebeam Revu:** The construction standard for PDF markup, file management, and drawing comparison. Takeoff is mostly manual or semi-assisted (visual searches), but it remains the key communication tool across project teams.

---

## 2. Interactive Web Application Structure

The web application is located at the root and built with **Vanilla HTML5, CSS3, and JavaScript (ES6+)** compiled via **Vite**.

### Core Sections
1.  **Hero Dashboard:** Highlights the challenges of manual takeoff and introduces the AI landscape.
2.  **AI Takeoff Simulator:**
    *   **Floor Plan Vector Canvas:** Interactive SVG layouts depicting a *Commercial Office*, a *2-Bedroom Apartment*, and a *Retail Boutique*.
    *   **AI Laser Scanning Engine:** A simulated horizontal laser line sweeps down the blueprint, dynamically detecting boundaries, highlighting rooms in translucent colors, identifying fixture nodes (doors/windows), and ticking up quantities.
    *   **Quantity Legend & Material Estimates:** Updates in real time as the scan completes, generating lists of studs, drywall panels, flooring, and windows.
    *   **Hover Tooltips:** Hovering over simulated rooms displays measured square footage and material lists.
3.  **Product Directory:** Searchable and category-filtered grid containing detailed profiles, pros, cons, target audiences, and pricing for all 7 tools.
4.  **Workflow Matcher Quiz:** A 4-step diagnostic form assessing estimator bottlenecks, deployment preferences, pricing database requirements, and company scale to recommend the ideal tool.
5.  **ROI & Savings Calculator:** Sliders for team size, takeoff volume, and labor rates calculate hours reclaimed and monthly/annual cash savings using an 80% AI efficiency benchmark.
6.  **Feature Comparison Matrix:** Granular comparison table with status indicators and checkmarks.

---

## 3. Tech Stack & Local Execution

*   **Build Bundler:** Vite (v8.2.2)
*   **Core Runtimes:** Node.js (v22.22.1) & Python (v3.14.4)
*   **Styling:** Vanilla CSS (no Tailwind, tailored HSL design system)

### Run the Dev Server
```bash
npm run dev
```
*Access the local site at `http://localhost:5173/`.*

### Build Production Assets
```bash
npm run build
```
*Outputs static bundle to the `dist/` directory.*
