import React from "react";
import { useNavigate } from "react-router";

import { Title, Button } from "../../elements";

import ArticleFolder from "../folderpage/ArticleFolder";

const CurationsT = () => {
  const navigate = useNavigate();
  const folderList = [0, 1, 2, 3];

  return (
    <>
      <div
        style={{
          margin: "0 auto 0 auto",
          maxWidth: "1194px",
          padding: "28px 40px 0 40px",
        }}
      >
        <Title _padding="0 0 20px 0">추천 큐레이션</Title>
        {folderList.map((folderId, idx) => (
          <div
            key={idx}
            style={{
              width: "359px",
              margin: "0 19px 16px 0",
              display: "inline-block",
            }}
          >
            <ArticleFolder
              _onClick={() => {
                navigate("/articles");
              }}
              folderColor={
                folderId % 3 === 0
                  ? "green"
                  : folderId % 3 === 1
                  ? "purple"
                  : "blue"
              }
            ></ArticleFolder>
          </div>
        ))}

        <div style={{ textAlign: "center", margin: "18px auto 0 auto" }}>
          <div style={{ display: "inline-block" }}>
            <Button
              _width="359px"
              _padding="12px"
              bgColor="#ffffff"
              _color="#383838"
              isBorder="true"
            >
              더보기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurationsT;
