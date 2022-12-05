import Popup from "components/popup";
import { useState } from "react";

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

      <button onClick={() => {}}>특허 출원 및 MOU</button>
    </div>
  );
}
