import { createSlice } from "@reduxjs/toolkit";

const searchResult = createSlice({
  name: "searchResult",
  initialState: [
    {
      boardNum: 1,
      src: "/assets/dog1.jpg",
      title: "강쥐1",
      content: "귀여운 강아지1",
      path: "/dog2",
    },
    {
      boardNum: 2,
      src: "/assets/갱지2.jpg",
      title: "강쥐2",
      content: "귀여운 강아지2",
      path: "/dog2",
    },
    {
      boardNum: 3,
      src: "/assets/갱지6.jpg",
      title: "강쥐3",
      content: "귀여운 강아지3",
      path: "/dog3",
    },
    {
      boardNum: 4,
      src: "/assets/갱지3.jpg",
      title: "강쥐4",
      content: "귀여운 강아지4",
      path: "/dog4",
    },
    {
      boardNum: 5,
      src: "/assets/갱지4.png",
      title: "강쥐5",
      content: "귀여운 강아지5",
      path: "/dog5",
    },
    {
      boardNum: 6,
      src: "/assets/갱지5.jpg",
      title: "강쥐6",
      content: "귀여운 강아지6",
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
