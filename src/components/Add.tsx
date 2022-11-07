import { createSignal } from "solid-js";
import { addEntryToday, AddTodayData, Client } from "../db";

export default function Add({ dbClient }: { dbClient: Client }) {
  const [form, setForm] = createSignal<AddTodayData>({
    description: "",
    amount: 0,
    currency: "BGN",
    source: "cash",
    account: "personal",
  });
  const [more, setMore] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const add = async () => {
    setLoading(true);
    await addEntryToday(dbClient, form());
    setLoading(false);
  };

  return (
    <div class="flex flex-col w-full gap-4 max-w-xl mx-auto">
      <div
        class="px-4 py-2 rounded bg-lime-800 hoverable text-center"
        onClick={add}
      >
        <span class="font-bold text-white">add</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-1 last:col-span-2">
        <div>
          <div>Description</div>
          <input
            type="text"
            value={form().description}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                description: e.currentTarget.value,
              }))
            }
          />
        </div>
        <div>
          <div>Amount</div>
          <input
            type="number"
            value={form().amount}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                amount: Number(e.currentTarget.value),
              }))
            }
          />
        </div>
        {more() ? (
          <>
            <div>
              <div>Currency</div>
              <select
                value={form().currency}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    currency: e.currentTarget.value as any,
                  }))
                }
              >
                <option value="BGN">BGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div>
              <div>Source</div>
              <select
                value={form().source}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    source: e.currentTarget.value as any,
                  }))
                }
              >
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </div>
            <div>
              <div>Account</div>
              <select
                value={form().account}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    account: e.currentTarget.value as any,
                  }))
                }
              >
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>
          </>
        ) : null}
      </div>

      {loading() ? (
        <div>Loading...</div>
      ) : (
        <div
          class="col-span-2 flex gap-2 items-center cursor-pointer hoverable bg-gray-200 justify-center mt-2 p-2 rounded"
          onClick={() => setMore(!more())}
        >
          <div class="text-gray-600 font-bold">
            Show {more() ? "less" : "more"}
          </div>
        </div>
      )}
    </div>
  );
}
