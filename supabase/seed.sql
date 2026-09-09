-- ============================================================
-- ExploreIndia Complete Seed Script (Phase 5)
-- Populates 28 States + 8 Union Territories across 6 Zones
-- Populates 28 ORIGINAL sample events covering all 7 categories, 6 zones & 12 months
-- ============================================================

-- 1. SEED STATES & UNION TERRITORIES (36 Total)
INSERT INTO public.states (name, region, zone) VALUES
-- NORTH ZONE (8)
('Himachal Pradesh', 'Himalayan Region', 'North'),
('Punjab', 'Northern Plains', 'North'),
('Haryana', 'Northern Plains', 'North'),
('Uttarakhand', 'Himalayan Region', 'North'),
('Jammu & Kashmir', 'Himalayan Territory', 'North'),
('Ladakh', 'Trans-Himalayan Territory', 'North'),
('Delhi (NCT)', 'National Capital Territory', 'North'),
('Chandigarh', 'Capital Territory', 'North'),

-- NORTH EAST ZONE (8)
('Assam', 'Brahmaputra Valley', 'North East'),
('Meghalaya', 'Shillong Plateau', 'North East'),
('Sikkim', 'Eastern Himalaya', 'North East'),
('Arunachal Pradesh', 'Eastern Frontier', 'North East'),
('Nagaland', 'Naga Hills', 'North East'),
('Manipur', 'Imphal Basin', 'North East'),
('Tripura', 'Surma Valley', 'North East'),
('Mizoram', 'Mizo Hills', 'North East'),

-- EAST ZONE (4)
('West Bengal', 'Gangetic Delta', 'East'),
('Odisha', 'Utkal Coast', 'East'),
('Bihar', 'Middle Ganga Plain', 'East'),
('Jharkhand', 'Chota Nagpur Plateau', 'East'),

-- CENTRAL ZONE (3)
('Madhya Pradesh', 'Central Highlands', 'Central'),
('Uttar Pradesh', 'Upper Ganga Plain', 'Central'),
('Chhattisgarh', 'Dandakaranya Region', 'Central'),

-- WEST ZONE (5)
('Rajasthan', 'Thar Desert & Aravallis', 'West'),
('Gujarat', 'Kathiawar & Kutch', 'West'),
('Maharashtra', 'Deccan Plateau', 'West'),
('Goa', 'Konkan Coast', 'West'),
('Dadra & Nagar Haveli and Daman & Diu', 'Western Coastal UT', 'West'),

-- SOUTH ZONE (8)
('Kerala', 'Malabar Coast', 'South'),
('Tamil Nadu', 'Coromandel Coast', 'South'),
('Karnataka', 'Deccan & Malnad', 'South'),
('Andhra Pradesh', 'Seemandhra Coast', 'South'),
('Telangana', 'Deccan Plateau', 'South'),
('Puducherry', 'Coromandel UT', 'South'),
('Andaman & Nicobar Islands', 'Bay of Bengal Islands', 'South'),
('Lakshadweep', 'Arabian Sea Coral Islands', 'South')
ON CONFLICT (name) DO NOTHING;

-- 2. SEED 28 ORIGINAL SAMPLE EVENTS
DO $$
DECLARE
    v_hp UUID; v_pb UUID; v_hr UUID; v_uk UUID; v_jk UUID; v_lad UUID; v_dl UUID; v_ch UUID;
    v_as UUID; v_ml UUID; v_sk UUID; v_ar UUID; v_nl UUID; v_mn UUID; v_tr UUID; v_mz UUID;
    v_wb UUID; v_or UUID; v_br UUID; v_jh UUID;
    v_mp UUID; v_up UUID; v_cg UUID;
    v_rj UUID; v_gj UUID; v_mh UUID; v_ga UUID; v_dd UUID;
    v_kl UUID; v_tn UUID; v_ka UUID; v_ap UUID; v_tg UUID; v_py UUID; v_an UUID; v_ld UUID;
BEGIN
    SELECT id INTO v_hp FROM public.states WHERE name = 'Himachal Pradesh';
    SELECT id INTO v_pb FROM public.states WHERE name = 'Punjab';
    SELECT id INTO v_uk FROM public.states WHERE name = 'Uttarakhand';
    SELECT id INTO v_jk FROM public.states WHERE name = 'Jammu & Kashmir';
    SELECT id INTO v_lad FROM public.states WHERE name = 'Ladakh';
    SELECT id INTO v_dl FROM public.states WHERE name = 'Delhi (NCT)';
    SELECT id INTO v_as FROM public.states WHERE name = 'Assam';
    SELECT id INTO v_ar FROM public.states WHERE name = 'Arunachal Pradesh';
    SELECT id INTO v_nl FROM public.states WHERE name = 'Nagaland';
    SELECT id INTO v_wb FROM public.states WHERE name = 'West Bengal';
    SELECT id INTO v_or FROM public.states WHERE name = 'Odisha';
    SELECT id INTO v_br FROM public.states WHERE name = 'Bihar';
    SELECT id INTO v_mp FROM public.states WHERE name = 'Madhya Pradesh';
    SELECT id INTO v_up FROM public.states WHERE name = 'Uttar Pradesh';
    SELECT id INTO v_rj FROM public.states WHERE name = 'Rajasthan';
    SELECT id INTO v_gj FROM public.states WHERE name = 'Gujarat';
    SELECT id INTO v_mh FROM public.states WHERE name = 'Maharashtra';
    SELECT id INTO v_ga FROM public.states WHERE name = 'Goa';
    SELECT id INTO v_kl FROM public.states WHERE name = 'Kerala';
    SELECT id INTO v_tn FROM public.states WHERE name = 'Tamil Nadu';
    SELECT id INTO v_ka FROM public.states WHERE name = 'Karnataka';
    SELECT id INTO v_py FROM public.states WHERE name = 'Puducherry';

    INSERT INTO public.events (title, slug, state_id, category, type, start_date, end_date, description, hero_image_url, card_image_url, is_corporate) VALUES
    ('International Kite Festival (Uttarayan)', 'international-kite-festival', v_gj, 'Food & Recreation', 'Festival', '2027-01-08', '2027-01-14', 'Vibrant sky spectacle over Sabarmati riverfront as millions of colorful kites soar during the winter solstice harvest transition.', 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200', 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600', false),
    ('National Republic Day Parade', 'republic-day-parade', v_dl, 'National Occasions', 'Event', '2027-01-26', '2027-01-29', 'India landmark national military parade on Kartavya Path showcasing state tableaux, camel regiments & IAF flypast.', 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=1200', 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=600', false),
    ('Taj Mahotsav Cultural Conclave', 'taj-mahotsav-agra', v_up, 'Cultural & Spiritual', 'Festival', '2027-02-18', '2027-02-27', 'Ten-day cultural carnival celebrating Mughal heritage, classical ghazals, chikankari silk, and artisan crafts near the Taj Mahal.', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600', false),
    ('Khajuraho Classical Dance Festival', 'khajuraho-dance-festival', v_mp, 'Music & Arts', 'Event', '2027-02-20', '2027-02-26', 'Week-long classical dance festival set against the illuminated backdrop of UNESCO 10th-century Khajuraho temples.', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600', false),
    ('Barsana Lathmar Holi Heritage Festival', 'barsana-lathmar-holi', v_up, 'Cultural & Spiritual', 'Festival', '2027-03-20', '2027-03-22', 'Joyous Braj traditional spring celebration where women playfully beat men with wooden sticks amidst organic gulal clouds.', 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1200', 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=600', false),
    ('Goa Shigmo Traditional Folk Carnival', 'goa-shigmo-carnival', v_ga, 'Music & Arts', 'Festival', '2027-03-24', '2027-03-30', 'Goan traditional spring festival showcasing colorful street parades, mythological float pageants & Ghode Modni sword dances.', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600', false),
    ('Thrissur Pooram Elephant Pageant', 'thrissur-pooram-kerala', v_kl, 'Cultural & Spiritual', 'Festival', '2027-04-18', '2027-04-19', 'The mother of all Kerala temple festivals featuring 30 caparisoned elephants, Kudamattam umbrella displays & Panchavadyam drumming.', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600', false),
    ('Indira Gandhi Memorial Tulip Festival', 'tulip-festival-srinagar', v_jk, 'Nature & Wildlife', 'Festival', '2027-04-01', '2027-04-20', 'Asia largest tulip garden blooms with 1.5 million colorful tulips overlooking Dal Lake and Zabarwan mountain range.', 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200', 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=600', false),
    ('Bodh Gaya Global Buddha Purnima Assembly', 'bodh-gaya-buddha-purnima', v_br, 'Cultural & Spiritual', 'Festival', '2027-05-20', '2027-05-21', 'Sacred international Buddhist congregation under the holy Bodhi Tree marking Lord Buddha birth and enlightenment.', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600', false),
    ('Mount Abu Summer Hill Fiesta', 'mount-abu-summer-festival', v_rj, 'Food & Recreation', 'Festival', '2027-05-28', '2027-05-30', 'Hill station summer retreat in Rajasthan featuring boat races on Nakki Lake, Ghoomar dance & fireworks over Dilwara.', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600', false),
    ('Puri Jagannath Grand Rath Yatra', 'puri-rath-yatra-odisha', v_or, 'Cultural & Spiritual', 'Festival', '2027-06-25', '2027-07-03', 'World oldest chariot festival where millions pull 45-foot wooden chariots of Lord Jagannath, Balabhadra & Subhadra.', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600', false),
    ('Hemis Monastery Sacred Mask Dance Festival', 'hemis-monastery-festival', v_lad, 'Cultural & Spiritual', 'Festival', '2026-06-25', '2026-06-26', 'High-altitude Tibetan Buddhist festival featuring sacred Cham dances in colourful brocade costumes and giant Thangka unveiling.', 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1200', 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=600', false),
    ('Valley of Flowers Botanical Trek', 'valley-of-flowers-trek', v_uk, 'Nature & Wildlife', 'Event', '2027-07-10', '2027-07-25', 'UNESCO alpine monsoon wildflower pilgrimage featuring 500 endemic alpine blossom species & Hemkund Sahib lake.', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600', false),
    ('Champakulam Moolam Snake Boat Race', 'champakulam-boat-race-kerala', v_kl, 'Adventure & Sports', 'Event', '2027-07-04', '2027-07-04', 'Kerala oldest monsoon backwater boat race commemorating the installation of the Ambalappuzha Krishna deity.', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600', false),
    ('Kerala Onam & Nehru Trophy Boat Race', 'kerala-onam-vallam-kali', v_kl, 'Adventure & Sports', 'Festival', '2026-08-28', '2026-09-06', 'Harvest festival of Kerala featuring 100-foot Chundan Vallam snake boat races, floral Pookkalam carpets & 26-dish Onam Sadya feasting.', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600', false),
    ('Independence Day Red Fort Address', 'independence-day-red-fort', v_dl, 'National Occasions', 'Event', '2027-08-15', '2027-08-15', 'National flag unfurling at Red Fort by Prime Minister followed by 21-gun artillery salute and helicopter flower shower.', 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=1200', 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=600', false),
    ('Mumbai Ganesh Chaturthi Visarjan', 'mumbai-ganesh-chaturthi', v_mh, 'Cultural & Spiritual', 'Festival', '2026-09-14', '2026-09-24', 'Ten-day Mumbai festival dedicated to Lord Ganesha concluding in a massive immersion procession at Girgaon Chowpatty beach.', 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1200', 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=600', false),
    ('Ziro Festival of Music', 'ziro-festival-music', v_ar, 'Music & Arts', 'Festival', '2026-09-24', '2026-09-27', 'India premier outdoor indie music festival hosted in the lush green paddy valleys of the Apatani tribe.', 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200', 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600', false),
    ('Kolkata Durga Puja Grand Carnival', 'durga-puja-kolkata', v_wb, 'Cultural & Spiritual', 'Festival', '2026-10-17', '2026-10-21', 'UNESCO Intangible Cultural Heritage extravaganza celebrating Goddess Durga with breathtaking artistic pandals, dhak drummers & street food.', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600', false),
    ('Mysuru Dasara Royal Palace Illumination', 'mysuru-dasara-karnataka', v_ka, 'Cultural & Spiritual', 'Festival', '2026-10-11', '2026-10-20', 'Ten-day royal festival culminating in Jumboo Savari elephant procession and 100,000 bulb Mysore Palace illumination.', 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1200', 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=600', false),
    ('Pushkar International Camel Fair', 'pushkar-camel-fair', v_rj, 'Shopping & Fairs', 'Festival', '2026-11-20', '2026-11-28', 'World-famous livestock mela featuring 50,000 camels, folk dance, turban tying competitions & sacred lake bath on Kartik Purnima.', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600', false),
    ('Rann Utsav White Desert Festival', 'rann-utsav-kutch', v_gj, 'Food & Recreation', 'Event', '2026-11-01', '2027-02-28', 'Four-month desert extravaganza amidst the glowing white salt marshes of Kutch with luxury tent cities, star gazing & Kutchi handicrafts.', 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200', 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600', false),
    ('Kaziranga National Tiger & Rhino Conclave', 'kaziranga-wildlife-conclave', v_as, 'Nature & Wildlife', 'Event', '2026-11-15', '2026-11-18', 'Annual eco-tourism gathering featuring dawn elephant safaris, rhino tracking & conservation workshops in Assam.', 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200', 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=600', false),
    ('Varanasi Dev Deepavali Light Celebration', 'varanasi-dev-deepavali', v_up, 'Cultural & Spiritual', 'Festival', '2026-11-24', '2026-11-24', 'The Night of the Gods when over 1 million clay lamps (diyas) illuminate 84 ghats along the sacred River Ganges.', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600', false),
    ('Hornbill Festival of Tribes', 'hornbill-festival', v_nl, 'Music & Arts', 'Festival', '2026-12-01', '2026-12-10', 'Spectacular gathering of 17 Naga tribes showcasing traditional warrior dances, indigenous rock concerts, Naga chilli eating & archery.', 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200', 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=600', false),
    ('Goa Sunburn Electronic Music Festival', 'sunburn-music-festival-goa', v_ga, 'Music & Arts', 'Festival', '2026-12-28', '2026-12-31', 'Asia largest beachside electronic music festival bringing top global DJs to Vagator Beach for year-end celebrations.', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600', false),
    ('Olive Ridley Sea Turtle Eco Festival', 'olive-ridley-turtle-festival', v_or, 'Nature & Wildlife', 'Event', '2026-12-15', '2026-12-18', 'Coastal eco-tourism gathering observing thousands of Olive Ridley sea turtles arriving for mass nesting (Arribada) on Rushikulya beach.', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600', false),
    ('Puducherry French Quarter Winter Carnival', 'puducherry-french-carnival', v_py, 'Food & Recreation', 'Festival', '2026-12-24', '2026-12-31', 'Charming seaside winter carnival with Franco-Tamil gastronomy, cobblestone street music, and candlelit dinners in White Town.', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600', false)
    ON CONFLICT (slug) DO NOTHING;
END $$;
