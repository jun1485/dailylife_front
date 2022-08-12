import { createSlice, current } from "@reduxjs/toolkit";

const post = createSlice({
  name: "post",
  initialState: {
    pageNum: 1,
    myValues: [
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
      {
        boardNum: 7,
        src: "/assets/갱지5.jpg",
        title: "강쥐7",
        content: "귀여운 강아지7",
        path: "/dog7",
      },
      {
        boardNum: 8,
        src: "/assets/갱지5.jpg",
        title: "강쥐8",
        content: "귀여운 강아지8",
        path: "/dog8",
      },
      {
        boardNum: 9,
        src: "/assets/갱지5.jpg",
        title: "강쥐9",
        content: "귀여운 강아지9",
        path: "/dog9",
      },
      {
        boardNum: 10,
        src: "/assets/dog1.jpg",
        title: "강쥐10",
        content: "귀여운 강아지10",
        path: "/dog10",
      },
      {
        boardNum: 11,
        src: "/assets/갱지2.jpg",
        title: "강쥐11",
        content: "귀여운 강아지11",
        path: "/dog11",
      },
      {
        boardNum: 12,
        src: "/assets/갱지6.jpg",
        title: "강쥐12",
        content: "귀여운 강아지12",
        path: "/dog12",
      },
      {
        boardNum: 13,
        src: "/assets/갱지3.jpg",
        title: "강쥐13",
        content: "귀여운 강아지13",
        path: "/dog13",
      },
      {
        boardNum: 14,
        src: "/assets/갱지4.png",
        title: "강쥐14",
        content: "귀여운 강아지14",
        path: "/dog14",
      },
      {
        boardNum: 15,
        src: "/assets/갱지5.jpg",
        title: "강쥐15",
        content: "귀여운 강아지15",
        path: "/dog15",
      },
      {
        boardNum: 16,
        src: "/assets/갱지5.jpg",
        title: "강쥐16",
        content: "귀여운 강아지16",
        path: "/dog16",
      },
      {
        boardNum: 17,
        src: "/assets/갱지5.jpg",
        title: "강쥐17",
        content: "귀여운 강아지17",
        path: "/dog17",
      },
      {
        boardNum: 18,
        src: "/assets/갱지5.jpg",
        title: "강쥐18",
        content: "귀여운 강아지18",
        path: "/dog18",
      },
    ],
  },
  reducers: {
    updateItems(state, action) {
      state.myValues = action.payload;
    },
    updatePageNum(state, action) {
      state.pageNum = action.payload;
    },
  },
});

export const postActions = post.actions;

export default post;
