import * as remeda from "jsr:@remeda/remeda";

type Instruction = {
  direction: "L" | "R";
  steps: number;
};

type Result = {
  value: number;
  loops: number;
};

function parseInstruction(input: string): Instruction {
  return {
    direction: input.charAt(0) as "L" | "R",
    steps: parseInt(input.slice(1)),
  };
}

function performInstruction(instruction: Instruction, value: number): Result {
  // TODO
}

if (import.meta.main) {
  const fileContent = await Deno.readTextFile("input.txt");
  const input = new TextDecoder().decode(fileContent).trim();
  const lines = input.split("\n");
  const instructions = lines.map(parseInstruction);

  const results: Result[] = [{ value: 50, loops: 0 }];
  for (const instruction of instructions) {
    const { value, loops } = performInstruction(
      instruction,
      results[results.length - 1].value,
    );
    results.push({ value, loops });
  }
}
