-- ============================================================
-- ExploreIndia Postgres Database Schema & Seed Script
-- Supabase Compatible SQL Script
-- ============================================================

-- Enable pgcrypto / uuid generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ------------------------------------------------------------
-- 1. STATES
-- Zone options: North, North East, East, Central, West, South
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.states (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    region TEXT NOT NULL,
    zone TEXT NOT NULL CHECK (zone IN ('North', 'North East', 'East', 'Central', 'West', 'South')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 2. CITIES
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.cities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id UUID NOT NULL REFERENCES public.states(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(state_id, name)
);

-- ------------------------------------------------------------
-- 3. NATIONAL PARKS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.national_parks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id UUID NOT NULL REFERENCES public.states(id) ON DELETE CASCADE,
    city_id UUID REFERENCES public.cities(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 4. EVENTS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    state_id UUID REFERENCES public.states(id) ON DELETE SET NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description TEXT NOT NULL,
    hero_image_url TEXT,
    card_image_url TEXT,
    is_corporate BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 5. EXPERIENCE TOPICS
-- Parent topics: Wildlife, Heritage, Spiritual, Adventure,
-- Gastronomy, Weddings, Wellness, Arts, Rural, Nature, Recreation
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.experience_topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    parent_topic TEXT, -- NULL if root topic, otherwise name of parent topic
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(name, parent_topic)
);

-- ------------------------------------------------------------
-- 6. BOOKMARKS (Users handled by Supabase Auth)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, event_id)
);

-- ------------------------------------------------------------
-- INDEXES
-- ------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_cities_state_id ON public.cities(state_id);
CREATE INDEX IF NOT EXISTS idx_national_parks_state_id ON public.national_parks(state_id);
CREATE INDEX IF NOT EXISTS idx_events_state_id ON public.events(state_id);
CREATE INDEX IF NOT EXISTS idx_events_start_date ON public.events(start_date);
CREATE INDEX IF NOT EXISTS idx_events_category ON public.events(category);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON public.bookmarks(user_id);

-- ------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------
ALTER TABLE public.states ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.national_parks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;

-- Public read access for static & discovery tables
CREATE POLICY "Public read states" ON public.states FOR SELECT USING (true);
CREATE POLICY "Public read cities" ON public.cities FOR SELECT USING (true);
CREATE POLICY "Public read national_parks" ON public.national_parks FOR SELECT USING (true);
CREATE POLICY "Public read events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Public read experience_topics" ON public.experience_topics FOR SELECT USING (true);

-- User-scoped policies for bookmarks
CREATE POLICY "Users can view own bookmarks" ON public.bookmarks 
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own bookmarks" ON public.bookmarks 
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookmarks" ON public.bookmarks 
    FOR DELETE USING (auth.uid() = user_id);

-- ============================================================
-- SEED DATA
-- ============================================================

-- 1. States Seed Data
INSERT INTO public.states (name, region, zone) VALUES
('Rajasthan', 'Northern India', 'North'),
('Kerala', 'Southern India', 'South'),
('Goa', 'Western Coast', 'West'),
('West Bengal', 'Eastern India', 'East'),
('Assam', 'North Eastern India', 'North East'),
('Madhya Pradesh', 'Central India', 'Central'),
('Tamil Nadu', 'Southern India', 'South'),
('Punjab', 'Northern India', 'North'),
('Gujarat', 'Western India', 'West'),
('Himachal Pradesh', 'Himalayan Region', 'North'),
('Ladakh', 'Trans-Himalaya', 'North'),
('Odisha', 'Eastern India', 'East'),
('Karnataka', 'Southern India', 'South'),
('Maharashtra', 'Western India', 'West'),
('Uttarakhand', 'Northern India', 'North')
ON CONFLICT (name) DO NOTHING;

-- 2. Experience Topics & Sub-items
INSERT INTO public.experience_topics (name, parent_topic) VALUES
-- Main parent topics
('Wildlife', NULL),
('Heritage', NULL),
('Spiritual', NULL),
('Adventure', NULL),
('Gastronomy', NULL),
('Weddings', NULL),
('Wellness', NULL),
('Arts', NULL),
('Rural', NULL),
('Nature', NULL),
('Recreation', NULL),

-- Wildlife sub-items
('Tiger Safaris', 'Wildlife'),
('Bird Watching', 'Wildlife'),
('Elephant Reserves', 'Wildlife'),
('Marine Life', 'Wildlife'),

-- Heritage sub-items
('Palaces & Forts', 'Heritage'),
('UNESCO World Heritage Sites', 'Heritage'),
('Ancient Temples', 'Heritage'),
('Colonial Architecture', 'Heritage'),

-- Spiritual sub-items
('Ganga Aarti & Ghats', 'Spiritual'),
('Pilgrimage Trails', 'Spiritual'),
('Meditation Retreats', 'Spiritual'),
('Sufi Music Festivals', 'Spiritual'),

-- Adventure sub-items
('Himalayan Trekking', 'Adventure'),
('River Rafting', 'Adventure'),
('Scuba Diving & Snorkeling', 'Adventure'),
('Desert Safaris', 'Adventure'),

-- Gastronomy sub-items
('Street Food Tours', 'Gastronomy'),
('Royal Cuisine Masterclasses', 'Gastronomy'),
('Spice Plantation Tours', 'Gastronomy'),
('Vineyard Trails', 'Gastronomy'),

-- Weddings sub-items
('Royal Palace Weddings', 'Weddings'),
('Beach Destination Weddings', 'Weddings'),
('Backwater Ceremonies', 'Weddings'),

-- Wellness sub-items
('Ayurvedic Healing', 'Wellness'),
('Yoga Shalas', 'Wellness'),
('Naturopathy & Spas', 'Wellness'),

-- Arts sub-items
('Classical Dance Festivals', 'Arts'),
('Folk Music Gatherings', 'Arts'),
('Handicraft Workshops', 'Arts'),
('Textile Trails', 'Arts'),

-- Rural sub-items
('Village Homestays', 'Rural'),
('Farm-to-Table Experiences', 'Rural'),
('Tribal Culture Tours', 'Rural'),

-- Nature sub-items
('Backwater Cruises', 'Nature'),
('Hill Station Escapes', 'Nature'),
('Valley Flower Trails', 'Nature'),

-- Recreation sub-items
('Hot Air Ballooning', 'Recreation'),
('Luxury Train Journeys', 'Recreation'),
('Golfing in the Hills', 'Recreation')
ON CONFLICT (name, parent_topic) DO NOTHING;

-- 3. Cities Seed Data
DO $$
DECLARE
    v_raj_id UUID;
    v_ker_id UUID;
    v_goa_id UUID;
    v_wb_id UUID;
    v_ass_id UUID;
    v_mp_id UUID;
    v_tn_id UUID;
    v_pb_id UUID;
    v_guj_id UUID;
    v_hp_id UUID;
    v_lad_id UUID;
    v_kar_id UUID;
    v_mah_id UUID;
BEGIN
    SELECT id INTO v_raj_id FROM public.states WHERE name = 'Rajasthan';
    SELECT id INTO v_ker_id FROM public.states WHERE name = 'Kerala';
    SELECT id INTO v_goa_id FROM public.states WHERE name = 'Goa';
    SELECT id INTO v_wb_id FROM public.states WHERE name = 'West Bengal';
    SELECT id INTO v_ass_id FROM public.states WHERE name = 'Assam';
    SELECT id INTO v_mp_id FROM public.states WHERE name = 'Madhya Pradesh';
    SELECT id INTO v_tn_id FROM public.states WHERE name = 'Tamil Nadu';
    SELECT id INTO v_pb_id FROM public.states WHERE name = 'Punjab';
    SELECT id INTO v_guj_id FROM public.states WHERE name = 'Gujarat';
    SELECT id INTO v_hp_id FROM public.states WHERE name = 'Himachal Pradesh';
    SELECT id INTO v_lad_id FROM public.states WHERE name = 'Ladakh';
    SELECT id INTO v_kar_id FROM public.states WHERE name = 'Karnataka';
    SELECT id INTO v_mah_id FROM public.states WHERE name = 'Maharashtra';

    -- Cities
    IF v_raj_id IS NOT NULL THEN
        INSERT INTO public.cities (state_id, name) VALUES
        (v_raj_id, 'Jaipur'),
        (v_raj_id, 'Udaipur'),
        (v_raj_id, 'Jaisalmer'),
        (v_raj_id, 'Pushkar')
        ON CONFLICT DO NOTHING;
    END IF;

    IF v_ker_id IS NOT NULL THEN
        INSERT INTO public.cities (state_id, name) VALUES
        (v_ker_id, 'Kochi'),
        (v_ker_id, 'Alleppey'),
        (v_ker_id, 'Munnar'),
        (v_ker_id, 'Thrissur')
        ON CONFLICT DO NOTHING;
    END IF;

    IF v_goa_id IS NOT NULL THEN
        INSERT INTO public.cities (state_id, name) VALUES
        (v_goa_id, 'Panaji'),
        (v_goa_id, 'Margao'),
        (v_goa_id, 'Vagator')
        ON CONFLICT DO NOTHING;
    END IF;

    IF v_wb_id IS NOT NULL THEN
        INSERT INTO public.cities (state_id, name) VALUES
        (v_wb_id, 'Kolkata'),
        (v_wb_id, 'Darjeeling'),
        (v_wb_id, 'Shantiniketan')
        ON CONFLICT DO NOTHING;
    END IF;

    IF v_pb_id IS NOT NULL THEN
        INSERT INTO public.cities (state_id, name) VALUES
        (v_pb_id, 'Amritsar'),
        (v_pb_id, 'Anandpur Sahib')
        ON CONFLICT DO NOTHING;
    END IF;

    IF v_guj_id IS NOT NULL THEN
        INSERT INTO public.cities (state_id, name) VALUES
        (v_guj_id, 'Rann of Kutch'),
        (v_guj_id, 'Ahmedabad')
        ON CONFLICT DO NOTHING;
    END IF;

    IF v_lad_id IS NOT NULL THEN
        INSERT INTO public.cities (state_id, name) VALUES
        (v_lad_id, 'Leh'),
        (v_lad_id, 'Nubra Valley')
        ON CONFLICT DO NOTHING;
    END IF;
END $$;

-- 4. National Parks Seed Data
DO $$
DECLARE
    v_raj_id UUID;
    v_ker_id UUID;
    v_ass_id UUID;
    v_mp_id UUID;
    v_wb_id UUID;
    v_guj_id UUID;
BEGIN
    SELECT id INTO v_raj_id FROM public.states WHERE name = 'Rajasthan';
    SELECT id INTO v_ker_id FROM public.states WHERE name = 'Kerala';
    SELECT id INTO v_ass_id FROM public.states WHERE name = 'Assam';
    SELECT id INTO v_mp_id FROM public.states WHERE name = 'Madhya Pradesh';
    SELECT id INTO v_wb_id FROM public.states WHERE name = 'West Bengal';
    SELECT id INTO v_guj_id FROM public.states WHERE name = 'Gujarat';

    IF v_raj_id IS NOT NULL THEN
        INSERT INTO public.national_parks (state_id, name) VALUES
        (v_raj_id, 'Ranthambore National Park'),
        (v_raj_id, 'Sariska Tiger Reserve');
    END IF;

    IF v_ass_id IS NOT NULL THEN
        INSERT INTO public.national_parks (state_id, name) VALUES
        (v_ass_id, 'Kaziranga National Park'),
        (v_ass_id, 'Manas National Park');
    END IF;

    IF v_mp_id IS NOT NULL THEN
        INSERT INTO public.national_parks (state_id, name) VALUES
        (v_mp_id, 'Kanha Tiger Reserve'),
        (v_mp_id, 'Bandhavgarh National Park');
    END IF;

    IF v_wb_id IS NOT NULL THEN
        INSERT INTO public.national_parks (state_id, name) VALUES
        (v_wb_id, 'Sundarbans National Park');
    END IF;

    IF v_guj_id IS NOT NULL THEN
        INSERT INTO public.national_parks (state_id, name) VALUES
        (v_guj_id, 'Gir National Park');
    END IF;
END $$;

-- 5. Seed Events
DO $$
DECLARE
    v_raj_id UUID;
    v_ker_id UUID;
    v_guj_id UUID;
    v_wb_id UUID;
    v_pb_id UUID;
    v_lad_id UUID;
BEGIN
    SELECT id INTO v_raj_id FROM public.states WHERE name = 'Rajasthan';
    SELECT id INTO v_ker_id FROM public.states WHERE name = 'Kerala';
    SELECT id INTO v_guj_id FROM public.states WHERE name = 'Gujarat';
    SELECT id INTO v_wb_id FROM public.states WHERE name = 'West Bengal';
    SELECT id INTO v_pb_id FROM public.states WHERE name = 'Punjab';
    SELECT id INTO v_lad_id FROM public.states WHERE name = 'Ladakh';

    INSERT INTO public.events (
        title, slug, state_id, category, type, start_date, end_date, description, hero_image_url, card_image_url, is_corporate
    ) VALUES
    (
        'Pushkar Camel Fair',
        'pushkar-camel-fair-2026',
        v_raj_id,
        'Cultural & Heritage',
        'Traditional Festival',
        '2026-11-15',
        '2026-11-23',
        'One of the world''s largest camel fairs, featuring vibrant livestock trading, folk music, traditional dances, hot air ballooning, and holy dip in Pushkar Lake.',
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200',
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600',
        false
    ),
    (
        'Rann Utsav Kutch',
        'rann-utsav-kutch-2026',
        v_guj_id,
        'Arts & Culture',
        'Cultural Carnival',
        '2026-11-01',
        '2027-02-28',
        'A magnificent desert festival held on the endless white salt marshes of the Great Rann of Kutch under moonlit nights, featuring traditional crafts and Gujarati cuisine.',
        'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200',
        'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=600',
        false
    ),
    (
        'Onam & Snake Boat Races',
        'onam-snake-boat-races-2026',
        v_ker_id,
        'Spiritual & Tradition',
        'Folk Harvest Festival',
        '2026-09-12',
        '2026-09-22',
        'Kerala''s premier harvest festival celebrating King Mahabali with vibrant floral carpets (Pookkalam), grand Onam Sadhya feasts, and thrilling Vallam Kali boat races on Kerala backwaters.',
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200',
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600',
        false
    ),
    (
        'Kolkata Durga Puja Festival',
        'kolkata-durga-puja-2026',
        v_wb_id,
        'Heritage & Spiritual',
        'UNESCO Intangible Cultural Heritage',
        '2026-10-15',
        '2026-10-20',
        'A world-renowned street art installation and grand spiritual celebration transforms Kolkata into an open-air art museum with elaborate pandals, traditional dhak drumming, and food feasts.',
        'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200',
        'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=600',
        false
    ),
    (
        'Hemis Monastery Festival',
        'hemis-festival-ladakh-2026',
        v_lad_id,
        'Arts & Spiritual',
        'Monastic Cham Dance',
        '2026-06-25',
        '2026-06-26',
        'High-altitude Himalayan Buddhist festival at Hemis Monastery celebrating Guru Padmasambhava with sacred masked dances (Cham), traditional trumpets, and colourful silk brocades.',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600',
        false
    ),
    (
        'India Tourism & Destination Wedding Summit',
        'india-tourism-wedding-summit-2026',
        v_raj_id,
        'Weddings & Corporate',
        'Business Conclave',
        '2026-10-05',
        '2026-10-07',
        'An exclusive B2B and luxury tourism summit showcasing royal palace venues, heritage hospitality, and destination wedding experiences in Jaipur.',
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200',
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600',
        true
    )
    ON CONFLICT (slug) DO NOTHING;
END $$;
