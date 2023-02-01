<template>
	<main class="grid">
		<section class="grid__contents thankYou">
			<div class="content">
				<!-- particle js -->

				<h1 class="subHeading">Thank You!</h1>
			<!-- Thank you for getting in touch!-->
			<p>
				We appreciate you contacting us.
			</p>
			<p>
				We will contact you soon!
			</p>
				<p>
					Have a great day!
				</p>
				<!-- go back home btn -->
				<!-- follow us on: -->
				<!-- Thank you! -->
				<!-- Your email has been sent. We'll get back to you shortly. In the meantime, check out my work or read more about me  -->

				<!-- Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you. -->
			</div>

		</section>
	</main>
</template>

<script>
export default {
	setup () {
		

		return {}
	}
}
</script>

<style lang="scss" scoped>
main {
	min-height: calc(100vh - 96px - 326px);
	@media (min-width: 760px) {
	min-height: calc(100vh - 96px - 106px);
	}
}
.thankYou {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>