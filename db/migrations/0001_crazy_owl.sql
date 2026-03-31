CREATE TABLE "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_index" integer NOT NULL,
	"date_range" text NOT NULL,
	"title" text NOT NULL,
	"school" text NOT NULL,
	"bullets" text[] NOT NULL
);
