import React, { Component } from 'react';
import defaultBg from '../images/room-1.jpeg';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import {RoomContext} from '../../src/Context';

export default class SingleRoom extends Component {
  constructor(props){
    super(props)
    //console.log(this.props);
    this.state = {
      slug : this.props.match.params.slug,
      defaultBg
    }
  }
  static contextType = RoomContext;
  //componentDidMount(){}
    render() {
      const { getRoom } = this.context;
      const room = getRoom(this.state.slug);
      if(!room){
        return <div className = "error">
          <h3>no such room found ...</h3>
          <Link to = "/rooms" className = "btn-primary">Back To Home</Link>
        </div>
      }
      const{name , description , capacity , size , price , extras , breakfast , pets , images} = room
      return(
      <Hero hero = "roomsHero">
          <Banner title = {`${name} room`}><Link to = "/rooms" className = "btn-primary">Back To Rooms</Link></Banner>
      </Hero>)
    }
}
