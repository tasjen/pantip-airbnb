/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-redeclare */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { z } from 'zod';

export const Room = z.object({
  id: z.number(),
  name: z.string(),
  link_url: z.string(),
  room_icon_url: z.string(),
});
export type Room = z.infer<typeof Room>;

export const Highlight = z.object({
  id: z.number().default(Math.random),
  name: z.string(),
  image_url: z.array(z.string()),
  post_url: z.string(),
});
export type Highlight = z.infer<typeof Highlight>;

export const TopPost = z.object({
  type: z.enum(['realtime', 'pick', 'hitz']),
  topic_id: z.number(),
  title: z.string(),
  created_time: z.string(),
  thumbnail_url: z.string().optional(),
  comments_count: z.number(),
  votes_count: z.number(),
  author: z.object({
    name: z.string(),
    slug: z.string(),
  }),
});
export type TopPost = z.infer<typeof TopPost>;

export interface DataState {
  rooms: Room[];
  highlights: Highlight[];
  topPosts: TopPost[];
}

const initialState: DataState = {
  rooms: [],
  highlights: [],
  topPosts: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    initializeData: (state, action: PayloadAction<DataState>) => {
      state.rooms = action.payload.rooms;
      state.highlights = action.payload.highlights;
      state.topPosts = action.payload.topPosts;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initializeData } = dataSlice.actions;

export default dataSlice.reducer;
