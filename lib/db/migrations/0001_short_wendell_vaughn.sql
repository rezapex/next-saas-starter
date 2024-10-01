-- First, add the new columns with nullable constraint
ALTER TABLE "users" ADD COLUMN "first_name" varchar(50);
ALTER TABLE "users" ADD COLUMN "last_name" varchar(50);

-- Update existing rows with default values
UPDATE "users" SET "first_name" = 'Default', "last_name" = 'User' WHERE "first_name" IS NULL;

-- Now make the columns NOT NULL
ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL;
ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL;

-- Rename the existing 'name' column to 'full_name' (optional, you can drop it if not needed)
ALTER TABLE "users" RENAME COLUMN "name" TO "full_name";

-- Create the posts table
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text,
	"author_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

-- Add foreign key constraint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
