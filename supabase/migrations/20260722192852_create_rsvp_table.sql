/*
# Create rsvp table (single-tenant, no auth)

1. New Tables
- `rsvp`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest's full name
  - `phone` (text, not null) — contact number
  - `guests` (integer, not null, default 1) — number of attendees
  - `attending` (text, not null) — 'yes' | 'no'
  - `message` (text, nullable) — optional special message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `rsvp`.
- Allow anon + authenticated INSERT (guests submit RSVPs without signing in).
- No SELECT/UPDATE/DELETE for anon — RSVP data is private to the couple.
*/

CREATE TABLE IF NOT EXISTS rsvp (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  attending text NOT NULL CHECK (attending IN ('yes', 'no')),
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_rsvp" ON rsvp;
CREATE POLICY "anon_insert_rsvp" ON rsvp FOR INSERT
TO anon, authenticated WITH CHECK (true);
