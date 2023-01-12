<template>
	<div>
		this is about page
	</div>
</template>

<script>
export default {
	setup () {
		

		return {}
	}
}
</script>

<style lang="scss" scoped>
.cta__sec {
	position: relative;
	border: 1px solid var(--GrayishDarkBlue);
	padding: 1em 3em;
	letter-spacing: 2px;
	line-height: 2;
	color: inherit;

	transition: all .3s cubic-bezier(0.52, 1.64, 0.37, 0.66);
	/* overflow: hidden; */
}
.cta__sec:hover {
	/* border: 0; */
	/* color: #fff; */
}
.cta__sec::before,
.cta__sec::after {
	content: "";
	position: absolute;
	background-color: var(--GrayishDarkBlue);
	/* border: 1px solid var(--GrayishDarkBlue); */
	z-index: -1;
}
.cta__sec::before {
	background-color: var(--GrayishDarkBlue);
	/* background-color: red; */
	width: 100%;
	height: 100%;
	top: -100%;
	top: 0%;
	left: 0%;
	transition: all .3s ease;
}
.cta__sec::after {
	background-color: rgba(255, 255, 255, 0.2);
	/* background-color: var(--GrayishDarkBlue); */
	width: 20px;
	height: 12em;
	top: -3em;
	left: -23%;
	transform: rotate(45deg);
	transition: all .6s ease .1s;
}
.cta__sec:hover::before {
	/* left: 101%; */
	top: 0%;
}
.cta__sec:hover::after {
	left: 110%;

	/* background-color: var(--GrayishDarkBlue);
	width: 100%;
	height: 100%;
	top: 100%;
	left: 0%;
	transition: all .3s ease; */
}

/* .border__top,  .border__bottom {
	position: absolute;
	width: 100%;
	height: 1px;
	background-color: var(--GrayishDarkBlue);
	transition: all .3s ease;
}
.border__right, .border__left {
	position: absolute;
	width: 1px;
	height: 100%;
	background-color: var(--GrayishDarkBlue);
	transition: all .3s ease;
	top: 0;
}
.border__right {
	right: 0;
} */
/* .border__left {
	left: 0;
}
.border__top {
	top: 0;
	left: 0;
}
.border__bottom {
	bottom: 0;
	right: 0;
}
.cta__sec:hover  .border__top, .cta__sec:hover  .border__bottom {
	width: 45%;
}
.cta__sec:hover  .border__right, .cta__sec:hover  .border__left {
	height: 0%;
} */
</style>