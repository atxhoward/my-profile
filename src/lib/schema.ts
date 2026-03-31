import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  shortName: text("short_name").notNull(),
  role: text("role").notNull(),
  heroIntro: text("hero_intro").notNull(),
  aboutBody: text("about_body").notNull(),
  architectureIntro: text("architecture_intro").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const experienceEntries = pgTable("experience_entries", {
  id: serial("id").primaryKey(),
  orderIndex: integer("order_index").notNull(),
  dateRange: text("date_range").notNull(),
  title: text("title").notNull(),
  bullets: text("bullets").array().notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  orderIndex: integer("order_index").notNull(),
  dateRange: text("date_range").notNull(),
  title: text("title").notNull(),
  school: text("school").notNull(),
  bullets: text("bullets").array().notNull(),
});

export const skillGroups = pgTable("skill_groups", {
  id: serial("id").primaryKey(),
  orderIndex: integer("order_index").notNull(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  groupId: integer("group_id")
    .notNull()
    .references(() => skillGroups.id, { onDelete: "cascade" }),
  orderIndex: integer("order_index").notNull(),
  label: text("label").notNull(),
});

export const highlights = pgTable("highlights", {
  id: serial("id").primaryKey(),
  orderIndex: integer("order_index").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

export const siteMeta = pgTable("site_meta", {
  id: serial("id").primaryKey(),
  navLabel: text("nav_label").notNull().default("EDA"),
  aboutImagePath: text("about_image_path").notNull().default("/profile-placeholder.svg"),
  includeFooter: boolean("include_footer").notNull().default(true),
});
