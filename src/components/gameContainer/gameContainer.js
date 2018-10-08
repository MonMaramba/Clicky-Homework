import React, { Component } from 'react';
import Cards from '../cards';
import images from "../../images.json";
import "./gameContainer.css";

class GameContainer extends Component {
    state = {
        images,
        message: "Click any to start",
        score: 0,
        topScore: 0
    };

    handleClick = (id, clicked) => {
        const imageOrder = this.state.images;

        if (clicked) {
            imageOrder.forEach((image, index) => {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "Sorry, that was incorrect!",
                score: 0
            })
        }
        else {
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].clicked = true;
                }
            });

            const { topScore, score } = this.state;
            const newScore = score +1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "You got that right!",
                score: newScore,
                topScore: newTopScore
            })
        }
    };
    
    render() {
        return (
            <div className="container-fluid cardContainer">
                <div className="gameMessage text-center">
                    <p>{this.state.message}</p>
                </div>
                <div className="gameScores text-center">
                    <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                </div>
              <div className="container">
                  
                  <div className="row col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                      {this.state.images.map(image => (
                          <Cards
                                key={image.id}
                                id={image.id}
                                name={image.name}
                                clicked={image.clicked}
                                image={image.image}
                                handleClick={this.handleClick}
                                />
                      ))}
                      </div>
                    </div>  
            </div>
        )
    }
}

export default GameContainer;