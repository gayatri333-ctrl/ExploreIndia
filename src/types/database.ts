export type ZoneType = 'North' | 'North East' | 'East' | 'Central' | 'West' | 'South';

export interface State {
  id: string;
  name: string;
  region: string;
  zone: ZoneType;
  created_at?: string;
}

export interface City {
  id: string;
  state_id: string;
  name: string;
  created_at?: string;
  state?: State;
}

export interface NationalPark {
  id: string;
  state_id: string;
  city_id?: string | null;
  name: string;
  created_at?: string;
  state?: State;
  city?: City;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  state_id?: string | null;
  category: string;
  type: string;
  start_date: string;
  end_date: string;
  description: string;
  hero_image_url?: string | null;
  card_image_url?: string | null;
  is_corporate: boolean;
  created_at?: string;
  state?: State;
}

export interface ExperienceTopic {
  id: string;
  name: string;
  parent_topic?: string | null;
  created_at?: string;
}

export interface Bookmark {
  id: string;
  user_id: string;
  event_id: string;
  created_at?: string;
  event?: EventItem;
}

export type Database = {
  public: {
    Tables: {
      states: {
        Row: State;
        Insert: Omit<State, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<State>;
      };
      cities: {
        Row: City;
        Insert: Omit<City, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<City>;
      };
      national_parks: {
        Row: NationalPark;
        Insert: Omit<NationalPark, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<NationalPark>;
      };
      events: {
        Row: EventItem;
        Insert: Omit<EventItem, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<EventItem>;
      };
      experience_topics: {
        Row: ExperienceTopic;
        Insert: Omit<ExperienceTopic, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<ExperienceTopic>;
      };
      bookmarks: {
        Row: Bookmark;
        Insert: Omit<Bookmark, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<Bookmark>;
      };
    };
  };
};
