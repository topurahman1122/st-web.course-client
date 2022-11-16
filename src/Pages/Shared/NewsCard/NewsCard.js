import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';



const NewsCard = ({ news }) => {
    //console.log(news);
    const { description, _id, title, img, price, } = news;
    return (
        <Card className="mb-5">
            <Card.Header>{_id}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={img} />
                <Card.Text>
                    <h2>price</h2>
                    <h3>{price}</h3>
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{description}
                <div>
                    <FaStar className='text-warning'>4.5</FaStar>
                    <FaStar className='text-warning'>4.5</FaStar>
                    <FaStar className='text-warning'>4.5</FaStar>

                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;