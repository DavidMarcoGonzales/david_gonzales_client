/**
 * Created by David on 10/26/2016.
 */

import React from "react";
import {Link} from "react-router";

class NavLink extends React.Component {
  render() {
    return <Link {...this.props} />
  }
}


export default NavLink;
