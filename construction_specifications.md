# TakeoffCompass Preconstruction Simulator Reference: Construction Specifications

This specification reference documents the CSI MasterFormat divisions, structural variables, material schedules, and estimating formulas utilized in the TakeoffCompass preconstruction simulator.

---

## 1. Complete CSI MasterFormat Divisions & Classifications

The TakeoffCompass engine dynamically maps takeoff quantities to Division or Detailed codes. Below is the full standard classification structure used for preconstruction planning:

### Procurement and General Requirements Subgroup
*   **Division 00**: Procurement and Contracting Requirements
*   **Division 01**: General Requirements

### Facility Construction Subgroup
*   **Division 02**: Existing Conditions
*   **Division 03**: Concrete
*   **Division 04**: Masonry
*   **Division 05**: Metals
*   **Division 06**: Wood, Plastics, and Composites
*   **Division 07**: Thermal and Moisture Protection
*   **Division 08**: Openings (Doors, Windows, etc.)
*   **Division 09**: Finishes
*   **Division 10**: Specialties
*   **Division 11**: Equipment
*   **Division 12**: Furnishings
*   **Division 13**: Special Construction
*   **Division 14**: Conveying Equipment (Elevators, Escalators)
*   **Division 15–19**: Reserved for future expansion

### Facility Services Subgroup
*   **Division 20**: Reserved for future expansion  
*   **Division 21**: Fire Suppression  
*   **Division 22**: Plumbing  
*   **Division 23**: Heating, Ventilating, and Air Conditioning (HVAC)  
*   **Division 24**: Reserved for future expansion  
*   **Division 25**: Integrated Automation  
*   **Division 26**: Electrical
*   **Division 27**: Communications
*   **Division 28**: Electronic Safety and Security  
*   **Division 29–30**: Reserved for future expansion  

### Site and Infrastructure Subgroup  
*   **Division 31**: Earthwork  
*   **Division 32**: Exterior Improvements  
*   **Division 33**: Utilities  
*   **Division 34**: Transportation  
*   **Division 35**: Waterway and Marine Construction  
*   **Division 36–39**: Reserved for future expansion  

### Process Equipment Subgroup  
*   **Division 40**: Process Integration
*   **Division 41**: Material Processing and Handling Equipment
*   **Division 42**: Process Heating, Cooling, and Drying Equipment
*   **Division 43**: Process Gas and Liquid Handling, Purification, and Storage Equipment  
*   **Division 44**: Pollution and Waste Control Equipment  
*   **Division 45**: Industry-Specific Manufacturing Equipment  
*   **Division 46**: Water and Wastewater Equipment  
*   **Division 47**: Reserved for future expansion  
*   **Division 48**: Electrical Power Generation  
*   **Division 49**: Reserved for future expansion

---

## 2. Multi-Layered Structural Specifications

The simulator supports multi-layered building specs that scale and modify quantity takeoff volumes:

| Parameter | Standard / Unit | Purpose / Formula Impact |
| :--- | :--- | :--- |
| **Floor Count** | Integer (e.g., `1` to `10`) | Global multiplier applied to all extracted area, linear wall, door, and window counts. |
| **Partition Wall Height** | Feet (e.g., `8.0` to `20.0` ft) | Scales vertical surface area for drywall sheeting quantity calculations: `SF = Wall Length * 2 * Height` |
| **Framing Stud Spacing (O.C.)** | Inches (`12"`, `16"`, `24"`) | Determines stud layout frequency along linear walls: `Studs = (Wall Length * 12) / Spacing` |

---

## 3. Dynamic Material & Fixture Schedules

The simulator automatically populates itemized schedules under the "Schedules & Specs" tab when a takeoff is completed.

### A. Door Schedule
Doors are categorized based on standard commercial counts:
*   **Mark D01 (Single Flush Wood Door 3'0"x7'0")**: Represents `70%` of doors. Non-Rated.
*   **Mark D02 (Heavy Storefront Glass Door 3'0"x7'0")**: Represents `20%` of doors. Non-Rated.
*   **Mark D03 (Fire-Rated Hollow Metal Door 3'0"x7'0")**: Represents `10%` of doors. **90-Minute Fire Rated**.

### B. Window Schedule
Windows are categorized for storefront or perimeter scheduling:
*   **Mark W01 (Fixed Commercial Window 4'0"x5'0")**: Represents `80%` of windows. Non-Rated.
*   **Mark W02 (Clerestory Transom Window 3'0"x2'0")**: Represents `20%` of windows. **45-Minute Fire Glass Rated**.

### C. Partition Wall Schedule & Fire Ratings
Walls are dynamically classified into three assembly specifications:
*   **Type A1 (Standard Interior Partition)**: `60%` of walls. 3-5/8" metal studs at 16" O.C., 1 layer 5/8" Type X Gypsum Board each side. **1-Hour Fire Rated**.
*   **Type A2 (High Performance Partition)**: `30%` of walls. 3-5/8" metal studs at spacing O.C. (selected in console), 2 layers 5/8" Type X Gypsum Board each side. **2-Hour Fire Rated**.
*   **Type B1 (Chase / Utility Wall)**: `10%` of walls. Double metal stud frame, sound attenuation batts, 2 layers Gypsum Board each side. **2-Hour Fire Rated**.

---

## 4. Scenario Estimating & Comparison Calculations

Pricing comparisons scale between two distinct scenarios (Scenario A vs. Scenario B) using different material rates and regional adjustments:

### 1. Drywall Wall Partition Assembly
*   **Stud Count**: $\text{Studs} = \lceil \frac{\text{Walls (LF)} \times 12}{\text{Spacing (Inches)}} \rceil$
*   **Drywall Sheeting (4' x 10' sheets)**: $\text{Sheets} = \lceil \frac{\text{Walls (LF)} \times 2 \times \text{Ceiling Height (ft)}}{40} \rceil$
*   **Labor Hours**: $\text{Hours} = (\text{Walls} \times 0.12) + (\text{Sheets} \times 0.22)$
*   **Cost**: $\text{Cost} = (\text{Studs} \times \text{Stud Rate}) + (\text{Sheets} \times \text{Sheet Rate}) + (\text{Hours} \times \text{Labor Rate})$

### 2. Flooring Floor Finish Assembly
*   **Flooring Material**: $\text{Flooring Material Cost} = \text{Area (SF)} \times \text{Flooring Material Rate}$
*   **Labor Hours**: $\text{Hours} = \text{Area (SF)} \times 0.045$
*   **Cost**: $\text{Cost} = \text{Flooring Material Cost} + (\text{Hours} \times \text{Labor Rate})$

### 3. Fixtures & Frames Installation
*   **Base Material Unit Costs**: Doors = \$280/ea, Windows = \$380/ea
*   **Labor Hours**: Doors = 2.2 hrs/ea, Windows = 1.6 hrs/ea
*   **Cost**: $\text{Cost} = (\text{Doors} \times 280 + \text{Windows} \times 380) + ((\text{Doors} \times 2.2 + \text{Windows} \times 1.6) \times \text{Labor Rate})$

### Regional Escalation Factors (Mortenson Cost Index)
*   **National Average**: `1.00x`
*   **Chicago, IL**: `1.28x`
*   **Minneapolis, MN**: `1.14x`
*   **Denver, CO**: `1.09x`
*   **Phoenix, AZ**: `1.04x`
*   **Seattle, WA**: `1.21x`
