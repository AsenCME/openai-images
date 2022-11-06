import { createSignal } from "solid-js";

export default function Prompt() {
  const [prompt, setPrompt] = createSignal("Solid");
  return <div>Hello from {prompt()}!</div>;
}
