import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// class CampsiteInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

function RenderComments({comments}) {
    if (comments) {
      return (
        <div className="col-md-5 and m-1">
          <h4>Comments</h4>
          {comments.map((comment) => (
            <div key={comment.id}>
              {console.log("the comment is - ", comment)}
              {comment.text} <br /> {comment.author}{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </div>
          ))}
        </div>
      );
    }
    return <div></div>;
  }

function RenderCampsite({campsite}) {
    return (
      <div className="col-md-5 and m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function CampsiteInfo(props) {
    if (props.campsite) {
      return (
        <div className="container">
          <div className="row">
            {this.renderCampsite(props.campsite)}
            {this.renderComments(props.campsite.comments)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default CampsiteInfo;
