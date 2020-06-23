export interface Parliament{
  id: string;
  political_party_id: string;
  name: string;
  rubi_name: string;
  win_count: number;
  parliament: ParliamentType;
  url: string;
  postal_code: string;
  address: string;
  constituency: string;
  local_phone_number: string;
  local_fax_number: string;
  political_party_name: string;
  parliamentary_group: string;
  parliament_house_phone_number: string;
  parliament_house_fax_number: string;
  twitter_url: string;
  facebook_url: string;
  contact_url: string;
  mail_address: string;
  parliament_house_ridge: string;
  parliament_house_number: string;
}

enum ParliamentType{
  Syugiin,
  Sangiin,
}