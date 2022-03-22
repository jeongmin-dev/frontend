import React from "react";
import styled from "styled-components";
import {
  Navbar,
  Modal,
  Curations,
  RecommendList,
  RecommendUser,
  MainTop,
} from "../components";
import { useSelector } from "react-redux";

const Main = props => {
  console.log(
    "로그인정보 확인",
    useSelector(state => state.user),
  );

  return (
    <React.Fragment>
      <MainContainer>
        <Navbar {...props} />
        {/* 맨 위 영역 */}
        <MainTop />

        {/* 추천아티클 */}
        <RecommendList />

        {/* 추천 큐레이션 */}
        <Curations />

        {/* 추천 유저 */}
        <RecommendUser />

        <Modal />
      </MainContainer>
    </React.Fragment>
  );
};

Main.defaultProps = {};

const MainContainer = styled.div``;

export default Main;
