import React from 'react';
import { Data } from './data';

export class Body extends React.Component
{
	render()
	{
		return(<section class="blog-area section">
		<div class="container">
		<Data />
		</div></section>);
	}
}