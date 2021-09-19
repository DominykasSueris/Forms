import React, { Component } from 'react';
import Box from './Box';
import Boxform from './Boxform';


class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = { boxes: [] }
        this.create = this.create.bind(this)
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    render () {
        const boxes = this.state.boxes.map(box => (
            <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height} 
            color={box.color} 
            removeBox={() => this.remove(box.id)}
            />
        ))
        return (
            <div>
                <h1>Type of boxes</h1>
                <Boxform createBox={this.create} />
                {boxes}
            </div>
        )
    }
}
export default BoxList;
