import React from 'react';
import pic1 from './images/marion-michele-330691.jpg';
import pic2 from './images/icons8-team-355979.jpg';
import pic3 from './images/brooke-lark-194251.jpg';
import pic4 from './images/icons8-team-355979.jpg';
import pic5 from './images/dmitri-popov-326976.jpg';
import pic6 from './images/averie-woodard-319832.jpg';

export class Data extends React.Component
{
	render()
	{
	var i;
	var lists = [];
	lists.push('null');
	lists.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim porta metus ut tristique. Quisque varius, arcu quis efficitur suscipit, erat lorem convallis dolor, a tristique nulla sapien quis tortor. Curabitur et mauris augue. Ut pulvinar elit non varius pulvinar. Phasellus quis diam imperdiet, vehicula nisi ut, auctor magna. Ut est nunc, gravida id suscipit nec, egestas vitae sem. Sed dignissim, sapien ut bibendum aliquam, eros odio rutrum ligula, non vehicula mi velit vel ligula. Integer consequat mauris orci, id semper massa condimentum et. Cras scelerisque massa vitae elit faucibus, et porta purus interdum.')
	lists.push('THIS IS TEJ!')
	lists.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim porta metus ut tristique. Quisque varius, arcu quis efficitur suscipit, erat lorem convallis dolor, a tristique nulla sapien quis tortor. Curabitur et mauris augue. Ut pulvinar elit non varius pulvinar. Phasellus quis diam imperdiet, vehicula nisi ut, auctor magna. Ut est nunc, gravida id suscipit nec, egestas vitae sem. Sed dignissim, sapien ut bibendum aliquam, eros odio rutrum ligula, non vehicula mi velit vel ligula. Integer consequat mauris orci, id semper massa condimentum et. Cras scelerisque massa vitae elit faucibus, et porta purus interdum.');
	lists.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim porta metus ut tristique. Quisque varius, arcu quis efficitur suscipit, erat lorem convallis dolor, a tristique nulla sapien quis tortor. Curabitur et mauris augue. Ut pulvinar elit non varius pulvinar. Phasellus quis diam imperdiet, vehicula nisi ut, auctor magna. Ut est nunc, gravida id suscipit nec, egestas vitae sem. Sed dignissim, sapien ut bibendum aliquam, eros odio rutrum ligula, non vehicula mi velit vel ligula. Integer consequat mauris orci, id semper massa condimentum et. Cras scelerisque massa vitae elit faucibus, et porta purus interdum.');
	lists.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim porta metus ut tristique. Quisque varius, arcu quis efficitur suscipit, erat lorem convallis dolor, a tristique nulla sapien quis tortor. Curabitur et mauris augue. Ut pulvinar elit non varius pulvinar. Phasellus quis diam imperdiet, vehicula nisi ut, auctor magna. Ut est nunc, gravida id suscipit nec, egestas vitae sem. Sed dignissim, sapien ut bibendum aliquam, eros odio rutrum ligula, non vehicula mi velit vel ligula. Integer consequat mauris orci, id semper massa condimentum et. Cras scelerisque massa vitae elit faucibus, et porta purus interdum.');
	lists.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim porta metus ut tristique. Quisque varius, arcu quis efficitur suscipit, erat lorem convallis dolor, a tristique nulla sapien quis tortor. Curabitur et mauris augue. Ut pulvinar elit non varius pulvinar. Phasellus quis diam imperdiet, vehicula nisi ut, auctor magna. Ut est nunc, gravida id suscipit nec, egestas vitae sem. Sed dignissim, sapien ut bibendum aliquam, eros odio rutrum ligula, non vehicula mi velit vel ligula. Integer consequat mauris orci, id semper massa condimentum et. Cras scelerisque massa vitae elit faucibus, et porta purus interdum.');
	lists.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim porta metus ut tristique. Quisque varius, arcu quis efficitur suscipit, erat lorem convallis dolor, a tristique nulla sapien quis tortor. Curabitur et mauris augue. Ut pulvinar elit non varius pulvinar. Phasellus quis diam imperdiet, vehicula nisi ut, auctor magna. Ut est nunc, gravida id suscipit nec, egestas vitae sem. Sed dignissim, sapien ut bibendum aliquam, eros odio rutrum ligula, non vehicula mi velit vel ligula. Integer consequat mauris orci, id semper massa condimentum et. Cras scelerisque massa vitae elit faucibus, et porta purus interdum.');
	lists.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim porta metus ut tristique. Quisque varius, arcu quis efficitur suscipit, erat lorem convallis dolor, a tristique nulla sapien quis tortor. Curabitur et mauris augue. Ut pulvinar elit non varius pulvinar. Phasellus quis diam imperdiet, vehicula nisi ut, auctor magna. Ut est nunc, gravida id suscipit nec, egestas vitae sem. Sed dignissim, sapien ut bibendum aliquam, eros odio rutrum ligula, non vehicula mi velit vel ligula. Integer consequat mauris orci, id semper massa condimentum et. Cras scelerisque massa vitae elit faucibus, et porta purus interdum.');

	var final = lists.map(list => <div><p>{list}</p><p>gap</p></div>);
	var ffinal = [];
	var state = true;
	

	for(i=1;i<lists.length;i++)
	{

		if((i%5) >= 2)
		{
			ffinal.push(
				<div class="col-lg-4 col-md-6">
					<div class="card h-100">
						<div class="single-post post-style-1">

							<div class="blog-image"><img src= {pic1} alt="Blog Image" /></div>

							<a class="avatar" href="#"><img src={pic2} /></a>

							<div class="blog-info">

								<h4 class="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
								Concepts in Physics?</b></a></h4>

								<ul class="post-footer">
									<li><a href="#"><i class="ion-heart"></i>57</a></li>
									<li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
									<li><a href="#"><i class="ion-eye"></i>138</a></li>
								</ul>

							</div>
						</div>
					</div>
				</div>
			);
		}

		if((i%5) === 1)
		{
			ffinal.push(<div class="col-lg-8 col-md-12">
					<div class="card h-100">
						<div class="single-post post-style-2">

							<div class="blog-image"><img src={pic3} alt="Blog Image" /></div>

							<div class="blog-info">

								<h6 class="pre-title"><a href="#"><b>HEALTH</b></a></h6>

								<h4 class="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
									Concepts in Physics?</b></a></h4>

								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

								<div class="avatar-area">
									<a class="avatar" href="#"><img src={pic4} alt="Profile Image" /></a>
									<div class="right-area">
										<a class="name" href="#"><b>Lora Plamer</b></a>
										<h6 class="date" href="#">on Sep 29, 2017 at 9:48am</h6>
									</div>
								</div>

								<ul class="post-footer">
									<li><a href="#"><i class="ion-heart"></i>57</a></li>
									<li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
									<li><a href="#"><i class="ion-eye"></i>138</a></li>
								</ul>

							</div>

						</div>

					</div>
				</div>);
		}

		if((i%5) === 0)
		{
			ffinal.push(<div class="col-lg-4 col-md-6">
					<div class="card h-100">
						<div class="single-post post-style-1">

							<div class="blog-image"><img src={pic5} alt="Blog Image" /></div>

							<a class="avatar" href="#"><img src={pic6} alt="Profile Image" /></a>

							<h4 class="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
								Concepts in Physics?</b></a></h4>

							<ul class="post-footer">
								<li><a href="#"><i class="ion-heart"></i>57</a></li>
								<li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
								<li><a href="#"><i class="ion-eye"></i>138</a></li>
							</ul>

						</div>
					</div>
				</div>);
		}

	}
	
	return(<div class="row">
		{ffinal}
		</div>);
	}
}