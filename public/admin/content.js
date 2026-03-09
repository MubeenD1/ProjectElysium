// ============================================================
//  ADMIN PORTAL — CONTENT
//  Edit everything in this file. Do not touch index.html.
// ============================================================

const CONTENT = {

  // ── LOGIN ──────────────────────────────────────────────────
  login: {
    title:    "Internal Portal",
    subtitle: "Restricted access. Authorised personnel only.",
    username: "e.larkin",   // credentials (not shown to user)
    password: "A17-KL3",
  },

  // ── NAV ────────────────────────────────────────────────────
  nav: {
    loggedInAs:  "e.larkin",
    clearance:   "Level 2",
  },

  // ── SERVICES TAB ───────────────────────────────────────────
  services: {
    docRef:         "ZS-SVC-004",
    classification: "Partner Confidential",
    lastUpdated:    "2025-03-14",

    overview: `[ 2–3 sentences describing Elysium's integrated services in clean corporate language. Frame it as smart city infrastructure. ]`,

    cards: [
      {
        tag:         "City-Wide Deployment",
        title:       "[ Service Name ]",
        category:    "[ Service Category 1 ]",
        description: `[ Description. Sounds like urban efficiency tech. Actually describes passive surveillance of movement and behaviour. ]`,
      },
      {
        tag:         "Passive Collection",
        title:       "[ Service Name ]",
        category:    "[ Service Category 2 ]",
        description: `[ Description. Sounds like community wellness. Actually describes biometric data collection and profiling. ]`,
      },
      {
        tag:         "Real-Time Feed",
        title:       "[ Service Name ]",
        category:    "[ Service Category 3 ]",
        description: `[ Description. Sounds like transit optimisation. Actually describes real-time location tracking of all residents. ]`,
      },
      {
        tag:         "Graph Mapping",
        title:       "[ Service Name ]",
        category:    "[ Service Category 4 ]",
        description: `[ Description. Sounds like civic engagement. Actually describes social graph mapping and relationship monitoring. ]`,
      },
    ],

    // Compliance note — supports <span class="redacted">text</span> for black-out effect
    complianceNote: `All data collection is conducted under the terms of the Elysium Residency Agreement, Section <span class="redacted">12(b) — Continuous Environmental Monitoring and Behavioural Analytics Consent</span>, to which all residents provide informed consent upon registration. Zenith Systems assumes no liability for secondary use of exported data by <span class="redacted">partner government entities</span> once delivered.`,
  },

  // ── PARTNERS TAB ───────────────────────────────────────────
  partners: {
    docRef:         "ZS-PTR-011",
    classification: "Strictly Confidential",
    activePartners: 27,

    // ISO 3166-1 alpha-2 codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    // tier 1 = full resident feed | tier 2 = behavioural index | tier 3 = aggregated reports
    countries: [
      { id: "US", name: "United States",  tier: 1 },
      { id: "GB", name: "United Kingdom", tier: 1 },
      { id: "CN", name: "China",          tier: 1 },
      { id: "DE", name: "Germany",        tier: 1 },
      { id: "IN", name: "India",          tier: 1 },
      { id: "FR", name: "France",         tier: 2 },
      { id: "BR", name: "Brazil",         tier: 2 },
      { id: "AU", name: "Australia",      tier: 2 },
      { id: "JP", name: "Japan",          tier: 2 },
      { id: "KR", name: "South Korea",    tier: 2 },
      { id: "ZA", name: "South Africa",   tier: 2 },
      { id: "CA", name: "Canada",         tier: 2 },
      { id: "SG", name: "Singapore",      tier: 2 },
      { id: "MX", name: "Mexico",         tier: 3 },
      { id: "NG", name: "Nigeria",        tier: 3 },
      { id: "PK", name: "Pakistan",       tier: 3 },
      { id: "EG", name: "Egypt",          tier: 3 },
      { id: "AR", name: "Argentina",      tier: 3 },
      { id: "SE", name: "Sweden",         tier: 3 },
      { id: "NL", name: "Netherlands",    tier: 3 },
      { id: "NO", name: "Norway",         tier: 3 },
      { id: "TH", name: "Thailand",       tier: 3 },
      { id: "PH", name: "Philippines",    tier: 3 },
      { id: "ID", name: "Indonesia",      tier: 3 },
      { id: "TR", name: "Turkey",         tier: 3 },
      { id: "IL", name: "Israel",         tier: 3 },
      { id: "AE", name: "UAE",            tier: 3 },
    ],

    // Partner table rows — fill in government names and contributions
    tableRows: [
      { name: "[ Government Name ]", tier: 1, contribution: "[ $XX billion ]", access: "Full resident feed — real-time" },
      { name: "[ Government Name ]", tier: 1, contribution: "[ $XX billion ]", access: "Full resident feed — real-time" },
      { name: "[ Government Name ]", tier: 1, contribution: "[ $XX billion ]", access: "Full resident feed — real-time" },
      { name: "[ Government Name ]", tier: 2, contribution: "[ $XX billion ]", access: "Behavioural index — quarterly export" },
      { name: "[ Government Name ]", tier: 2, contribution: "[ $XX billion ]", access: "Behavioural index — quarterly export" },
      { name: "[ Government Name ]", tier: 2, contribution: "[ $XX billion ]", access: "Behavioural index — quarterly export" },
      { name: "[ Government Name ]", tier: 3, contribution: "[ $XX million ]", access: "Aggregated demographic report — annual" },
      { name: "[ Government Name ]", tier: 3, contribution: "[ $XX million ]", access: "Aggregated demographic report — annual" },
    ],
  },

  // ── DATA PRODUCTS TAB ──────────────────────────────────────
  data: {
    docRef:         "ZS-DAT-007",
    classification: "Strictly Confidential",
    lastUpdated:    "2025-03-14",

    overview: `[ 1–2 sentences. Describe in cold corporate language what Zenith is selling to governments. Frame it as "population insights" or "civic intelligence." ]`,

    // sensitive: true = row highlighted red
    products: [
      { name: "[ Product Name ]", tier: "1",   tierClass: "tier-1", description: "[ Sounds like analytics. Actually individual-level tracking data. ]",          cadence: "Real-time", sensitive: true  },
      { name: "[ Product Name ]", tier: "1",   tierClass: "tier-1", description: "[ Biometric or behavioural scoring described as \"wellness metrics.\" ]",       cadence: "Real-time", sensitive: true  },
      { name: "[ Product Name ]", tier: "1–2", tierClass: "tier-2", description: "[ Social network mapping described as \"community engagement data.\" ]",        cadence: "Weekly",    sensitive: false },
      { name: "[ Product Name ]", tier: "2",   tierClass: "tier-2", description: "[ Predictive profiling described as \"resident lifecycle modelling.\" ]",       cadence: "Monthly",   sensitive: false },
      { name: "[ Product Name ]", tier: "2–3", tierClass: "tier-3", description: "[ Aggregated population data, demographic trends. ]",                          cadence: "Quarterly", sensitive: false },
      { name: "[ Product Name ]", tier: "3",   tierClass: "tier-3", description: "[ High level summary report. Least invasive tier. ]",                          cadence: "Annual",    sensitive: false },
    ],

    // Supports <span class="redacted">text</span>
    governanceNote: `All exported data products are delivered in compliance with the <span class="redacted">Elysium Inter-Governmental Data Sharing Framework (IGDSF-2024)</span>, a binding agreement between Zenith Systems and all partner governments. Zenith Systems retains <span class="redacted">full ownership and licensing rights</span> over all resident data indefinitely. Partner governments are prohibited from disclosing the existence of this agreement to <span class="redacted">domestic regulatory bodies or the public</span> without prior written consent from Zenith Systems.`,
  },

  // ── RECRUITMENT TAB ────────────────────────────────────────
  recruitment: {
    docRef:         "ZS-REC-019",
    classification: "Internal Use Only",
    activeNodes:    3,

    overview: `[ 2–3 sentences. Describe the recruitment programme in HR language. "Talent acquisition," "curated resident cohorts," "ideal community profile." Make it clear they are specifically targeting young educated people from universities. ]`,

    // Your node — highlighted with pulsing green dot
    yourNode: {
      university:    "[ Your University Name ]",
      city:          "[ Your City ]",
      agent:         "E. Larkin",
      cohortTarget:  "[ XX ]",
      pipeline:      "[ XX ]",
    },

    // Other nodes — dimmed
    otherNodes: [
      { university: "[ University Name ]", city: "[ City ]", agent: "[ Name ]", cohortTarget: "[ XX ]" },
      { university: "[ University Name ]", city: "[ City ]", agent: "[ Name ]", cohortTarget: "[ XX ]" },
    ],

    // Ideal resident profile — supports HTML, use <br/> for line breaks
    residentProfile: `[ Bullet list of "ideal resident" criteria written in HR language. Age range, education level, employment sector. Hidden between these normal criteria should be one or two lines that imply psychological profiling or compliance likelihood scoring. ]`,
  },

};
