import { useState, useEffect } from "react";
import { useParams } from "react-router";

import RemindCard from "./RemindCard";

const MyPageSuggest = props => {
  const { userInfo, memberId, isLogin } = props;

  const [myOwnPage, setMyOwnPage] = useState(false);
  const params = useParams();
  const isNew = true;

  useEffect(() => {
    if (parseInt(params.id) === parseInt(memberId)) {
      setMyOwnPage(true);
    } else if (parseInt(params.id) !== parseInt(memberId)) {
      setMyOwnPage(false);
    }
  }, [memberId, params.id]);

  return (
    <>
      {!myOwnPage ? (
        <RemindCard
          memberId={memberId}
          isLogin={isLogin}
          _title={`${userInfo.memberName}님의 큐레이션이 유용하셨나요?`}
          _text={
            "크롬 사용자라면 버튼 클릭 한번으로 링크를 저장해\n나만의 큐레이션을 만들고 공유할 수 있어요"
          }
          _button="내 버블드 만들기"
          isNew={isNew}
        />
      ) : null}
    </>
  );
};

export default MyPageSuggest;
