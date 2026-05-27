import {
  IconAppWindow,
  IconCode,
  IconPencil,
  IconTerminal2,
  IconWorld
} from "@tabler/icons-react";

export type PortCategory =
  | "IDEs"
  | "Editors"
  | "Terminal Emulators"
  | "Web Browsers"
  | "Website Themes";

export type Port = {
  title: string;
  author: string;
  authorUrl: string;
  category?: PortCategory;
  url: string;
};

export const categoryIconMap: Record<PortCategory, React.ComponentType> = {
  IDEs: IconCode,
  Editors: IconPencil,
  "Terminal Emulators": IconTerminal2,
  "Web Browsers": IconWorld,
  "Website Themes": IconAppWindow
} as const;

export const ports: Array<Port> = [
  {
    title: "NixOS",
    author: "@fwinter",
    authorUrl: "https://codeberg.org/fwinter",
    url: "https://codeberg.org/fwinter/everforest-nix"
  },
  {
    title: "GNOME Builder",
    author: "@n1yn",
    authorUrl: "https://github.com/n1yn",
    category: "IDEs",
    url: "https://github.com/n1yn/everforest-gnome-builder"
  },
  {
    title: "JetBrains",
    author: "@francma",
    authorUrl: "https://github.com/francma",
    category: "IDEs",
    url: "https://github.com/francma/everforest-jetbrains"
  },
  {
    title: "Visual Studio 2022",
    author: "@ZachFranzen",
    authorUrl: "https://github.com/ZachFranzen",
    category: "IDEs",
    url: "https://github.com/ZachFranzen/Everforest"
  },
  {
    title: "Doom Emacs",
    author: "@Cardoso1994",
    authorUrl: "https://github.com/Cardoso1994",
    category: "Editors",
    url: "https://github.com/Cardoso1994/doom-everforest-theme"
  },
  {
    title: "Emacs",
    author: "@theorytoe",
    authorUrl: "https://github.com/theorytoe",
    category: "Editors",
    url: "https://github.com/theorytoe/everforest-emacs"
  },
  {
    title: "Vim",
    author: "@sainnhe",
    authorUrl: "https://github.com/sainnhe",
    category: "Editors",
    url: "https://github.com/sainnhe/everforest"
  },
  {
    title: "Neovim (Lua port)",
    author: "@neanias",
    authorUrl: "https://github.com/neanias",
    category: "Editors",
    url: "https://github.com/neanias/everforest-nvim"
  },
  {
    title: "CotEditor",
    author: "@VasylRomanets",
    authorUrl: "https://github.com/VasylRomanets",
    category: "Editors",
    url: "https://github.com/VasylRomanets/everforest-coteditor"
  },
  {
    title: "Replit",
    author: "@talwat",
    authorUrl: "https://github.com/talwat",
    category: "Editors",
    url: "https://replit.com/theme/@talwat321/everforest"
  },
  {
    title: "Textmate/Sublime Text",
    author: "@mhanberg",
    authorUrl: "https://github.com/mhanberg",
    category: "Editors",
    url: "https://github.com/mhanberg/everforest-textmate"
  },
  {
    title: "Visual Studio Code",
    author: "@sainnhe",
    authorUrl: "https://github.com/sainnhe",
    category: "Editors",
    url: "https://github.com/sainnhe/everforest-vscode"
  },
  {
    title: "Micro",
    author: "@atomashevic",
    authorUrl: "https://github.com/atomashevic",
    category: "Editors",
    url: "https://github.com/atomashevic/everforest-micro"
  },
  {
    title: "Kakoune",
    author: "@jdugan6240",
    authorUrl: "https://codeberg.org/jdugan6240",
    category: "Editors",
    url: "https://codeberg.org/jdugan6240/everforest.kak"
  },
  {
    title: "Alacritty",
    author: "@sainnhe",
    authorUrl: "https://github.com/sainnhe",
    category: "Terminal Emulators",
    url: "https://gist.github.com/sainnhe/6432f83181c4520ea87b5211fed27950"
  },
  {
    title: "Foot",
    author: "@jakesco",
    authorUrl: "https://github.com/jakesco",
    category: "Terminal Emulators",
    url: "https://gist.github.com/jakesco/c9b11f362f4ae0251ba2ca99a4e1e005"
  },
  {
    title: "GNOME Terminal",
    author: "@em3n",
    authorUrl: "https://github.com/em3n",
    category: "Terminal Emulators",
    url: "https://github.com/em3n/Everforest-GnomeTerminal"
  },
  {
    title: "Ghostty",
    author: "@metalelf0",
    authorUrl: "https://github.com/metalelf0",
    category: "Terminal Emulators",
    url: "https://github.com/metalelf0/everforest.ghostty"
  },
  {
    title: "Hyper",
    author: "@tani",
    authorUrl: "https://github.com/tani",
    category: "Terminal Emulators",
    url: "https://github.com/tani/hyper-everforest"
  },
  {
    title: "iTerm2",
    author: "@icewind",
    authorUrl: "https://github.com/icewind",
    category: "Terminal Emulators",
    url: "https://github.com/icewind/everforest.iterm2"
  },
  {
    title: "iTerm2",
    author: "@sainnhe",
    authorUrl: "https://github.com/sainnhe",
    category: "Terminal Emulators",
    url: "https://github.com/sainnhe/dotfiles/tree/master/.macos/iTerm2/colors"
  },
  {
    title: "Kitty",
    author: "@ewal",
    authorUrl: "https://github.com/ewal",
    category: "Terminal Emulators",
    url: "https://github.com/kovidgoyal/kitty-themes/tree/master"
  },
  {
    title: "Konsole",
    author: "@sainnhe",
    authorUrl: "https://github.com/sainnhe",
    category: "Terminal Emulators",
    url: "https://store.kde.org/c/1638326"
  },
  {
    title: "MobaXterm",
    author: "@broot5",
    authorUrl: "https://github.com/broot5",
    category: "Terminal Emulators",
    url: "https://gist.github.com/broot5/1d9d5ea97ef6e7cf48a31bd45e47e771"
  },
  {
    title: "Tilix",
    author: "@spacefall",
    authorUrl: "https://github.com/spacefall",
    category: "Terminal Emulators",
    url: "https://github.com/spacefall/everforest-tilix"
  },
  {
    title: "WezTerm",
    author: "@frdwin",
    authorUrl: "https://github.com/frdwin",
    category: "Terminal Emulators",
    url: "https://github.com/frdwin/everforest-for-wezterm"
  },
  {
    title: "Windows Terminal",
    author: "@suppayami",
    authorUrl: "https://github.com/suppayami",
    category: "Terminal Emulators",
    url: "https://gist.github.com/suppayami/7d427d116b97564d1c565a7aed092d08"
  },
  {
    title: "Xfce4-Terminal",
    author: "@toabr",
    authorUrl: "https://github.com/toabr",
    category: "Terminal Emulators",
    url: "https://github.com/toabr/everforest-xfce4-terminal"
  },
  {
    title: "Chrome",
    author: "@talwat",
    authorUrl: "https://github.com/talwat",
    category: "Web Browsers",
    url: "https://github.com/talwat/dotfiles/tree/main/macOS/everforest/chrome/everforest"
  },
  {
    title: "Firefox",
    author: "@sainnhe",
    authorUrl: "https://github.com/sainnhe",
    category: "Web Browsers",
    url: "https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official"
  },
  {
    title: "Firefox",
    author: "@talwat",
    authorUrl: "https://github.com/talwat",
    category: "Web Browsers",
    url: "https://addons.mozilla.org/en-US/firefox/addon/everforest-medium-dark"
  },
  {
    title: "Firefox",
    author: "@aaheen",
    authorUrl: "https://github.com/aaheen",
    category: "Web Browsers",
    url: "https://addons.mozilla.org/en-US/firefox/addon/everforest-spectrum-dark-soft"
  },
  {
    title: "Monkeytype",
    author: "@mel4tonin",
    authorUrl: "https://github.com/mel4tonin",
    category: "Website Themes",
    url: "https://monkeytype.com/?customTheme=eyJjIjpbIiMyZDM1M2IiLCIjYTdjMDgwIiwiI2E3YzA4MCIsIiM5ZGE5YTAiLCIjMjMyYTJlIiwiI2QzYzZhYSIsIiNlNjdlODAiLCIjNTQzYTQ4IiwiI2U2N2U4MCIsIiM1NDNhNDgiXSwiaSI6IiIsInMiOiJjb3ZlciIsImYiOlswLDEsMSwxXX0="
  },
  {
    title: "Nitter",
    author: "@cozy-isaac",
    authorUrl: "https://github.com/cozy-isaac",
    category: "Website Themes",
    url: "https://github.com/cozy-isaac/nitter-everforest"
  },
  {
    title: "Proton Mail/Drive/Calendar",
    author: "@cozy-isaac",
    authorUrl: "https://github.com/cozy-isaac",
    category: "Website Themes",
    url: "https://github.com/cozy-isaac/proton-everforest"
  },
  {
    title: "Youtube",
    author: "@mel4tonin",
    authorUrl: "https://github.com/mel4tonin",
    category: "Website Themes",
    url: "https://github.com/mel4tonin/everforest-youtube"
  },
  {
    title: "Alfred",
    author: "@mhanberg",
    authorUrl: "https://github.com/mhanberg",
    url: "https://github.com/mhanberg/everforest-alfred"
  },
  {
    title: "Calibre",
    author: "@morph626",
    authorUrl: "https://github.com/morph626",
    url: "https://gist.github.com/morph626/76dbe01a7e245ca6e6d67c5ca76bf953"
  },
  {
    title: "colorls",
    author: "@talwat",
    authorUrl: "https://github.com/talwat",
    url: "https://github.com/talwat/dotfiles/blob/main/macOS/everforest/.config/colorls/dark_colors.yaml"
  },
  {
    title: "ComfyUI",
    author: "@ilonis",
    authorUrl: "https://github.com/ilonis",
    url: "https://github.com/Ilonis/everforest-ComfyUI"
  },
  {
    title: "Cursors",
    author: "@talwat",
    authorUrl: "https://github.com/talwat",
    url: "https://github.com/talwat/everforest-cursors"
  },
  {
    title: "dipc",
    author: "@doprz",
    authorUrl: "https://github.com/doprz",
    url: "https://github.com/doprz/dipc"
  },
  {
    title: "Gitea",
    author: "@sainnhe",
    authorUrl: "https://git.sainnhe.dev/sainnhe",
    url: "https://git.sainnhe.dev/sainnhe/gitea-themes"
  },
  {
    title: "Insomnia",
    author: "@talwat",
    authorUrl: "https://github.com/talwat",
    url: "https://github.com/talwat/insomnia-plugin-everforest-theme"
  },
  {
    title: "GTK",
    author: "@Fausto-Korpsvart",
    authorUrl: "https://github.com/Fausto-Korpsvart",
    url: "https://github.com/Fausto-Korpsvart/Everforest-GTK-Theme"
  },
  {
    title: "KDE",
    author: "@Serge2702",
    authorUrl: "https://github.com/Serge2702",
    url: "https://github.com/Serge2702/KDE-Everforest.git"
  },
  {
    title: "Obsidian",
    author: "@kepano",
    authorUrl: "https://github.com/kepano",
    url: "https://github.com/kepano/obsidian-minimal"
  },
  {
    title: "Redlib/Libreddit",
    author: "@cozy-isaac",
    authorUrl: "https://github.com/cozy-isaac",
    url: "https://github.com/cozy-isaac/searxng-everforest"
  },
  {
    title: "SearXNG",
    author: "@cozy-isaac",
    authorUrl: "https://github.com/cozy-isaac",
    url: "https://github.com/cozy-isaac/searxng-everforest"
  },
  {
    title: "Shiki.js",
    author: "@serdonke",
    authorUrl: "https://github.com/serdonke",
    url: "https://shiki.style"
  },
  {
    title: "Slack",
    author: "@itendtostare",
    authorUrl: "https://github.com/itendtostare",
    url: "https://github.com/itendtostare/everforest-slack"
  },
  {
    title: "tmux",
    author: "@talwat",
    authorUrl: "https://github.com/talwat",
    url: "https://github.com/talwat/dotfiles/blob/main/macOS/everforest/.tmux.conf"
  },
  {
    title: "tmux-plugin",
    author: "@TanglingTreats",
    authorUrl: "https://github.com/TanglingTreats",
    url: "https://github.com/TanglingTreats/tmux-everforest"
  },
  {
    title: "Typora",
    author: "@YuxBao",
    authorUrl: "https://github.com/YuxBao",
    url: "https://github.com/YuxBao/everforest-typora"
  },
  {
    title: "Xresources",
    author: "@jef",
    authorUrl: "https://github.com/jef",
    url: "https://github.com/jef/everforest-xresources"
  },
  {
    title: "Zelij",
    author: "@n1yn",
    authorUrl: "https://github.com/n1yn",
    url: "https://github.com/n1yn/everforest-dark-zellij"
  },
  {
    title: "Zsh",
    author: "@sainnhe",
    authorUrl: "https://github.com/sainnhe",
    url: "https://github.com/sainnhe/dotfiles/tree/master/.zsh-theme"
  }
];
