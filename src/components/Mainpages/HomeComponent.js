import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Jumbotron } from "reactstrap";


function RenderTopperItem({top}){
  return(
    <Card>
      <CardImg src={top.image} alt={top.name} />
      <CardBody>
        <CardTitle>{top.name}</CardTitle>
        <CardText>{top.score}</CardText>
      </CardBody>
    </Card>
  )
}

function RenderPlacementItem({placemt}){
  return(
    <Card>
      <CardImg src={placemt.image} alt={placemt.name}/>
      <CardBody>
        <CardTitle>{placemt.name}</CardTitle>
        <CardText>{placemt.company}</CardText>
      </CardBody>
    </Card>
  )
}

const Home = (props) => {
  const top = props.topper.map((top) => {
    return(
      <div key={top.id} className="col-3">
        <RenderTopperItem top={top}/>
      </div>
    )
  })

  const placemt = props.placement.map((placemt) => {
    return(
      <div key={placemt.id} className="col-3">
        <RenderPlacementItem placemt={placemt} />
      </div>
    )
  }) 


return(
  <>
  <div className="jumbotron">
    <div className="container">
        <div className="row row-header">
            <div className="col-12 col-sm-6">
                <h1>Master of Computer Application</h1>
                    <p>
                      Master of Computer Application is the best course in Nehru College of Engineering and Research Centre.
                    </p>
              </div>
            </div>
          </div>
        </div>
  <div className="container">
    <h3>TOPPERS</h3>
    <hr />
    <div className="col-8 col-md-8 m-2">
      <div className="row">
        {top}
      </div>
    </div>
  </div>
  <div className="container">
      <h3>PLACEMENTS</h3>
      <hr />
      <div className="col-8 col-md-8 m-1">
        <div className="row">
          {placemt}
        </div>
      </div>
    </div>
    </>

)
}

export default Home;
