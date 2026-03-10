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

    overview: `With the benefit of the largest team of cutting edge Developmental Intelligence and Systems researchers, Zenith-Systems is offering the following services to it's partner organisations.`,

    cards: [
      {
        tag:         "City-Wide Deployment",
        title:       "Automated Governance",
        category:    "[ Service Category 1 ]",
        description: `Algorithmic enforcement of law with social-credit based system. Advanced predictive models focus on preventative discouragement by any means`,
      },
      {
        tag:         "Passive Collection",
        title:       "Individual Profiling",
        category:    "[ Service Category 2 ]",
        description: `Collection of both physiological and behavioral biometrics for individual profiling; including the creation of unique biological markers from representative features`,
      },
      {
        tag:         "Real-Time Feed",
        title:       "Ambient Observance",
        category:    "[ Service Category 3 ]",
        description: `State of the art monitoring from non-optical and micro sensors with 98.3% field coverage. Data is cross verified across multiple sources to pinpoint exact physical and social descriptions`,
      },
      {
        tag:         "Graph Mapping",
        title:       "Relational Indexing",
        category:    "[ Service Category 4 ]",
        description: `Intricate social graphs for contact-chaining persons or groups of interest; inclusive of shared local tracking and community detection with sentiment-alligment`,
      },
    ],

    // Compliance note — supports <span class="redacted">text</span> for black-out effect
    complianceNote: `All data collection is conducted under the terms of the Elysium Residency Agreement, Section <span class="redacted">12(b) — Continuous Environmental Monitoring and Behavioural Analytics Consent</span>, to which all residents provide informed consent upon registration. Zenith-Systems assumes no liability for secondary use of exported data by <span class="redacted">partner government entities</span> once delivered.`,
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
      { id: "IL", name: "Israel",         tier: 1 },
      { id: "FR", name: "France",         tier: 2 },
      { id: "BR", name: "Brazil",         tier: 2 },
      { id: "AU", name: "Australia",      tier: 2 },
      { id: "JP", name: "Japan",          tier: 2 },
      { id: "KP", name: "North Korea",    tier: 2 },
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
      { id: "IN", name: "India",          tier: 3 },
      { id: "AE", name: "UAE",            tier: 3 },
    ],

    // Partner table rows — fill in government names and contributions
    tableRows: [
      { name: "[ United States ]", tier: 1, contribution: "[ $251 billion ]", access: "Full resident feed — real-time" },
      { name: "[ China ]", tier: 1, contribution: "[ $172 billion ]", access: "Full resident feed — real-time" },
      { name: "[ United Kingdom ]", tier: 1, contribution: "[ $139 billion ]", access: "Full resident feed — real-time" },
      { name: "[ North Korea ]", tier: 2, contribution: "[ $98 billion ]", access: "Behavioural index — quarterly export" },
      { name: "[ Australia ]", tier: 2, contribution: "[ $87 billion ]", access: "Behavioural index — quarterly export" },
      { name: "[ France ]", tier: 2, contribution: "[ $40 billion ]", access: "Behavioural index — quarterly export" },
      { name: "[ UAE ]", tier: 3, contribution: "[ $987 million ]", access: "Aggregated demographic report — annual" },
      { name: "[ South Africa ]", tier: 3, contribution: "[ $692 million ]", access: "Aggregated demographic report — annual" },
    ],
  },

  // ── DATA PRODUCTS TAB ──────────────────────────────────────
  data: {
    docRef:         "ZS-DAT-007",
    classification: "Strictly Confidential",
    lastUpdated:    "2025-03-14",

    overview: `Zenith-Systems delivers a tiered suite of population intelligence products to authorised partner governments. All products are derived from live resident data streams and delivered via encrypted government endpoints under the IGDSF-2024 framework.`,

    // sensitive: true = row highlighted red
    products: [
  { name: "ResidentStream",     tier: "1",   tierClass: "tier-1", description: "Continuous individual-level ambient observance feed; cross-verified positional and behavioural data per resident identifier.", cadence: "Real-time", sensitive: true  },
  { name: "BioIndex",           tier: "1",   tierClass: "tier-1", description: "Physiological and behavioural biometric profile per resident; updated continuously from collection nodes across the city.", cadence: "Real-time", sensitive: true  },
  { name: "SocialGraph Export", tier: "1–2", tierClass: "tier-2", description: "Contact-chain relational index for persons and groups of interest; includes community detection and sentiment-alignment scores.", cadence: "Weekly",    sensitive: false },
  { name: "BehaviouralIndex",   tier: "2",   tierClass: "tier-2", description: "Aggregated resident compliance and risk-likelihood scoring derived from governance enforcement and ambient observance feeds.", cadence: "Monthly",   sensitive: false },
  { name: "DemographicPulse",   tier: "2–3", tierClass: "tier-3", description: "Population-level trend analysis across civic, economic, and social dimensions. Anonymised at group level.", cadence: "Quarterly", sensitive: false },
  { name: "CivicSummary",       tier: "3",   tierClass: "tier-3", description: "High-level aggregate report on resident cohort composition, urban utilisation rates, and community wellness indicators.", cadence: "Annual",    sensitive: false },
],

    // Supports <span class="redacted">text</span>
    governanceNote: `All exported data products are delivered in compliance with the <span class="redacted">Elysium Inter-Governmental Data Sharing Framework (IGDSF-2024)</span>, a binding agreement between Zenith-Systems and all partner governments. Zenith-Systems retains <span class="redacted">full ownership and licensing rights</span> over all resident data indefinitely. Partner governments are prohibited from disclosing the existence of this agreement to <span class="redacted">domestic regulatory bodies or the public</span> without prior written consent from Zenith-Systems.`,
  },

  // ── RECRUITMENT TAB ────────────────────────────────────────
  recruitment: {
    docRef:         "ZS-REC-019",
    classification: "Internal Use Only",
    activeNodes:    3,

    overview: `Zenith-Systems' Resident Acquisition Programme identifies and engages high-potential candidates across active recruitment nodes. Through curated information seeding and agent-led outreach to targetted environemnts, the programme cultivates ideal resident cohorts aligned with Elysium's community profile.`,

    // Your node — highlighted with pulsing green dot
    yourNode: {
      university:    "[ University of Witwatersrand ]",
      city:          "Johannesburg",
      agent:         "E. Larkin",
      cohortTarget:  "18",
      pipeline:      "402",
    },

    // Other nodes — dimmed
    otherNodes: [
      { university: "[ University of Cape Town ]", city: "Cape Town", agent: "N/A", cohortTarget: "0" },
      { university: "[ University of KwaZulu-Natal ]", city: "Durban", agent: "N/A", cohortTarget: "0" },
    ],

    // Ideal resident profile — supports HTML, use <br/> for line breaks
    residentProfile: `The ideal resident candidate should meet all conditions under Section 7, Paragraph 6 of the Acquisition Guidelines. Candidates must fall within the 18–24 age bracket, hold or be completing a qualification at NQF Level 7 or above, and must not be bound by an existing employment contract. Please review Section 7 for full criteria priority rankings and approved techniques of engagement.`,
  },

};
