import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	color: blue;
	&:hover {
		color: red;
	}
`

export default () => <Wrapper><div>Hello ServerMonitorPage</div></Wrapper>
