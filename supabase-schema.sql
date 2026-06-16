-- PhoneHub Portfolio — Supabase Database Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Projects table
create table public.projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  image_url text,
  tech text[] default '{}',
  category text not null,
  live_url text,
  github_url text,
  featured boolean default false,
  sort_order int default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Skills table
create table public.skills (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  level int not null check (level between 0 and 100),
  category text not null,
  icon text,
  sort_order int default 0,
  created_at timestamp with time zone default now()
);

-- Testimonials table
create table public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  role text not null,
  company text,
  avatar_initials text,
  rating int default 5 check (rating between 1 and 5),
  content text not null,
  approved boolean default false,
  created_at timestamp with time zone default now()
);

-- Blog posts table
create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  image_url text,
  category text,
  read_time text,
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Contact messages table
create table public.contact_messages (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  read boolean default false,
  replied boolean default false,
  created_at timestamp with time zone default now()
);

-- Newsletter subscribers table
create table public.newsletter_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  subscribed_at timestamp with time zone default now(),
  active boolean default true
);

-- Services table (optional CMS for services)
create table public.services (
  id uuid default uuid_generate_v4() primary key,
  icon text,
  title text not null,
  description text,
  features text[] default '{}',
  price text,
  sort_order int default 0,
  active boolean default true,
  created_at timestamp with time zone default now()
);

-- RLS policies
alter table public.projects enable row level security;
alter table public.skills enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.services enable row level security;

-- Public read access for portfolio data
create policy "Public can read projects" on public.projects for select using (true);
create policy "Public can read skills" on public.skills for select using (true);
create policy "Public can read approved testimonials" on public.testimonials for select using (approved = true);
create policy "Public can read published posts" on public.blog_posts for select using (published = true);
create policy "Public can read active services" on public.services for select using (active = true);

-- Public insert for contact form and newsletter
create policy "Anyone can submit contact" on public.contact_messages for insert with check (true);
create policy "Anyone can subscribe" on public.newsletter_subscribers for insert with check (true);

-- Admin access (service role bypasses RLS)
-- Use service role key in admin dashboard only

-- Updated_at trigger
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger projects_updated_at before update on public.projects
  for each row execute function update_updated_at();

create trigger blog_posts_updated_at before update on public.blog_posts
  for each row execute function update_updated_at();
