export default function(state = "showLogin", action) {
  switch (action.type) {
    case "NAVIGATE":
      return action.target;
  }
  return state;
}
