import React, {useState} from 'react'
import Section from '../layout/Section'
import Title from '../text/Title'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import Map from '@/contact/Map'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import {ScaleLoader} from "react-spinners";
import {toast} from 'react-toastify';
import Messages from "@/alerts/Messages";
import Button from "@/Button";

const Card = styled('div')`
      box-shadow: ${props => props.theme.card.shadow};
`;

const emailRegex = "/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/"

function Contact ({ big }) {
	const i18n = useI18n();
	const [formData, setFormData] = useState({});

	const handleChange = ({name, value}) => {
		// this.setState({formData: Object.assign({}, this.state.formData, {[name]: value})})
		setFormData({...formData, [name]:value})
	};

	const handleSubmit = () => {
		let formData = new FormData();
		formData.append("subject", "ASRR contact form: " +this.props.page + "/" + this.props.name);
		formData.append("recipient", "reangelo7@gmail.com");
		let body = "Form contents: \n";
		//
		for (const key in formData) {
			body = body.concat(`[${key} = ${formData[key]}]`);
			// console.log(body)
			// handleChange(key, "");
		}

		console.log(body);
		console.log(JSON.stringify(body));
		formData.append("body", body);

		console.log(formData);

		fetch(process.env.NEXT_PUBLIC_API_BASE_URL, {
			method: 'POST',
			body: formData,
		}).then(function (response) {
			if (!response.ok) {
				response.json().then(function (object) {
					console.log(object);
					console.log(object.propertyErrors);
					// self.setState({formError: object.propertyErrors})
				});
				throw new Error(response.statusText);
			}
			// self.setState({success: true});
			document.getElementById("contact-form").reset();
			console.log(response)
		}).catch(error => console.log(error));
	};


	return (
			<Section>
				<Title title={'contact.title.header'} text={'contact.title.text'}/>
				<div className="contact">
					<form id="contact-form" className="form">
						<Input onChange={(e)=> handleChange(e.target)} className="no-margin" name="name" type="text"
							   required={true} placeholder={i18n.t('contact.form.name.placeholder')}/>
						<Input onChange={(e)=> handleChange(e.target)} name="organization" type="text" required={true}
							   placeholder={i18n.t('contact.form.organization.placeholder')}/>
						<Input required={true} pattern={emailRegex} onChange={(e)=> handleChange(e.target)} name="email" type="email"
							   placeholder={i18n.t('contact.form.email.placeholder')}/>
						<Input onChange={(e)=> handleChange(e.target)} name="message" last textArea={true} type="text"
							   required={true} placeholder={i18n.t('contact.form.message.placeholder')}/>
						<Button custom to="/portfolio" title="See All Projects"/>
						<ReadMore margin action>{i18n.t('buttons.submit')}</ReadMore>
						<ScaleLoader/>

						<div className="contact-adress">
							<p>Adress: Veraartlaan 12</p>
							<p>2288 GM Rijswijk, The Netherlands</p>
							<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7" className="link">Get Directions</a>
							<a href="mailto:asrr@contact.nl" target="_blank" rel="noopener noreferrer" className="link">Email: contact@asrr.nl</a>
						</div>

						<Card className="map-container">
							<Map/>
						</Card>

					</form>
				</div>
			</Section>
	)
}

export default Contact
