import { createSlice } from "@reduxjs/toolkit";

const searchResult = createSlice({
  name: "searchResult",
  initialState: [
    {
      id: 1,
      src: "/assets/dog1.jpg",
      text: "강쥐1",
      underInfo: "귀여운 강아지1",
      path: "/dog2",
    },
    {
      id: 2,
      src: "/assets/갱지2.jpg",
      text: "강쥐2",
      underInfo: "귀여운 강아지2",
      path: "/dog2",
    },
    {
      id: 3,
      src: "/assets/갱지6.jpg",
      text: "강쥐3",
      underInfo: "귀여운 강아지3",
      path: "/dog3",
    },
    {
      id: 4,
      src: "/assets/갱지3.jpg",
      text: "강쥐4",
      underInfo: "귀여운 강아지4",
      path: "/dog4",
    },
    {
      id: 5,
      src: "/assets/갱지4.png",
      text: "강쥐5",
      underInfo: "귀여운 강아지5",
      path: "/dog5",
    },
    {
      id: 6,
      src: "/assets/갱지5.jpg",
      text: "강쥐6",
      underInfo: "귀여운 강아지6",
      path: "/dog6",
    },
  ],
  reducers: {
    bringItems(state, action) {
      return (state = action.payload);
    },
  },
});

export const searchedDataActions = searchResult.actions;
export default searchResult;
