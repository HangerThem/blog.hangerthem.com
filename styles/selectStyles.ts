const selectStyles = {
  container: (provided: any) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: "5px",
    fontSize: "16px",
    width: "100%",
    fontFamily: "var(--font-mono)",
    backgroundColor: "rgb(2, 3, 1)",
    color: "rgb(211, 211, 211)",
    border: state.isFocused
      ? "1px solid rgb(211, 211, 211)"
      : "1px solid rgb(22, 26, 29)",
    outline: state.isFocused ? "none" : null,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontFamily: "var(--font-mono)",
    color: "rgb(211, 211, 211)",
    backgroundColor:
      state.isSelected || state.isFocused ? "rgb(22, 26, 29)" : "rgb(2, 3, 1)",
    cursor: state.isSelected ? "default" : "pointer",
  }),
  menu: (provided: any) => ({
    ...provided,
    fontFamily: "var(--font-mono)",
    backgroundColor: "rgb(2, 3, 1)",
    color: "#fff",
    border: "1px solid rgb(211, 211, 211)",
  }),
  menuList: (provided: any) => ({
    ...provided,
    scrollbarWidth: "thin",
    scrollbarColor: "rgb(85, 85, 85) transparent",
    borderRadius: "5px",
    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "rgb(241, 241, 241)",
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgb(136, 136, 136)",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "rgb(85, 85, 85)",
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontFamily: "var(--font-mono)",
    color: "rgb(255, 255, 255)",
    outline: "none",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    fontFamily: "var(--font-mono)",
  }),
  multiValueGeneric: (provided: any) => ({
    ...provided,
    fontFamily: "var(--font-mono)",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(255, 255, 255)",
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: "rgba(255, 0, 0, 0.5)",
    backgroundColor: "transparent",
    "&:hover": {
      color: "rgba(255, 0, 0, 0.75)",
      cursor: "pointer",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontFamily: "var(--font-mono)",
    color: "rgb(152, 152, 152)",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "rgb(255, 255, 255)",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: "rgb(170, 170, 170)",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    "&:hover": {
      color: "rgb(255, 255, 255)",
    },
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: "rgb(170, 170, 170)",
    "&:hover": {
      color: "rgb(255, 255, 255)",
    },
  }),
}

export default selectStyles
