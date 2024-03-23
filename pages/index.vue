<script setup>
	definePageMeta({
		middleware: ["require-auth"],
		layout: "home",
		title: "الرئيسية",
	});
</script>

<template>
	<div class="w-full h-[100dvh] flex items-center justify-center mx-auto">
		This Page Needs Auth with red background
	</div>
</template>
