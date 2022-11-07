import { createMemo } from "solid-js";

interface Props {
  data: any[];
}
export default function TodaySummary({ data }: Props) {
  const total = createMemo(() =>
    data.reduce((cum, cur) => cum + cur.amount, 0)
  );
  return (
    <div class="mt-4">
      <div class="flex flex-col">
        <h6 class="font-bold tracking-widest text-gray-600">
          Total spent today
        </h6>
        <h1 class="font-bold text-4xl">{total()}</h1>
      </div>
      <div class="flex flex-col gap-4 mt-4">
        {data.map((x) => (
          <div class="p-4 rounded bg-gray-100 flex justify-between">
            <div class="flex flex-col items-start gap-2">
              <div class="bg-gray-300 px-2 py-1 rounded-full font-bold text-sm">
                {x.category}
              </div>
              <div class="max-w-md">{x.description}</div>
            </div>
            <div>
              <div>{x.source}</div>
              <div class="font-bold text-xl">{x.amount}</div>
              <div class="text-gray-600 tracking-wide">{x.time_created}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
