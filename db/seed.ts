import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import { education, experienceEntries, highlights, profile, siteMeta, skillGroups, skills } from "../src/lib/schema";
import { resumeData } from "../src/lib/resume-data";

for (const envFile of [".env.local", ".env"]) {
  const envPath = path.resolve(process.cwd(), envFile);
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    break;
  }
}

async function seed() {
  const { db } = await import("../src/lib/db");

  if (!db) {
    throw new Error("DATABASE_URL is required to run db/seed.ts");
  }

  await db.delete(skills);
  await db.delete(skillGroups);
  await db.delete(highlights);
  await db.delete(education);
  await db.delete(experienceEntries);
  await db.delete(siteMeta);
  await db.delete(profile);

  await db.insert(profile).values(resumeData.profile);

  await db.insert(siteMeta).values(resumeData.siteMeta);

  await db.insert(experienceEntries).values(resumeData.experience);

  await db.insert(education).values(resumeData.education);

  const insertedGroups = await db
    .insert(skillGroups)
    .values(
      resumeData.skillGroups.map((group) => ({
        orderIndex: group.orderIndex,
        name: group.name,
        icon: group.icon,
      }))
    )
    .returning();

  const skillsByGroupName = new Map(
    resumeData.skillGroups.map((group) => [group.name, group.skills])
  );
  const insertedGroupsByName = new Map(insertedGroups.map((g) => [g.name, g]));

  const allSkillsToInsert: Array<{
    groupId: number;
    orderIndex: number;
    label: string;
  }> = [];

  for (const [groupName, skillsList] of skillsByGroupName) {
    const groupId = insertedGroupsByName.get(groupName)?.id;
    if (!groupId) {
      throw new Error(`Missing skill group: ${groupName}`);
    }
    for (const skill of skillsList) {
      allSkillsToInsert.push({
        groupId,
        orderIndex: skill.orderIndex,
        label: skill.label,
      });
    }
  }

  await db.insert(skills).values(allSkillsToInsert);

  await db.insert(highlights).values(resumeData.highlights);
}

seed()
  .then(() => {
    console.log("Seed completed.");
  })
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  });
