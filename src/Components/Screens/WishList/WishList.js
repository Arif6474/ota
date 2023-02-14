import React from 'react'
import MyWishList from './MyWishList/MyWishList'
import './WishList.css'
function WishList() {
  return (
   <div>
     <div className="my-courses">
      <div className="container">
        <div className="wishlist">
          <div className="wishlit-content">
            <div className="section-title-wrapper">
              <h1 className="section-title">My Courses</h1>
            </div>
          </div>
          <div className="wishlist-content">
          <div className="countdown-box-wrapper">
                            <div className="countdown-content">
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">2</h1>
                                        <p>Pending</p>
                                    </div>
                                </div>
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">10</h1>
                                        <p>Completed</p>
                                    </div>
                                </div>
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">2</h1>
                                        <p>Ongoing</p>
                                    </div>
                                </div>
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">5</h1>
                                        <p>Wishlist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </div>
    <MyWishList/>
   </div>
  )
}

export default WishList