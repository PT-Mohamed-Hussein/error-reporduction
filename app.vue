<template>
	<div>
		<Teleport to="body">
			<div
				class="sticky top-0 left-0 w-full h-[100dvh] bg-FrameTwo flex items-center justify-center z-50"
				v-if="Loading"
			>
				<p class="text-white">Loading</p>
			</div>
		</Teleport>
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
	const Loading = ref(true);
	nuxtApp.hook("page:start", () => (Loading.value = true));
	nuxtApp.hook("page:finish", () => (Loading.value = false));

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
