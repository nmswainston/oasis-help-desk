export const articles = [
  {
    id: 'control4-remote-not-responding',
    title: 'Remote Not Responding',
    category: 'Remotes',
    tags: ['remote', 'control4', 'power', 'reboot'],
    summary: 'Fix an unresponsive Control4 remote with these simple steps.',
    quickFix: [
      'Replace the batteries with a fresh set of AA batteries.',
      'Press any button and check if the screen turns on.',
      'Re-select your activity, such as Watch TV or Listen to Music.',
    ],
    steps: [
      'Press the Home or List button and confirm the screen turns on.',
      'Make sure the room displayed on the remote screen is the room you are currently in. If not, press List, select your room, then choose your activity. Wait about 10 seconds for everything to respond.',
      'Open the Control4 app on your phone and test the same room. If the app works but the remote does not, the issue is with the remote itself.',
      'Remove the batteries, wait 10 seconds, and reinsert them. This resets the remote.',
      'Make sure you are reasonably close to the room\'s equipment. Thick walls or a long distance can sometimes affect the connection.',
    ],
    fallback: [
      'Unplug your Control4 controller for 30 seconds, then plug it back in.',
      'Turn off your TV and cable or streaming box, wait 30 seconds, then turn them back on.',
      'If the screen lights up but the remote is still unresponsive, contact your dealer. The remote may need to be re-paired to the system.',
      'If the screen does not turn on at all after replacing the batteries, the remote may need to be replaced. Your dealer can assist with that.',
    ],
    related: [
      {
        id: 'tv-wont-turn-on',
        label: 'TV Won\'t Turn On',
      },
      {
        id: 'app-not-connecting',
        label: 'App Not Connecting to Your System',
      },
    ],
  },
  {
    id: 'tv-wont-turn-on',
    title: 'TV Won\'t Turn On',
    category: 'TV & Video',
    tags: ['tv', 'control4', 'ir', 'emitter', 'power'],
    summary: 'If your TV is not responding to commands, a fallen IR emitter is one of the most common causes.',
    quickFix: [
      'Check that the small IR emitter sticker is still attached to the front of your TV.',
      'Try turning the TV on using the physical power button on the TV itself.',
      'Re-run your Watch TV activity from the Control4 app or remote.',
    ],
    steps: [
      'Look for a small black dot or sticker on the front of your TV. This is the IR emitter and it should be firmly attached near the bottom center or corner of the TV.',
      'If it has fallen off, reattach it to the same spot. It uses a small adhesive strip to stay in place. If the adhesive is no longer sticking, a small piece of tape can hold it in place temporarily until your dealer can schedule a visit to replace it.',
      'Make sure the emitter cable is still connected at the back of your equipment rack.',
      'Once reattached, re-run your Watch TV activity and wait about 10 seconds.',
      'Press the physical power button on the TV itself to confirm the TV is functioning on its own.',
    ],
    fallback: [
      'Check that the IR emitter cable is firmly connected at both ends.',
      'Try running Watch TV from the Control4 app to rule out a remote issue.',
      'If the TV powers on manually but not through Control4, contact your dealer. The IR emitter may need to be replaced or repositioned.',
    ],
    related: [
      {
        id: 'tv-no-picture',
        label: 'TV Turns On But Screen Is Black',
      },
    ],
  },
  {
    id: 'tv-no-picture',
    title: 'TV Turns On But Screen Is Black',
    category: 'TV & Video',
    tags: ['tv', 'control4', 'power', 'reboot'],
    summary: 'Get picture back when the TV powers on but the screen stays black or blank.',
    quickFix: [
      'Confirm the TV is on the correct input.',
      'Turn the TV off, wait 20 seconds, then turn it on.',
      'Re-select Watch TV from the remote.',
    ],
    steps: [
      'Press List, then choose the room and Watch TV.',
      'Open the TV input menu and select the Control4-connected input.',
      'Verify cable/streaming box power light is on.',
      'Wait up to 30 seconds for HDMI handshake to complete.',
    ],
    fallback: [
      'Unplug TV power for 60 seconds and reconnect.',
      'Restart the source device (Apple TV, cable box, or Roku).',
    ],
    related: [
      {
        id: 'tv-wont-turn-on',
        label: 'TV Won\'t Turn On',
      },
      {
        id: 'apple-tv-not-controlling',
        label: 'Apple TV Not Responding',
      },
    ],
  },
  {
    id: 'audio-no-sound',
    title: 'No Sound in Room',
    category: 'Audio & Music',
    tags: ['audio', 'control4', 'power', 'reboot'],
    summary: 'Restore sound when TV or music is silent in the room you are using.',
    quickFix: [
      'Raise volume using the Control4 remote.',
      'Check that Mute is not enabled.',
      'Re-select the room and source.',
    ],
    steps: [
      'Press List and confirm the active room.',
      'Select the source again (TV, Music, or Streaming).',
      'Increase volume in small steps to avoid sudden jumps.',
      'Check if a media receiver is powered on in the rack.',
    ],
    fallback: [
      'Restart the audio receiver or amplifier.',
      'Use Navigator to switch to another source and back.',
    ],
    related: [
      {
        id: 'music-zone-not-joining',
        label: 'Music Won\'t Play in Every Room',
      },
    ],
  },
  {
    id: 'wifi-slow-speeds',
    title: 'WiFi Feels Slow or Unstable',
    category: 'WiFi & Network',
    tags: ['wifi', 'power', 'reboot'],
    summary: 'Fix slow or dropping WiFi with these simple steps.',
    quickFix: [
      'Restart your modem and router.',
      'Move closer to a wireless access point and test again.',
      'Pause any large downloads or streaming on other devices.',
    ],
    steps: [
      'Unplug your modem and router from power. Wait 30 seconds.',
      'Plug the modem back in first and wait about 2 minutes until the lights settle and it is fully online.',
      'Plug the router back in and wait another 2 minutes before testing.',
      'On a single device, run a speed test at speedtest.net while standing close to a wireless access point.',
      'If one area of your home has consistently weak signal, the issue may be coverage rather than speed. A wireless access point in that area can help.',
    ],
    fallback: [
      'On your device, forget the WiFi network and reconnect to it fresh.',
      'Try connecting to the 5 GHz network instead of 2.4 GHz if your router offers both. It is faster at close range.',
      'If slowness or drops are happening throughout the whole home, contact your dealer. An access point may need to be repositioned or added to improve coverage.',
    ],
    related: [
      {
        id: 'camera-offline',
        label: 'Cameras Not Showing Up in the Luma App',
      },
      {
        id: 'app-not-connecting',
        label: 'App Not Connecting to Your System',
      },
    ],
  },
  {
    id: 'camera-offline',
    title: 'Cameras Not Showing Up in the Luma App',
    category: 'Cameras',
    tags: ['camera', 'wifi', 'power', 'reboot'],
    summary: 'If your cameras are missing from the app, the most common fix is making sure you have the right system selected.',
    quickFix: [
      'Close the app completely and reopen it.',
      'Make sure your phone has a working internet connection.',
      'Check that your camera system is powered on.',
    ],
    steps: [
      'Open the Luma app. You should see your cameras on the Live View screen.',
      'If no cameras appear, tap the menu icon in the top right corner of the screen.',
      'From the menu, confirm that your camera system is selected. If it is not, select it from the list.',
      'Return to the Live View screen and tap Start Live View at the bottom of the screen. Your cameras should appear within a few seconds. Give it up to 30 seconds if they are slow to load.',
      'If your system shows as offline, check that your recorder is powered on and connected to your network.',
    ],
    fallback: [
      'Log out of the app and log back in.',
      'Delete the app and reinstall it fresh.',
      'If your system shows offline and a restart does not resolve it, contact your dealer. The recorder may have lost its network connection and need attention.',
    ],
    related: [
      {
        id: 'wifi-slow-speeds',
        label: 'WiFi Feels Slow or Unstable',
      },
    ],
  },
  {
    id: 'lighting-scene-not-working',
    title: 'Lights Won\'t Run the Scene',
    category: 'Lighting & Shades',
    tags: ['lighting', 'control4', 'power', 'reboot'],
    summary: 'Restore one-touch lighting scenes that stopped responding.',
    quickFix: [
      'Press and hold the keypad button for one full second.',
      'Try the same scene from the Control4 app.',
      'Toggle the room lights off and on once.',
    ],
    steps: [
      'Open the app and enter the room where the issue occurs.',
      'Trigger the same scene from the app interface.',
      'Check if individual loads respond independently.',
      'Retry the keypad scene button after 10 seconds.',
    ],
    fallback: [
      'Power cycle the affected dimmer or keypad circuit if safe.',
      'Contact support to reprogram the scene logic.',
    ],
    related: [
      {
        id: 'shades-not-moving',
        label: 'Shades Won\'t Move',
      },
    ],
  },
  {
    id: 'shades-not-moving',
    title: 'Shades Won\'t Move',
    category: 'Lighting & Shades',
    tags: ['shades', 'control4', 'power', 'reboot'],
    summary: 'Fix motorized shades that do not respond in the app or from keypads.',
    quickFix: [
      'Check if shade battery pack needs charging.',
      'Try moving shades from the app instead of keypad.',
      'Wait 15 seconds and retry one shade first.',
    ],
    steps: [
      'Identify whether one shade or all shades are affected.',
      'Use the app to send an Open command to one shade.',
      'Confirm shade power source is connected and active.',
      'Test a Close command after the first movement.',
    ],
    fallback: [
      'Reset the affected shade motor per manufacturer instructions.',
      'Contact support for RF bridge or integration diagnostics.',
    ],
    related: [
      {
        id: 'lighting-scene-not-working',
        label: 'Lights Won\'t Run the Scene',
      },
    ],
  },
  {
    id: 'music-zone-not-joining',
    title: 'Music Won\'t Play in Every Room',
    category: 'Audio & Music',
    tags: ['music', 'audio', 'control4', 'reboot'],
    summary: 'Fix multi-room audio when one zone will not join the group.',
    quickFix: [
      'Start playback in one room first, then add the other rooms.',
      'Lower the volume in both zones, then try again.',
      'Stop playback completely and start a fresh session.',
    ],
    steps: [
      'Open the Control4 app and tap Listen.',
      'Start music in your main room first and confirm it is playing before adding other rooms.',
      'Tap the Rooms menu and select the additional room you want to add. Wait about 10 seconds for it to sync.',
      'Once the room joins, gradually bring the volume up in both zones.',
      'If a room still will not join, stop playback in all rooms and start a completely fresh session from the beginning.',
    ],
    fallback: [
      'Power cycle the audio streamer or matrix by unplugging it for 30 seconds and plugging it back in.',
      'Make sure the problem room\'s audio equipment is powered on and showing no errors.',
      'If one room consistently drops out or will not join, contact your dealer. There may be a configuration or hardware issue with that zone.',
    ],
    related: [
      {
        id: 'audio-no-sound',
        label: 'No Sound in Room',
      },
    ],
  },
  {
    id: 'apple-tv-not-controlling',
    title: 'Apple TV Not Responding',
    category: 'TV & Video',
    tags: ['apple-tv', 'tv', 'remote', 'control4', 'power', 'reboot'],
    summary: 'Reconnect Control4 when Apple TV does not respond to remote commands.',
    quickFix: [
      'Re-run Watch Apple TV activity.',
      'Ensure Apple TV is awake and not in deep sleep.',
      'Test navigation with the original Apple remote.',
    ],
    steps: [
      'Select Watch Apple TV from the room list.',
      'Wait for TV input and Apple TV home screen to appear.',
      'Try directional buttons and OK on Control4 remote.',
      'If no response, restart Apple TV from Settings > System.',
    ],
    fallback: [
      'Unplug Apple TV power for 20 seconds and reconnect.',
      'Contact support to verify Control4 driver status.',
    ],
    related: [
      {
        id: 'tv-no-picture',
        label: 'TV Turns On But Screen Is Black',
      },
      {
        id: 'tv-wont-turn-on',
        label: 'TV Won\'t Turn On',
      },
    ],
  },
  {
    id: 'app-not-connecting',
    title: 'App Not Connecting to Your System',
    category: 'Control4 App',
    tags: ['app', 'control4', 'wifi', 'network', 'connect'],
    summary: 'If the Control4 app is not connecting, a couple of quick checks will usually get things back on track.',
    quickFix: [
      'Make sure your phone is connected to your home WiFi network.',
      'Close the app completely and reopen it.',
      'Check that your Control4 processor is powered on.',
    ],
    steps: [
      'On your phone, confirm you are connected to your home WiFi network and not on cellular data. The app works best when on the same network as your Control4 system.',
      'Close the app completely and reopen it. Sometimes the app just needs a fresh start.',
      'Check the front of your Control4 processor in the equipment rack. You should see more than one LED lit up on the front. If only one light is on or none at all, the processor may still be booting up or may need attention.',
      'If you have a 4Sight or Control4 Connect account, remote access depends on the processor being fully online. Give it 2 to 3 minutes after powering on before trying the app again.',
      'If the processor lights look normal but the app still will not connect, try switching your phone to cellular data temporarily. If it connects that way, the issue may be with your home network.',
    ],
    fallback: [
      'Restart your home router and try again after 2 minutes.',
      'Log out of the app and log back in.',
      'If the processor has no lights or is unresponsive, contact your dealer. The processor may need to be rebooted or serviced.',
    ],
    related: [
      {
        id: 'wifi-slow-speeds',
        label: 'WiFi Feels Slow or Unstable',
      },
      {
        id: 'control4-remote-not-responding',
        label: 'Remote Not Responding',
      },
    ],
  },
]

export const categories = [
  'TV & Video',
  'Audio & Music',
  'Remotes',
  'WiFi & Network',
  'Cameras',
  'Lighting & Shades',
  'Control4 App',
]