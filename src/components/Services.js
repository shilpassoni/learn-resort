import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
    state={
      services:[
          {
              icon:<FaCocktail/>,
              title:"free cocktails",
              info:"You will get free cocktails, with every meal you enjoy!"
          },
          {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Enjoy endless hiking with beautiful nature!"
          },
          {
            icon:<FaShuttleVan/>,
            title:"free shuttle",
            info:"Get Free shuttle services with every outing!"
          },
          {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:"Enjoy stronger beer, with every meal you enjoy!"
          }
      ]
    }
    render() {
        return (
           <section className="services">
             <Title title="services" />
             <div className="services-center">
              {this.state.services.map((item, index) => {
                return(
                  <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                );
               })}   
              </div>
           </section>
        )
    }
}
