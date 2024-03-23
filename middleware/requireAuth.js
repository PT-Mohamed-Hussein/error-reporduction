export default defineNuxtRouteMiddleware(async (to, from) => {
	if (process.server) return;

	try {
		setTimeout(() => {}, 2000);
		return;
	} catch (e) {
		console.log(e.data.message);
		return navigateTo("/auth/login");
	}
});
