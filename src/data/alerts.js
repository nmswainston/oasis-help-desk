// Important updates shown at the top of the help center.
// urgent: true = red styling, false = amber/gold styling
// Set dismissed: true to hide permanently, or remove the entry.

export const alerts = [
  {
    id: 'roku-update-15',
    urgent: true,
    title: 'Roku Update 15.x Breaks Control4 Integration',
    body: 'A recent Roku OS update changes network control to "limited" mode, which disrupts Control4 commands. If your Roku stopped responding, this is likely why.',
    link: 'https://www.control4.com',
    linkLabel: 'Learn more',
  },
  {
    id: 'apple-tv-deep-sleep',
    urgent: false,
    title: 'Apple TV Deep Sleep May Require Manual Wake',
    body: 'After extended idle periods, Apple TV may enter deep sleep that Control4 cannot wake remotely. Tap the physical Apple TV remote once before re-selecting the activity.',
    link: null,
    linkLabel: null,
  },
]
