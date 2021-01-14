import Form from "./form";
type ActionType = {
  type: "Cond2" | "Flex2" | "Solder Paste Bi" | "Solder Paste Pb" | "Blank";
};

function reducer(state: any, action: ActionType) {
  switch (action.type) {
    case "Cond2":
      return {
        type: "Flex2",
        name: "BigMac",
        expiration: new Date("2011-01-08"),
      };
    case "Flex2":
      return {
        type: "Flex2",
        name: "BigMac",
        expiration: new Date("2011-01-08"),
      };
    case "Blank":
      return {
        type: "",
        name: "",
        expiration: new Date(),
      };
    default:
      return {
        type: "",
        name: "",
        expiration: new Date(),
      };
  }
}

export default reducer;