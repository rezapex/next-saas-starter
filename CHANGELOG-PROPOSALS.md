# Proposals Feature Changelog

## [Unreleased]

### Added
- New `proposals` table in the database with fields:
  - `id` (serial, primary key)
  - `user_id` (integer, foreign key to users table)
  - `title` (text)
  - `content` (text)
  - `created_at` (timestamp)
  - `updated_at` (timestamp)
- Relation between `users` and `proposals` tables
- Database migration to create the `proposals` table
- `getUserProposals` query function to fetch proposals for a user

### Changed
- Updated `users` table to include `firstName` and `lastName` fields
- Kept `fullName` field in `users` table for backward compatibility
- Modified schema relations to include the new `proposals` table

### Development
- Updated database schema in `lib/db/schema.ts`
- Created migration file `0002_real_talkback.sql` for adding the `proposals` table
- Modified `lib/db/queries.ts` to include `getUserProposals` function

## [Future Plans]
- Implement API routes for creating, updating, and deleting proposals
- Create frontend components for managing proposals
- Add proposal listing page in the user dashboard
- Implement proposal detail view
- Add search and filter functionality for proposals