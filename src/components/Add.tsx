import { createSignal } from "solid-js";

export default function Add() {
  const [more, setMore] = createSignal(false);
  return (
    <div class="flex flex-col md:flex-row w-full gap-4 justify-between items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div>
          <div>Description</div>
          <input type="text" />
        </div>
        <div>
          <div>Amount</div>
          <input type="text" />
        </div>
        {more() ? (
          <>
            <div>
              <div>Currency</div>
              <select>
                <option value="BGN">BGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div>
              <div>Source</div>
              <select>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </div>
            <div>
              <div>Account</div>
              <select>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>
          </>
        ) : null}

        <div
          class="col-span-2 flex gap-2 items-center cursor-pointer hoverable bg-gray-200 justify-center mt-2 p-2 rounded"
          onClick={() => setMore(!more())}
        >
          <div class="text-gray-600 font-bold">
            Show {more() ? "less" : "more"}
          </div>
        </div>
      </div>
      <div class="px-4 py-2 rounded bg-lime-800 hoverable">
        <span class="font-bold text-white">add</span>
      </div>
    </div>
  );
}
