import React, { Component } from 'react';

const D3blackbox = function D3blackboxHoc(D3render) {
    class Blackbox extends Component {
        componentDidMount() {
            D3render.call(this);
        }

        componentDidUpdate() {
            D3render.call(this);
        }

        render() {
            const { x, y } = this.props;
            return <g transform={`translate(${x}, ${y})`} ref="anchor" />;
        }
    }

    return Blackbox;
}

export default D3blackbox;
