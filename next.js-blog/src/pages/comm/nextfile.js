import Popuptest from "components/popuptest";
import { useState } from "react";
import Button from "components/Button";

export default function Nextfile() {
  const [Popup, setPopup] = useState(false);

  return (
    <div>
      <h1> src 절대경로로 설정하는 방법</h1>
      <p> jsconfig.json</p>
      <p>"compilerOptions": "baseUrl": "src"</p>

      <h1>Dynamic Routes</h1>
      <p>
        Dynamic Routes slug 값은 어떻게 활용할 것인가? <br />
        const router = useRouter; const slug = router.query;
      </p>

      <Button
        bg="#2e2e2e"
        color="#fff"
        onClick={() => {
          setPopup(true);
        }}
      >
        소개영상보기
      </Button>
      <Button
        bg="#1fa170"
        color="#fff"
        onClick={() => {
          setPopup(false);
        }}
      >
        도임 문의하기
      </Button>

      {Popup == true ? <Popuptest /> : null}
    </div>
  );
}
