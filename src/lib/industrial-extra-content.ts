export interface Spotlight1Card {
  badge: string;
  templateLabel: string;
  itemsCount: string;
  title: string;
  metrics: {
    value: string;
    label: string;
    highlightId?: string;
    colorClass: string;
    bgClass?: string;
  }[];
  section1: {
    num: number;
    title: string;
    items: {
      label: string;
      badge?: string;
    }[];
  };
  section2: {
    num: number;
    title: string;
    items: {
      label: string;
      hasPhoto?: boolean;
    }[];
  };
}

export interface AISpotlightData {
  eyebrow: string;
  title: string;
  desc: string;
  prompt: string;
  generatedTitle: string;
  sections: {
    title: string;
    items: string[];
    bgClass: string;
    textClass: string;
  }[];
  features: { title: string; desc: string }[];
}

export interface StartWorkflowData {
  eyebrow: string;
  title: string;
  desc: string;
  cardTitle: string;
  steps: { step: string; title: string; desc: string }[];
  buttonText: string;
  features: { title: string; desc: string }[];
}

export interface RemindersData {
  eyebrow: string;
  title: string;
  desc: string;
  cardTitle: string;
  badgeText: string;
  stats: { value: string; label: string; colorClass: string }[];
  schedule: {
    tag: string;
    title: string;
    details: string;
    time: string;
    tagColorClass: string;
  }[];
  features: { title: string; desc: string }[];
}

export interface IncidentsData {
  eyebrow: string;
  title: string;
  desc: string;
  cardTitle: string;
  ticketId: string;
  titleText: string;
  dateText: string;
  priorityBadge: string;
  metrics: { value: string; label: string; colorClass: string }[];
  descriptionText: string;
  features: { title: string; desc: string }[];
}

export interface RCAData {
  eyebrow: string;
  title: string;
  desc: string;
  cardTitle: string;
  ticketId: string;
  stats: { value: string; label: string; colorClass: string }[];
  whys: string[];
  features: { title: string; desc: string }[];
}

export interface WorkflowStep {
  num: number;
  title: string;
  subtitle: string;
  desc: string;
}

export interface IndustrialPageExtraContent {
  slug: string;
  workflow: {
    eyebrow: string;
    title: string;
    desc: string;
    steps: WorkflowStep[];
  };
  spotlight1: {
    eyebrow: string;
    title: string;
    desc: string;
    features: { id: string; title: string; desc: string }[];
    card: Spotlight1Card;
    buttonText: string;
  };
  aiSpotlight?: AISpotlightData;
  startWorkflow: StartWorkflowData;
  reminders: RemindersData;
  incidents: IncidentsData;
  rca: RCAData;
  types: {
    eyebrow: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  modules: {
    eyebrow: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
}

export const industrialExtraContentData: Record<string, IndustrialPageExtraContent> = {
  "ai-visual-inspection": {
    slug: "ai-visual-inspection",
    workflow: {
      eyebrow: "DEPLOYMENT FLOW",
      title: "6-Step Computer Vision Integration",
      desc: "Implement edge visual models directly onto your live production lines without interrupting cycle times.",
      steps: [
        { num: 1, title: "Image Capture", subtitle: "High-speed camera sync", desc: "Position smart cameras and configure automated strobes to capture crisp frames of products at line speeds." },
        { num: 2, title: "Edge Processing", subtitle: "On-site model inference", desc: "Run predictions locally on compact NVIDIA edge modules, achieving sub-50ms latency per inspection point." },
        { num: 3, title: "Anomaly Scoring", subtitle: "Model probability checks", desc: "Run bounding-box models that pinpoint surface scratches, cracks, misalignments, or label positioning." },
        { num: 4, title: "Rejection Trigger", subtitle: "PLC integration pulse", desc: "Signal reject gates or sorting arms immediately via digital input/output modules when defect thresholds breach." },
        { num: 5, title: "Frontline Review", subtitle: "Operator feedback screen", desc: "Present flagged images to line operators for positive confirmation, maintaining high confidence limits." },
        { num: 6, title: "Model Tuning", subtitle: "Retraining sync cycles", desc: "Sync false-reject logs back to central storage to refine datasets and redeploy optimized model weights." }
      ]
    },
    spotlight1: {
      eyebrow: "COMPUTER VISION",
      title: "Real-time Surface Defect Detection",
      desc: "Deploy neural networks trained specifically for sub-millimeter material deformations under dynamic light conditions.",
      features: [
        { id: "sections", title: "Defect Locators", desc: "Track coordinates of surface anomalies and show pixel bounding boxes." },
        { id: "types", title: "Material Adaptability", desc: "Configure settings for metals, plastics, glass, composites, and packaging." },
        { id: "critical", title: "Severity Quarantines", desc: "Flag critical structural defects to automatically halt production loops." },
        { id: "photo", title: "Strobe Camera Sync", desc: "Sync high-FPS camera triggers with local lighting conditions." },
        { id: "signature", title: "Inspection Audits", desc: "Sign off quality reports with embedded inspection timestamp hashes." },
        { id: "scoring", title: "Confidence Thresholds", desc: "Fine-tune acceptable scores to reduce nuisance alerts and false flags." }
      ],
      buttonText: "Request Vision Pilot",
      card: {
        badge: "Active",
        templateLabel: "Vision Model",
        itemsCount: "3 Classes",
        title: "MODEL-2026: Metal Stamping Inspector",
        metrics: [
          { value: "0.2mm", label: "Resolution", colorClass: "text-emerald-400" },
          { value: "99.8%", label: "Accuracy", colorClass: "text-primary" },
          { value: "50ms", label: "Inference", colorClass: "text-rose-400", highlightId: "critical" },
          { value: "12K", label: "Captures", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Critical Model Thresholds",
          items: [
            { label: "Deep Scratch Defect (>0.5mm)", badge: "Critical" },
            { label: "Punctures & Dents", badge: "Critical" },
            { label: "Structural Crack", badge: "Critical" }
          ]
        },
        section2: {
          num: 2,
          title: "Frame Capture Targets",
          items: [
            { label: "Product surface profile top", hasPhoto: true },
            { label: "Edge bevel alignment profile", hasPhoto: true }
          ]
        }
      }
    },
    startWorkflow: {
      eyebrow: "FIELD CONTROLS",
      title: "Calibrate Vision Inspection",
      desc: "Operators can adjust camera settings right at the line to keep pictures clear, without needing a specialized technician for standard checks.",
      cardTitle: "Vision Calibration Flow",
      steps: [
        { step: "1", title: "Select Line Camera", desc: "Select Camera #CV-082 on Line 4." },
        { step: "2", title: "Verify Focus", desc: "Check that the live picture on the screen is sharp and clear." },
        { step: "3", title: "Test Lighting", desc: "Verify that the light flashes at the exact moment a product passes." }
      ],
      buttonText: "Save Calibration Settings",
      features: [
        { title: "QR Quick Target", desc: "Scan the code on the camera bracket to load saved settings, setting up the camera instantly without manual typing." },
        { title: "Focus Check", desc: "Run a quick check on the screen to confirm the camera is in focus before restarting the line." },
        { title: "Brightness Auto-Tuning", desc: "The camera automatically adjusts to changing room lights, keeping inspections accurate from morning to night shifts." },
        { title: "Offline Storage", desc: "The camera saves calibration data internally if the network goes down, and uploads it once connection returns." }
      ]
    },
    reminders: {
      eyebrow: "LENS AUDITS",
      title: "Optical Cleaning Schedules",
      desc: "Schedule routine cleanings for lenses and lights to prevent the system from missing defects due to dust or smudges.",
      cardTitle: "Calibration Schedule",
      badgeText: "Due Today",
      stats: [
        { value: "18", label: "Cameras", colorClass: "text-white" },
        { value: "15", label: "Calibrated", colorClass: "text-emerald-400" },
        { value: "3", label: "Pending Check", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Overdue", title: "Wipe Dust from Lens and Verify Focus", details: "Line 2 Tooling Inspection Camera • Operator-Led", time: "8:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Scheduled", title: "Verify Flash Light Brightness", details: "Line 3 Assembly Camera • Technician-Led", time: "1:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Cycle-Count Triggers", desc: "The system alerts you to clean the camera after a set number of products pass, preventing dirty lenses before they cause issues." },
        { title: "Cleaning Logs", desc: "The system logs the exact time and operator for every lens wipe, providing a clean record for quality audits." },
        { title: "Early Warning", desc: "Alerts warn you if camera pictures start getting blurry, so you can clean the lens before bad parts escape." },
        { title: "Auto-Assigned Tasks", desc: "Work orders go directly to the operator on shift, making sure maintenance happens without manual paperwork." }
      ]
    },
    incidents: {
      eyebrow: "EXCEPTION LOG",
      title: "Model Low-Confidence Alarms",
      desc: "When the system is unsure if a part is defective, it alerts an operator to make the final decision, keeping production moving.",
      cardTitle: "Model Exception Ticket",
      ticketId: "VIS-2026-901",
      titleText: "Uncertain Defect Alert",
      dateText: "Aug 13, 2026 • 11:30 AM",
      priorityBadge: "Medium Priority",
      metrics: [
        { value: "72.4%", label: "Confidence", colorClass: "text-rose-400" },
        { value: "0.15mm", label: "Anomaly Size", colorClass: "text-yellow-400" }
      ],
      descriptionText: "The system spotted a possible mark on Part #P-902 but could not decide if it was a real defect, routing the part to the operator station.",
      features: [
        { title: "Operator Review Handoff", desc: "When a part has a borderline mark, the system sends the image to the operator's monitor so they can approve or reject it." },
        { title: "Reject Logs", desc: "The system saves photos of every rejected part along with the time and batch code, making it easy to trace quality issues." },
        { title: "Early Warning on Spikes", desc: "If multiple parts fail in a row, the system alerts the team immediately so you can fix the equipment before making more scrap." },
        { title: "Scrap Evidence Export", desc: "You can download pictures of failed parts to show your team or suppliers exactly why a batch was rejected." }
      ]
    },
    rca: {
      eyebrow: "DEFECT ANALYTICS",
      title: "Visual Anomaly Pareto Analysis",
      desc: "When defects rise, the system links the failures to the specific machine, tooling, or incoming material batch that caused them.",
      cardTitle: "Visual RCA File",
      ticketId: "RCA-VIS-082",
      stats: [
        { value: "32", label: "Flagged Defects", colorClass: "text-rose-400" },
        { value: "Line 4", label: "Linked Equipment", colorClass: "text-primary" },
        { value: "85%", label: "Correlation", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did defect counts increase? → Dirt built up on the active tooling.",
        "Why did dirt build up? → The tool cleaning nozzle was clogged."
      ],
      features: [
        { title: "Batch & Equipment Correlation", desc: "The system automatically matches quality drops to the running equipment or raw material batch, rather than just blaming the shift." },
        { title: "Guided 5 Whys", desc: "Quality leads can trace problems step-by-step using actual photos and timestamps, helping find the true cause of a failure quickly." },
        { title: "Automatic Maintenance Triggers", desc: "If defect rates go up, the system automatically sends a work order to maintenance before the next shift starts." },
        { title: "Post-Fix Verification", desc: "Once repairs are done, the camera checks the next parts to confirm the issue is fixed, so you can restart full production safely." }
      ]
    },
    types: {
      eyebrow: "INSPECTION TYPES",
      title: "Tailored Models for Shopfloor Checks",
      desc: "Run different optimized architectures depending on your inspection surface and speed requirements.",
      items: [
        { title: "Surface Scratches & Dents", desc: "High-contrast CNNs tuned to catch light-deflection anomalies a rules-based threshold check would miss." },
        { title: "Assembly Completeness", desc: "Confirms fastener counts, cable routing, and component presence in one pass — no separate manual checklist." },
        { title: "Barcode, Serial & Date-Code OCR", desc: "Reads stamped serials, lot codes, and expiry dates at line speed and flags mismatches instantly." },
        { title: "Dimensional Tolerance Checks", desc: "Non-contact measurement of edge gaps, diameters, and angles down to micron-level tolerances." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION HUB",
      title: "Connected Vision Architecture",
      desc: "Connect camera inferences directly with your plant controls, material flow, and engineering databases.",
      items: [
        { title: "PLC Reject-Gate Control", desc: "Low-latency handshake with your existing PLC triggers the mechanical reject gate the moment a part fails — no added cycle-time lag." },
        { title: "Camera & Model Asset Registry", desc: "Every camera's calibration state and every model's version history logs against the physical asset it's mounted on." },
        { title: "Root-Cause Ticket Routing", desc: "Exception logs feed straight into your continuous-improvement or RCA tickets — no manual copy-paste from a report." },
        { title: "Supplier Defect Evidence", desc: "Auto-export defective batch photos to the supplier for material claims — timestamped, no dispute over what shipped." }
      ]
    }
  },
  "statistical-ai": {
    slug: "statistical-ai",
    workflow: {
      eyebrow: "ANALYTICS LOOP",
      title: "Find Unusual Changes Before They Become Bigger Problems",
      desc: "Statistical AI learns what normal behavior looks like and highlights results that are noticeably different.",
      steps: [
        { num: 1, title: "Understand Normal", subtitle: "Establish baseline", desc: "Analyze stable historical runs to calculate what normal variation looks like." },
        { num: 2, title: "Monitor Data", subtitle: "Track live readings", desc: "Regularly gather measurements from your sensors, databases, or operational files." },
        { num: 3, title: "Spot Changes", subtitle: "Identify process drift", desc: "Identify gradual changes or shifts from the established normal pattern." },
        { num: 4, title: "Highlight the Issue", subtitle: "Alert the team", desc: "Flag parameters that move outside the normal range and notify operators." },
        { num: 5, title: "Review", subtitle: "Examine findings", desc: "Open plain-language summaries to see which variables changed and why." },
        { num: 6, title: "Act", subtitle: "Take corrective action", desc: "Apply suggested adjustments to resolve the drift and keep operations stable." }
      ]
    },
    spotlight1: {
      eyebrow: "ANALYTICS DASHBOARD",
      title: "Monitor Multiple Factors at Once",
      desc: "Important changes do not always show up in one measurement. Statistical AI can look at several factors together to identify unusual behavior that may otherwise be easy to miss. (Multivariate Process Control)",
      features: [
        { id: "sections", title: "Multivariate Trends", desc: "Plot unified process health indicators calculated from multiple sensors." },
        { id: "types", title: "Model Library", desc: "Deploy linear regression, random forests, and deep anomaly models." },
        { id: "critical", title: "Drift Alerts", desc: "Trigger preventive alerts when process indicators drift from stable baselines." },
        { id: "photo", title: "Historian Mapping", desc: "Map historian tags to analytic parameters using simple drag-and-drop templates." },
        { id: "signature", title: "Analysis Sign-off", desc: "Log diagnostic reports and process recommendations with engineer reviews." },
        { id: "scoring", title: "Process Limits", desc: "Calculate dynamic limits based on operating modes and ambient temperatures." }
      ],
      buttonText: "Schedule Data Audit",
      card: {
        badge: "Active",
        templateLabel: "Analytics Model",
        itemsCount: "48 Signals",
        title: "MODEL-STAT: Process Unit 3 Health Index",
        metrics: [
          { value: "0.88", label: "Cpk Index", colorClass: "text-emerald-400" },
          { value: "94.2%", label: "Accuracy", colorClass: "text-primary" },
          { value: "Alert", label: "Process Health", colorClass: "text-rose-400", highlightId: "critical" },
          { value: "10-Sec", label: "Sample Rate", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Top Anomalous Contributions",
          items: [
            { label: "Material feed volatility", badge: "High Contrib" },
            { label: "Cooling loop backpressure", badge: "Medium Contrib" },
            { label: "Motor torque load", badge: "Low Contrib" }
          ]
        },
        section2: {
          num: 2,
          title: "Monitored Loops",
          items: [
            { label: "Core temperature profile", hasPhoto: true },
            { label: "Primary flow control valve", hasPhoto: true }
          ]
        }
      }
    },

    startWorkflow: {
      eyebrow: "MODEL SETUP",
      title: "Create Simple Scores From Your Data",
      desc: "Combine important measurements into a simple score that makes it easier to compare performance and identify areas that need attention. (Analytic Index)",
      cardTitle: "Analytic Configuration",
      steps: [
        { step: "1", title: "Select Process Sensors", desc: "PROCESS_UNIT_3_TEMP, FLOW_RATE_1" },
        { step: "2", title: "Define Baseline / Golden Run", desc: "Run #R-1089 to #R-1120 (stable runtime)" },
        { step: "3", title: "Calculate Process Limits", desc: "Calculate normal variation ranges and control limits based on stable runs." }
      ],
      buttonText: "Publish Process Health Index",
      features: [
        { title: "Sensor Search", desc: "Find temperature, pressure, or flow sensors quickly using clear names and descriptions." },
        { title: "Find Stable Runs", desc: "Automatically identify past runs with high yield and low variation to use as your benchmark." },
        { title: "Flexible Limits", desc: "Calculate control limits that automatically adjust based on the product or part you are running." },
        { title: "Limit Testing", desc: "Verify new control limits against past problem logs to make sure alerts only trigger when they should." }
      ]
    },
    reminders: {
      eyebrow: "MODEL RETRAINING",
      title: "Detect When Things Start Changing",
      desc: "Track how your data changes over time and identify when normal patterns begin to shift. Drift means a gradual change from the normal pattern.",
      cardTitle: "Retraining Schedule",
      badgeText: "Due Today",
      stats: [
        { value: "42", label: "Monitored Parameters", colorClass: "text-white" },
        { value: "38", label: "Within Limits", colorClass: "text-emerald-400" },
        { value: "4", label: "Process Drift", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Overdue", title: "Process Unit 3 Limit Update", details: "Check limits against winter material profile • Process team", time: "9:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Scheduled", title: "Line 4 Assembly Limit Review", details: "Review limits after tooling replacement • Engineer-Led", time: "3:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Automatic Prompts", desc: "Set reminders to review your control chart limits quarterly or after tool changes." },
        { title: "Variation Trend Audits", desc: "Track long-term process variation trends and flag when control limits need to be recalculated." },
        { title: "Before-and-After Testing", desc: "Compare old and new control limits on live data to see if the changes reduce false alerts." },
        { title: "Limit Change History", desc: "Keep a complete, audit-ready history of who changed control limits, when, and why." }
      ]
    },
    incidents: {
      eyebrow: "EXCEPTION RECORD",
      title: "Know When Results Move Outside the Normal Range",
      desc: "Set an expected range for your process and get notified when results move outside it.",
      cardTitle: "Process Exception Ticket",
      ticketId: "ANA-2026-402",
      titleText: "Multivariate Index Limit Breach",
      dateText: "Aug 13, 2026 • 11:32 AM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "Index: 3.4", label: "Current Level (Max 1.8)", colorClass: "text-rose-400" },
        { value: "0.91", label: "Cpk Value", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Process Unit 3 health index breached control limits for 15 consecutive minutes. Fluid flow rate detected as primary variable deviation.",
      features: [
        { title: "Process Snapshot", desc: "Automatically save 60 minutes of sensor readings leading up to the limit breach." },
        { title: "Production Context", desc: "Record the active product, batch or run number, and shift team at the time of the event." },
        { title: "Alert Routing", desc: "Send a plain-language summary report directly to supervisors and engineers." },
        { title: "Action Tracking", desc: "Create an active investigation card linked directly to the process charts." }
      ]
    },
    rca: {
      eyebrow: "CORRELATION TRACE",
      title: "Batch Yield Loss Analysis",
      desc: "Compare results across runs or time periods to understand where output or quality is falling and identify patterns behind the loss.",
      cardTitle: "Process RCA File",
      ticketId: "RCA-ANA-402",
      stats: [
        { value: "14%", label: "Yield Drop", colorClass: "text-rose-400" },
        { value: "Flow Valve", label: "Primary Correlation", colorClass: "text-primary" },
        { value: "92%", label: "Correlation Index", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did yield or quality drop? → Low temperature in third process stage.",
        "Why was temp low? → Flow valve stickiness restricted heating flow rate."
      ],
      features: [
        { title: "Process Correlation", desc: "Analyze how changes in pressure, heat, or speed correlate with output quality drops." },
        { title: "5 Whys Logging", desc: "Log step-by-step explanations directly next to your process trend charts." },
        { title: "Corrective Action Integration", desc: "Trigger maintenance work orders directly from the correlation findings." },
        { title: "Solution Archive", desc: "Search past quality issues to see how similar process problems were resolved." }
      ]
    },
    types: {
      eyebrow: "ANALYTICS SCOPE",
      title: "Choose the Right Way to Understand Your Data",
      desc: "Use different analysis methods depending on the type of data and the question you need to answer.",
      items: [
        { title: "Multivariate Health Indexing", desc: "Combine readings from multiple sensors into a single indicator of process health." },
        { title: "Predictive Quality Analytics", desc: "Forecast final quality values (such as thickness, purity, or strength) using live process readings." },
        { title: "Process Optimization", desc: "Identify key setpoints that maximize output speed while reducing energy or material waste." },
        { title: "Virtual Sensor Modeling", desc: "Estimate values that cannot be measured continuously (such as tool wear or internal temperature) using secondary machine signals." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATED FLOW",
      title: "Turn Insights Into Action",
      desc: "Finding a problem is only the first step. Connect important insights with the people and processes that can review them and take action.",
      items: [
        { title: "Process Historians", desc: "Maintain real-time connections to standard SQL databases, OPC UA servers, and industrial historians." },
        { title: "CMMS Platforms", desc: "Trigger predictive maintenance work orders based on process drift indices." },
        { title: "Quality Management", desc: "Compare process indexes with lab test results to optimize capability limits." },
        { title: "Operator Consoles", desc: "Send plain-language process advice to HMI displays on the shopfloor." }
      ]
    }
  },
  "in-process-quality-spc": {
    slug: "in-process-quality-spc",
    workflow: {
      eyebrow: "QUALITY LOOP",
      title: "6-Step Statistical Process Control",
      desc: "Deploy control plans, capture measurements, plot charts, identify rule violations, and log corrections.",
      steps: [
        { num: 1, title: "Control Plan Setup", subtitle: "Define inspection intervals", desc: "Specify variables, subgroups, measurement methods, and frequencies for each line." },
        { num: 2, title: "Data Collection", subtitle: "Operator input sync", desc: "Capture caliper readings, thickness metrics, or weighments directly at the workstation." },
        { num: 3, title: "Dynamic Charting", subtitle: "Real-time SPC plot", desc: "Plot values on X-bar & R or Individual & Moving Range charts immediately after input." },
        { num: 4, title: "Rules Check", subtitle: "Western Electric test", desc: "Evaluate points against statistical rules to identify out-of-control conditions." },
        { num: 5, title: "OOC Escalation", subtitle: "Action routing", desc: "Flag out-of-control points and assign corrective actions to quality engineers." },
        { num: 6, title: "Process Review", subtitle: "Capability checks", desc: "Calculate process indices (Cp, Cpk) over time to verify process stability." }
      ]
    },
    spotlight1: {
      eyebrow: "CONTROL PLANS",
      title: "Interactive Digital Control Plans",
      desc: "Replace binder-based instructions with interactive control plans that guide operators through required measurements and frequencies.",
      features: [
        { id: "sections", title: "Subgroup Setup", desc: "Configure variable measurement templates with specified subgroup sizes." },
        { id: "types", title: "Chart Types", desc: "Support X-bar R, X-bar S, I-MR, P, NP, C, and U charts." },
        { id: "critical", title: "Limit Violations", desc: "Alert teams instantly when points breach control or specification limits." },
        { id: "photo", title: "Gauge Integration", desc: "Connect digital calipers or scales to input fields via Bluetooth or USB." },
        { id: "signature", title: "Inspector Verification", desc: "Digitally verify subgroup entries and shift quality sign-offs." },
        { id: "scoring", title: "Capability Indices", desc: "Monitor Cp, Cpk, Pp, and Ppk scores dynamically over runtime batches." }
      ],
      buttonText: "Design Control Plan",
      card: {
        badge: "Active",
        templateLabel: "SPC Control Plan",
        itemsCount: "5 Subgroups",
        title: "SPC-2026: Outer Casing Diameter",
        metrics: [
          { value: "1.34", label: "Cpk Index", colorClass: "text-emerald-400" },
          { value: "45.02mm", label: "Mean Size", colorClass: "text-primary" },
          { value: "Out of Control", label: "Status", colorClass: "text-rose-400", highlightId: "critical" },
          { value: "5 Parts", label: "Subgroup", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Active Control Limits",
          items: [
            { label: "Upper Spec Limit (USL): 45.10mm", badge: "USL" },
            { label: "Upper Control Limit (UCL): 45.07mm", badge: "UCL" },
            { label: "Lower Control Limit (LCL): 44.97mm", badge: "LCL" }
          ]
        },
        section2: {
          num: 2,
          title: "Subgroup Measurement Target",
          items: [
            { label: "Micrometer readings for outer diameter", hasPhoto: true },
            { label: "Circular runout profile verification", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "SYNAPSE AI ENGINE",
      title: "AI SPC Trend Predictor",
      desc: "Analyze control chart patterns (runs, trends, shifts) and predict process limit breaches before they cause material defects.",
      prompt: "Analyze outer diameter X-bar chart and identify any early signs of tool wear trends.",
      generatedTitle: "SPC Analysis Generated",
      sections: [
        { title: "Trend Observations", items: ["A continuous upward run of 6 points detected since 08:00 AM.", "Indicates steady process drift, likely tool wear."], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Action Recommendations", items: ["Schedule tool replacement within next 4 hours.", "Verify cooling flow rates are at baseline targets."], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Pattern Detection", desc: "Recognize shifts, trends, and mixture patterns on active control charts automatically." },
        { title: "Early Drift Flags", desc: "Alert teams to process changes before points exceed control limits." },
        { title: "Scrap Estimates", desc: "Calculate expected defect rates if trends continue without intervention." },
        { title: "Retraining Advice", desc: "Suggest limit updates when process baselines change." }
      ]
    },
    startWorkflow: {
      eyebrow: "FIELD CHECKS",
      title: "Record SPC Subgroup",
      desc: "Step-by-step entry for operators to log subgroup measurements and check limits at the line side.",
      cardTitle: "Record Subgroup Measurements",
      steps: [
        { step: "1", title: "Select Control Plan", desc: "Outer Casing Diameter plan" },
        { step: "2", title: "Input Measurements", desc: "Enter 5 readings: 45.02, 45.03, 45.01, 45.02, 45.04" },
        { step: "3", title: "Verify Statistical Status", desc: "Plot point: X-bar = 45.024mm (In Control)" }
      ],
      buttonText: "Save Subgroup Data",
      features: [
        { title: "Bluetooth Input", desc: "Import measurements from gauges directly with no typing required." },
        { title: "Immediate Feedback", desc: "Show chart points and status immediately upon saving data." },
        { title: "Correction Prompts", desc: "Require action notes if points breach control limits." },
        { title: "Offline Storage", desc: "Save measurement entries locally and sync when connection is restored." }
      ]
    },
    reminders: {
      eyebrow: "QUALITY AUDITS",
      title: "Operator Quality Intervals",
      desc: "Configure schedules to prompt operators for measurements based on shifts, hours, or units.",
      cardTitle: "Quality Audit Schedules",
      badgeText: "Pending Check",
      stats: [
        { value: "12", label: "Control Plans", colorClass: "text-white" },
        { value: "10", label: "Adhered", colorClass: "text-emerald-400" },
        { value: "2", label: "Missed Checks", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Overdue", title: "Casing Thickness Measurement Check", details: "Extruder Line 1 • Every 2 Hours • Operator check", time: "10:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Scheduled", title: "Outer Dia Subgroup Measurement", details: "Stamping Line 4 • Every Shift • Technician check", time: "2:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Time-Interval Triggers", desc: "Alert operators when measurement intervals are reached." },
        { title: "Supervisors Warnings", desc: "Escalate missed inspections to supervisors automatically." },
        { title: "Flexible Intervals", desc: "Define intervals by elapsed time or production counts." },
        { title: "Calendar Tracking", desc: "View all quality check adherence records in a calendar view." }
      ]
    },
    incidents: {
      eyebrow: "OUT OF CONTROL",
      title: "Out-of-Control Action Plan (OCAP)",
      desc: "Document out-of-control conditions, trace parameters, and enforce corrective actions.",
      cardTitle: "SPC OCAP Record",
      ticketId: "SPC-2026-104",
      titleText: "Out-of-Control Point Flagged",
      dateText: "Aug 13, 2026 • 11:35 AM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "45.09mm", label: "Breached Value", colorClass: "text-rose-400" },
        { value: "Rule 1", label: "Violated Rule", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Outer Casing Diameter subgroup point breached Upper Control Limit (45.07mm). Point triggered OCAP workflow.",
      features: [
        { title: "OCAP Workflows", desc: "Guide operators through specific troubleshooting steps when points breach limits." },
        { title: "Containment Actions", desc: "Log quarantine tags and containment details for affected material." },
        { title: "Engineering Alerts", desc: "Alert quality engineers automatically when out-of-control events occur." },
        { title: "Resolution History", desc: "Save OCAP outcomes alongside chart data for compliance records." }
      ]
    },
    rca: {
      eyebrow: "QUALITY ROOT CAUSE",
      title: "Process Shift Investigation",
      desc: "Link SPC anomalies with process parameters to identify causes of quality shifts.",
      cardTitle: "SPC RCA File",
      ticketId: "RCA-SPC-104",
      stats: [
        { value: "0.05mm", label: "Process Shift", colorClass: "text-rose-400" },
        { value: "Feed Feedrate", label: "Primary Factor", colorClass: "text-primary" },
        { value: "88%", label: "Correlation", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did diameter shift? → Die temperature exceeded limits.",
        "Why did temperature exceed limits? → Clogged coolant nozzle restricted flow."
      ],
      features: [
        { title: "Process Correlations", desc: "Correlate chart points with machine historian parameters automatically." },
        { title: "RCA Templates", desc: "Utilize built-in templates (Ishikawa, 5-Whys) to investigate quality issues." },
        { title: "CAPA Integration", desc: "Generate preventative maintenance tasks directly from root causes." },
        { title: "Insight Database", desc: "Search past RCA files to resolve recurring quality anomalies." }
      ]
    },
    types: {
      eyebrow: "SPC CAPABILITY",
      title: "Supported Control Chart Formats",
      desc: "Implement multiple statistical control charts depending on your data types and subgroup sizes.",
      items: [
        { title: "X-bar & Range (X-bar R) Charts", desc: "Monitor process mean and range for subgroups up to 9 parts." },
        { title: "Individual & Moving Range (I-MR)", desc: "Track continuous parameters when subgrouping is not possible (e.g. batch chemicals)." },
        { title: "Fraction Defective (P & NP) Charts", desc: "Track defect rates and counts for attribute-based checks." },
        { title: "Defect Count (C & U) Charts", desc: "Track the number of defects per inspection unit or subgroup." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION SYSTEM",
      title: "Connected Quality Control",
      desc: "Integrate SPC charts with physical gauges, product specs, and manufacturing systems.",
      items: [
        { title: "Gauges & Calipers", desc: "Import measurements from digital instruments via Bluetooth and USB." },
        { title: "Specification Registry", desc: "Sync control plan limits with central product engineering designs." },
        { title: "CMMS Platform", desc: "Trigger maintenance work orders when OCAP steps suggest asset wear." },
        { title: "Traceability Database", desc: "Link subgroup measurements with material lots and final serial numbers." }
      ]
    }
  },
  "cpv-apqr": {
    slug: "cpv-apqr",
    workflow: {
      eyebrow: "VALIDATION STAGES",
      title: "6-Step Process Verification",
      desc: "Specify critical parameters, ingest batch telemetry, run statistics, detect trends, compile APQR files, and verify compliance.",
      steps: [
        { num: 1, title: "Parameters Mapping", subtitle: "Define CPP & CQA metrics", desc: "Identify Critical Process Parameters and Critical Quality Attributes for each product." },
        { num: 2, title: "Batch Telemetry Ingestion", subtitle: "Historian data mapping", desc: "Compile time-series variables and raw lab records for every manufactured batch." },
        { num: 3, title: "Statistical Review", subtitle: "Run stability analytics", desc: "Measure process stability, standard deviation, and capability scores (Cpk) per batch." },
        { num: 4, title: "Trend Analytics", subtitle: "Spot multi-batch shifts", desc: "Analyze variables across batches to identify long-term drift or parameter correlation." },
        { num: 5, title: "APQR Compilation", subtitle: "Generate verification file", desc: "Compile batch reports, out-of-spec events, deviations, and actions into one verification file." },
        { num: 6, title: "Compliance Sign-off", subtitle: "Approve audit records", desc: "Verify audit readiness and sign off documents for regulatory submissions." }
      ]
    },
    spotlight1: {
      eyebrow: "VERIFICATION",
      title: "Critical Parameter Tracking",
      desc: "Monitor critical process parameters (CPP) and critical quality attributes (CQA) dynamically across production batches.",
      features: [
        { id: "sections", title: "CPP & CQA Maps", desc: "Map critical inputs and outputs for every product recipe." },
        { id: "types", title: "APQR Templates", desc: "Generate Product Quality Reviews automatically using pre-built templates." },
        { id: "critical", title: "Deviation Flags", desc: "Flag process parameter excursions for immediate quality review." },
        { id: "photo", title: "Audit Log Integrity", desc: "Secure all data entries with 21 CFR Part 11 compliant audit trails." },
        { id: "signature", title: "E-Signatures", desc: "Collect digital signatures from quality and operations managers." },
        { id: "scoring", title: "Batch Capability", desc: "Calculate process indices (Cpk, Ppk) across batches for APQR documentation." }
      ],
      buttonText: "Generate APQR File",
      card: {
        badge: "Draft",
        templateLabel: "Validation Plan",
        itemsCount: "18 Batches",
        title: "APQR-2026: Tablet Formulation B3",
        metrics: [
          { value: "1.67", label: "Mean Cpk", colorClass: "text-emerald-400" },
          { value: "0", label: "OOS Events", colorClass: "text-primary" },
          { value: "Review Req", label: "Verification Status", colorClass: "text-rose-400", highlightId: "critical" },
          { value: "18 Batches", label: "APQR Scope", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Critical Parameters Monitored",
          items: [
            { label: "CQA: Active Ingredient Purity (98-102%)", badge: "CQA" },
            { label: "CPP: Blend Time (15-20 min)", badge: "CPP" },
            { label: "CPP: Compression Force (12-15 kN)", badge: "CPP" }
          ]
        },
        section2: {
          num: 2,
          title: "APQR Verification Target",
          items: [
            { label: "Lab purity chromatography profile", hasPhoto: true },
            { label: "Batch compression log parameters", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "SYNAPSE AI ENGINE",
      title: "AI Compliance Writer",
      desc: "Auto-generate product quality reviews and compliance summaries by analyzing batch databases, quality deviations, and CAPA logs.",
      prompt: "Compile the APQR summary report for Tablet Formulation B3 batches run in Q2 2026.",
      generatedTitle: "APQR Report Drafted",
      sections: [
        { title: "Verification Assessment", items: ["Process remained capable with average Cpk of 1.54.", "No out-of-specification (OOS) events occurred during the period."], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Deviation Summary", items: ["One raw material deviation logged on Batch #1290.", "CAPA-402 implemented and verified effective."], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Automated Summarization", desc: "Summarize data from batch records, deviations, and CAPA logs automatically." },
        { title: "Excursion Detection", desc: "Identify and describe process parameter excursions automatically." },
        { title: "Regulation Mapping", desc: "Structure report sections to match FDA, EMA, or WHO guidelines." },
        { title: "Fast Approvals", desc: "Generate review drafts to speed up annual quality sign-offs." }
      ]
    },
    startWorkflow: {
      eyebrow: "PLAN SETUP",
      title: "Configure CPV Plan",
      desc: "Map critical parameters and set up verification rules for new production campaigns.",
      cardTitle: "CPV Plan Configuration",
      steps: [
        { step: "1", title: "Select Product Recipe", desc: "Tablet Formulation B3" },
        { step: "2", title: "Map Critical Parameters", desc: "Link CPP/CQA variables to historian tags" },
        { step: "3", title: "Publish Validation Rules", desc: "Publish limits and audit trail rules" }
      ],
      buttonText: "Activate Verification Plan",
      features: [
        { title: "Recipe Mapping", desc: "Configure parameter limits based on approved product recipes." },
        { title: "Historian Connections", desc: "Connect parameters directly to historian variables for auto-capture." },
        { title: "Audit Trail Enforced", desc: "Track all plan changes automatically in a compliant register." },
        { title: "Template Duplication", desc: "Copy verification settings from active plans to speed up configurations." }
      ]
    },
    reminders: {
      eyebrow: "QUALITY REVIEWS",
      title: "APQR Schedule Alerts",
      desc: "Establish calendars to ensure annual product quality reviews and validation checks are completed on schedule.",
      cardTitle: "APQR Schedule Tracker",
      badgeText: "Review Due",
      stats: [
        { value: "48", label: "Active Products", colorClass: "text-white" },
        { value: "42", label: "APQR Current", colorClass: "text-emerald-400" },
        { value: "6", label: "Review Pending", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Overdue", title: "Tablet Formulation APQR Review", details: "Batches run in Q2 2026 • Quality Assurance team", time: "11:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Scheduled", title: "Liquid Suspension CPV Review", details: "Review limits after raw material update • Process team", time: "4:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Due Date Alerts", desc: "Send automated notifications to quality teams when reviews are due." },
        { title: "Escalation Logic", desc: "Escalate pending reviews to QA directors if deadlines are missed." },
        { title: "Progress Dashboard", desc: "Monitor report compilation progress from draft through approval." },
        { title: "Calendar Integration", desc: "Sync verification timelines with quality schedules." }
      ]
    },
    incidents: {
      eyebrow: "DEVIATION LOG",
      title: "Critical Parameter Excursion",
      desc: "Log instances where process parameters exceed validation limits, triggering deviation workflows.",
      cardTitle: "Quality Deviation File",
      ticketId: "DEV-2026-302",
      titleText: "CPP Limit Excursion Detected",
      dateText: "Aug 13, 2026 • 11:38 AM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "16.2 kN", label: "Excursion Value (Max 15)", colorClass: "text-rose-400" },
        { value: "12 min", label: "Duration", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Compression force exceeded the Critical Process Parameter limit (15 kN) during Batch #1292. Excursion logged to quality deviation system.",
      features: [
        { title: "Deviation Workflows", desc: "Guide quality engineers through troubleshooting and investigation steps automatically." },
        { title: "Batch Containment", desc: "Quarantine affected batches automatically in warehousing systems." },
        { title: "Telemetry Captures", desc: "Capture variable history surrounding parameter deviations." },
        { title: "Audit trail compliance", desc: "Log containment, comments, and approvals in a secure log." }
      ]
    },
    rca: {
      eyebrow: "DEVIATION TRACE",
      title: "Batch Excursion Investigation",
      desc: "Investigate critical process deviations, identify root causes, and log CAPA resolutions.",
      cardTitle: "Quality RCA File",
      ticketId: "RCA-DEV-302",
      stats: [
        { value: "Batch #1292", label: "Scope", colorClass: "text-rose-400" },
        { value: "Hydraulic Leak", label: "Primary Cause", colorClass: "text-primary" },
        { value: "95%", label: "Confidence", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did force spike? → Hydraulic cylinder pressure volatility.",
        "Why pressure volatility? → Small oil leak from piston seal."
      ],
      features: [
        { title: "Linked Investigations", desc: "Link investigations, batch files, and CAPA logs for full trace." },
        { title: "5 Whys Logging", desc: "Log structural explanations next to process variable trend charts." },
        { title: "CAPA Integration", desc: "Generate tool maintenance tasks directly from root causes." },
        { title: "Insight Database", desc: "Search past RCA records to resolve similar process anomalies." }
      ]
    },
    types: {
      eyebrow: "REGULATORY COMPLIANCE",
      title: "Supported Validation Formats",
      desc: "Utilize standard validation formats to ensure compliance with global regulators.",
      items: [
        { title: "Annual Product Quality Review (APQR)", desc: "Compile batch data, deviations, and trends into annual summary reports." },
        { title: "Continuous Process Verification (CPV)", desc: "Monitor critical process parameters (CPP) and attributes (CQA) continuously." },
        { title: "Product Quality Review (PQR)", desc: "Prepare quality reviews in compliance with EU Annex 11 guidelines." },
        { title: "Validation Reports", desc: "Generate report formats for FDA 21 CFR Part 11 and WHO Annex 4 audits." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION SYSTEM",
      title: "Connected Regulatory Hub",
      desc: "Connect validation reports with batch records, lab systems, and compliance registers.",
      items: [
        { title: "Batch Records", desc: "Extract batch run profiles and operator logs automatically." },
        { title: "LIMS Platforms", desc: "Pull laboratory quality records and release chromatography reports automatically." },
        { title: "CAPA Registers", desc: "Link quality deviations directly with active corrective actions." },
        { title: "Secure Archives", desc: "Archive validation records with electronic signatures and audit trails." }
      ]
    }
  },
  "gauge-msa": {
    slug: "gauge-msa",
    workflow: {
      eyebrow: "CALIBRATION STAGES",
      title: "6-Step Gauge Calibration & MSA",
      desc: "Register gauges, schedule calibrations, execute tests, calculate Gage R&R, log exceptions, and sign off certificates.",
      steps: [
        { num: 1, title: "Gauge Registration", subtitle: "Log instrument details", desc: "Enter manufacturer details, serial numbers, accuracy tolerances, and department locations." },
        { num: 2, title: "Calibration Schedule", subtitle: "Set check intervals", desc: "Define calibration intervals (e.g. monthly, annually) and assign responsible technicians." },
        { num: 3, title: "Calibration Testing", subtitle: "Perform measurement check", desc: "Verify gauge readings against traceable standard blocks and record deviations." },
        { num: 4, title: "MSA Studies", subtitle: "Evaluate gauge error", desc: "Conduct repeatability and reproducibility (Gage R&R) tests with multiple operators." },
        { num: 5, title: "Deviation Control", subtitle: "Handle failure exceptions", desc: "Flag out-of-tolerance gauges and trigger quarantine or adjustment workflows." },
        { num: 6, title: "Sign-off & Certificate", subtitle: "Publish compliance record", desc: "Approve calibration reports and print calibration stickers with QR codes." }
      ]
    },
    spotlight1: {
      eyebrow: "METROLOGY",
      title: "Gauge Asset Registry",
      desc: "Manage gauge inventories, calibration states, and accuracy standards across the plant.",
      features: [
        { id: "sections", title: "Gauge Register", desc: "Maintain calibration status, parameters, and locations for all gauges." },
        { id: "types", title: "Calibration Specs", desc: "Specify test values, acceptable tolerances, and master references." },
        { id: "critical", title: "Overdue Alarms", desc: "Flag overdue gauges automatically and restrict their use." },
        { id: "photo", title: "Traceable Standards", desc: "Link calibration records to NIST-certified reference standards." },
        { id: "signature", title: "Calibration Approvals", desc: "Collect digital signatures on compliance certificates." },
        { id: "scoring", title: "Gage R&R Calculators", desc: "Calculate repeatability, reproducibility, and total variance." }
      ],
      buttonText: "Add Gauge to Register",
      card: {
        badge: "Calibrated",
        templateLabel: "Gauge Record",
        itemsCount: "12 Checks",
        title: "GAUGE-2026: Digital Micrometer 0-25mm",
        metrics: [
          { value: "0.002mm", label: "Tolerance", colorClass: "text-emerald-400" },
          { value: "9.4%", label: "Gage R&R", colorClass: "text-primary" },
          { value: "Calibrated", label: "Status", colorClass: "text-emerald-400" },
          { value: "14 Days", label: "Due In", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Calibration Targets",
          items: [
            { label: "Check 1: 5.000mm standard block", badge: "Pass" },
            { label: "Check 2: 15.000mm standard block", badge: "Pass" },
            { label: "Check 3: 25.000mm standard block", badge: "Pass" }
          ]
        },
        section2: {
          num: 2,
          title: "MSA Inspection Method",
          items: [
            { label: "Repeatability checks (3 trials per operator)", hasPhoto: true },
            { label: "Reproducibility checks (3 operator setup)", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "SYNAPSE AI ENGINE",
      title: "AI Metrologist",
      desc: "Analyze Gage R&R variance and suggest specific corrections (e.g. operator training, sensor cleaning, fixture adjustment).",
      prompt: "Analyze Gage R&R report for GAUGE-2026 and identify primary variance sources.",
      generatedTitle: "MSA Audit Generated",
      sections: [
        { title: "Variance Summary", items: ["Total Gage R&R occupies 24.2% of tolerance (marginal).", "Reproducibility is primary contributor (82% of error)."], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Correction Plan", items: ["Conduct training on micrometer alignment for Operator B.", "Clean gauge anvil and check fixture alignment."], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Automatic Variance Calculations", desc: "Partition total variance into equipment and appraiser error automatically." },
        { title: "Tolerance Verification", desc: "Verify gauge capability based on product tolerances automatically." },
        { title: "Operator Audit Flags", desc: "Identify appraisers with high measurement drift." },
        { title: "Calibration Recommendations", desc: "Suggest calibration interval changes based on drift history." }
      ]
    },
    startWorkflow: {
      eyebrow: "FIELD WORK",
      title: "Perform Gauge Calibration",
      desc: "Guidance for technicians executing calibration checks using master standards.",
      cardTitle: "Calibration Flow",
      steps: [
        { step: "1", title: "Select Gauge", desc: "GAUGE-2026 Digital Micrometer" },
        { step: "2", title: "Measure Master Block", desc: "Measure 10.000mm NIST reference block" },
        { step: "3", title: "Enter Measurement", desc: "Record reading: 10.001mm (In Tolerance)" }
      ],
      buttonText: "Commit Calibration Record",
      features: [
        { title: "Calibration Instructions", desc: "View step-by-step procedures for every gauge type." },
        { title: "Automatic Checking", desc: "Verify measurements against tolerances in real-time." },
        { title: "Standard Registry", desc: "Record NIST certification serials used during calibration." },
        { title: "Sticker Printing", desc: "Print calibration stickers with QR codes for easy physical checks." }
      ]
    },
    reminders: {
      eyebrow: "CALIBRATION ALERTS",
      title: "Instrument Due Dates",
      desc: "Establish calibration calendars and alert teams to upcoming due dates to ensure compliance.",
      cardTitle: "Calibration Due Board",
      badgeText: "Due Soon",
      stats: [
        { value: "142", label: "Total Gauges", colorClass: "text-white" },
        { value: "135", label: "Calibrated", colorClass: "text-emerald-400" },
        { value: "7", label: "Due Soon", colorClass: "text-yellow-400" }
      ],
      schedule: [
        { tag: "Due Today", title: "Micrometer Calibration Check", details: "GAUGE-2026 • Metrology Room • Tech-Led", time: "11:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Due tomorrow", title: "Digital Scale Verification", details: "Line 4 Packing Scale • Production Team", time: "2:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Automatic Alerts", desc: "Send automated notifications to gauge owners when calibrations are due." },
        { title: "Overdue Lockouts", desc: "Lock out gauges in manufacturing records if calibrations are missed." },
        { title: "Calibration Audits", desc: "Keep permanent records of calibration intervals and checks." },
        { title: "Due Date Planner", desc: "Plan calibration schedules around production shutdowns." }
      ]
    },
    incidents: {
      eyebrow: "EXCEPTIONS LOG",
      title: "Out-of-Tolerance Failure",
      desc: "Log instances where gauges fail calibration tests, triggering product containment checks.",
      cardTitle: "Gauge Failure Ticket",
      ticketId: "CAL-2026-089",
      titleText: "Out-of-Tolerance Calibration",
      dateText: "Aug 13, 2026 • 11:40 AM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "+0.008mm", label: "Deviation (Max 0.002)", colorClass: "text-rose-400" },
        { value: "18 Days", label: "Time Since Last Check", colorClass: "text-yellow-400" }
      ],
      descriptionText: "GAUGE-2026 failed calibration check at 10.000mm point. Device quarantined. Containment check triggered for batches run since last check.",
      features: [
        { title: "Containment Checks", desc: "Identify batches run with failed gauges automatically." },
        { title: "Device Quarantines", desc: "Mark gauges as out-of-service in asset registries." },
        { title: "Deviation Routing", desc: "Send deviation reports to quality and metrology managers." },
        { title: "Adjustment Workflows", desc: "Log adjustments or repairs before returning devices to service." }
      ]
    },
    rca: {
      eyebrow: "METROLOGY TRACE",
      title: "Gauge Deviation Analysis",
      desc: "Investigate recurring calibration failures to identify root causes and implement corrective actions.",
      cardTitle: "Metrology RCA File",
      ticketId: "RCA-CAL-089",
      stats: [
        { value: "GAUGE-2026", label: "Scope", colorClass: "text-rose-400" },
        { value: "Thread Wear", label: "Primary Cause", colorClass: "text-primary" },
        { value: "90%", label: "Confidence", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did calibration fail? → Spindle friction caused measurement error.",
        "Why spindle friction? → Thread wear from dust in grinding department."
      ],
      features: [
        { title: "Trend Analytics", desc: "Track gauge drift over time to predict calibration failures." },
        { title: "5 Whys Templates", desc: "Guide technicians through structured analyses of gauge failures." },
        { title: "CAPA Integration", desc: "Create preventative storage tasks (e.g. dust-covers) based on root causes." },
        { title: "Vendor Metrics", desc: "Analyze gauge reliability across brands and models." }
      ]
    },
    types: {
      eyebrow: "METROLOGY SERVICES",
      title: "Supported Gauge Types",
      desc: "Manage calibration parameters for multiple instrument categories.",
      items: [
        { title: "Dimensional Instruments", desc: "Calipers, micrometers, height gauges, dial indicators, thread plugs." },
        { title: "Pressure & Temperature Sensors", desc: "Pressure gauges, transducers, RTDs, thermocouples, digital thermometers." },
        { title: "Mass & Torque Tools", desc: "Balances, scales, torque wrenches, torque sensors, weight standards." },
        { title: "Electrical Test Equipment", desc: "Multimeters, oscilloscopes, clamp meters, signal generators." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION SYSTEM",
      title: "Connected Gauge Hub",
      desc: "Integrate calibration schedules with active quality control and inventory logs.",
      items: [
        { title: "Calibration Standards", desc: "Link records to reference standards databases for traceability." },
        { title: "Control Plans", desc: "Identify gauges allowed for specific quality inspections." },
        { title: "Asset Registry", desc: "Sync metrology records with central plant asset lists." },
        { title: "LIMS Platform", desc: "Block the use of out-of-tolerance gauges in laboratory tests." }
      ]
    }
  },
  "inspection-management": {
    slug: "inspection-management",
    workflow: {
      eyebrow: "Workflow Strategy",
      title: "Complete 6-Step Inspection Workflow",
      desc: "Configure inspections around your plant's workflows. Click through each step to see how paper-based audits are transformed into a streamlined digital pipeline.",
      steps: [
        { num: 1, title: "Digital Checklists", subtitle: "Pass/Fail & Thresholds", desc: "Replace paper forms with powerful digital checklists. Group checklist items by sections like Safety, Mechanical, or Visual checks with custom numeric limit bounds." },
        { num: 2, title: "Scan QR / NFC Tag", subtitle: "Instant Field Sync", desc: "Frontline inspectors scan a QR code or NFC chip on the machine to instantly open the correct asset history and checklists, eliminating manual searches." },
        { num: 3, title: "Automated Reminders", subtitle: "Shift Alert Schedules", desc: "Define schedules (daily, weekly, after run). Automatically alert inspectors and escalate overdue tasks to site supervisors." },
        { num: 4, title: "Incident Reporting", subtitle: "Enforced Media Evidence", desc: "Require photo and video uploads for failed checks. Log anomalies instantly with location coordinates, severity flags, and immediate EHS routing." },
        { num: 5, title: "Root Cause (RCA)", subtitle: "DMAIC Actions", desc: "Run structured root-cause investigations (5-Whys) directly on failed items, creating trackable corrective actions and preventive plans (CAPA)." },
        { num: 6, title: "Review & Complete", subtitle: "Audit-Ready Logs", desc: "Digitally sign off reports and export them as clean PDFs. Sync all outcomes directly to your central ERP/CMMS database for regulatory inspections." }
      ]
    },
    spotlight1: {
      eyebrow: "FEATURE SPOTLIGHT",
      title: "Digital Inspection Checklists",
      desc: "Replace paper forms with powerful digital checklists. Build comprehensive inspection templates with multiple sections, item types, and automated workflows that ensure nothing gets missed.",
      features: [
        { id: "sections", title: "Multiple Sections", desc: "Organize checklist items into logical groups like Safety, Visual, Performance checks." },
        { id: "types", title: "Various Item Types", desc: "Pass/Fail, Yes/No, Numeric ranges, Text input, Multiple choice options." },
        { id: "critical", title: "Critical Item Markers", desc: "Flag mandatory items that trigger work orders or alerts when failed." },
        { id: "photo", title: "Photo Requirements", desc: "Require photo evidence for specific items to ensure documentation." },
        { id: "signature", title: "Digital Signatures", desc: "Capture inspector signatures for compliance and accountability." },
        { id: "scoring", title: "Custom Scoring", desc: "Define pass/fail thresholds and weighted scoring for overall results." }
      ],
      buttonText: "Create Your First Checklist",
      card: {
        badge: "Active",
        templateLabel: "Template",
        itemsCount: "12 Items",
        title: "CHK-2024-001: Marine Main Propulsion Engine",
        metrics: [
          { value: "12", label: "Items", colorClass: "text-white" },
          { value: "9", label: "Critical", colorClass: "text-rose-400", highlightId: "critical" },
          { value: "12", label: "Mandatory", colorClass: "text-emerald-400" },
          { value: "3", label: "Photos", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Safety & Compliance",
          items: [
            { label: "Emergency STOP devices", badge: "Critical" },
            { label: "Fire suppression ready", badge: "Critical" },
            { label: "IMO NOx Compliance", badge: "Critical" }
          ]
        },
        section2: {
          num: 2,
          title: "Visual Inspection",
          items: [
            { label: "Leaks (oil, fuel, coolant)", hasPhoto: true },
            { label: "Cylinder head integrity", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "AI-Powered Creation",
      title: "Synapse AI Assistant",
      desc: "Let artificial intelligence do the heavy lifting. Synapse AI can automatically generate comprehensive inspection checklists based on your asset type, industry standards, and compliance requirements—saving hours of manual work.",
      prompt: "Create an inspection checklist for a MAN B&W 6S50ME-C marine diesel engine with IMO Tier III compliance",
      generatedTitle: "AI Generated Checklist",
      sections: [
        { title: "Section 1: Safety & Compliance", items: ["Emergency stop devices", "Fire suppression system"], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Section 2: Visual Inspection", items: ["Oil & fuel leaks", "Cylinder head condition"], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Auto-Generate Checklists", desc: "Describe your asset and get a complete checklist with sections and items." },
        { title: "Compliance Suggestions", desc: "AI recommends items based on DOT, OSHA, IMO, and other regulations." },
        { title: "Industry Best Practices", desc: "Get checklist items based on industry standards and common practices." },
        { title: "Critical Item Detection", desc: "AI automatically flags safety-critical items that require attention." }
      ]
    },
    startWorkflow: {
      eyebrow: "Easy Workflow",
      title: "Start New Inspection",
      desc: "Initiate inspections in seconds with our streamlined workflow. Select your asset, choose a checklist, configure environmental conditions, and start inspecting—all from your mobile device or desktop.",
      cardTitle: "Start New Inspection",
      steps: [
        { step: "1", title: "Select Asset", desc: "Marine Engine #ME-001" },
        { step: "2", title: "Choose Checklist", desc: "Marine Propulsion Engine Checklist" },
        { step: "3", title: "Set Location", desc: "Engine Room - Deck 2" }
      ],
      buttonText: "Begin Inspection",
      features: [
        { title: "Asset Selection", desc: "Search and select from your asset database with QR code scanning." },
        { title: "Checklist Templates", desc: "Choose from saved templates or create a new checklist on the fly." },
        { title: "Location Tracking", desc: "Auto-capture GPS location or select from predefined locations." },
        { title: "Environmental Data", desc: "Record temperature, humidity, weather conditions during inspection." }
      ]
    },
    reminders: {
      eyebrow: "NEVER MISS AGAIN",
      title: "Automated Reminders",
      desc: "Set it and forget it. Our smart reminder system ensures your team never misses a scheduled inspection. Configure daily, weekly, monthly, or custom recurrence patterns with automatic notifications.",
      cardTitle: "Inspection Schedule",
      badgeText: "This Week",
      stats: [
        { value: "24", label: "Total", colorClass: "text-white" },
        { value: "18", label: "Active", colorClass: "text-emerald-400" },
        { value: "5", label: "Due", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Today", title: "Pre-Trip Inspection", details: "Truck #T-042 • John Smith", time: "9:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Tomorrow", title: "Safety Audit", details: "Warehouse A • Sarah Johnson", time: "10:00 AM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Flexible Scheduling", desc: "Daily, weekly, monthly, quarterly, or custom recurrence patterns." },
        { title: "Multi-Channel Alerts", desc: "Push notifications, email alerts, and in-app reminders." },
        { title: "Escalation Rules", desc: "Notify supervisors if inspections are overdue or missed." },
        { title: "Calendar Integration", desc: "Sync with Google Calendar, Outlook, and other calendars." }
      ]
    },
    incidents: {
      eyebrow: "Safety First",
      title: "Incident Reporting & Tracking",
      desc: "Document safety incidents comprehensively with severity ratings, cost tracking, root cause analysis, and corrective actions. Ensure OSHA compliance and create a safer workplace.",
      cardTitle: "Incident Report",
      ticketId: "INC-2024-089",
      titleText: "Hydraulic Line Failure",
      dateText: "Dec 23, 2025 • 2:45 PM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "$5,000", label: "Estimated Cost", colorClass: "text-red-400" },
        { value: "4 hrs", label: "Downtime", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Hydraulic hose burst on Excavator #EX-042 during operation. Immediate shutdown performed. No injuries reported.",
      features: [
        { title: "Severity Ratings", desc: "Classify incidents as Low, Medium, High, or Critical severity." },
        { title: "Cost Tracking", desc: "Record estimated and actual costs associated with incidents." },
        { title: "Downtime Recording", desc: "Track equipment downtime caused by safety incidents." },
        { title: "Corrective Actions", desc: "Create and track corrective action plans with due dates." }
      ]
    },
    rca: {
      eyebrow: "Deep Insights",
      title: "Root Cause Analysis (RCA)",
      desc: "Go beyond symptoms to find the real cause of failures. Link inspections, work orders, and incidents together to identify patterns and implement effective corrective actions that prevent recurrence.",
      cardTitle: "Root Cause Analysis",
      ticketId: "RCA-2024-015",
      stats: [
        { value: "3", label: "Inspections", colorClass: "text-emerald-400" },
        { value: "2", label: "Work Orders", colorClass: "text-primary" },
        { value: "1", label: "Incidents", colorClass: "text-rose-400" }
      ],
      whys: [
        "Why did the hose fail? → wear",
        "Why wasn't it detected? → checklist missing check"
      ],
      features: [
        { title: "Link Related Items", desc: "Connect inspections, work orders, and incidents for full picture." },
        { title: "5 Whys Analysis", desc: "Built-in methodology to drill down to root causes." },
        { title: "Corrective Actions", desc: "Create action plans with assignees and due dates." },
        { title: "Trend Analysis", desc: "Identify recurring issues and failure patterns." }
      ]
    },
    types: {
      eyebrow: "Inspection Types",
      title: "Support for All Inspection Needs",
      desc: "Supports multiple inspection types to help you maintain compliance, ensure safety, and track asset conditions across your organization.",
      items: [
        { title: "Pre-Trip Inspections", desc: "DOT-compliant vehicle inspections before every trip." },
        { title: "Safety Audits", desc: "OSHA safety inspections and hazard identification." },
        { title: "Marine Inspections", desc: "IMO and USCG compliant vessel inspections." },
        { title: "Equipment Inspections", desc: "Routine maintenance inspections for machinery." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATED MODULES",
      title: "Inspections Connected to Every Module",
      desc: "Inspection data connects directly with your work orders, assets, and maintenance modules for complete operational visibility.",
      items: [
        { title: "Work Orders", desc: "Auto-generate from failures" },
        { title: "Assets", desc: "Link to equipment history" },
        { title: "Preventive Maintenance", desc: "Schedule from findings" },
        { title: "Reports & Analytics", desc: "Inspection metrics dashboards" }
      ]
    }
  },
  "mobile-ai-inspection": {
    slug: "mobile-ai-inspection",
    workflow: {
      eyebrow: "Process Flow",
      title: "Complete 7-Step Inspection Workflow",
      desc: "Here is how a paper check turns into a quick, guided digital inspection from start to finish.",
      steps: [
        { num: 1, title: "Select what to inspect", subtitle: "Choose asset or location", desc: "Choose the item or site from a list in the app, or simply scan its barcode or QR tag to open the correct checklist." },
        { num: 2, title: "Start the inspection", subtitle: "Open the checklist", desc: "Open the digital inspection checklist on your phone or tablet to begin the process, with automatic tracking of time and location." },
        { num: 3, title: "Follow the guided checks", subtitle: "Step-by-step guidance", desc: "Read the clear questions and instructions. Compare what you see with standard reference pictures so you know exactly what to look for." },
        { num: 4, title: "Capture photos & readings", subtitle: "Snap and record", desc: "Take photos of the equipment or scan dials and gauges using the phone's camera. The AI helps read and log the values automatically." },
        { num: 5, title: "Record issues", subtitle: "Flag failures", desc: "If something fails a check, mark it immediately. Add notes, describe the problem, and flag its severity directly in the checklist." },
        { num: 6, title: "Review the results", subtitle: "Verify checklist details", desc: "Go over all the steps, photos, and readings. Add a digital signature to sign off and confirm the inspection is complete." },
        { num: 7, title: "Final report & action", subtitle: "Share and resolve", desc: "The app instantly generates a report. Failed items are automatically sent to supervisors so repairs can be scheduled and tracked." }
      ]
    },
    spotlight1: {
      eyebrow: "FEATURE SPOTLIGHT",
      title: "Replace Paper Checklists with Digital Inspections",
      desc: "Create digital checklists for different types of inspections and complete them directly from your phone or tablet.",
      features: [
        { id: "sections", title: "Logical Sections", desc: "Organize checks into groups like Safety, Visual, or Mechanical." },
        { id: "types", title: "Different Answer Types", desc: "Record pass/fail answers, enter numbers, write notes, or choose options." },
        { id: "critical", title: "Critical Alerts", desc: "Flag important checks that trigger immediate alerts when they fail." },
        { id: "photo", title: "Photo Proof", desc: "Require photos for specific checks so you have visual evidence." },
        { id: "signature", title: "Sign-off", desc: "Capture digital signatures directly on the screen for accountability." },
        { id: "scoring", title: "Overall Scores", desc: "Calculate a pass or fail score automatically based on the results." }
      ],
      buttonText: "Create Your First Checklist",
      card: {
        badge: "Active",
        templateLabel: "Checklist",
        itemsCount: "12 Checks",
        title: "CHK-101: Generator Maintenance & Safety Check",
        metrics: [
          { value: "12", label: "Checks", colorClass: "text-white" },
          { value: "5", label: "Critical", colorClass: "text-rose-400", highlightId: "critical" },
          { value: "12", label: "Mandatory", colorClass: "text-emerald-400" },
          { value: "2", label: "Photos Required", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Safety Controls",
          items: [
            { label: "Emergency stop works", badge: "Critical" },
            { label: "Safety guards in place", badge: "Critical" }
          ]
        },
        section2: {
          num: 2,
          title: "Physical Condition",
          items: [
            { label: "Leaks (oil or fuel)", hasPhoto: true },
            { label: "Belt tension and wear", hasPhoto: true }
          ]
        }
      }
    },
    startWorkflow: {
      eyebrow: "Easy Workflow",
      title: "Start New Inspection",
      desc: "Initiate inspections in seconds with our streamlined workflow. Select your asset, choose a checklist, configure environmental conditions, and start inspecting—all from your mobile device or desktop.",
      cardTitle: "Start New Inspection",
      steps: [
        { step: "1", title: "Select Asset", desc: "Generator #GEN-001" },
        { step: "2", title: "Choose Checklist", desc: "Generator Maintenance Checklist" },
        { step: "3", title: "Set Location", desc: "Main Site - Block B" }
      ],
      buttonText: "Begin Inspection",
      features: [
        { title: "Asset Selection", desc: "Search and select from your asset database with QR code scanning." },
        { title: "Checklist Templates", desc: "Choose from saved templates or create a new checklist on the fly." },
        { title: "Location Tracking", desc: "Auto-capture GPS location or select from predefined locations." },
        { title: "Environmental Data", desc: "Record temperature, humidity, weather conditions during inspection." }
      ]
    },
    reminders: {
      eyebrow: "NEVER MISS AGAIN",
      title: "Automated Reminders",
      desc: "Set it and forget it. Our smart reminder system ensures your team never misses a scheduled inspection. Configure daily, weekly, monthly, or custom recurrence patterns with automatic notifications.",
      cardTitle: "Inspection Schedule",
      badgeText: "This Week",
      stats: [
        { value: "24", label: "Total", colorClass: "text-white" },
        { value: "18", label: "Active", colorClass: "text-emerald-400" },
        { value: "5", label: "Due", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Today", title: "Pre-Trip Inspection", details: "Truck #T-042 • John Smith", time: "9:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Tomorrow", title: "Safety Audit", details: "Warehouse A • Sarah Johnson", time: "10:00 AM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Flexible Scheduling", desc: "Daily, weekly, monthly, quarterly, or custom recurrence patterns." },
        { title: "Multi-Channel Alerts", desc: "Push notifications, email alerts, and in-app reminders." },
        { title: "Escalation Rules", desc: "Notify supervisors if inspections are overdue or missed." },
        { title: "Calendar Integration", desc: "Sync with Google Calendar, Outlook, and other calendars." }
      ]
    },
    incidents: {
      eyebrow: "Safety First",
      title: "Incident Reporting & Tracking",
      desc: "Document safety incidents comprehensively with severity ratings, cost tracking, root cause analysis, and corrective actions. Ensure OSHA compliance and create a safer workplace.",
      cardTitle: "Incident Report",
      ticketId: "INC-2024-089",
      titleText: "Hydraulic Line Failure",
      dateText: "Dec 23, 2025 • 2:45 PM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "$5,000", label: "Estimated Cost", colorClass: "text-red-400" },
        { value: "4 hrs", label: "Downtime", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Hydraulic hose burst on Excavator #EX-042 during operation. Immediate shutdown performed. No injuries reported.",
      features: [
        { title: "Severity Ratings", desc: "Classify incidents as Low, Medium, High, or Critical severity." },
        { title: "Cost Tracking", desc: "Record estimated and actual costs associated with incidents." },
        { title: "Downtime Recording", desc: "Track equipment downtime caused by safety incidents." },
        { title: "Corrective Actions", desc: "Create and track corrective action plans with due dates." }
      ]
    },
    rca: {
      eyebrow: "Deep Insights",
      title: "Root Cause Analysis (RCA)",
      desc: "Go beyond symptoms to find the real cause of failures. Link inspections, work orders, and incidents together to identify patterns and implement effective corrective actions that prevent recurrence.",
      cardTitle: "Root Cause Analysis",
      ticketId: "RCA-2024-015",
      stats: [
        { value: "3", label: "Inspections", colorClass: "text-emerald-400" },
        { value: "2", label: "Work Orders", colorClass: "text-primary" },
        { value: "1", label: "Incidents", colorClass: "text-rose-400" }
      ],
      whys: [
        "Why did the hose fail? → wear",
        "Why wasn't it detected? → checklist missing check"
      ],
      features: [
        { title: "Link Related Items", desc: "Connect inspections, work orders, and incidents for full picture." },
        { title: "5 Whys Analysis", desc: "Built-in methodology to drill down to root causes." },
        { title: "Corrective Actions", desc: "Create action plans with assignees and due dates." },
        { title: "Trend Analysis", desc: "Identify recurring issues and failure patterns." }
      ]
    },
    types: {
      eyebrow: "Inspection Scope",
      title: "Support for All Inspection Needs",
      desc: "Whether you are checking heavy machines, site safety, or facility conditions, the platform adapts to any type of inspection.",
      items: [
        { title: "Machines & Equipment", desc: "Check pumps, motors, generators, and production lines to prevent unexpected breakdowns." },
        { title: "Facilities & Sites", desc: "Inspect building safety, fire exits, lighting, and general site conditions regularly." },
        { title: "Vehicles & Fleets", desc: "Run pre-trip checks for trucks, forklifts, or company cars to ensure they are safe to operate." },
        { title: "Safety & Compliance Checks", desc: "Perform safety walks, check PPE usage, and log environmental compliance records easily." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATIONS",
      title: "Connect Inspection Results With the Rest of Your Business",
      desc: "Inspection results can be connected with the systems and teams already involved in your business, helping you move from finding a problem to taking action.",
      items: [
        { title: "Repair & Maintenance Jobs", desc: "Create repair requests automatically whenever an inspection check fails." },
        { title: "Equipment & Asset History", desc: "Keep a complete history of inspections and repairs tied to each machine or site." },
        { title: "Scheduling & Calendar", desc: "Plan inspections based on shift timings, calendar dates, or machine run hours." },
        { title: "Reports & Analytics", desc: "View dashboards of inspection results, common failures, and repair times." }
      ]
    }
  },
  "continuous-improvement": {
    slug: "continuous-improvement",
    workflow: {
      eyebrow: "IMPROVEMENT LOOP",
      title: "6-Step Kaizen Execution Pipeline",
      desc: "Spot a problem, submit an idea ticket, score its potential, run trials, measure the results, and update standard procedures.",
      steps: [
        { num: 1, title: "Opportunity Capture", subtitle: "Submit Kaizen ideas", desc: "Enable line teams to submit improvement cards on plant floor terminals." },
        { num: 2, title: "Triage & Score", subtitle: "Assess complexity & impact", desc: "Score submissions based on cost savings, safety boosts, and runtime gains." },
        { num: 3, title: "Project Assignment", subtitle: "Assign Kaizen owners", desc: "Form action groups and assign timelines to engineers and shift leaders." },
        { num: 4, title: "RCA & Experiment", subtitle: "Develop process changes", desc: "Identify failure roots using fishbone diagrams and design low-cost solutions." },
        { num: 5, title: "Impact Verification", subtitle: "Measure performance impact", desc: "Run verification batches to confirm changes in yield, safety, or scrap." },
        { num: 6, title: "Process Standard", subtitle: "Publish training guides", desc: "Update control plans, operating procedures, and training modules to solidify changes." }
      ]
    },
    spotlight1: {
      eyebrow: "KAIZEN BOARD",
      title: "Interactive Kaizen Board",
      desc: "Manage shop-floor improvement ideas from initial submission through team verification on a visual pipeline board.",
      features: [
        { id: "sections", title: "Idea Capture", desc: "Log Kaizen submissions from mobile or plant floor terminals." },
        { id: "types", title: "Category Tags", desc: "Track improvements by safety, quality, throughput, cost, and maintenance." },
        { id: "critical", title: "Escalation Warnings", desc: "Ensure actions are completed before deadlines by routing alerts." },
        { id: "photo", title: "Impact Metrics", desc: "Track verified cost savings and cycle time reductions." },
        { id: "signature", title: "Approval Gateways", desc: "Enforce digital signature approvals from EHS and plant managers." },
        { id: "scoring", title: "Kaizen Scoring", desc: "Rate ideas based on how much they will save or improve operations versus how hard they are to implement." }
      ],
      buttonText: "Submit Kaizen Idea",
      card: {
        badge: "Approved",
        templateLabel: "Kaizen Record",
        itemsCount: "3 Actions",
        title: "KZN-2026: Feeding Table Re-design",
        metrics: [
          { value: "$12K", label: "Est. Savings", colorClass: "text-emerald-400" },
          { value: "Throughput", label: "Category", colorClass: "text-primary" },
          { value: "Approved", label: "Status", colorClass: "text-emerald-400" },
          { value: "5 Days", label: "Cycle Time", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Planned Kaizen Actions",
          items: [
            { label: "Install proximity sensor on table guide", badge: "Action 1" },
            { label: "Modify guide rails to reduce friction", badge: "Action 2" },
            { label: "Update standard operating procedures", badge: "Action 3" }
          ]
        },
        section2: {
          num: 2,
          title: "Before / After Visual Targets",
          items: [
            { label: "Initial feeding table layout (high friction)", hasPhoto: true },
            { label: "Adjusted guide rail configuration (smooth flow)", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "SYNAPSE AI ENGINE",
      title: "AI Kaizen Advisor",
      desc: "Get automated suggestions for shop-floor improvements by analyzing machine downtime logs, waste data, and quality checks.",
      prompt: "Analyze downtime records on Line 4 and suggest continuous improvement actions.",
      generatedTitle: "Kaizen Pipeline Drafted",
      sections: [
        { title: "Identified Bottlenecks", items: ["Packing station bottlenecks account for 28% of downtime.", "Feeder guide jams peak on thick material runs."], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Kaizen Recommendations", items: ["Re-design feeder guide rail with adjustable spacer gaps.", "Automate packing station queue control loops."], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Downtime Scrap Correlations", desc: "Correlate history logs with material waste to prioritize Kaizen projects." },
        { title: "Kaizen Template Writers", desc: "Structure ideas into complete Kaizen submissions automatically." },
        { title: "ROI Projections", desc: "Estimate payback timelines based on similar plant improvements." },
        { title: "Audit Reporting", desc: "Generate summary reports of total plant improvements for management reviews." }
      ]
    },
    startWorkflow: {
      eyebrow: "FLOOR CHECKS",
      title: "Log Improvement Idea",
      desc: "Step-by-step entry for operators to submit Kaizen ideas directly from active workstations.",
      cardTitle: "New Kaizen Submission",
      steps: [
        { step: "1", title: "Identify Area", desc: "Stamping Line 4 • Feed Section" },
        { step: "2", title: "Describe Idea", desc: "Install safety guide rail to align plates during entry" },
        { step: "3", title: "Select Category", desc: "Safety & Quality Improvement" }
      ],
      buttonText: "Publish Kaizen Submission",
      features: [
        { title: "Mobile Friendly", desc: "Operators can log ideas instantly with photo attachments." },
        { title: "Action Routing", desc: "Route suggestions to shift supervisors for immediate reviews." },
        { title: "Status Tracking", desc: "Keep team members informed of suggestion reviews." },
        { title: "Offline Logging", desc: "Submit suggestions without network; sync once connected." }
      ]
    },
    reminders: {
      eyebrow: "IMPROVEMENT AUDITS",
      title: "Standardization Audits",
      desc: "Establish schedules to review completed Kaizen projects and confirm improvements remain effective.",
      cardTitle: "Kaizen Verification Calendar",
      badgeText: "Due This Month",
      stats: [
        { value: "28", label: "Total Kaizens", colorClass: "text-white" },
        { value: "24", label: "Sustained", colorClass: "text-emerald-400" },
        { value: "4", label: "Due Review", colorClass: "text-yellow-400" }
      ],
      schedule: [
        { tag: "Due Today", title: "Feeder Guide Project Review", details: "Review Line 4 guide rail wear and adjustments • Shift Team", time: "11:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Scheduled", title: "Packing Station Queue Check", details: "Confirm sensor queue rules remain active • Engineer-Led", time: "3:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Sustained-Impact Checks", desc: "Audit projects 30, 60, and 90 days after completion." },
        { title: "Automatic Reminders", desc: "Remind project leaders when audits are due." },
        { title: "Audit trail logging", desc: "Record verification check details next to initial project files." },
        { title: "Visual Dashboard", desc: "View all plant improvement indicators in a unified calendar." }
      ]
    },
    incidents: {
      eyebrow: "IMPROVEMENT BLOCKS",
      title: "Kaizen Action Delays",
      desc: "Track project roadblocks and delays, alerting supervisors when tasks are stuck so they can help resolve them.",
      cardTitle: "ROADBLOCK TICKET",
      ticketId: "KZN-BLOCK-04",
      titleText: "Feeder Guide Project Blocked",
      dateText: "Aug 13, 2026 • 11:42 AM",
      priorityBadge: "Medium Priority",
      metrics: [
        { value: "14 Days", label: "Days Delayed", colorClass: "text-rose-400" },
        { value: "Purchasing", label: "Block Cause", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Guide rail proximity sensor approval delayed. Purchase requisition #PR-901 pending approval from financial systems.",
      features: [
        { title: "Roadblock Routing", desc: "Route alerts to plant managers to resolve project delays." },
        { title: "Task Escalations", desc: "Escalate project cards automatically when milestones are missed." },
        { title: "Linked Purchase Orders", desc: "Link project logs with purchase orders for visibility." },
        { title: "Status Reports", desc: "Highlight delayed projects in weekly management summaries." }
      ]
    },
    rca: {
      eyebrow: "IMPROVEMENT ANALYSIS",
      title: " Kaizen Benefit Investigations",
      desc: "Review completed projects that did not meet their expected goals, finding the root causes so future projects succeed.",
      cardTitle: "Kaizen RCA File",
      ticketId: "RCA-KZN-04",
      stats: [
        { value: "40% Deviation", label: "Benefit Deficit", colorClass: "text-rose-400" },
        { value: "Incorrect Spec", label: "Primary Cause", colorClass: "text-primary" },
        { value: "92%", label: "Confidence", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why was payback lower? → Feeder downtime reduction fell short of targets.",
        "Why did it fall short? → Custom guide rail was too tight, causing minor friction delays."
      ],
      features: [
        { title: "Payback Tracker", desc: "Compare project estimates with actual historian data." },
        { title: "5 Whys Templates", desc: "Guide project teams through structured audits of missed targets." },
        { title: "CAPA Workflows", desc: "Generate adjustment tasks directly from audit reviews." },
        { title: "Knowledge Database", desc: "Archive project findings to improve future planning accuracy." }
      ]
    },
    types: {
      eyebrow: "KAIZEN SCOPE",
      title: "Supported Improvement Projects",
      desc: "Manage multiple types of continuous improvement initiatives in a single pipeline.",
      items: [
        { title: "5S Workplace Organization", desc: "Track sorting, straightening, shining, standardizing, and sustaining projects." },
        { title: "Kaizen Events (Blitzes)", desc: "Manage short, high-focus teamwork sessions aimed at solving a specific shop-floor problem in a few days." },
        { title: "Six Sigma DMAIC Projects", desc: "Structure complex, data-driven projects through define, measure, analyze, improve, and control phases." },
        { title: "Just-In-Time (JIT) Initiatives", desc: "Optimize material delivery, reduce buffer stock, and eliminate process waste." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION SYSTEM",
      title: "Connected Kaizen Pipeline",
      desc: "Connect continuous improvement projects with plant databases, maintenance records, and training files.",
      items: [
        { title: "Active Downtime Records", desc: "Identify Kaizen opportunities by analyzing downtime trends automatically." },
        { title: "Training Documents", desc: "Sync project findings with standard operating procedures." },
        { title: "CMMS Platform", desc: "Schedule maintenance verification checks for completed Kaizen adjustments." },
        { title: "Financial Systems", desc: "Sync project savings calculations with plant budget databases." }
      ]
    }
  },
  "maintenance-management": {
    slug: "maintenance-management",
    workflow: {
      eyebrow: "MAINTENANCE STAGES",
      title: "6-Step CMMS Work Order Flow",
      desc: "Submit requests, approve work orders, check spare parts, execute maintenance tasks, record downtime, and sign off logs.",
      steps: [
        { num: 1, title: "Work Request", subtitle: "Submit maintenance ticket", desc: "Submit tickets with asset IDs, photos, and descriptions from floor terminals or mobile apps." },
        { num: 2, title: "Triage & Approve", subtitle: "Schedule & assign work", desc: "Review requests, assign priorities, estimate hours, and route tasks to technicians." },
        { num: 3, title: "Parts Inventory", subtitle: "Check material availability", desc: "Verify that needed seals, gaskets, or parts are on hand, reserving them automatically." },
        { num: 4, title: "Task Execution", subtitle: "Technician task checklist", desc: "Follow step-by-step checklists, attach photos, and record calibration readings." },
        { num: 5, title: "Downtime Record", subtitle: "Log repair duration", desc: "Record actual repair durations and downtime causes next to asset records." },
        { num: 6, title: "Sign-off & Sync", subtitle: "Close work order", desc: "Technician signature sign-off closes the work order and logs data to asset registers." }
      ]
    },
    spotlight1: {
      eyebrow: "WORK ORDERS",
      title: "Interactive Work Order Hub",
      desc: "Manage preventative and corrective maintenance tasks, scheduling, and technician assignments.",
      features: [
        { id: "sections", title: "Task Checklists", desc: "Build step-by-step procedures for preventative and corrective maintenance." },
        { id: "types", title: "Work Order Types", desc: "Categorize by preventative, corrective, breakdown, predictive, and safety." },
        { id: "critical", title: "Priority Indicators", desc: "Flag critical breakdowns to route alerts to on-duty technicians immediately." },
        { id: "photo", title: "Parts Allocation", desc: "Reserve and track spare parts used during repairs." },
        { id: "signature", title: "Technician Signatures", desc: "Collect sign-offs from technicians and supervisors." },
        { id: "scoring", title: "MTTR & MTBF Metrics", desc: "Track mean time to repair and mean time between failures dynamically." }
      ],
      buttonText: "Create Work Order",
      card: {
        badge: "In Progress",
        templateLabel: "Work Order",
        itemsCount: "8 Tasks",
        title: "WO-2026: Hydraulic Pump Seal Swap",
        metrics: [
          { value: "High", label: "Priority", colorClass: "text-rose-400" },
          { value: "Pump #P-04", label: "Asset", colorClass: "text-primary" },
          { value: "2.5 hrs", label: "Est. Time", colorClass: "text-emerald-400" },
          { value: "Ready", label: "Spare Parts", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Required Maintenance Steps",
          items: [
            { label: "Isolate pump and lock-out power source", badge: "Critical" },
            { label: "Drain remaining fluid from valve line", badge: "Mandatory" },
            { label: "Replace worn piston shaft seal", badge: "Mandatory" }
          ]
        },
        section2: {
          num: 2,
          title: "Parts & Photo Checklist",
          items: [
            { label: "Take photo of old seal surface wear profile", hasPhoto: true },
            { label: "Verify replacement seal serial match", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "SYNAPSE AI ENGINE",
      title: "AI Work Planner",
      desc: "Auto-generate detailed preventative maintenance plans and checklists based on manufacturer manuals and fault histories.",
      prompt: "Generate a preventative maintenance task list for a Parker T7 hydraulic pump.",
      generatedTitle: "Maintenance Plan Drafted",
      sections: [
        { title: "Quarterly Tasks", items: ["Inspect shaft alignment and check coupling insert.", "Analyze oil samples for metal particles."], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Safety Instructions", items: ["LOTO procedure required on breaker block #B-04.", "Wear hydraulic pressure safety gear."], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Manual Extraction", desc: "Import manual PDFs and extract checklists and torque specs automatically." },
        { title: "Fault-Based Adaptations", desc: "Inject specific checks into tasks based on recurring failure patterns." },
        { title: "Estimated Timelines", desc: "Predict job durations and staffing needs based on history logs." },
        { title: "Automatic Parts Drafts", desc: "List required spare parts automatically based on task descriptions." }
      ]
    },
    startWorkflow: {
      eyebrow: "FIELD WORK",
      title: "Start Work Order",
      desc: "Step-by-step guidance for technicians starting maintenance jobs, including LOTO verification.",
      cardTitle: "Begin Maintenance Task",
      steps: [
        { step: "1", title: "Lock-out / Tag-out", desc: "Verify breaker #B-04 locked and tagged out" },
        { step: "2", title: "Collect Spare Parts", desc: "Verify seal #S-901 retrieved from storeroom" },
        { step: "3", title: "Record Start Time", desc: "Record start timestamp (11:45 AM) to log MTTR" }
      ],
      buttonText: "Confirm Safety Rules & Start",
      features: [
        { title: "Mobile Instructions", desc: "Follow checklists and instructions directly from mobile devices." },
        { title: "LOTO Enforcement", desc: "Require photo validation of lock-out tags before opening tasks." },
        { title: "Storeroom Integrations", desc: "Confirm parts collection with simple barcode scans." },
        { title: "Offline Access", desc: "Access manuals and checklists without network." }
      ]
    },
    reminders: {
      eyebrow: "SCHEDULE ALERTS",
      title: "Preventative Maintenance Planner",
      desc: "Schedule PM tasks based on calendar time or run-time hours, ensuring tasks are completed on schedule.",
      cardTitle: "Preventative Maintenance Schedule",
      badgeText: "Due Today",
      stats: [
        { value: "48", label: "PM Tasks Due", colorClass: "text-white" },
        { value: "42", label: "Completed", colorClass: "text-emerald-400" },
        { value: "6", label: "Overdue", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Today", title: "Gearbox Lubrication Service", details: "Line 3 Conveyor Drive • Tech-Led • Monthly check", time: "10:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Tomorrow", title: "Conveyor Belt Tension Check", details: "Packaging line 2 • Weekly check", time: "1:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Time & Meter Triggers", desc: "Schedule tasks by elapsed time (e.g. monthly) or runtime hours (e.g. 500 hrs)." },
        { title: "Adherence Dashboards", desc: "Track PM compliance rates across lines and shifts." },
        { title: "Alert Routing", desc: "Escalate tasks automatically when schedules are missed." },
        { title: "Asset Calendars", desc: "View all scheduled maintenance tasks in a unified view." }
      ]
    },
    incidents: {
      eyebrow: "BREAKDOWN LOG",
      title: "Unscheduled Machine Downtime",
      desc: "Log asset breakdowns, record repair details, and log downtime costs.",
      cardTitle: "Breakdown Ticket",
      ticketId: "WO-BRK-2026",
      titleText: "Hydraulic Pump Seal Blowout",
      dateText: "Aug 13, 2026 • 11:43 AM",
      priorityBadge: "Critical Priority",
      metrics: [
        { value: "$2,800", label: "Estimated Cost", colorClass: "text-rose-400" },
        { value: "2.5 hrs", label: "Downtime Duration", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Seal blowout on hydraulic pump #P-04 caused oil leak. Pressure dropped instantly, halting the production line.",
      features: [
        { title: "Immediate Dispatch", desc: "Send SMS alerts to on-duty mechanics immediately." },
        { title: "Breakdown Logging", desc: "Record fault codes, downtime duration, and reasons." },
        { title: "Linked Spare Parts", desc: "Log gaskets and oils used during emergency repairs." },
        { title: "Cost Calculations", desc: "Calculate total costs by adding labor rates to parts costs." }
      ]
    },
    rca: {
      eyebrow: "RELIABILITY ANALYTICS",
      title: "Breakdown Root Cause Analysis",
      desc: "Investigate recurring machine failures, trace parameter histories, and CAPA resolutions.",
      cardTitle: "Maintenance RCA File",
      ticketId: "RCA-BRK-042",
      stats: [
        { value: "3 Blowouts", label: "Frequency (12 Mo)", colorClass: "text-rose-400" },
        { value: "Alignment Error", label: "Primary Cause", colorClass: "text-primary" },
        { value: "88%", label: "Confidence", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did the seal blowout? → Overheating in pump casing.",
        "Why pump overheating? → Shaft misalignment put extra friction on bearings."
      ],
      features: [
        { title: "Fault Correlations", desc: "Analyze historical vibration and temperature trends leading up to failures." },
        { title: "5 Whys Logging", desc: "Log structural explanations next to asset histories." },
        { title: "CAPA Workflows", desc: "Generate laser alignment tasks to prevent recurring failures." },
        { title: "Reliability Archives", desc: "Search past RCA records to resolve similar equipment anomalies." }
      ]
    },
    types: {
      eyebrow: "MAINTENANCE SCOPE",
      title: "Supported Maintenance Work",
      desc: "Manage multiple maintenance disciplines in a single central registry.",
      items: [
        { title: "Preventative Maintenance (PM)", desc: "Schedule inspections, lubrications, and parts swaps to prevent failures." },
        { title: "Corrective Maintenance", desc: "Log repairs and breakdowns next to asset registries." },
        { title: "Condition-Based Maintenance", desc: "Trigger maintenance tasks automatically based on vibration or temperature alerts." },
        { title: "Predictive Maintenance (PdM)", desc: "Analyze machine telemetry to forecast remaining useful life." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION SYSTEM",
      title: "Connected Maintenance Hub",
      desc: "Integrate maintenance work orders with plant registries, inventory, and control logs.",
      items: [
        { title: "Asset Registry", desc: "Log maintenance histories and costs against physical assets." },
        { title: "Spare Parts Inventory", desc: "Deduct parts from inventory records when work orders are closed." },
        { title: "Quality Control", desc: "Schedule calibration checks automatically after machine repairs." },
        { title: "Plant Controls", desc: "Sync LOTO status and breakdown alerts with control room HMIs." }
      ]
    }
  },
  "doe-experiments-management": {
    slug: "doe-experiments-management",
    workflow: {
      eyebrow: "EXPERIMENT LOOPS",
      title: "6-Step Process Optimization",
      desc: "Define objectives, configure factor sets, generate trial plans, execute trials, analyze results, and publish recipes.",
      steps: [
        { num: 1, title: "Objective Definition", subtitle: "Set experiment targets", desc: "Define optimization goals (e.g. increase yield, reduce defect rates)." },
        { num: 2, title: "Factor Configurations", subtitle: "Set parameter levels", desc: "Configure input variables (e.g. temperature, feed rates) and target levels." },
        { num: 3, title: "Trial Design", subtitle: "Generate matrix plan", desc: "Design trial runs (fractional factorial, Taguchi) automatically." },
        { num: 4, title: "Trial Runs", subtitle: "Execute and log trials", desc: "Guide operators through trial runs, recording observations and results." },
        { num: 5, title: "Data Analysis", subtitle: "Calculate variance", desc: "Calculate analysis of variance (ANOVA) and parameter interactions." },
        { num: 6, title: "Publish Settings", subtitle: "Standardize process parameters", desc: "Publish optimized setpoints to control plans and operating systems." }
      ]
    },
    spotlight1: {
      eyebrow: "TRIAL MATRIX",
      title: "Design of Experiments (DoE) Hub",
      desc: "Configure optimization experiments, input variables, and trials on a central engineering board.",
      features: [
        { id: "sections", title: "Factor Setup", desc: "Configure input variables and level ranges for experiments." },
        { id: "types", title: "Design Options", desc: "Support full, fractional factorial, Box-Behnken, and Taguchi matrices." },
        { id: "critical", title: "Constraint Checks", desc: "Identify and prevent hazardous parameter settings." },
        { id: "photo", title: "Result Logs", desc: "Record output metrics (e.g. strength, viscosity) for each trial." },
        { id: "signature", title: "Approval Signatures", desc: "Collect sign-offs from process managers before starting trials." },
        { id: "scoring", title: "ANOVA Calculations", desc: "Partition variance to identify key parameter contributions." }
      ],
      buttonText: "Configure Experiment",
      card: {
        badge: "Draft",
        templateLabel: "DoE Plan",
        itemsCount: "8 Trials",
        title: "DOE-2026: Extrusion Heat & Speed",
        metrics: [
          { value: "98.2%", label: "Target Yield", colorClass: "text-emerald-400" },
          { value: "2 Factors", label: "Inputs", colorClass: "text-primary" },
          { value: "Ready", label: "Trial Status", colorClass: "text-emerald-400" },
          { value: "8 Runs", label: "DoE Scope", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Input Factor Ranges",
          items: [
            { label: "Factor A: Temp Level (140°C vs 160°C)", badge: "A" },
            { label: "Factor B: Speed Level (10m/s vs 15m/s)", badge: "B" },
            { label: "Response: Casing Surface Roughness", badge: "Response" }
          ]
        },
        section2: {
          num: 2,
          title: "Trial Run Matrix",
          items: [
            { label: "Run 1: Temp 140°C, Speed 10m/s", hasPhoto: true },
            { label: "Run 2: Temp 160°C, Speed 10m/s", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "SYNAPSE AI ENGINE",
      title: "AI Experiment Designer",
      desc: "Generate optimized trial matrices and parameter ranges based on past database searches and historical yield logs.",
      prompt: "Design a fractional factorial experiment to optimize casing surface finish.",
      generatedTitle: "Experiment Designed",
      sections: [
        { title: "Proposed Design", items: ["3-Factor, 2-Level Full Factorial design (8 trials).", "Factors: Temperature, Feedrate, Impeller Speed."], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Safety Warning", items: ["Limit temperature to 165°C to prevent pressure spikes.", "Verify cooling flow rates are at baseline targets."], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Auto-Design", desc: "Generate trial plans based on objectives automatically." },
        { title: "Safety Warnings", desc: "Flag potentially hazardous factor settings automatically." },
        { title: "Variable Selection", desc: "Identify process variables most likely to influence quality." },
        { title: "Trial Estimates", desc: "Estimate experiment runtimes and material costs." }
      ]
    },
    startWorkflow: {
      eyebrow: "FIELD CHECKS",
      title: "Log Trial Results",
      desc: "Step-by-step entry for operators to log parameter values and observations during trials.",
      cardTitle: "Record Trial Run",
      steps: [
        { step: "1", title: "Select Trial Run", desc: "Run #4: Temp 160°C, Speed 15m/s" },
        { step: "2", title: "Record Readings", desc: "Enter surface roughness: 0.12 microns" },
        { step: "3", title: "Verify Compliance", desc: "Confirm trial stayed within safety limits" }
      ],
      buttonText: "Save Trial Measurements",
      features: [
        { title: "Operator Guidance", desc: "Provide clear parameter instructions for each trial run." },
        { title: "Limit Checks", desc: "Flag and prevent out-of-safety-limit inputs." },
        { title: "Photo Attachments", desc: "Attach photos of trial components for records." },
        { title: "Offline Capture", desc: "Log trial measurements offline; sync once connected." }
      ]
    },
    reminders: {
      eyebrow: "EXPERIMENT SCHEDULES",
      title: "Trial Calendars",
      desc: "Plan and track experiment timelines and approvals to ensure trials are executed on schedule.",
      cardTitle: "DoE Trial Calendar",
      badgeText: "Due Today",
      stats: [
        { value: "14", label: "Planned DoEs", colorClass: "text-white" },
        { value: "12", label: "Approved", colorClass: "text-emerald-400" },
        { value: "2", label: "Due Review", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Today", title: "Extruder Temp Trial Run", details: "Line 4 Extruder • Run #5-8 • Operator check", time: "1:00 PM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Tomorrow", title: "Mixer Impeller Test", details: "Line 3 Mixer • Run #1-4 • Technician check", time: "9:00 AM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Schedule Alerts", desc: "Notify team members when trial schedules are reached." },
        { title: "Approvals Workflows", desc: "Collect manager sign-offs before commencing trials." },
        { title: "Material Planning", desc: "Coordinate raw material releases with trial schedules." },
        { title: "Calendar Views", desc: "View all scheduled trials in a unified planner." }
      ]
    },
    incidents: {
      eyebrow: "TRIAL ABNORMALITIES",
      title: "Trial Process Deviations",
      desc: "Log instances where trial runs exceed safety or quality limits, halting experiments.",
      cardTitle: "Trial Exception Log",
      ticketId: "DOE-ERR-02",
      titleText: "Trial Parameter Excursion",
      dateText: "Aug 13, 2026 • 11:45 AM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "168°C", label: "Excursion Value (Max 165)", colorClass: "text-rose-400" },
        { value: "Run 4", label: "Affected Run", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Core temperature spiked past safety limits during trial run #4. Trial immediately halted. Safe state verified.",
      features: [
        { title: "Safety Halts", desc: "Halt experiments immediately when safety thresholds are breached." },
        { title: "Deviation Logs", desc: "Record parameter histories leading up to anomalies." },
        { title: "Supervisor Alerts", desc: "Send anomaly reports to plant supervisors automatically." },
        { title: "CAPA Integration", desc: "Verify corrective actions are completed before restarting trials." }
      ]
    },
    rca: {
      eyebrow: "TRIAL ANALYSIS",
      title: "Trial Defect Analysis",
      desc: "Audit failed trials to identify root causes and optimize safety limits.",
      cardTitle: "Trial RCA File",
      ticketId: "RCA-DOE-02",
      stats: [
        { value: "1 Halted Run", label: "Scope", colorClass: "text-rose-400" },
        { value: "Sensor Drift", label: "Primary Cause", colorClass: "text-primary" },
        { value: "95%", label: "Confidence", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did temperature spike? → Heating controller stayed open too long.",
        "Why did it stay open? → Temperature sensor calibration drift caused low readings."
      ],
      features: [
        { title: "Fault Correlations", desc: "Analyze historical sensor readings to identify drifts." },
        { title: "5 Whys Logging", desc: "Log structural explanations next to trial records." },
        { title: "CAPA Workflows", desc: "Generate gauge calibration tasks directly from root causes." },
        { title: "Insight Archive", desc: "Search past RCA records to resolve similar process anomalies." }
      ]
    },
    types: {
      eyebrow: "EXPERIMENT RANGE",
      title: "Supported DoE Methods",
      desc: "Select from multiple design of experiment techniques depending on variable counts.",
      items: [
        { title: "Factorial Designs", desc: "Evaluate multiple variables and interactions simultaneously." },
        { title: "Response Surface Methods (RSM)", desc: "Optimize parameters by mapping multidimensional response curves." },
        { title: "Taguchi Methods", desc: "Optimize quality and stability under varying operating conditions." },
        { title: "Screening Designs", desc: "Identify key variables from hundreds of potential inputs." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION SYSTEM",
      title: "Connected DoE Pipeline",
      desc: "Connect experimental designs with active control plans, historians, and registers.",
      items: [
        { title: "Historian Data", desc: "Import trial parameter values from historian databases automatically." },
        { title: "Control Plans", desc: "Publish optimized setpoints to control plans automatically." },
        { title: "LIMS Platforms", desc: "Link trial runs directly with laboratory test results." },
        { title: "Asset Registry", desc: "Log trial histories and parameter levels against physical assets." }
      ]
    }
  },
  "live-dashboards": {
    slug: "live-dashboards",
    workflow: {
      eyebrow: "VISIBILITY FLOW",
      title: "6-Step Live Dashboard Deployment",
      desc: "Connect sources, map parameters, build views, set alert rules, mount screens, and monitor operations.",
      steps: [
        { num: 1, title: "Data Sources", subtitle: "Connect database links", desc: "Establish connections to PLC tags, CMMS databases, and quality logs." },
        { num: 2, title: "Parameter Mapping", subtitle: "Link variables", desc: "Map raw data to operational indicators (OEE, yield, downtime)." },
        { num: 3, title: "Dashboard Design", subtitle: "Configure screen layouts", desc: "Arrange layout widgets (gauges, charts, alerts) on a central board." },
        { num: 4, title: "Alert Thresholds", subtitle: "Configure warning limits", desc: "Set warning limits and notification targets for critical parameters." },
        { num: 5, title: "Screen Mounting", subtitle: "Deploy shopfloor displays", desc: "Mount display screens at lines and workstations for shift visibility." },
        { num: 6, title: "Live Operations", subtitle: "Real-time performance checks", desc: "Teams monitor live dashboards during shifts to recover performance." }
      ]
    },
    spotlight1: {
      eyebrow: "VISUAL OVERVIEW",
      title: "Interactive Shopfloor Boards",
      desc: "Give operations and maintenance teams a shared, real-time view of OEE, yield, and active alerts.",
      features: [
        { id: "sections", title: "Role-Based Layouts", desc: "Configure custom views for operators, supervisors, and managers." },
        { id: "types", title: "Live Widgets", desc: "Display trend charts, OEE gauges, and alert counters." },
        { id: "critical", title: "Breach Alarms", desc: "Flash dashboard screens and trigger alarms when parameters breach limits." },
        { id: "photo", title: "Multiple Feeds", desc: "Combine historian signals, quality records, and inventory data." },
        { id: "signature", title: "Shift Handovers", desc: "Sign off shift reports and note handovers directly on screens." },
        { id: "scoring", title: "KPI Calculations", desc: "Calculate OEE, yield, MTTR, and compliance scores continuously." }
      ],
      buttonText: "Design Live Board",
      card: {
        badge: "Live",
        templateLabel: "Dashboard Feed",
        itemsCount: "18 Widgets",
        title: "BOARD-2026: Line 4 Production Summary",
        metrics: [
          { value: "82.4%", label: "OEE Index", colorClass: "text-emerald-400" },
          { value: "98.2%", label: "Yield Rate", colorClass: "text-primary" },
          { value: "Active Alert", label: "Alarm Status", colorClass: "text-rose-400", highlightId: "critical" },
          { value: "1-Sec", label: "Refresh Rate", colorClass: "text-sky-400", highlightId: "photo" }
        ],
        section1: {
          num: 1,
          title: "Active Process Alarms",
          items: [
            { label: "Extruder Temp Warning (164°C)", badge: "Warning" },
            { label: "Feeder Queue Delay", badge: "Warning" },
            { label: "Hydraulic Oil Temp Normal", badge: "Normal" }
          ]
        },
        section2: {
          num: 2,
          title: "Monitored Video Feeds",
          items: [
            { label: "Line 4 entrance feed", hasPhoto: true },
            { label: "Line 4 packing station feed", hasPhoto: true }
          ]
        }
      }
    },
    aiSpotlight: {
      eyebrow: "SYNAPSE AI ENGINE",
      title: "AI Dashboard Builder",
      desc: "Create custom dashboard layouts and explain performance deviations using conversational English.",
      prompt: "Build an OEE overview dashboard for Line 4 and identify today's primary loss.",
      generatedTitle: "Dashboard Layout Generated",
      sections: [
        { title: "Generated Layout", items: ["OEE gauge widget.", "Downtime Pareto chart.", "Process temperature trend."], bgClass: "bg-purple-500/20", textClass: "text-purple-300" },
        { title: "Identified Primary Loss", items: ["Setup delays on product swaps account for 62% of loss today.", "Recommend SMED workflow review."], bgClass: "bg-emerald-500/20", textClass: "text-emerald-300" }
      ],
      features: [
        { title: "Conversational Layouts", desc: "Build and modify dashboards without writing code." },
        { title: "Anomaly Explainer", desc: "Get summaries of performance deviations on screens." },
        { title: "Loss Categorizations", desc: "Categorize downtime losses automatically based on historical logs." },
        { title: "Automated Reports", desc: "Compile daily performance summaries and email them to managers." }
      ]
    },
    startWorkflow: {
      eyebrow: "FIELD CHECKS",
      title: "Acknowledge Dashboard Alarm",
      desc: "Step-by-step guidance for operators to resolve and clear process alarms on active screens.",
      cardTitle: "Resolve Active Alarm",
      steps: [
        { step: "1", title: "Identify Alarm Source", desc: "Extruder Temperature Warning (164°C)" },
        { step: "2", title: "Input Correction", desc: "Acknowledge alarm and increase coolant flow rate by 5%" },
        { step: "3", title: "Verify Safe State", desc: "Verify temperature returned to 158°C baseline" }
      ],
      buttonText: "Resolve and Clear Alarm",
      features: [
        { title: "Touchscreen Optimization", desc: "Large buttons and layouts designed for gloved shopfloor operations." },
        { title: "LOTO Alerts", desc: "Display LOTO status prominently on screens." },
        { title: "Action Logging", desc: "Record operator actions and alarm clearance timelines." },
        { title: "Offline Sync", desc: "Buffer alarm events locally; sync when network is restored." }
      ]
    },
    reminders: {
      eyebrow: "VISIBILITY CHECKS",
      title: "Dashboard Audits",
      desc: "Schedule reviews to check indicator configurations and confirm dashboard metrics remain accurate.",
      cardTitle: "Verification Schedule",
      badgeText: "Due Today",
      stats: [
        { value: "18", label: "Dashboards", colorClass: "text-white" },
        { value: "15", label: "Verified", colorClass: "text-emerald-400" },
        { value: "3", label: "Due Review", colorClass: "text-rose-400" }
      ],
      schedule: [
        { tag: "Due Today", title: "OEE Calculation Audit", details: "Verify downtime categories against historian • Shift Team", time: "9:00 AM", tagColorClass: "bg-rose-500/20 text-rose-400" },
        { tag: "Scheduled", title: "Metric Mapping Review", details: "Review variable mappings after system update • Engineer-Led", time: "4:00 PM", tagColorClass: "bg-yellow-500/20 text-yellow-400" }
      ],
      features: [
        { title: "Accuracy Audits", desc: "Schedule quarterly audits of dashboard configurations." },
        { title: "Concept Drift Alerts", desc: "Flag metrics that drift from baseline calculations." },
        { title: "Verification Logs", desc: "Log verification details next to dashboard configuration files." },
        { title: "Interactive Planners", desc: "View all scheduled audits in a unified calendar view." }
      ]
    },
    incidents: {
      eyebrow: "COMMUNICATION LOG",
      title: "Operational Alerts",
      desc: "Log critical parameter limit breaches, alerting supervisors to operational issues.",
      cardTitle: "Active Alert Ticket",
      ticketId: "ALM-2026-08",
      titleText: "Process Parameter Breach",
      dateText: "Aug 13, 2026 • 11:47 AM",
      priorityBadge: "High Priority",
      metrics: [
        { value: "82.4% OEE", label: "Current Level (Target 85%)", colorClass: "text-rose-400" },
        { value: "15 min", label: "Alert Duration", colorClass: "text-yellow-400" }
      ],
      descriptionText: "Line 4 OEE index dropped below target (85%) for 15 consecutive minutes. Feeder queue delays flagged as primary bottleneck.",
      features: [
        { title: "Immediate SMS Alerts", desc: "Send automated text alerts to shift supervisors." },
        { title: "Roadblock Registers", desc: "Record operator comments and roadblock flags." },
        { title: "Telemetry Snapshots", desc: "Capture 60 minutes of parameter histories surrounding alerts." },
        { title: "Audit Trail Compliant", desc: "Log comments and clearance signatures in a secure registry." }
      ]
    },
    rca: {
      eyebrow: "PERFORMANCE TRACE",
      title: "OEE Loss Investigation",
      desc: "Investigate dashboard-flagged OEE losses, identify root causes, and log corrective actions.",
      cardTitle: "Performance RCA File",
      ticketId: "RCA-ALM-08",
      stats: [
        { value: "2.6% Loss", label: "OEE Impact", colorClass: "text-rose-400" },
        { value: "Feeder Jam", label: "Primary Cause", colorClass: "text-primary" },
        { value: "90%", label: "Confidence", colorClass: "text-sky-400" }
      ],
      whys: [
        "Why did OEE drop? → Feeder queue line jam.",
        "Why feeder jam? → Plate spacing adjustments were too tight for new SKU."
      ],
      features: [
        { title: "Downtime Trace", desc: "Link OEE losses to specific downtime events automatically." },
        { title: "5 Whys Logging", desc: "Log structural explanations next to dashboard timeline charts." },
        { title: "CAPA Workflows", desc: "Generate spacer adjustment tasks directly from root causes." },
        { title: "Insight Archive", desc: "Search past RCA records to resolve similar process anomalies." }
      ]
    },
    types: {
      eyebrow: "DASHBOARD VISUALS",
      title: "Supported Dashboard Widgets",
      desc: "Select from multiple visualization formats to display key performance indicators.",
      items: [
        { title: "OEE Gauge Panels", desc: "Display real-time availability, performance, and quality pillar scores." },
        { title: "Downtime Pareto Charts", desc: "Show active and historical downtime causes by duration." },
        { title: "Process Control Trend Lines", desc: "Monitor parameters and check limits in real-time." },
        { title: "Alert Boards", desc: "Keep active process alerts visible in a unified registry." }
      ]
    },
    modules: {
      eyebrow: "INTEGRATION SYSTEM",
      title: "Connected Operational Boards",
      desc: "Integrate live dashboards with plant historians, registries, and logs.",
      items: [
        { title: "Historian Data Links", desc: "Maintain real-time connections to OSIsoft PI and Honeywell databases." },
        { title: "CMMS Platforms", desc: "Sync active maintenance schedules and technician locations." },
        { title: "Quality Systems", desc: "Display control chart points and calibration states." },
        { title: "Shift Logs", desc: "Capture shift handovers next to dashboard timelines." }
      ]
    }
  }
};

// Fallback for slugs not yet fully specified - clones and adapts from inspection-management
export function getIndustrialExtraContent(slug: string): IndustrialPageExtraContent {
  if (industrialExtraContentData[slug]) {
    return industrialExtraContentData[slug];
  }
  
  // Clean fallback mapping derived from inspection-management structure
  const fallback = { ...industrialExtraContentData["inspection-management"] };
  fallback.slug = slug;
  
  // Format based on slug terms
  const titleName = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  fallback.spotlight1 = {
    ...fallback.spotlight1,
    title: `${titleName} Digital Center`,
    desc: `Replace paper forms and disconnected records with a digital hub for ${titleName.toLowerCase()} processes.`
  };
  
  return fallback;
}
