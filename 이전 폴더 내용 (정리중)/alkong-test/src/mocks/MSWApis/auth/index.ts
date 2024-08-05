import { http, HttpResponse } from "msw";

const User = [
  { id: "kt", password: "kt" },
  { id: "lg", password: "lg" },
  { id: "samsung", password: "samsung" },
];

export const auth = [
  // 로그인
  http.post("/api/login", () => {
    console.log("로그인");
    return HttpResponse.json(User[0], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),
  http.post("/api/signup", async ({ request }) => {
    console.log("회원가입");
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),
];
