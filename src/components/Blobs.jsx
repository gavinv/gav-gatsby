import React from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% {
  }
  32% {
    transform: translate(.8rem, 2.4rem) rotate(8deg);
  }
  56% {
    transform: translate(2.4rem, .8rem) rotate(10deg);
  }
  100% {
    transform: translate(0) rotate(0deg);
  }
`

const floatInverse = keyframes`
  0% {
  }
  32% {
    transform: translate(-2.4rem, -.8rem) rotate(-10deg);
  }
  56% {
    transform: translate(-.8rem, -2.4rem) rotate(-8deg);
  }
  100% {
    transform: translate(0) rotate(0deg);
  }
`

const Wrapper = styled.div`
  width: auto;
  max-height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  right: -16vw;
  overflow: hidden;
  .blob-0 {
    /* will-change: transform;
    animation: ${float} 16s ease-in-out 256ms 3; */
    svg {
      transform: rotate(83deg);
    }
  }
  .blob-1 {
    /* will-change: transform;
    animation: ${floatInverse} 24s ease-in-out 3; */
    svg {
      transform: rotate(180deg) translate(-8vw, 16vh);
    }
  }
  .blob-2 {
    /* will-change: transform;
    animation: ${float} 15.6s ease-in-out 512ms 3; */
    svg {
    transform: rotate(80deg) translate(-24vw, -64vh);
    }
  }
`

const Blobs = () => {
  return (
    <>
      <Wrapper className="blobs-background">
        <div className="blob-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="225.293" height="202.326"><path d="M201.756 159.272c-25.712 19.069-46.6 45.698-111.018 9.703S-9.249 99.283 17.715 79.25s7.81-65.054 51.78-61.692S160.525 57.272 193.59 92.7s33.88 47.503 8.167 66.572z" fill="#982062"/></svg>
        </div>
        <div className="blob-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="766.795" height="741.456"><path d="M601.201 322.187c72.346 143.989 244.22 154.083 124.167 255.175s-386.532 203.06-604.375 149.191-79.915-432.488-55.468-539.595S178.882 21.364 435.983 1.406 528.855 178.2 601.201 322.187z" fill="#33a9ac"/></svg>
        </div>
        <div className="blob-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="242.806" height="232.288"><path d="M57.291 26.686c29.327-30.315 41.464 15.6 82.164 18.84s60.972-31.586 80.635-5.878 15.467 63.436-1.975 108.692 2.535 95.122-67.79 72.33-104.938-5.39-128.196-53.886S27.959 57 57.29 26.686z" fill="#ffa646"/></svg>
        </div>
      </Wrapper>
    </>
  )
}

export default Blobs