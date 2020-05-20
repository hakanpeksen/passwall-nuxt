export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn === false) {
    return redirect('/')
  }
}
