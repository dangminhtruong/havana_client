import React, { Component } from 'react';

class BestSeller extends Component {

    render() {
        return (
            <div className="product-bottom">
						<h3 className="cate">Best Sellers</h3>
					<div className="product-go">
						<div className=" fashion-grid">
							<a href="single.html"><img className="img-responsive " src="images/pr.jpg" alt=""/></a>	
						</div>
						<div className=" fashion-grid1">
							<h6 className="best2"><a href="single.html" >Lorem ipsum dolor sitamet consectetuer  </a></h6>
							<span className=" price-in1"> $40.00</span>
						</div>	
						<div className="clearfix"> </div>
					</div>
					<div className="product-go">
						<div className=" fashion-grid">
							<a href="single.html"><img className="img-responsive " src="images/pr1.jpg" alt=""/></a>	
						</div>
						<div className=" fashion-grid1">
							<h6 className="best2"><a href="single.html" >Lorem ipsum dolor sitamet consectetuer  </a></h6>
							<span className=" price-in1"> $40.00</span>
						</div>	
						<div className="clearfix"> </div>
					</div>
					<div className="product-go">
						<div className=" fashion-grid">
							<a href="single.html"><img className="img-responsive " src="images/pr2.jpg" alt=""/></a>	
						</div>
						<div className=" fashion-grid1">
							<h6 className="best2"><a href="single.html" >Lorem ipsum dolor sitamet consectetuer  </a></h6>
							<span className=" price-in1"> $40.00</span>
						</div>	
						<div className="clearfix"> </div>
					</div>	
					<div className="product-go">
						<div className=" fashion-grid">
							<a href="single.html"><img className="img-responsive " src="images/pr3.jpg" alt=""/></a>	
						</div>
						<div className=" fashion-grid1">
							<h6 className="best2"><a href="single.html" >Lorem ipsum dolor sitamet consectetuer  </a></h6>
							<span className=" price-in1"> $40.00</span>
						</div>	
						<div className="clearfix"> </div>
					</div>		
				</div>
        )
    }

}

export default BestSeller;