export type Review = {
  id: string;
  body: string;
  rating: number;
  likes: number;
  dislikes: number;
  comments: number;
  date: string;
  name: string;
  anonymous: boolean;
};

export type Address = {
  name?: string;
  house_number?: string;
  road?: string;
  suburb?: string;
  city?: string;
  county?: string;
  state?: string;
  postcode?: string;
  country?: string;
  country_code?: string;
  town?: string;
};

export type Location = {
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: string;
  lon: string;
  boundingbox: [string, string, string, string];
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: Address;
};
