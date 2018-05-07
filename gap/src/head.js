import React from 'react';
import './common-css/bootstrap.css';
import './common-css/ionicons.css';
import './layout-1/css/styles.css';
import './layout-1/css/responsive.css';
import logom from './images/edited2.jpg'

export class Head extends React.Component
{
	render()
	{
		return(<div><header>
		<div class="container-fluid position-relative no-side-padding">

			<a href="#" class="logo"><img src="" alt="Logo Image" /></a>

			<div class="menu-nav-icon" data-nav-menu="#main-menu"><i class="ion-navicon"></i></div>

			<ul class="main-menu visible-on-click" id="main-menu">
				<li><a href="#">Home</a></li>
				<li><a href="#">Categories</a></li>
				<li><a href="#">Features</a></li>
			</ul>

		</div>
	</header>
	<div class="slider"></div></div>);
	}
}
