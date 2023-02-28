import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class NewsItem extends Component {
    render() {
        let { title, desription, imageUrl, newsUrl } = this.props
        return (
            <div className='my-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desription}
                        </Card.Text>
                        <a className="btn btn-sm btn-dark " href={newsUrl} target="_
                        ">Read more...</a>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
