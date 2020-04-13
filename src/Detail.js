import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const contentStyle = {
	display: 'flex',
	height: '100%',
	textAlign: 'center',
	marginTop: '50px'
}
const navStyle = {
	marginTop: '210px',
	textAlign: 'left',
}

class Detail extends React.Component {
  constructor(props){
	  super(props);
	  /*
	  this.props.location.state={
		  title: 'name',
		  img: 'img',
		  demo: 'demo',
		  src: 'src'
	  };*/
  }
  render() {
    return (
      <div className="contain">
		<div>
			<header className="header">	  
				<Header />
			</header>
		</div>
		<div className="content" style={contentStyle}>
			<main className="main">
				<div className="content">
				<h2 className="title">{this.props.location.state.title}</h2>
				<div>
					  <img src={require('./images/' + this.props.location.state.img)}></img>
				</div>
				<p>{this.props.location.state.content}
				</p>
				<div >
					<article className="paragraph">
						<p>We Are Still In welcomes the Japan Climate Initiative’s call to raise the ambition of the Japan Government’s long-term climate strategy submitted today to UN ahead of the G20.  </p>
						<br/>
						<p>Cities, states, businesses, and other actors around the world are responding to the urgency clearly laid out in the latest IPCC report point by taking their own steps to reduce their carbon footprint and increasingly aligning with a 1.5 C future. The IPCC report establishes clear milestones for the international community: in the next 10 years, we need to have cut global emissions in half, and by 2050, we need to have decarbonized completely. The world needs all hands-on-deck to achieve a climate safe resilient future for all. </p>
						<br/>
						<p>In the United States, over 3700 businesses, mayors, governors, tribal leaders, academics, faith groups, and investors are taking bold climate action and advocating for strong climate policies. These actors are a part of the We Are Still In coalition, representing 50 US states, 155 million people, and $9.45 trillion in GDP.  </p>
						<br/>
						<p>Despite the lack of federal action, this new face of climate leadership is making the pathway to decarbonization of the United States by 2050 possible.   </p>
						<br/>
						<p>The State of New York is finalizing the country’s most aggressive plan for tackling climate change and eliminating net greenhouse gas (GHG) emissions by 2050, while on the west coast, Mayor Garcetti released Los Angeles’ own “Green New Deal,” an action plan to go carbon neutral by 2050. Large businesses and universities across the country are similarly raising their ambition and setting themselves on a pathway to decarbonization. These actions not only respond to what the latest science requires; they also create the opportunity to deliver more green jobs, better infrastructure, improved health and stronger economic development for their jurisdictions.  </p>
						<br/>
						<p>Influential US companies are also leading the charge. From committing to reducing emissions in line with the goals of the Paris Agreement (Science-Based Targets),  100 percent renewable energy goals (RE100) by 2050 at the latest, smart energy use (EP100) , electrification of vehicles (EV100), deforestation-free supply chains, to advocating for bold carbon pricing policies in red and blue states, US companies are showing that investing in the low carbon economy is good business.  </p>
						<br/>
						<p>With these examples and more, We Are Still In stands shoulder to shoulder with subnational and non-state actors around the world that are leading by example through their climate actions and encouraging their national governments to build a low-carbon future together.  </p>
						<br/>
						<p>In Japan, there are numerous actors who are leading by example. From the 42 companies including Sony and Ricoh that have committed to a Science Based Target and the 13 companies such as AEON, FUJIFILM Holdings and Sekisui House,  that have committed to RE100, to major Japanese cities such as Tokyo and Kyoto which have committed to decarbonizing their emissions by 2050, Japan has within it the leaders for its own low-carbon transformation.  </p>
						<br/>
						<p>As signatories of the Japan Climate Initiative, these actors and others have conveyed that they stand ready to work with the government of Japan to accelerate the country’s low-carbon transition. What is urgently needed is for the Japanese government to embrace the leadership of its own large companies, small and medium-sized enterprises, national and local governments, universities, faith leaders and others and, through a bold vision aligned with the IPCC and Paris, put Japan on an ambitious path towards decarbonization.  </p>
						<br/>
						<p>With its privileged role this year as G20 president, Japan could set an example of leadership for other G20 economies and build the momentum for the low-carbon transformation that the world urgently needs to see.   </p>
						<br/>
						<p>We Are Still In and the Japan Climate Initiative are a part of the Alliances for Climate Action (ACA), a growing global network of domestic multi-stakeholder coalitions in Argentina, Japan, Mexico, and the United States. The coalitions are committed to supporting the delivery and enhancement of their countries’ climate goals. ACA connects cities, states, the private sector, investors, universities and civil society at the domestic level to work with each other and with their national governments to drive climate action. The ACA is supported by seven global partners including the C40 Climate Leadership group, CDP, Climate Action Network, Fundación AVINA, The Climate Group, the We Mean Business Coalition, and WWF.  </p>
					</article>
				</div>
				</div>
			</main>
			<div className="nav" style={navStyle}>
				<nav >
					<Nav />
				</nav>
			</div>
		</div>
		<div className="footer">
			<footer id="footer">
				<Footer />
			</footer>
		</div>
	</div>
    );
  }
}

export default Detail