import { createClient } from "@supabase/supabase-js";
import { codes } from "./codes.js";

const supabaseKey = codes.map(c => c[c.length - 1]).join("");
const supabaseUrl = "https://jztfrntpyzrzgmrodyen.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);