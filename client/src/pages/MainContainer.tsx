import React from 'react';
import { Card, Columns, Container } from 'react-bulma-components';
import jsonData from '../assets/data/orders.json'; // Replace with your actual JSON data file
// import CartComponent from './CartComponent'; // Import your cart component here

const MainContainer = () => {
  return (
    <Container>
      <Columns>
        <Columns.Column size={10}>
          {jsonData.map((product) => (
            <Columns.Column key={product.itemId} size={5}>
              <Card>
                  <Card.Content>
                    <Columns>
                      <Columns.Column>
                        <div className="content">
                          <p className="title">{product.itemName}</p>
                          <p className="subtitle">${product.price}</p>
                          <p>{product.description}</p>
                        </div>
                      </Columns.Column>
                      <Columns.Column size={4}>
                        <Card.Image size="square" src={product.imageUrl} />
                      </Columns.Column>
                    </Columns>
                  </Card.Content>
                </Card>
            </Columns.Column>
          ))}
        </Columns.Column>
        <Columns.Column size={2}>
          cart
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default MainContainer;