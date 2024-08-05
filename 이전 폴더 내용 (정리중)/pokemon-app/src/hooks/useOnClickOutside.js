import { useEffect } from "react"

const useOnClickOutside = (ref, handler) => {

  useEffect(()=>{
    const listener = (event) =>{
      // 모달 내부를 클릭
      if(!ref.current || ref.current.contains(event.target)){
        return;
      }

      handler();

      // 모달 외부를 클릭
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);


    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      };
  }, [ref, handler]);

}

export default useOnClickOutside