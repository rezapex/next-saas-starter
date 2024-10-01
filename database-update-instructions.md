# Database Update Instructions

Follow these steps to update your existing database schema and run your development environment:

1. **Generate migration files**
   Run the following command to generate new migration files based on your schema changes:
   ```
   pnpm run db:generate
   ```
   This will create new migration files in the `lib/db/migrations` directory.

2. **Review migration files**
   Check the generated migration files in `lib/db/migrations` to ensure they contain the expected changes.

3. **Apply migrations**
   Run the following command to apply the new migrations to your database:
   ```
   pnpm run db:migrate
   ```
   This will update your database schema according to the new migration files.

4. **Verify changes using Drizzle Studio**
   Run Drizzle Studio to inspect your database schema and data:
   ```
   pnpm run db:studio
   ```
   This will start Drizzle Studio on http://localhost:4983. Open this URL in your browser to access the studio interface.

5. **Update seed data (if necessary)**
   If your seed data needs to be updated to match the new schema, modify the `lib/db/seed.ts` file accordingly.

6. **Re-seed the database (optional)**
   If you want to reset your database with fresh seed data, run:
   ```
   pnpm run db:seed
   ```
   Note: This will delete existing data and replace it with new seed data.

7. **Start the Next.js development server**
   To run your Next.js application on localhost:3000, use the following command:
   ```
   pnpm run dev
   ```
   This will start your Next.js app in development mode on http://localhost:3000.

8. **Push schema changes (optional)**
   If you want to push schema changes directly to the database without generating migration files, you can use:
   ```
   pnpm run db:push
   ```
   Be cautious when using this command, especially in production environments.

Remember to commit your new migration files and any changes to the schema or seed files to your version control system.

## Running Your Development Environment

- Next.js App: http://localhost:3000
- Drizzle Studio: http://localhost:4983

Make sure both your database and development server are running when working on your project.