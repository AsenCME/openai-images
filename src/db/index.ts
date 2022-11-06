import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { getTodaySpan } from "./utils";

export const getClient = async (key) => {
  return createClient("https://ffuhrsttsgpivjbywouf.supabase.co", key);
};

export const getToday = async (client: SupabaseClient<any, "public", any>) => {
  const { start, end } = getTodaySpan();
  const { data, error } = await client
    .from("expense")
    .select("*")
    .gte("created_at", start)
    .lte("created_at", end);
  if (error) {
    console.log("There was an error", error);
    return null;
  }
  return data;
};
