export interface Root {
  sets: Set[];
}

export interface Set {
  code: string;
  name: string;
  type: string;
  releaseDate: string;
  block?: string;
  onlineOnly: boolean;
  booster?: any[];
}
