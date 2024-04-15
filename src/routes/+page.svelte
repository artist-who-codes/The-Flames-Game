<script>
	import { Flames } from './flames.js';
	// @ts-ignore
	import Saos from 'saos';
	let name1 = '';
	let name2 = '';
	let Result;
	export var relation = '';
	function calculate() {
		console.log(name1, name2);
		relation = Flames(name1, name2);
	}
</script>

<div class="Background1">
	<div class="Content">
		<div>
			<div class="Header">The Flames Game</div>
			<p class="text">Check the relationship between you and your favorite person</p>
			<div class="names">
				<input type="text" id="name1" placeholder="Your Name" bind:value={name1} />
				<br /><br />
				<input type="text" id="name2" placeholder="Partner's Name" bind:value={name2} /><br /><br />
				<button
					on:click={() => {
						calculate();
					}}>Lets Go</button
				>
				{#if relation === 'F'}
					<Saos animation={'fade-in 2s both'}>
						<div class="Result" bind:this={Result}>
							<div class="Friends">
								<div class="Header">Friends</div>
								<br />
								<div class="Para">You guys are just Friends. Dont expect too much. &#128530;</div>
							</div>
							<script>
								window.scrollBy({
									top: 1000,
									left: 0,
									behavior: 'smooth'
								});
							</script>
						</div>
					</Saos>
				{/if}
				{#if relation === 'L'}
					<Saos animation={'fade-in 2s both'}>
						<div class="Result">
							<div class="Love">
								<div class="Header">Love</div>
								<br />
								<div class="Para">
									Alright. Is there something blooming?
									<br />&#128525;
								</div>
							</div>
							<script>
								window.scrollBy({
									top: 1000,
									left: 0,
									behavior: 'smooth'
								});
							</script>
						</div>
					</Saos>
				{/if}
				{#if relation === 'A'}
					<Saos animation={'fade-in 2s both'}>
						<div class="Result">
							<div class="Affection">
								<div class="Header">Affection</div>
								<br />
								<div class="Para">
									Hmm... You Guys like Each other?<br />&#128521;
								</div>
							</div>
							<script>
								window.scrollBy({
									top: 1000,
									left: 0,
									behavior: 'smooth'
								});
							</script>
						</div>
					</Saos>
				{/if}
				{#if relation === 'M'}
					<Saos animation={'fade-in 2s both'}>
						<div class="Result">
							<div class="Marriage">
								<div class="Header">Marriage</div>
								<br />
								<div class="Para">
									Whoaa! Congratulations!!!<br />&#129321;
								</div>
							</div>
							<script>
								window.scrollBy({
									top: 1000,
									left: 0,
									behavior: 'smooth'
								});
							</script>
						</div>
					</Saos>
				{/if}
				{#if relation === 'E'}
					<Saos animation={'fade-in 2s both'}>
						<div class="Result" />
						<div class="Enemy">
							<div class="Header">Enemy</div>
							<br />
							<div class="Para">
								Umm...Pity that you like them<br /> &#128533;
							</div>
							<script>
								window.scrollBy({
									top: 1000,
									left: 0,
									behavior: 'smooth'
								});
							</script>
						</div>
					</Saos>
				{/if}
				{#if relation === 'S'}
					<Saos animation={'fade-in 2s both'}>
						<div class="Result">
							<div class="Sibling">
								<div class="Header">Sibling</div>
								<br />
								<div class="Para">
									No. Dont even try<br />&#128514;
								</div>
							</div>
							<script>
								window.scrollBy({
									top: 1000,
									left: 0,
									behavior: 'smooth'
								});
							</script>
						</div>
					</Saos>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	html {
		scroll-behavior: smooth;
	}
	.Background1 {
		background-image: url($lib/bg.svg);
		background-repeat: no-repeat;
		background-size: cover;
		scroll-behavior: smooth;
		margin: -1vw;
	}

	@font-face {
		font-family: 'Sofia';
		src: url(./font/Sofia-Regular.ttf);
	}

	@font-face {
		font-family: 'SBT';
		src: url(./font/SnellBT-Regular.otf);
	}
	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes -global-fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	.Content {
		text-align: center;
		font-family: 'Sofia';
		color: white;
		text-shadow: black 0.1vw 0.1vw 0.5vw;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.Header {
		font-size: 5vw;
	}
	.text {
		font-size: 2vw;
	}

	.names {
		padding: 4% 4% 10% 4%;
		font-weight: bold;
		font-size: 1.5vw;
	}

	.names > input {
		width: 15vw;
		font-size: 1.5vw;
		border: transparent;
		height: 3.5vw;
		border-radius: 1.5vw;
		background-image: radial-gradient(#ffb4ea, #fb89db);
		text-align: center;
		padding: 1%;
		font-family: 'Sofia';
	}

	.names > button {
		height: 4vw;
		width: 12vw;
		border: transparent;
		border-radius: 1.2vw;
		font-size: 2vw;
		background-image: radial-gradient(#e995d1, #fc60d0);
		color: white;
		font-family: 'Sofia';
	}

	.Friends,
	.Affection,
	.Enemy,
	.Sibling,
	.Love,
	.Marriage {
		padding: 10%;
		font-weight: 100;
		color: white;
	}

	.Friends,
	.Affection,
	.Enemy,
	.Sibling > .Header {
		font-size: 2.5vw;
	}

	.Love,
	.Marriage {
		font-family: 'Parisienne', cursive;
		font-weight: 100;
		font-size: 3vw;
	}
	@media screen and (max-width: 600px) {
		.Background1 {
			background-image: url($lib/bg.svg);
			background-repeat: no-repeat;
			background-size: cover;
			scroll-behavior: smooth;
			margin: -4vw;
			height: 105vh;
		}
		.Header {
			font-size: 10vw;
		}
		.text {
			font-size: 5vw;
		}

		.names {
			padding: 4% 4% 10% 4%;
			font-weight: bold;
			font-size: 1.5vw;
		}

		.names > input {
			width: 50vw;
			font-size: 5vw;
			border: transparent;
			height: 10vw;
			border-radius: 3vw;
			background-image: radial-gradient(#ffb4ea, #fb89db);
			text-align: center;
			padding: 1%;
			font-family: 'Sofia';
		}

		.names > button {
			height: 10vw;
			width: 30vw;
			border: transparent;
			border-radius: 3vw;
			font-size: 5vw;
			background-image: radial-gradient(#e995d1, #fc60d0);
			color: white;
			font-family: 'Sofia';
		}
		.Friends,
		.Affection,
		.Enemy,
		.Sibling,
		.Love,
		.Marriage {
			padding: 10%;
			color: white;
		}

		.Friends,
		.Affection,
		.Enemy,
		.Sibling > .Header {
			font-size: 5vw;
		}

		.Love,
		.Marriage {
			font-family: 'Parisienne', cursive;
			font-size: 500;
			font-size: 5vw;
		}
		.Para {
			font-size: 5vw;
		}
	}
</style>
