---
title: I received my new PC, and it is the time to install Fedora and set up my work environment
coverImage: ../post-images/2019-11-05-i-received-my-new-pc-and-it-is-the-time-to-install-fedora-and-set-up-my-work-environment.JPEG
---

Two years after I joined Redhat to work on the [foreman](https://theforeman.org) project, I received a new PC (Lenovo T480s), and it's time for a fresh start.
In this post, I will describe my process of setting up a new PC.

## Goals

- Be able to work inside Redhat and use Redhat office tools
- Have a javascript development environment
- Have a ruby development environment
- Have Atom as my IDE and sync it back with my previous settings
- Have a [forklift](https://github.com/theforeman/forklift) development environment so I can work on [the foreman project](https://theforeman.org).

## My Tools

- Zsh - https://ohmyz.sh/
- NVM - https://github.com/nvm-sh/nvm
- RVM - https://rvm.io/
- ATOM - https://atom.io/
- Ferdi - https://getferdi.com/

## Installing Fedora

1. Install the latest version of Fedora, in my case, I installed fedora 30 from Redhat PXE server and then updated to version 31.
   1. Another option is to download fedora from https://getfedora.org/en/workstation/download/
2. Run `sudo dnf upgrade` and `sudo dnf update`

## Install google-chrome browser

Install google chrome by running `sudo dnf install google-chrome-stable` and sign in to sync with my previous setup.

## Installing ZSH and some essential terminal tools

### Install ZSH

```bash
sudo dnf install zsh
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

### Set my new PC hostname

```bash
sudo hostname sharvit-fedorabook-t480s
```

### Install some essential tools

```bash
sudo dnf install vim hub
```

**Restart your computer**

### Install rpmfusion

```bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-31.noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-31.noarch.rpm
sudo dnf groupupdate core
sudo dnf groupupdate sound-and-video
```

### Configure git

```bash
git config --global user.name "Avi Sharvit"
git config --global user.email sharvita@gmail.com
```

### Generate an ssh key

```bash
ssh-keygen -t rsa -b 4096 -C "sharvita@gmail.com"
eval "$(ssh-agent -s)"
```

Add the ssh key to your Github account https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

## Redhat workspace related

### Connect to Redhat VPN

To be able to connect to the Redhat VPN, you will need to be inside the Redhat VPN, to do that you will need to be in a Redhat office and connect to the secured network (wired, wifi).

Duo some restrictions, I can't share the full VPN urls, you can find the URLs in this secured link:
https://mojo.redhat.com/docs/DOC-1199033-set-up-vpn-in-fedora-silverblue

```bash
sudo dnf install NetworkManager-openvpn NetworkManager-openvpn-gnome

# download the redhat certificate
sudo wget -O /etc/pki/tls/certs/RH-IT-Root-CA.crt https://-------------.redhat.com/RH-IT-Root-CA.crt
sudo cp /etc/pki/tls/certs/RH-IT-Root-CA.crt /etc/pki/tls/certs/2015-RH-IT-Root-CA.pem

# download some vpn profiles
sudo wget -O /etc/NetworkManager/system-connections/AMS2.ovpn http://----------.redhat.com/--------------------------------/AMS2.ovpn
sudo wget -O /etc/NetworkManager/system-connections/PEK2.ovpn http://----------.redhat.com/--------------------------------/PEK2.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/BNE.ovpn http://----------.redhat.com/--------------------------------/BNE.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/BRQ.ovpn http://----------.redhat.com/--------------------------------/BRQ.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/FAB.ovpn http://----------.redhat.com/--------------------------------/FAB.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/PHX2.ovpn http://----------.redhat.com/--------------------------------/PHX2.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/PNQ2.ovpn http://----------.redhat.com/--------------------------------/PNQ2.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/RDU2.ovpn http://----------.redhat.com/--------------------------------/RDU2.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/GRU2.ovpn http://----------.redhat.com/--------------------------------/GRU2.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/SIN2.ovpn http://----------.redhat.com/--------------------------------/SIN2.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/TLV.ovpn http://----------.redhat.com/--------------------------------/TLV.ovpn?h=it-csb-rhel-7
sudo wget -O /etc/NetworkManager/system-connections/NRT.ovpn http://----------.redhat.com/--------------------------------/NRT.ovpn?h=it-csb-rhel-7

# enable the redhat VPN
sudo restorecon -RvF /etc/pki/tls/certs/
sudo restorecon -RvF /etc/NetworkManager/system-connections/
sudo chmod 644 /etc/pki/tls/certs/2015-RH-IT-Root-CA.pem
sudo chown root:root /etc/NetworkManager/system-connections/*
sudo chmod 600 /etc/NetworkManager/system-connections/*
sudo nmcli connection reload
```

Go to `Settings` -> `Network` and add your username to each VPN profile.

### Connect to Redhat printers

```bash
# Adds the TelAviv printers to the cups config
# Replace TLV with another office code to connect to a different office printers
# See office codes here: https://redhat.service-now.com/help?id=kb_article&sysparm_article=KB0002202
echo "BrowsePoll cups.tlv.redhat.com" >> /etc/cups/cups-browsed.conf
sudo systemctl enable cups-browsed
sudo systemctl restart cups-browsed
```

Once you installed the printers, you should find them in the printer settings.

## Install Ferdi to manage my social interactions

1. Download the appimage from https://getferdi.com/ and put it in the `~/Applications` folder.
2. Give it exec permissions using `chmod +x filename`
3. Run it and sign in to get my saved workspace

## Install Ruby and RVM

First fix the gnome-terminal command login using: https://rvm.io/integration/gnome-terminal

Install Ruby and RVM

```bash
# install system ruby
sudo dnf install ruby
# install RVM
gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash -s stable
```

**Restart the terminal.**

Install Ruby using RVM

```bash
# enable autolibs
rvm get stable --autolibs=enable
# Install the latest stable ruby version
rvm install ruby-2.6
```

## Install NodeJS and NVM

```bash
# install system nodejs and npm
sudo dnf install -y nodejs npm
# install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
```

**Restart the terminal**

```bash
# install latest node-js
nvm install 12
# install yarn
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo dnf install yarn
```

## Install vagrant

```bash
rvm use system
sudo dnf install libvirt-daemon-kvm ansible vagrant-libvirt
# enable libvirt
sudo systemctl enable --now libvirtd
# add your user to the libvirt group to avoid password prompts on running vagrant commands with libvirt provider
sudo gpasswd -a ${USER} libvirt
newgrp libvirt
# install vagrant plugins
sudo dnf install sshfs vagrant-hostmanager vagrant-sshfs
```

> NOTICE: before working with vagrant make sure you work with the system ruby (`rvm use system`)

## Customizing the zsh

I ended up with the following `.zshrc` file in my home directory.

```bash
# Path to your oh-my-zsh installation.
export ZSH="/home/sharvit/.oh-my-zsh"
export LANG=en_US.UTF-8
export EDITOR='vim'
export ARCHFLAGS="-arch x86_64"

ZSH_THEME="robbyrussell"

plugins=(git github dnf vagrant nvm npm rvm bundler)

source $ZSH/oh-my-zsh.sh

# enable autocomplete
autoload -U compinit
compinit
```

## Install Atom

```bash
sudo rpm --import https://packagecloud.io/AtomEditor/atom/gpgkey
sudo sh -c 'echo -e "[Atom]\nname=Atom Editor\nbaseurl=https://packagecloud.io/AtomEditor/atom/el/7/\$basearch\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=1\ngpgkey=https://packagecloud.io/AtomEditor/atom/gpgkey" > /etc/yum.repos.d/atom.repo'
sudo dnf install atom
```

**Install my personal settings**

1. Run `apm install sync-settings`
2. Open Atom
3. Open the sync-settings package settings
4. Set access-token
5. Set gist id to `88fddc82d91cdd7cd33fdfdbe03dd161`
6. Restart atom
7. Click restore when you receive the message from sync-settings

## Configure my [forklift](https://github.com/theforeman/forklift) development environment so I can work on [the foreman project](https://theforeman.org)

### Clone forklift

```bash
# clone forklift
git clone git@github.com:theforeman/forklift.git
cd forklift
# setup vagrant boxes
cp vagrant/boxes.d/99-local.yaml.example vagrant/boxes.d/99-local.yaml
sed -i.bak "s/<REPLACE ME>/sharvit/g" vagrant/boxes.d/99-local.yaml
rm vagrant/boxes.d/99-local.yaml.bak
```

Edit the `vagrant/boxes.d/99-local.yaml` file with the following changes:

```diff
centos7-katello-devel:
  primary: true
  box: centos7
> sshfs:
>   host_path: '/home/sharvit/Projects/theforeman/vagrant-shares/centos7-katello-devel'
>   guest_path: '/home/vagrant'
>   reverse: True
  ansible:
    playbook: 'playbooks/katello_devel.yml'
    group: 'devel'
    variables:
      ssh_forward_agent: true
      foreman_devel_github_push_ssh: True
      katello_devel_github_username: sharvit

centos7-luna-devel:
  box: centos7
  memory: 9000
> sshfs:
>   host_path: '/home/sharvit/Projects/theforeman/vagrant-shares/centos7-luna-devel'
>   guest_path: '/home/vagrant'
>   reverse: True
  ansible:
    playbook: 'playbooks/luna-devel.yml'
    group: 'devel'
    variables:
      katello_devel_github_username: sharvit
```

Set the `host_path` to a preferred location on your machine and make sure it exists so you can have access to the foreman source code.

### Run `centos7-luna-devel`

```bash
rvm use system
vagrant up centos7-luna-devel
# the provisioning may fail by unknown reasons
# in this case keep running until a successful provisioning
vagrant up centos7-luna-devel --provision
```

After successful provisioning, ssh into the machine and run foreman:

```bash
vagrant ssh centos7-luna-devel
cd foreman
bundle
npm install
# add some faked data to `foreman`
bundle exec rake seed:forgeries
# run foreman
bundle exec foreman start
```

### Happy Hacking!

Now foreman is running so I can open it in my browser:
https://centos7-luna-devel.sharvit-fedorabook-t480s.example.com/

Log in with the username `admin` and password `changeme`.

Go to my `host_path` and open the source code with atom:

```bash
cd /home/asharvit/Projects/theforeman/vagrant-shares/centos7-luna-devel/foreman
atom .
```

Happy Hacking

To stop `centos7-luna-devel` run

```bash
vagrant halt centos7-luna-devel
```
