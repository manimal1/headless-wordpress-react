# 3. Components

Components should:
- style elements
- handle only presentation
- be stateless

Components Should Not:
- make api requests
- or set state on its own.

They should purely be presentational

like...
```js
export const myCompontent = ({children, stuff}) => (
  <button className="btn btn--primary">
    {children}
  </button>
);
```

they can also act as proxy components.
see [react-patterns](https://reactpatterns.com/)