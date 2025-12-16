import {
  IconColorSwatch,
  IconFileTypePdf,
  IconMessage,
  IconMug,
  IconPencil,
  IconPointer,
  IconSearch,
  IconSettings,
  IconTerminal2,
  IconWorld
} from "@tabler/icons-react";

// TODO: Update list and add authors

export type Port = {
  title: string;
  Icon?: React.ComponentType;
  url: string;
};

export const ports: Array<Port> = [
  {
    title: "Vim",
    Icon: IconPencil,
    url: "https://github.com/sainnhe/everforest"
  },
  {
    title: "VS Code",
    Icon: IconPencil,
    url: "https://github.com/sainnhe/everforest-vscode"
  },
  {
    title: "Jetbrains",
    Icon: IconPencil,
    url: "https://github.com/francma/everforest-jetbrains"
  },
  {
    title: "Emacs",
    Icon: IconPencil,
    url: "https://github.com/Theory-of-Everything/everforest-emacs"
  },
  {
    title: "Doom Emacs",
    Icon: IconPencil,
    url: "https://github.com/Cardoso1994/doom-everforest-theme"
  },
  {
    title: "Replit",
    Icon: IconPencil,
    url: "https://replit.com/theme/@talwat321/everforest"
  },
  {
    title: "Textmate/Sublime Text",
    Icon: IconPencil,
    url: "https://github.com/mhanberg/everforest-textmate"
  },
  {
    title: "Micro",
    Icon: IconPencil,
    url: "https://github.com/atomashevic/everforest-micro"
  },
  {
    title: "Kakoune",
    Icon: IconPencil,
    url: "https://codeberg.org/jdugan6240/everforest.kak"
  },
  {
    title: "GTK",
    Icon: IconColorSwatch,
    url: "https://github.com/Fausto-Korpsvart/Everforest-GTK-Theme"
  },
  {
    title: "Kvantum",
    Icon: IconColorSwatch,
    url: "https://github.com/SirEthanator/Hyprland-Dots/tree/main/.config/Kvantum/Everforest"
  },
  {
    title: "Visual Studio 2022",
    Icon: IconSettings,
    url: "https://github.com/ZachFranzen/Everforest"
  },
  {
    title: "Gnome Builder",
    Icon: IconSettings,
    url: "https://github.com/n1yn/everforest-gnome-builder"
  },
  {
    title: "Alacritty",
    Icon: IconTerminal2,
    url: "https://gist.github.com/sainnhe/6432f83181c4520ea87b5211fed27950"
  },
  {
    title: "Kitty",
    Icon: IconTerminal2,
    url: "https://github.com/bgrnwd/everforest-kitty"
  },
  {
    title: "Xfce4 Terminal",
    Icon: IconTerminal2,
    url: "https://github.com/toabr/everforest-xfce4-terminal"
  },
  {
    title: "Windows Terminal",
    Icon: IconTerminal2,
    url: "https://gist.github.com/suppayami/7d427d116b97564d1c565a7aed092d08"
  },
  {
    title: "Wezterm",
    Icon: IconTerminal2,
    url: "https://github.com/frdwin/everforest-for-wezterm"
  },
  {
    title: "Tillix",
    Icon: IconTerminal2,
    url: "https://github.com/spacefall/everforest-tilix"
  },
  {
    title: "MobaXterm",
    Icon: IconTerminal2,
    url: "https://gist.github.com/broot5/1d9d5ea97ef6e7cf48a31bd45e47e771"
  },
  {
    title: "Konsole",
    Icon: IconTerminal2,
    url: "https://store.kde.org/c/1638326"
  },
  {
    title: "iTerm2",
    Icon: IconTerminal2,
    url: "https://github.com/icewind/everforest.iterm2"
  },
  {
    title: "Hyper",
    Icon: IconTerminal2,
    url: "https://github.com/tani/hyper-everforest"
  },
  {
    title: "Foot",
    Icon: IconTerminal2,
    url: "https://gist.github.com/jakesco/c9b11f362f4ae0251ba2ca99a4e1e005"
  },
  {
    title: "Gnome Terminal",
    Icon: IconTerminal2,
    url: "https://github.com/em3n/Everforest-GnomeTerminal"
  },
  {
    title: "Firefox",
    Icon: IconWorld,
    url: "https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official/"
  },
  {
    title: "Chrome",
    Icon: IconWorld,
    url: "https://github.com/talwat/dotfiles/tree/main/macOS/everforest/chrome/everforest"
  },
  {
    title: "Alfred",
    Icon: IconSearch,
    url: "https://github.com/mhanberg/everforest-alfred"
  },
  {
    title: "Cursors",
    Icon: IconPointer,
    url: "https://github.com/talwat/everforest-cursors"
  },
  {
    title: "Insomnia",
    Icon: IconSettings,
    url: "https://github.com/talwat/insomnia-plugin-everforest-theme"
  },
  {
    title: "i3",
    url: "https://github.com/3rfaan/dotfiles/blob/main/i3/config"
  },
  {
    title: "Gitea",
    Icon: IconMug,
    url: "https://git.sainnhe.dev/sainnhe/gitea-themes"
  },
  {
    title: "KDE Plasma",
    url: "https://github.com/Serge2702/KDE-Everforest"
  },
  {
    title: "Obsidian",
    Icon: IconPencil,
    url: "https://github.com/kepano/obsidian-minimal/releases/tag/5.2.8"
  },
  {
    title: "Polybar",
    url: "https://github.com/3rfaan/dotfiles/blob/main/polybar/config.ini"
  },
  {
    title: "Redlib",
    url: "https://github.com/isaac-8601/redlib-everforest"
  },
  {
    title: "SearXNG",
    Icon: IconSearch,
    url: "https://github.com/isaac-8601/searxng-everforest"
  },
  {
    title: "Slack",
    Icon: IconMessage,
    url: "https://github.com/itendtostare/everforest-slack"
  },
  {
    title: "tmux",
    Icon: IconTerminal2,
    url: "https://github.com/talwat/dotfiles/blob/main/macOS/everforest/.tmux.conf"
  },
  {
    title: "tmux plugin",
    Icon: IconTerminal2,
    url: "https://github.com/TanglingTreats/tmux-everforest"
  },
  {
    title: "Xresources",
    url: "https://github.com/jef/everforest-xresources"
  },
  {
    title: "Zathura",
    Icon: IconFileTypePdf,
    url: "https://git.sr.ht/~maksim/zathura-everforest"
  },
  {
    title: "Zellij",
    Icon: IconTerminal2,
    url: "https://github.com/n1yn/everforest-dark-zellij"
  },
  {
    title: "Zsh",
    Icon: IconTerminal2,
    url: "https://github.com/sainnhe/dotfiles/tree/master/.zsh-theme"
  }
];
