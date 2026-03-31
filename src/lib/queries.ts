import { asc } from "drizzle-orm";
import { db } from "@/lib/db";
import { education, experienceEntries, highlights, skillGroups, skills } from "@/lib/schema";
import { resumeData } from "@/lib/resume-data";

const fallbackProfile = {
  id: 1,
  ...resumeData.profile,
  createdAt: new Date(),
};

const fallbackMeta = {
  id: 1,
  ...resumeData.siteMeta,
};

const fallbackExperience = resumeData.experience.map((exp, i) => ({
  id: i + 1,
  ...exp,
}));

const fallbackEducation = resumeData.education.map((edu, i) => ({
  id: i + 1,
  ...edu,
}));

const fallbackSkillGroups = resumeData.skillGroups.map((group, groupIdx) => ({
  id: groupIdx + 1,
  ...group,
  skills: group.skills.map((skill, skillIdx) => ({
    id: (groupIdx + 1) * 10 + skillIdx + 1,
    groupId: groupIdx + 1,
    ...skill,
  })),
}));

const fallbackHighlights = resumeData.highlights.map((h, i) => ({
  id: i + 1,
  ...h,
}));

export async function getProfile() {
  if (!db) return fallbackProfile;
  return db.query.profile.findFirst();
}

export async function getSiteMeta() {
  if (!db) return fallbackMeta;
  return db.query.siteMeta.findFirst();
}

export async function getExperienceEntries() {
  if (!db) return fallbackExperience;

  return db.select().from(experienceEntries).orderBy(asc(experienceEntries.orderIndex));
}

export async function getEducationEntries() {
  if (!db) return fallbackEducation;

  return db.select().from(education).orderBy(asc(education.orderIndex));
}

export async function getSkillGroupsWithSkills() {
  if (!db) return fallbackSkillGroups;

  const groups = await db.select().from(skillGroups).orderBy(asc(skillGroups.orderIndex));
  const allSkills = await db.select().from(skills).orderBy(asc(skills.orderIndex));

  return groups.map((group) => ({
    ...group,
    skills: allSkills.filter((item) => item.groupId === group.id),
  }));
}

export async function getHighlights() {
  if (!db) return fallbackHighlights;

  return db.select().from(highlights).orderBy(asc(highlights.orderIndex));
}
