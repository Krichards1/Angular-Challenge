// Staff State and Model
export interface Staff {
  description: string;
  code: string;
  role: string;
  active: string;
  last_mod: string;
  last_mod_date: string | Date
};

export interface StaffState{
    staffs: Staff[];
}
