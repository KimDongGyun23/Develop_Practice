import React, { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

const Share = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      // 초기화 되기 전
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_MAP_KEY);
      }
    };
  }, []);

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `XXX와 OOO와 결혼합니다.`,
        description: `xx년xx월xx일`,
        imageUrl: "",
        link: {
          mobileWebUrl: window.location.origin, // http://localhost:5173/
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: window.location.origin, // http://localhost:5173/
            webUrl: window.location.origin,
          },
        },
      ],
    });
  };

  return (
    <div>
      <button onClick={handleShareKakao}>카카오톡</button>
      <button>링크</button>
    </div>
  );
};

export default Share;
