---
published: true
title: Reverting Back to Gnome from a KDE Installation
date: 2025-07-28
category: tutorial
tags:
  - linux
  - fedora
  - desktop-environments
---
Assuming you ran...
```bash
sudo dnf install @kde-desktop-environment
```

**Be sure that you've logged back in using the Gnome desktop**, then uninstall with...
```bash
sudo dnf remove @kde-desktop-environment
```

%%Brief explanation of `sddm` here...%%

Remove `sddm`...
```bash
sudo dnf remove sddm
```

%%Brief explanation of `gdm` here...%%

Re-enable `gdm`...
```bash
sudo systemctl enable gdm --force
```

Clean up...
```bash
sudo dnf autoremove
```

Check ...
```bash
sudo systemctl get-default
```
... you should see `graphical.target`


To ensure you're currently using Gnome...
```bash
echo $XDG_CURRENT_DESKTOP
```


## Restoring Broken Icons

%%Brief overview of potential icon destruction by KDE...%%

Remove KDE-related icons...
```bash
sudo dnf remove breeze-icon-theme kde-artwork*
```

Re-install default Gnome icons & theme extras...
```bash
sudo dnf reinstall adwaita-icon-theme gnome-themes-extra
```

If theme extras no longer exists, re-install them...
```bash
sudo dnf install gnome-themes-extra
```


### Repair Broken 'Online Accounts' Functionality

%%Brief overview of 'Online Accounts' issues after KDE installation & removal...%%

Re-install Gnome-related tooling...
```bash
sudo dnf install gnome-online-accounts gnome-online-miners evolution-data-server
```

Remove old Gnome Online Accounts configurations...
```bash
rm -r ~/.config/goa-1.0
```

Terminate Gnome Online Accounts daemon...
```bash
pkill goa-daemon
```

Terminate Gnome Control Center...
```bash
pkill -f gnome-control-center
```

Reset Gnome to default configurations...
```bash
gsettings reset-recursively org.gnome.desktop.interface
```

## Set Gnome as Default Desktop Environment (Optional)

Check for the necessary desktop configuration...

```bash
cat /usr/share/xsessions/desktop
```

If it doesn't exist, create it...

```bash
sudo nano /etc/sysconfig/desktop/
```

Enter the following into nano and save (`ctrl+o`)...
```
DESKTOP="GNOME"
DISPLAYMANAGER="GNOME"
```

