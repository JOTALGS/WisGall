import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/collection.css';
import Trends from '../components/Trends';
import UserSuggestions from '../components/UserSuggestions';
import PostItem from '../components/PostItem';

const Collection = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-9 order-md-2 mt-2">
            {/* Main content */}
            <PostItem></PostItem>
        </div>
        <div className="col-md-3 order-md-3 mt-2">
            {/* People You May Know */}
            <UserSuggestions></UserSuggestions>
        </div>
    </div>
</div>
);
}

export default Collection