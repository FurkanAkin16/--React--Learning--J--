import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://exdxwthyoxugrqurppic.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4ZHh3dGh5b3h1Z3JxdXJwcGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4NzQyMDUsImV4cCI6MjAwNjQ1MDIwNX0.7FWCA38B_L9vaepJi75qhBGziWXB2LURp5FaZM5B7Pg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
