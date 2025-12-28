import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();

  // 뒤로 가기
  const goBack = () => {
    const confirmed = window.confirm("정말 뒤로 가시겠습니까?");
    if (confirmed) {
      navigate(-1);
    }
  };

  // 홈으로 이동
  const goHome = () => {
    const confirmed = window.confirm("정말 홈으로 이동하시겠습니까?");
    if (confirmed) {
      navigate("/");
    }
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default Navigate;
