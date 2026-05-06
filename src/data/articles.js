export const articles = [
  {
    id: 'control4-remote-not-responding',
    title: 'Control4 Remote Not Responding',
    category: 'Remotes',
    tags: ['remote', 'control4', 'battery', 'troubleshooting'],
    summary: 'Fix an unresponsive Control4 remote in a few simple checks.',
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
    title: 'TV Has Sound But No Picture',
    category: 'TV & Video',
    tags: ['tv', 'video', 'hdmi', 'blank-screen'],
    summary: 'Bring back picture when audio works but the screen stays dark.',
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
    title: 'No Sound in Living Room',
    category: 'Audio & Music',
    tags: ['audio', 'volume', 'mute', 'receiver'],
    summary: 'Resolve missing sound from TV or music zones quickly.',
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
    title: 'WiFi Feels Slow in Main Areas',
    category: 'WiFi & Network',
    tags: ['wifi', 'network', 'internet', 'slow'],
    summary: 'Improve slow WiFi performance in high-use areas of the home.',
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
    title: 'Security Camera Showing Offline',
    category: 'Cameras',
    tags: ['camera', 'offline', 'security', 'network'],
    summary: 'Get an offline camera back online with guided checks.',
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
    title: 'Lighting Scene Not Working',
    category: 'Lighting & Shades',
    tags: ['lighting', 'scene', 'keypad', 'control4'],
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
    title: 'Motorized Shades Not Moving',
    category: 'Lighting & Shades',
    tags: ['shades', 'window', 'motorized', 'battery'],
    summary: 'Fix unresponsive shades controlled by Control4 scenes or app.',
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
    title: 'Music Zone Will Not Join Group',
    category: 'Audio & Music',
    tags: ['music', 'multiroom', 'zone', 'sync'],
    summary: 'Resolve multi-room audio zones that refuse to sync together.',
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
    title: 'Apple TV Not Responding to Control4',
    category: 'TV & Video',
    tags: ['apple-tv', 'control4', 'video', 'remote'],
    summary: 'Reconnect Control4 control flow when Apple TV commands fail.',
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
