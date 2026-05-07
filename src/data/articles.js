export const articles = [
  {
    id: 'control4-remote-not-responding',
    title: 'Remote Not Responding',
    category: 'Remotes',
    tags: ['remote', 'control4', 'power', 'reboot'],
    summary: 'Fix an unresponsive Control4 remote with quick battery and room checks.',
    quickFix: [
      'Replace batteries with fresh premium AA batteries.',
      'Point the remote toward the room you are controlling.',
      'Re-select your activity like Watch TV or Listen to Music.',
    ],
    steps: [
      'Press the List button on your Control4 remote.',
      'Choose the correct room from the on-screen list.',
      'Select your activity and wait 5-10 seconds.',
      'If nothing happens, remove and reinstall the batteries.',
    ],
    fallback: [
      'Reboot the Control4 controller from your equipment rack power sequence.',
      'Power cycle the TV and cable or streaming box.',
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
  },
  {
    id: 'wifi-slow-speeds',
    title: 'WiFi Feels Slow or Unstable',
    category: 'WiFi & Network',
    tags: ['wifi', 'power', 'reboot'],
    summary: 'Stabilize slow or dropping WiFi in the areas you use most.',
    quickFix: [
      'Restart your modem and network gateway.',
      'Move closer to a wireless access point for testing.',
      'Pause large downloads on other devices.',
    ],
    steps: [
      'Power off modem and router for 30 seconds.',
      'Power modem back on first, then wait until fully online.',
      'Power router/controller back on and test after 2-3 minutes.',
      'Run a speed test on one device near a known access point.',
    ],
    fallback: [
      'Forget and reconnect to your primary WiFi network.',
      'Contact support for access point optimization.',
    ],
  },
  {
    id: 'camera-offline',
    title: 'Cameras Not Showing',
    category: 'Cameras',
    tags: ['camera', 'wifi', 'power', 'reboot'],
    summary: 'Bring camera feeds back when they are blank, frozen, or offline.',
    quickFix: [
      'Refresh the camera view in your app.',
      'Check if other cameras are online.',
      'Wait 60 seconds and try again.',
    ],
    steps: [
      'Open your camera app and verify which camera is offline.',
      'Check if the camera has power (IR LEDs or status light).',
      'Restart the network switch or PoE injector if accessible.',
      'Reopen the app and reload the camera feed.',
    ],
    fallback: [
      'Reboot the NVR/camera recorder if all cameras are affected.',
      'Contact support if a single camera remains offline.',
    ],
  },
  {
    id: 'lighting-scene-not-working',
    title: 'Lights Won’t Run the Scene',
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
  },
  {
    id: 'shades-not-moving',
    title: 'Shades Won’t Move',
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
  },
  {
    id: 'music-zone-not-joining',
    title: 'Music Won’t Play in Every Room',
    category: 'Audio & Music',
    tags: ['music', 'audio', 'control4', 'reboot'],
    summary: 'Sync multi-room audio when one zone will not join the group.',
    quickFix: [
      'Start playback in one room first, then add the second room.',
      'Lower volume briefly in both zones and retry.',
      'Restart music service playback from the app.',
    ],
    steps: [
      'Open Listen in the Control4 app.',
      'Start music in your primary zone.',
      'Use the Rooms menu to add another zone.',
      'Wait for syncing and then adjust volume gradually.',
    ],
    fallback: [
      'Stop playback in all rooms and start a fresh session.',
      'Reboot audio matrix or streamer device.',
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
  },
]

export const categories = [
  'TV & Video',
  'Audio & Music',
  'Remotes',
  'WiFi & Network',
  'Cameras',
  'Lighting & Shades',
]
