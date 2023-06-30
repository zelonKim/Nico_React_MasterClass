import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  dispaly: flex;
  justify-content: center;
  align-item: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
`;

/* const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
`; 

const boxVari = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.5,
      delayChildren: 0.5, // 자식 컴포넌트인 Circle에 0.5초 딜레이를 줌.
      staggerChildren: 0.2, // 자식 컴포넌트인 Circle에 0.2초씩 시차를 줌.
    },
  },
};

const circleVari = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVari} initial="start" animate="end">
        <Circle variants={circleVari} />
        <Circle variants={circleVari} />
        <Circle variants={circleVari} />
        <Circle variants={circleVari} />
      </Box>
    </Wrapper>
  );
}
export default App; */

/* 
const boxVari = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  draging: { backgroundColor: "rgb(0, 0, 0)", transition: { duration: 10 } },
};

const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={1}
          dragConstraints={biggerBoxRef}
          variants={boxVari}
          whileHover="hover"
          whileTap="click"
          whileDrag="draging"
        />
      </BiggerBox>
    </Wrapper>
  );
  }
export default App;
*/
// whileDrag 프로퍼티의 값으로 문자 색상("black")이 아닌, 숫자 색상"rgb(0, 0, 0)"을 써야 애니메이트 됨.

/* 
function App() {
  const motionValue = useMotionValue(0);
  const scaling = useTransform(motionValue, [-800, 0, 800], [2, 1, 0.1]);
  const rotating = useTransform(motionValue, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    motionValue,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238,0,153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0,238,155), rgb(238, 178, 0))",
    ]
  );


  const { scrollY, scrollYProgress } = useScroll();


 useMotionValueEvent(scrollY, "change", (a) => {
    console.log("scrollY:", a);
  });

  useMotionValueEvent(scrollYProgress, "change", (a) => {
    console.log("scrollYProgress:", a);
  }); 


  const scrolling = useTransform(scrollYProgress, [0,1], [1,5])

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x: motionValue, scale: scrolling, rotateZ: rotating }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}
export default App;
*/
