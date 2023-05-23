const butInstall = document.getElementById('buttonInstall');

/* Here we need to provide the logic for when and how to install the PWA.  */

//  Keep this code as-is
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// This listener fires when the user clicks the "install" button.
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  // TODO: Notice line 7 above.  window.deferredPrompt should now be set to null.

  // TODO: Notice line 8 above. We want the same line here, but the hidden value should be set to true.
  // Insert line here
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
