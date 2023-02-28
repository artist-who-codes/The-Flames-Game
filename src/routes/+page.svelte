<script>
	import { Flames } from './flames.js';
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
	<img
		src="https://img.freepik.com/free-vector/hand-painted-watercolor-floral-wallpaper_52683-67104.jpg?w=1060&t=st=1675938914~exp=1675939514~hmac=007da4719ba72ff549dc7cee414f3e93fd5208430a8e817550ac143f0810e647"
		alt="pattern"
		class="bg"
	/>

	<div class="Content">
		<div class="Header">The Flames Game</div>
		<p>Check the relationship between you and your favorite person</p>
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
							<div class="para">
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
							<div class="para">
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
							<div class="para">
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
		background-image: radial-gradient(#ffbbecb8, #fd9ae1bf);
		height: 100%;
		margin: -0.5vw;
		scroll-behavior: smooth;
	}

	.bg {
		height: 100.5vh;
		width: 100vw;
		position: fixed;
		z-index: -1;
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
		padding-top: 17vh;
		font-family: 'Sofia';
		color: rgb(153, 65, 65);
	}

	.Header {
		font-size: 5vw;
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
		border-radius: 3vw;
		background-color: #e16fc159;
		text-align: center;
		padding: 1%;
		font-family: 'Sofia';
	}

	.names > button {
		height: 4vw;
		width: 12vw;
		border: transparent;
		border-radius: 1.5vw;
		font-size: 2vw;
		background-image: radial-gradient(#ffb4ea, #fb89db);
		color: rgb(153, 65, 65);
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
		color: black;
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
</style>
