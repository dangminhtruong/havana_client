import React, { Component } from 'react';

class Paginate extends Component {
    render(){
        let list = [];
        for(var i=1; i<= this.props.totalPages; ++i){
            let page = i;
            list.push(<li key={i} onClick={ () => this.props.paginate(page) }><span>{i}</span></li>);
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