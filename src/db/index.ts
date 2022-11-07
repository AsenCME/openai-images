import { createClient, SupabaseClient } from "@supabase/supabase-js";

export const getClient = async (key) => {
  return createClient("https://ffuhrsttsgpivjbywouf.supabase.co", key);
};

export const getToday = async (client: SupabaseClient<any, "public", any>) => {
  const { data, error } = await client.from("today").select("*");
  if (error) {
    console.log("There was an error", error);
    return null;
  }
  return data;
};
