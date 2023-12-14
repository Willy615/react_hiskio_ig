import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend = {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
};

type friendState = {
  friends: Friend[];
};

const initialState: friendState = {
  friends: [
    {
      id: 1,
      location: "Taipei City",
      account: "ness_123",
      isFollowing: true,
      avatar: "/images/avatars/ness.jpg",
    },
    {
      id: 2,
      location: "New Taipei City",
      account: "richard_999",
      isFollowing: true,
      avatar: "/images/avatars/richard.jpg",
    },
    {
      id: 3,
      location: "Taipei City",
      account: "zahama_123",
      isFollowing: true,
      avatar: "/images/avatars/zahama.jpg",
    },
    {
      id: 4,
      location: "Taipei City",
      account: "joe_123",
      isFollowing: true,
      avatar: "/images/avatars/joe.jpg",
    }
  ],
};

export const friendSlice = createSlice({
  name: "friendsList",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = true;
        }
      }
    },
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;

export default friendSlice.reducer;
