import React from "react"

// --- This is the part to add

import Amplify from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react"

Amplify.configure(config)


class App extends React.Component {
	render() {
		return (
			<div>Hello Hello</div>
		)
	}
}

export default withAuthenticator(App, true)