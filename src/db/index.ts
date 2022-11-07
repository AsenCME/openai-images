import { createClient, SupabaseClient } from "@supabase/supabase-js";
export type Client = SupabaseClient<any, "public", any>;

export const getClient = async (key) => {
  return createClient("https://ffuhrsttsgpivjbywouf.supabase.co", key);
};

export const getToday = async (client: Client) => {
  const { data, error } = await client.from("today").select("*");
  if (error) {
    console.log("There was an error", error);
    return null;
  }
  return data;
};

export type AddTodayData = {
  description: string;
  amount: number;
  currency: "BGN" | "USD" | "EUR";
  source: "cash" | "card";
  account: "personal" | "business";
};
export const addEntryToday = async (client: Client, data: AddTodayData) => {
  try {
    const { error } = await client.from("expense").insert(data);
    if (error) return error.message;
    return null;
  } catch (error) {
    return JSON.stringify(error);
  }
};
