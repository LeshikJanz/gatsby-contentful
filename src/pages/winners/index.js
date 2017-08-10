import React from 'react';
import { connect } from "react-redux"
import LatestNews from "../../components/LatestNews"
import Following from "../../components/Following/Following"

const Winners = (props) => {
  console.log('props');
  console.log(props);

  return(
    <div>
      <div className="info">
        {/*<LatestNews latestNews={latestNews}/>*/}
        {/*<Following />*/}
      </div>
    </div>
  );
}

const mapStateToProps = ({ News }) => {
  return { News }
}

export default connect(mapStateToProps, null)(Winners)
