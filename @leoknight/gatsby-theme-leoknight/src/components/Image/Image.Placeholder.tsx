import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Doodle from './Doodle'
import mediaqueries from "@styles/media";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ccc;
  color: #898989;
  font-size: 32px;
  font-weight: 600;
  overflow:hidden;

  ${mediaqueries.phablet`
    font-size: 28px;
  `}
`;

const ImagePlaceholder: React.FC<{}> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions(containerRef.current.getBoundingClientRect());

    const handleResize = () =>
      setDimensions(containerRef.current.getBoundingClientRect());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(`${dimensions.width} x ${dimensions.height}`)
  return (
    <Container ref={containerRef} {...props}>
        {/* {dimensions.width} x {dimensions.height} */}
        <Doodle
          grid="5x4"
          rule={`
          :doodle {
            width: 100%;
            height: 100%;
            background: @multi(10, (
              conic-gradient(
                from @r(360deg),
                @p(#00b8a9, #f8f3d4, #f6416c,  #ffde7d) @r(100%),
                @p(#00b8a9, #f8f3d4, #f6416c,  #ffde7d) @lr()
              )
            ));
          }
          
          `}
        />
    </Container>
  );
};

export default ImagePlaceholder;
