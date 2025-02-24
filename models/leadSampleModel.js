const mongoose = require("mongoose");

// Define the user schema.
const leadSampleSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: false
    },
    
    sheet_created_at: {
      type: Date,
      default:Date.now,
      required: false 
    },

   
    name: {
        type: String,
        required: false
    },
    short_description: {
        type: String,
        required: false
    },
    semrush_global_rank: {
        type: Number,
        required: false,
        default: null
    },
    semrush_visits_latest_month: {
        type: Number,
        required: false,
        default: null
    },
    num_investors: {
        type: Number,
        required: false,
        default: null
    },
    funding_total: {
        type: Number,
        required: false,
        default: null
    },
    num_exits: {
        type: String,
        required: false,
        default: null
    },
    num_funding_rounds: {
        type: String,
        required: false,
        default: null
    },
    last_funding_type: {
        type: String,
        required: false
    },
    last_funding_at: {
        type: Date,
        required: false,
        default: null
    },
    num_acquisitions: {
        type: String,
        required: false,
        default: null
    },
    apptopia_total_apps: {
        type: Number,
        required: false,
        default: null
    },
    apptopia_total_downloads: {
        type: Number,
        required: false,
        default: null
    },
    contact_email: { type: String, default: "" },
    
    phone_number: {
      type: String,
      required: false
    },
    facebook: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    twitter: { type: String, default: "" },
   
    num_investments: {
        type: String,
        required: false
    },
    num_lead_investments: {
        type: String,
        required: false,
        default: null
    },
    num_lead_investors: {
        type: String,
        required: false,
        default: null
    },
    listed_stock_symbol: {
        type: String,
        required: false
    },
    company_type: {
        type: String,
        required: false
    },
    hub_tags: {
        type: Number,
        required: false
    },
    operating_status: {
        type: String,
        required: false
    },
    founded_on: {
        type: Date,
        required: false,
        default: null
    },
    categories: {
        type: String,
        required: false
    },
    founders: {
        type: String,
        required: false
    },
    website: { type: String, default: "" },
   
    ipo_status: {
        type: String,
        required: false
    },
    num_employees_enum: {
        type: String,
        required: false
    },
    locations: {
        type: String,
        required: false
    },
    growth_insight_description: {
        type: String,
        required: false
    },
    growth_insight_indicator: {
        type: String,
        required: false
    },
    growth_insight_direction: {
        type: String,
        required: false
    },
    growth_insight_confidence: {
        type: String,
        required: false
    },
    investor_insight_description: {
        type: String,
        required: false
    },
    permalink: {
        type: String,
        required: false
    },

    url: { type: String, default: "" }


    
},
{ timestamps: true }

);

const LeadSample = mongoose.model("leadSamples", leadSampleSchema);

module.exports = LeadSample;
