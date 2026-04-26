# Supabase Score Logging Setup

This app can record only:

- quiz slug
- quiz title
- score
- total questions
- completion timestamp

It does not need names, emails, or typed answers.

## 1. Create the table

Run this in the Supabase SQL editor:

```sql
create table if not exists public.quiz_results (
  id bigint generated always as identity primary key,
  quiz_slug text not null,
  quiz_title text not null,
  score integer not null,
  total_questions integer not null,
  created_at timestamptz not null default timezone('utc', now())
);
```

## 2. Get your project values

From Supabase project settings, copy:

- Project URL
- Service role key

## 3. Create local environment variables

Create `.env.local` in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESULTS_ADMIN_KEY=pick-a-private-results-key
```

## 4. Add the same variables in Vercel

Project Settings -> Environment Variables

Add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESULTS_ADMIN_KEY`

## 5. View results

Once deployed, open:

`/admin`

Sign in with your `RESULTS_ADMIN_KEY`, then use the results dashboard.

Example:

`https://your-site-url/admin`
