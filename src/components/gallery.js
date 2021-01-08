import React from 'react';

// Importing card from bootstrap allows me to use the card component on my app
import Card from 'react-bootstrap/Card';

// Importing the Card deck from bootstrap allows me to use the card deck component on my app
import CardDeck from 'react-bootstrap/CardDeck';

// Importing the alert from bootstrap allows me to put a coloured alert box around the components on my app
import Alert from 'react-bootstrap/Alert';

// The accordation package allows me to use pop up text boxes on the app
import Accordion from 'react-bootstrap/Accordion';

export class Gallery extends React.Component {

  render() {
    return (

      // Here the alert tag is opened which puts a coloured box around the order form
      <Alert variant="info">
        {/* the alert header tag is used to display the header of the component on the app */}
        <Alert.Heading>View our menu here.</Alert.Heading>
        {/* the card deck tag opens the card deck component which lets me display three cards together in a row */}
        <CardDeck>
          {/* the card tag is used to display the image and text of each individual card */}
          <Card>
            {/* the card image tag is used to display the information need to show an image on each card */}
            <Card.Img variant="top" src="https://bakingamoment.com/wp-content/uploads/2018/06/IMG_8185-homemade-strawberry-ice-cream-square.jpg" width="200" height="300" />
            {/* the card body tag is used to display the text below the image of each individual card */}
            <Card.Body>
              <Card.Title>Strawberry</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
           </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://assets.bonappetit.com/photos/57aff24c1b3340441497600e/master/w_1280%2Cc_limit/mare-chocolate-ice-cream-h.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Dark Chocolate</Card.Title>
              <Card.Text>
                Our ridiculously decadent chocolate sorbet is made with more than 1KG
                of Valrhona Guanaja 70% chocolate and 300gms of pure Valrhona 100% cocoa
                in each container of sorbet. It’s about as chocolatey as one could make it!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.handletheheat.com/wp-content/uploads/2011/04/Light-Salted-Caramel-Ice-Cream.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Honeycomb Caramel</Card.Title>
              <Card.Text>
                Our Honeycomb Caramel contains two different honeycomb pieces,
                which gives it both a melt in your mouth caramel, and a crunchy one.
           </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <br />

        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://www.theflavorbender.com/wp-content/uploads/2019/07/Butterscotch-Pecan-Ice-Cream-1033.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Butterscotch</Card.Title>
              <Card.Text>
                We’ve built this flavour from scratch to get a rich butterscotch flavour.
                It’s made with moscavado sugar, butter and salt.
           </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Smooth Chocolate</Card.Title>
              <Card.Text>
                This exceptionally chocolatety flavour is made with 100% pure
                Valrhona Cocoa - arguably the best cocoa in the world!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Raspberry-Sorbet-for-Two_EXPS_CF2BZ20_42351_B12_03_2b-1-696x696.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Raspberry Sorbet</Card.Title>
              <Card.Text>
                We use 5KG of raspberries for each batch. It’s made with Irish spring water.
                Dairy Free and Vegan.
           </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />

        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://www.simplyrecipes.com/wp-content/uploads/2007/09/mint-chocolate-chip-ice-cream-horiz-a2-1600-1024x689.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Mint Chocolate</Card.Title>
              <Card.Text>
                Homemade mint chocolate chip ice cream, made with fresh mint, milk,
                cream, a custard base, and semi-sweet or dark chocolate.
   </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2020%2F02%2F01%2Fseasalticecream_125-s-2000.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Sea Salt </Card.Title>
              <Card.Text>
                Our best selling Sea Salt ice cream comes straight from the Atlantic Ocean,
                we make our own salt for this flavour, from Dingle sea water we collect at
                Bín Bán beach. Its filtered and boiled down and ready for our ice cream.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://joyfoodsunshine.com/wp-content/uploads/2020/07/homemade-vanilla-ice-cream-recipe-6.jpg" width="200" height="300" />
            <Card.Body>
              <Card.Title>Vanilla</Card.Title>
              <Card.Text>
                Everyone will be impressed by this smooth and creamy classic ice cream.
                Made with rggs, sugar, milk vanilla essence.
   </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />

        <Alert.Heading>View Our Ice-Cream Toppings Here.</Alert.Heading>
        {/* here is where the accordion pop up box component begins */}
        <Accordion defaultActiveKey="0">
          <Card>
            {/* The toggle tag is used so that when you click on each individual card header, the pop up section will collapse down and the text will appear */}
            <Accordion.Toggle as={Card.Header} eventKey="0" >
              SHORTCAKE CRUMBLE AND RASPBERRY SAUCE
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              {/* the card body tag displayes all the information that appears in the collapsable text box */}
              <Card.Body >This Raspberry Shortcake dessert is the perfect combination of some of our
              popular toppings! The sweet raspberry combines with the crumbly shortcake crumb to
        create a taste reminiscent of our favourite Jammie Dodger biscuit.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              MINI MARSHMALLOWS
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>A topping that’s been around forever but is still loved by young and old alike.
              Mix these Mini Marshmallows in with some Shortcake Crumble, Chocolate Drops and Chocella sauce
        and you have yourself a Rocky Road!</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              OREO CRUMB
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>This famous little chocolate cookie is delicious on its own but even better when
              added to soft ice cream! Just looks at the success McDonalds have had with their hugely
              popular Oreo McFlurry. Sprinkle on top of cones or mix into tubs – our oreo crumb will
        add a little crunch to your menu!</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              HUNDREDS AND THOUSANDS
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>We couldn’t talk about ice cream toppings and not mention this long-time favourite.
        Even after all these years these multicoloured sprinkles are still as popular as ever!</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              CHOCELLA
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>This creamy hazelnut sauce is one of our most popular luxury toppings at the minute.
              It can be served both hot and cold and is ideal for a chocolate tap, fountain or served from
              a squeezy bottle. Drizzle Chocella on top of ice cream, crepes and waffles to create a range
        of delicious desserts.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              STRAWBERRY SAUCE
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>This dark red sauce is especially popular with the younger generation. Add it to a
              range of our ice-creams or combine it with another topping to make a super sweet treat kids
        will love!</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Alert>
    );
  }
}