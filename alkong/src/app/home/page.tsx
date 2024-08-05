"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ListGroup } from "../_components/listGroup/index";

const Home = () => {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <div className="flexColumn gap-8">
      <ListGroup>
        <ListGroup.Label>병원 진료 기록</ListGroup.Label>
        <ListGroup.ItemContainer>
          <ListGroup.PrimaryText>3일 후, 7/1(월) 15:00</ListGroup.PrimaryText>
          <ListGroup.SecondaryText>
            연세 세브란스 정형외과
          </ListGroup.SecondaryText>
        </ListGroup.ItemContainer>
      </ListGroup>

      <ListGroup>
        <ListGroup.Label>체중</ListGroup.Label>
        <ListGroup.ItemContainer>
          <ListGroup.BetweenLayout>
            <ListGroup.PrimaryText>60.3kg</ListGroup.PrimaryText>
            <ListGroup.SecondaryText>5일 전</ListGroup.SecondaryText>
          </ListGroup.BetweenLayout>
        </ListGroup.ItemContainer>
      </ListGroup>

      <ListGroup>
        <ListGroup.Label>약 기록</ListGroup.Label>
        <ListGroup.ItemContainer>
          <ListGroup.BetweenLayout>
            <ListGroup.PrimaryText>혈압약</ListGroup.PrimaryText>
            <ListGroup.SecondaryText>매일 7:30</ListGroup.SecondaryText>
          </ListGroup.BetweenLayout>
        </ListGroup.ItemContainer>
      </ListGroup>

      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};

export default Home;
