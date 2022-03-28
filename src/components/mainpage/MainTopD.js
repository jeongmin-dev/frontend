import { Button, Image, Text, Title } from "../../elements";

const MainTopD = () => {
  return (
    <div style={{ backgroundColor: "#f2f3f4" }}>
      <div
        style={{
          margin: "0 auto 0 auto",
          display: "flex",
          width: "1220px",
          padding: "315px 0 336px 0",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            width: "80%",
            justifyContent: "start",
          }}
        >
          <Title _fontSize="47px" _padding="0 0 40px 0">
            <div style={{ marginBottom: "-10px" }}>
              Express yourself with
              <span style={{ verticalAlign: "middle" }}>
                <Image _src="/images/emoji1.png" _width="75px" _height="75px" />
              </span>
            </div>
            <div>
              what you
              <span style={{ verticalAlign: "middle" }}>
                <Image _src="/images/emoji2.png" _width="73px" _height="73px" />
              </span>
              read.
            </div>
          </Title>
          <Text _color="#505866" _fontSize="26px" _padding="0 0 24px 0">
            내가 읽은 것들로 나를 표현하는 공간, 버블드
          </Text>
          <Button
            _width="131px"
            _padding="10px 16px"
            _fontSize="14.5px"
            bgColor="#ffffff"
            _color="#383838"
            isBorder="true"
            borderRadius="5px"
          >
            내 버블드 만들기
          </Button>
        </div>
        <div
          style={{
            flexDirection: "column",
            width: "20%",
            justifyContent: "end",
          }}
        >
          이미지 들어갈 곳
        </div>
      </div>
    </div>
  );
};

export default MainTopD;
