import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.185.0/dotenv/mod.ts";

const envVars = await load();
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const dinosaurData: Prisma.DinosaurCreateInput[] = [
  {
    name: "ArchioBidet",
    description: "Last stage of humanity",
  },
  {
    name: "StregoVonLayen",
    description: "Last stage of humanity",
  },
  {
    name: "TirannoBobGater",
    description: "Last stage of humanity",
  },
  {
    name: "Boorellisaurus",
    description: "Last stage of humanity",
  },
];

for (const d of dinosaurData) {
  const dinosaur = await prisma.dinosaur.create({ data: d });
  console.log(`🚀 -> Created dinosaur with ID: ${dinosaur.id}`);
}

console.log("Seeding finished 🍓");

await prisma.$disconnect();
