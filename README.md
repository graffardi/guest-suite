# TEST TECHNIQUE - GUEST SUITE

## Installation & lancement du projet

Pour installer ce projet, il suffit de lancer la commande suivante:

```
yarn install
yarn start
```

## Structure du dossier

Comme expliqué pendant l'entretien de la semaine dernière, voici l'architecture de mon projet:

- components/
  ⋅⋅⋅ Un dossier par sous-composant.
- screens/
- stores/
  ⋅⋅⋅ Contient ici mon context Metrics, dans lequel je vais gérer mes datas.
- styles/

## Explications

Sur ce petit projet, j'ai décidé de me faire plaisir en découvrant Typescript et en utilisant de nouvelles fonctionnalités de React 16.8 (à savoir les hooks https://reactjs.org/docs/hooks-intro.html).

Les Hooks que j'ai utilisé ici sont useState et useEffect. useEffect, dans le cas où il reçoit un tableau en second paramètre, ne se lancera que onMount et onUnmount.
useState, quant à lui, nous permet de définir une variable et une fonction de modification de celle-ci affectées au state de notre composant, et ce par décomposition du tableau [variableName, setVariable].

Attention, les Hooks ne sont utilisables que dans les Functional Components.

Ayant décidé de m'amuser en essayant de nouvaux patterns / une nouvelle technologie, j'ai donc poussé la démarche jusqu'au bout pour avoir une application uniquement composée de functional components et découpée au maximum, de manière à avoir un cycle de render bien optimisé.

Concernant le Context, j'aurai pu utiliser le Hook useContext, mais je me sentais plus à l'aise avec l'implémentation d'un Higher-Order Component (cf. MetricsContext.tsx et la fonction withMetrics).
