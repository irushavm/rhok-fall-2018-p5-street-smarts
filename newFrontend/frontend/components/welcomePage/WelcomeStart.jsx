import {Component} from 'react'
import Form from '../styles/Form'
import Router from 'next/router'
import TermsAndConditions from '../../resources/termsAndService'

export default class WelcomePage extends Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit({target}) {
		Router.push({
			pathname: '/welcome/complete',
			query: {
				name: target.elements.name.value,
				email: target.elements.email.value
			}
		})
	}
	render() {
		let terms;
		const {type} = this.props.query;
		switch (type) {
			case 'candidate': 
			case 'sponsor': 
			case 'employer':
				terms = TermsAndConditions[type]
				break;
			default:
				return <div>ERROR</div>
		}
		return (
			<div>
				<div>
					<section >
						<Form onSubmit={this.onSubmit}>
							<h1>Welcome!</h1>
							<div>
								<label htmlFor="textinput">Name</label>
								<input type="text" name="name" onChange={this.onInputChange}/>
							</div>
							<div>
								<label htmlFor="textinput" mr={2}>Email</label>
								<input type="email" name="email" onChange={this.onInputChange}/>
							</div>
							<div>
								<label htmlFor="textArea" mr={2}>Terms & Conditions</label>
								<textarea type="text" name="textArea" id="textArea" readonly="true" rows="30" style={{resize: "none"}}>
									{terms}
								</textarea>
							</div>
							<div>
								<button>I Accept</button>
							</div>
						</Form>
					</section>
				</div>
			</div>
		)
	}
}
