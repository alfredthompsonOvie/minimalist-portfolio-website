<template>
	<main class="grid">
		<section class="grid__contents thankYou">
			<div class="content">
				<h1 class="subHeading">Thank You!</h1>
			<!-- Thank you for getting in touch!-->
			<p>
				We appreciate you contacting us.
			</p>
			<p>
				We will get back in touch with you soon!
			</p>
				<p>
					Have a great day!
				</p>
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