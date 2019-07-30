import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free CockTail",
                info: "Quis qui id tempor ullamco.Deserunt sunt in tempor sunt nulla exercitation laborum aliquip velit aliqua."
            },
            {
                icon: <FaHiking />,
                title: "Free CockTail",
                info: "Quis qui id tempor ullamco.Deserunt sunt in tempor sunt nulla exercitation laborum aliquip velit aliqua."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free CockTail",
                info: "Quis qui id tempor ullamco.Deserunt sunt in tempor sunt nulla exercitation laborum aliquip velit aliqua."
            },
            {
                icon: <FaBeer />,
                title: "Free CockTail",
                info: "Quis qui id tempor ullamco.Deserunt sunt in tempor sunt nulla exercitation laborum aliquip velit aliqua."
            },
        ]
    }
    render() {
        return (
            <div>
                <section className="services">
                    <Title title="Services" />
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>
                </section>

            </div>
        )
    }
}
