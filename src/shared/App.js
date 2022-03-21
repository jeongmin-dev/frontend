import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

import {
  Login,
  UserNickname,
  UserFavorites,
  Main,
  ArticleList,
  ArticleDetail,
  Reviews,
  Setting,
  MyPage,
} from "../pages";
import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";

import { checkMyInfo } from "../redux/modules/User";
import MyReview from "../pages/MyReview";
import EditProfile from "../pages/EditProfile";

function App(props) {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      dispatch(checkMyInfo(token));
    }
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/nickname" element={<UserNickname />} />
        <Route path="/user/favorites" element={<UserFavorites />} />
        <Route path="/articles/:id" element={<ArticleList />} />
        <Route path="/article" element={<ArticleDetail />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/mypage/:id" element={<MyPage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/memos" element={<Reviews />} />
        <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
        <Route path="/myreview" element={<MyReview />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
