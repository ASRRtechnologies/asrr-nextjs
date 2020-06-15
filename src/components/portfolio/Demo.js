import React, {useState} from 'react';
import laptop from "#/demo/laptop.png";

function Demo(props) {

	const [demoActive, setDemoActive] = useState(false);
	return (
		<div className="embedded-wrapper">
			<img alt="laptop-display" className="embedded-image" src={laptop}/>
			<div onClick={()=> {setDemoActive(true)}} className={!demoActive ? `embedded-message` : "embedded-message inactive"}>
				<h4>Click to try out demo!</h4>
			</div>
			<iframe title="test" id="scaled-frame" src={props.url}>
			</iframe>
		</div>
	);
}

export default Demo;
