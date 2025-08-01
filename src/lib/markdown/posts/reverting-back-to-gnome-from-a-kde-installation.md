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

Sometimes, it's nice to try something new. Sometimes, we wish we hadn't. 

Here's a walk-through for reverting your Fedora desktop environment back to Gnome if you've decided you don't like KDE Plasma.

### Remove KDE Plasma

First, **be sure that you've logged back in using the Gnome desktop**, then remove KDE Plasma.

```bash
sudo dnf remove @kde-desktop-environment
```

The **Simple Display Manager** (`sddm`) provides graphical logins for KDE Plasma. 

Be sure that you've switched back to the GNOME Display Manager (`gdm`).

```bash
sudo systemctl disable sddm --now && sudo systemctl enable gdm --now
```

To verify you're using `gdm` again:

```bash
systemctl status display-manager
```

... if you are, it's safe to remove `sddm`:

```bash
sudo dnf remove sddm
```

Clean out unused packages:
```bash
sudo dnf autoremove
```

Check...
```bash
sudo systemctl get-default
```
... you should see `graphical.target`


If you want to be certain that you're currently using Gnome, print the current desktop environment. 

```bash
echo $XDG_CURRENT_DESKTOP
```


### Restoring System Icons

System icons usually don't switch back automatically. You can revert back to Adwaita by doing the following.

Remove all KDE-related icons:
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

If you're having issues connecting to your Online Accounts through Fedora after the switch, you can follow these steps to restore functionality and commonly broken UI elements.

Re-install Gnome-related tooling...
```bash
sudo dnf install gnome-online-accounts gnome-online-miners evolution-data-server
```

Remove any orphaned *Gnome Online Accounts* configurations:
```bash
rm -r ~/.config/goa-1.0
```

Terminate *Gnome Online Accounts* daemon...
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

### Cleaning Up

Below is a list of known directories created by KDE Plasma during installation.

> [!CAUTION]
> Be sure to run `rpm -qf <path>` to see if anything is being used. You may also want to run `dnf repoquery --whatrequires <package>` to cross-reference dependencies.

#### `/usr/share/icons`
- breeze
- breeze-dark
- oxygen
- locolor
- Bluecurve

#### `/usr/share/`
- kde4
- kf5
- plasma
- kservices6
- kpackage
- krunner
- kxmlgui5/
- kscreen
- kwin
- kio
- kf6
- kfontinst
- kconf_update
- kde-filesystem
- kf6
- kstyle
- kglobalaccel
- kcm_networkmanagement
- kcm_recentFiles
- qlogging-categories5
- qt5
- qt6
- qt5-filesystem

### Manually Set Gnome as the Default Desktop Environment (Optional)

Verify that you have the necessary desktop configuration...
```bash
cat /usr/share/xsessions/desktop
```

... if not, create it:
```bash
sudo nano /etc/sysconfig/desktop/
```

Enter the following into nano and save (`ctrl+o`)...
```
DESKTOP="GNOME"
DISPLAYMANAGER="GNOME"
```

