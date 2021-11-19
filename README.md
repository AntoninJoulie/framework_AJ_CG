
# Framework Antonin Joulie Corentin Guillard

Création d'un framework javascript simple permettant d'implémenter le pattern PIPE/FILTER

# Introduction

Le framework a pour but de créer un système de filter qui communique entre eux à partir d'un Json modifiable pour connaitre les paramètres et la direction de la communication.
## Getting started

Pour deployer le projet, il faut tout d'abord installer les dépendances :

```bash
  npm install
```

Si les dépendances ne s'installent pas correctement, installer manuellement le module suivant :

```bash
  npm install fs
```

Puis déployez le projet :

```bash
  node app.js
```
## API

Vous pouvez modifier le fonctionnement de l'application ainsi que ses paramètres en modifiant le json config-fliter.json :

```json
{
    "steps": {
        "1": {
            "filter": "read",
            "params": ["params1", "params2"],
            "next": "2"
        },
        "2": {
            "filter": "capitalize",
            "params": ["params1", "params2"],
            "next": "3"
        },
        "3": {
            "filter": "reverse",
            "params": ["params1", "params2"],
            "next": "4"
        },
        "4": {
            "filter": "write",
            "params": ["params1", "params2"],
            "next": ""
        }
    }
}
```

![Arborescence filter](https://media.discordapp.net/attachments/388341219085910027/911284332730146826/unknown.png)

Voici l'arborescence du dossier filter :

![Arborescence filter](https://cdn.discordapp.com/attachments/388341219085910027/911283017086033960/unknown.png)

## Errors

![Arborescence filter](https://media.discordapp.net/attachments/388341219085910027/911284242481299516/unknown.png)

## Tools

W.I.P.
## Auteurs

- [@AntoninJoulie](https://github.com/AntoninJoulie)
- [@CorentinGlrd5](https://github.com/CorentinGlrd5)

