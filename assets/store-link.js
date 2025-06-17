function updateStoreLinks() {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const android = /Android/.test(navigator.userAgent);
  const appStore = 'https://apps.apple.com/us/app/recipesnap-ai/id6746269787';
  const playStore = 'https://play.google.com/store/apps/details?id=com.markmayne.recipesnapai';
  const storeURL = iOS ? appStore : android ? playStore : appStore;

  document.querySelectorAll('.store-link').forEach(a => {
    a.href = storeURL;
    if (iOS) {
      a.textContent = 'Download on the App Store';
    } else if (android) {
      a.textContent = 'Get it on Google Play';
    }
  });
}

window.addEventListener('DOMContentLoaded', updateStoreLinks);
