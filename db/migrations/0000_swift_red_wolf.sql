CREATE TABLE "experience_entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_index" integer NOT NULL,
	"date_range" text NOT NULL,
	"title" text NOT NULL,
	"bullets" text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE "highlights" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_index" integer NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"short_name" text NOT NULL,
	"role" text NOT NULL,
	"hero_intro" text NOT NULL,
	"about_body" text NOT NULL,
	"architecture_intro" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "site_meta" (
	"id" serial PRIMARY KEY NOT NULL,
	"nav_label" text DEFAULT 'EDA' NOT NULL,
	"about_image_path" text DEFAULT '/profile-placeholder.svg' NOT NULL,
	"include_footer" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skill_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_index" integer NOT NULL,
	"name" text NOT NULL,
	"icon" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"group_id" integer NOT NULL,
	"order_index" integer NOT NULL,
	"label" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "skills" ADD CONSTRAINT "skills_group_id_skill_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."skill_groups"("id") ON DELETE cascade ON UPDATE no action;