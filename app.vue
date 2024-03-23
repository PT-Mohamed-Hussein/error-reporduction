<template>
	<div>
		<NuxtLayout>
			<div>
				<NuxtPage />
				<NuxtLoadingIndicator />
				<UNotifications />
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup>
	const nuxtApp = useNuxtApp();

	useHead({
		htmlAttrs: {
			lang: "Ar-Eg",
			dir: "rtl",
		},
	});
</script>

<style>
	body {
		font-size: 16px;
		color: black;
	}

	.layout-enter-active,
	.layout-leave-active {
		transition: all 0.4s;
	}
	.layout-enter-from,
	.layout-leave-to {
		opacity: 0;
	}
	.page-enter-active,
	.page-leave-active {
		transition: all 0.2s;
	}
	.page-enter-from {
		opacity: 0;
		/* transform: translate(-50px, 0); */
	}
	.page-leave-to {
		opacity: 0;
		/* transform: translate(50px, 0); */
	}
</style>
