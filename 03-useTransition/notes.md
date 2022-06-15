## Resources

useTransition() is a hook for transition. It returns the transition state and a function to start the transition.

```
const [isPending, startTransition] = useTransition();
```

React state updates are classified into two categories:

- Urgent updates — They reflect direct interaction, such as typing, clicking, pressing, dragging, etc.
- Transition updates — They transition the UI from one view to another.

**Note**: It's really important to use it in combination with React.memo.

## Exercise

The existing version is blocking on every character you type. Improve the performance by leveraging `useTransition`.

**Hint**: You need to split the `query` state and have a second version of it that can lag behind using `startTransition`.

Also leverage `isPending` from `useTransition` to show when the UI is out of date.

## Resources

- https://reactjs.org/docs/hooks-reference.html#usetransition
- https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue
- https://swizec.com/blog/a-better-react-18-starttransition-demo/
