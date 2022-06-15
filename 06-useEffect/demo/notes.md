## Changed behaviour

When a component mounts into the active render tree, it's useEffect (and useLayoutEffect) hooks are called twice in `DEVELOPMENT` mode when wrapped in `<StrictMode>`.

It's not happening in `production` mode.

Still you need to make sure that it works well in DEVELOPMENT mode, otherwise development will be messy.

## But I still want to do thing on mount

Bail out with a ref solution to create basically an useMount hook.

- see useEffect talk by David K (xstate) https://www.youtube.com/watch?v=HPoC-k7Rxwo

-> onMount kind off using a ref?

- https://twitter.com/DavidKPiano/status/1533798980596940800

## Resources

- https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects
- https://twitter.com/dan_abramov/status/1530380704487559169?s=21&t=W-8Rl-G-WjZ47c2Fsj-i-w
