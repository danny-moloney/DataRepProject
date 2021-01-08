import React from 'react';
import Alert from 'react-bootstrap/Alert';

// the carousel package allows me to display multiple images on a slide show
import Carousel from 'react-bootstrap/Carousel';


// imported Figure package from bootstrap so i can display images with text beneath them.
import Figure from 'react-bootstrap/Figure';


export class Home extends React.Component {
    render() {
        return (


            // the alert allows me to put a coloured container around the page content
            <Alert variant="info">


                <Figure>
                    <Figure.Image

                        // the width and lenght tags allow me to decide the size of the image on the page.
                        width={400}
                        height={400}
                        alt="171x180"
                        src="https://imgix.bustle.com/mic/w5on5bdmyg6liv8lhjm5ufpzb71bgenrjg1n5dbyejfxz0dr9v0m7y9gdmrhaa9q.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format%2Ccompress"
                    />

                    {/* The figure caption tag lets me display tect below the imge on the app*/}
                    <Figure.Caption>
                        Craving Ice cream and frozen yoghurt? Discover restaurants near you and get top Ice cream and frozen yoghurt options delivered to your door
  </Figure.Caption>
                </Figure>
                {/* Here is where the carousel component is opened, this component allows me to display multiple images on a slide show*/}
                <Carousel>
                    {/* The carousel item tag is the opening tag for each individual image displayed on the carousel, it also includes the text displayed on the image*/}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg" Height="500"
                            alt="First slide"
                        />
                        {/* The carousel caption tag is used to include text that displayes on each image.*/}
                        <Carousel.Caption>
                            <h3> online 24/7</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://joyfoodsunshine.com/wp-content/uploads/2020/07/homemade-vanilla-ice-cream-recipe-6.jpg" Height="500"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>All you can eat ice-cream</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.handletheheat.com/wp-content/uploads/2011/04/Light-Salted-Caramel-Ice-Cream.jpg" Height="500"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>nine different flavors</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Alert>
        )
    }

}