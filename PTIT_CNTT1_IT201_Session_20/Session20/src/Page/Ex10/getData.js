"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
var codes_1 = require("./codes");
var supabaseKey = codes_1.codes.map(function (c) { return c[c.length - 1]; }).join("");
var supabaseUrl = "https://jztfrntpyzrzgmrodyen.supabase.co";
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
