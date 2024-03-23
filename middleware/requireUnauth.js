export default defineNuxtRouteMiddleware(async (to, from) => {
	if (process.server) return;

	try {
		setTimeout(() => {}, 2000);
		return navigateTo("/");
	} catch (e) {
		return;
	}
});
