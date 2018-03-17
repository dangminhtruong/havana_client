import React, { Component } from 'react';

class Paginate extends Component {
    render(){

        let list = [];
        for(let i=1; i<= this.props.totalPages; i++){
            list.push(<li key={i}><span>1</span></li>);
        }

        return (
            <div className="col-md-12">
                <ul className="pagination pagination-sm">
                  {list}
                </ul>
            </div>
        )
    }
}

export default Paginate;