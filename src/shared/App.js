import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  UserNickname,
  UserFavorites,
  Main,
  ArticleList,
  Article,
  Reviews,
  Setting,
} from "../pages";
import MyPage from "../pages/MyPage";
import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";

function App(props) {
  // const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.is_login);
  // const isToken = sessionStorage.getItem("token") ? true : false;

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main isLogin={isLogin} />} />
        <Route path="/login" element={<Login isLogin={isLogin} />} />
        <Route
          path="/user/nickname"
          element={<UserNickname isLogin={isLogin} />}
        />
        <Route
          path="/user/favorites"
          element={<UserFavorites isLogin={isLogin} />}
        />
        <Route path="/articles" element={<ArticleList isLogin={isLogin} />} />
        <Route path="/article" element={<Article isLogin={isLogin} />} />
        <Route path="/mypage" element={<MyPage isLogin={isLogin} />} />
        <Route path="/setting" element={<Setting isLogin={isLogin} />} />
        <Route path="/reviews" element={<Reviews isLogin={isLogin} />} />
        <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
