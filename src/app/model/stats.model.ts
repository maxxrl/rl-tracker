export interface Rank {
  "division": number,
  "played": number,
  "rank": string,
  "playlist": string,
  "mmr": number,
  "streak": number
}

export interface ApiResponse {
  "ranks": Rank[],
  "reward": Reward
}

export interface Reward{
  "progress": number,
  "level": string
}

export interface PlaylistFilter{
  "playlist": string
}
