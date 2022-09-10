import { supabase } from "../../Utils/SupabaseClient";

export default function handler(req, res) {
    supabase.auth.api.setAuthCookie(req, res);
}
