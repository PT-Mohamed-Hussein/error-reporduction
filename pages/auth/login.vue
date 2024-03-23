<script setup>
	definePageMeta({
		middleware: ["require-unauth"],
		layout: "auth",
	});
</script>

<template>
	<div class="w-full h-full flex items-center justify-center">
		This Page Doesn't Needs Auth with white background
	</div>
</template>
