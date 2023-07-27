const HEAD = (
  <div style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "10px solid black",
    position: "absolute",
    top: "50px",
    right: "-30px"
  }}/>
)

const BODY = (
  <div style={{
    height: "100px",
    width: "10px",
    background:"black",
    position:"absolute",
    top: "119px",
    right: "0px"
  }}/>
)

const RIGHT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    right: "-100px",
    top: "150px",
    transform: "rotate(-30deg)",
    transformOrigin: "left bottom"
  }}/>
)

const LEFT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    right: "10px",
    top: "150px",
    transform: "rotate(30deg)",
    transformOrigin: "right bottom"
  }}/>
)

const RIGHT_LEG = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    right: "-90px",
    top: "210px",
    transform: "rotate(60deg)",
    transformOrigin: "left bottom"
  }}/>
)

const LEFT_LEG = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "210px",
    right: "0px",
    rotate: "-60deg",
    transformOrigin: "right bottom"

  }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
    <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: "0",
            right: "0px"
        }}/>    
        <div style={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px"
        }}/>        
        <div style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px"
        }}/>
        <div style={{height: "10px", width: "250px", background: "black"}}/>
    </div>
  )
}
